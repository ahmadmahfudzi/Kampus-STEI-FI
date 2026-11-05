const fs = require('fs');
const D = require('docx');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
  AlignmentType, BorderStyle, ShadingType, PageBreak, Footer, PageNumber, VerticalAlign,
} = D;

const FONT = 'Times New Roman';
const PAGE_W = 11906, PAGE_H = 16838, MARGIN = 1418; // A4, 2,5 cm
const CONTENT_W = PAGE_W - 2 * MARGIN; // 9070
const ORD = ['KESATU', 'KEDUA', 'KETIGA', 'KEEMPAT', 'KELIMA', 'KEENAM', 'KETUJUH', 'KEDELAPAN', 'KESEMBILAN', 'KESEPULUH', 'KESEBELAS', 'KEDUA BELAS'];
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const NOB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const NO_BORDERS = { top: NOB, bottom: NOB, left: NOB, right: NOB, insideHorizontal: NOB, insideVertical: NOB };
const LINE = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
const GRID = { top: LINE, bottom: LINE, left: LINE, right: LINE };

const ISSUERS = {
  ketua: {
    kop1: 'YAYASAN FITHRAH INSANI INDONESIA',
    kop2: 'SEKOLAH TINGGI EKONOMI ISLAM FITHRAH INSANI',
    title: 'KEPUTUSAN KETUA SEKOLAH TINGGI EKONOMI ISLAM FITHRAH INSANI',
    nomor: 'NOMOR: ______/SK/STEI-FI/______/2026',
    who: 'KETUA SEKOLAH TINGGI EKONOMI ISLAM FITHRAH INSANI,',
    jabatan: 'Ketua,',
    idLine: 'NIDN. ____________________',
    short: 'KEPUTUSAN KETUA STEI FITHRAH INSANI',
  },
  yayasan: {
    kop1: null,
    kop2: 'YAYASAN FITHRAH INSANI INDONESIA',
    title: 'KEPUTUSAN PENGURUS YAYASAN FITHRAH INSANI INDONESIA',
    nomor: 'NOMOR: ______/SK/YFI/______/2026',
    who: 'PENGURUS YAYASAN FITHRAH INSANI INDONESIA,',
    jabatan: 'Ketua Pengurus,',
    idLine: '',
    short: 'KEPUTUSAN PENGURUS YAYASAN FITHRAH INSANI INDONESIA',
  },
};

function run(text, o = {}) {
  return new TextRun({ text, font: FONT, size: o.size || 24, bold: o.bold, italics: o.italics, allCaps: o.caps });
}
function para(text, o = {}) {
  const runs = Array.isArray(text) ? text : [run(text, o)];
  return new Paragraph({
    children: runs,
    alignment: o.align || AlignmentType.JUSTIFIED,
    spacing: { before: o.before || 0, after: o.after === undefined ? 60 : o.after, line: o.line || 276 },
    indent: o.indent,
    keepNext: o.keepNext,
    border: o.border,
  });
}
const center = (t, o = {}) => para(t, { ...o, align: AlignmentType.CENTER });
const blank = (n = 1) => Array.from({ length: n }, () => para('', { after: 0 }));

// "a. text" with hanging indent
function item(label, text, size = 24) {
  return new Paragraph({
    children: [run(label + '\t', { size }), run(text, { size })],
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 40, line: 276 },
    indent: { left: 400, hanging: 400 },
    tabStops: [{ type: 'left', position: 400 }],
  });
}
function subitem(label, text, size = 24) {
  return new Paragraph({
    children: [run(label + '\t', { size }), run(text, { size })],
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 30, line: 276 },
    indent: { left: 800, hanging: 400 },
    tabStops: [{ type: 'left', position: 800 }],
  });
}

function cell(children, w, o = {}) {
  return new TableCell({
    children: Array.isArray(children) ? children : [children],
    width: { size: w, type: WidthType.DXA },
    borders: o.borders || { top: NOB, bottom: NOB, left: NOB, right: NOB },
    shading: o.fill ? { type: ShadingType.CLEAR, color: 'auto', fill: o.fill } : undefined,
    margins: o.margins || { top: 20, bottom: 20, left: 60, right: 60 },
    verticalAlign: o.vAlign,
    columnSpan: o.span,
  });
}

// Considerans/diktum rows: label | : | content
const LW = [1950, 230, CONTENT_W - 2180];
function labelTable(rows) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: LW,
    borders: NO_BORDERS,
    rows: rows.map(([label, content]) => new TableRow({
      cantSplit: false,
      children: [
        cell(para(label, { align: AlignmentType.LEFT, bold: true, after: 0 }), LW[0]),
        cell(para(':', { align: AlignmentType.LEFT, after: 0 }), LW[1]),
        cell(content, LW[2]),
      ],
    })),
  });
}

function endPunct(list, last = '.') {
  return list.map((t, i) => {
    const s = t.replace(/[;.,]\s*$/, '');
    return s + (i === list.length - 1 ? last : ';');
  });
}

function numbered(list, style = 'letter') {
  return endPunct(list).map((t, i) => item((style === 'letter' ? LETTERS[i] : (i + 1)) + '.', t));
}

function kop(iss) {
  const out = [];
  if (iss.kop1) out.push(center(iss.kop1, { bold: true, size: 22, after: 0 }));
  out.push(center(iss.kop2, { bold: true, size: 30, after: 0 }));
  out.push(center('Jalan ______________________, Kabupaten Bandung Barat, Jawa Barat, Kode Pos ________', { size: 19, after: 0 }));
  out.push(new Paragraph({
    children: [run('Telepon ______________  |  Surel ______________  |  Laman kampussteifi.ac.id', { size: 19 })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 240 },
    border: { bottom: { style: BorderStyle.DOUBLE, size: 6, color: '000000', space: 4 } },
  }));
  return out;
}

function signature(iss, o = {}) {
  const w = 4300;
  const lines = [
    para(o.place || 'Ditetapkan di Bandung Barat', { align: AlignmentType.LEFT, after: 0 }),
    para('pada tanggal ________________ 2026', { align: AlignmentType.LEFT, after: 120 }),
    para(iss.jabatan, { align: AlignmentType.LEFT, after: 0, bold: true }),
    ...blank(4),
    para('(________________________________)', { align: AlignmentType.LEFT, after: 0, bold: true }),
  ];
  if (iss.idLine) lines.push(para(iss.idLine, { align: AlignmentType.LEFT, after: 0 }));
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W - w, w],
    borders: NO_BORDERS,
    rows: [new TableRow({ cantSplit: true, children: [cell(para(''), CONTENT_W - w), cell(lines, w)] })],
  });
}

function dataTable(t) {
  const total = t.widths.reduce((a, b) => a + b, 0);
  const widths = t.widths.map(w => Math.round(w * CONTENT_W / total));
  widths[widths.length - 1] += CONTENT_W - widths.reduce((a, b) => a + b, 0);
  const sz = t.size || 20;
  const mk = (txt, w, o = {}) => cell(
    String(txt).split('\n').map(line => para(line, { size: sz, bold: o.bold, after: 0, align: o.align || AlignmentType.LEFT })),
    w, { borders: GRID, fill: o.fill, margins: { top: 40, bottom: 40, left: 80, right: 80 }, vAlign: VerticalAlign.CENTER });
  const rows = [new TableRow({
    tableHeader: true,
    children: t.cols.map((c, i) => mk(c, widths[i], { bold: true, fill: 'B2DFDB', align: AlignmentType.CENTER })),
  })];
  t.rows.forEach(r => {
    if (r.section) {
      rows.push(new TableRow({ children: [cell(para(r.section, { size: sz, bold: true, after: 0, align: AlignmentType.LEFT }), CONTENT_W, { borders: GRID, fill: 'E0F2F1', span: t.cols.length, margins: { top: 40, bottom: 40, left: 80, right: 80 } })] }));
    } else {
      rows.push(new TableRow({ cantSplit: true, children: r.map((c, i) => mk(c, widths[i], { align: (t.alignCenter || []).includes(i) ? AlignmentType.CENTER : AlignmentType.LEFT })) }));
    }
  });
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: widths, rows });
}

function renderBlocks(blocks) {
  const out = [];
  blocks.forEach(b => {
    if (b.h) out.push(para(b.h, { bold: true, before: 160, after: 80, align: AlignmentType.LEFT, keepNext: true }));
    else if (b.p) out.push(para(b.p, { after: 100 }));
    else if (b.list) endPunct(b.list, b.last || '.').forEach((t, i) => out.push(item((b.style === 'num' ? (i + 1) : LETTERS[i]) + '.', t)));
    else if (b.table) { out.push(dataTable(b.table)); out.push(para('', { after: 80 })); }
    else if (b.note) out.push(para(b.note, { italics: true, size: 20, after: 100 }));
  });
  return out;
}

function diktumContent(d) {
  const out = [para(d.text, { after: d.items ? 40 : 100 })];
  if (d.items) endPunct(d.items, d.itemsLast || '.').forEach((t, i) => out.push(item(LETTERS[i] + '.', t)));
  if (d.after) out.push(para(d.after, { after: 100 }));
  return out;
}

function build(sk) {
  const iss = ISSUERS[sk.issuer];
  const TITLE = sk.title.toUpperCase();
  const ch = [];
  ch.push(...kop(iss));
  ch.push(center(iss.title, { bold: true, after: 0 }));
  ch.push(center(iss.nomor, { bold: true, after: 120 }));
  ch.push(center('TENTANG', { bold: true, after: 120 }));
  ch.push(center(TITLE, { bold: true, after: 200 }));
  ch.push(center('DENGAN RAHMAT TUHAN YANG MAHA ESA', { bold: true, after: 120 }));
  ch.push(center(iss.who, { bold: true, after: 200 }));

  const consid = [['Menimbang', numbered(sk.menimbang)], ['Mengingat', numbered(sk.mengingat, 'num')]];
  if (sk.memperhatikan) consid.push(['Memperhatikan', numbered(sk.memperhatikan, 'num')]);
  ch.push(labelTable(consid));
  ch.push(center('MEMUTUSKAN:', { bold: true, before: 200, after: 120 }));

  const dikt = [['Menetapkan', [para(`${iss.short.replace('STEI FITHRAH INSANI', 'SEKOLAH TINGGI EKONOMI ISLAM FITHRAH INSANI')} TENTANG ${TITLE}.`, { bold: true, after: 100, align: AlignmentType.LEFT })]]];
  const all = [...sk.diktum, { text: 'Keputusan ini berlaku sejak tanggal ditetapkan, dengan ketentuan apabila di kemudian hari terdapat kekeliruan dalam keputusan ini, akan diadakan perbaikan sebagaimana mestinya.' }];
  all.forEach((d, i) => dikt.push([ORD[i], diktumContent(d)]));
  ch.push(labelTable(dikt));
  ch.push(para('', { after: 200 }));
  ch.push(signature(iss));

  const tembusan = sk.tembusan || [];
  if (tembusan.length) {
    ch.push(para('Tembusan Yth.:', { before: 240, after: 40, size: 22, align: AlignmentType.LEFT }));
    endPunct(tembusan).forEach((t, i) => ch.push(item(`${i + 1}.`, t, 22)));
  }

  (sk.lampiran || []).forEach((lp, i) => {
    const label = sk.lampiran.length > 1 ? `LAMPIRAN ${ROMAN[i]}` : 'LAMPIRAN';
    ch.push(new Paragraph({ children: [new PageBreak()] }));
    const w0 = 3900;
    const hdr = [
      para(label, { size: 20, bold: true, after: 0, align: AlignmentType.LEFT }),
      para(iss.short, { size: 20, after: 0, align: AlignmentType.LEFT }),
      para(iss.nomor.replace('NOMOR: ', 'NOMOR    : '), { size: 20, after: 0, align: AlignmentType.LEFT }),
      para('TANGGAL : ________________ 2026', { size: 20, after: 0, align: AlignmentType.LEFT }),
      para('TENTANG : ' + TITLE, { size: 20, after: 0, align: AlignmentType.LEFT }),
    ];
    ch.push(new Table({
      width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [CONTENT_W - w0 - 600, w0 + 600], borders: NO_BORDERS,
      rows: [new TableRow({ children: [cell(para(''), CONTENT_W - w0 - 600), cell(hdr, w0 + 600)] })],
    }));
    ch.push(center(lp.title.toUpperCase(), { bold: true, before: 240, after: 200 }));
    ch.push(...renderBlocks(lp.blocks));
    ch.push(para('', { after: 200 }));
    ch.push(signature(iss));
  });

  const doc = new Document({
    creator: 'Wakil Ketua II STEI Fithrah Insani',
    title: sk.title,
    styles: { default: { document: { run: { font: FONT, size: 24 } } } },
    sections: [{
      properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [run(`${sk.code} | Draf SK untuk Akreditasi 2027 | Halaman `, { size: 16, italics: true }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, italics: true })],
          })],
        }),
      },
      children: ch,
    }],
  });
  return Packer.toBuffer(doc);
}

module.exports = { build };
