// Paket II: 16 SK lintas Standar 1–7 (F-SK-AKR-17 s.d. 32).
// Isi VMTS diambil dari RENOP STEI FI; kalender dari KALENDER_AKADEMIK_TA_2026_2027.xlsx;
// tema riset dari F-LPPM-01-01. Nama, nomor, tanggal, dan angka lain sengaja dikosongkan.
const UU_SISDIKNAS = 'Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional';
const UU_DIKTI = 'Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi';
const UU_GURU_DOSEN = 'Undang-Undang Nomor 14 Tahun 2005 tentang Guru dan Dosen';
const PP_DIKTI = 'Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi';
const PM_MUTU = 'Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 53 Tahun 2023 tentang Penjaminan Mutu Pendidikan Tinggi';
const PM_DOSEN = 'Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 44 Tahun 2024 tentang Profesi, Karier, dan Penghasilan Dosen';
const IZIN = 'Keputusan Direktur Jenderal Pendidikan Islam Kementerian Agama Republik Indonesia Nomor 1137 Tahun 2023 tentang Izin Perubahan Nama, Pindah Alamat, dan Alih Kelola STEI Ar-Risalah menjadi STEI Fithrah Insani';
const STATUTA = 'Statuta Sekolah Tinggi Ekonomi Islam Fithrah Insani Revisi Tahun 2024';
const SK_KETUA = 'Keputusan Pengurus Yayasan Fithrah Insani Indonesia Nomor ______ tentang Pengangkatan Ketua Sekolah Tinggi Ekonomi Islam Fithrah Insani';
const RENSTRA = 'Keputusan Ketua Sekolah Tinggi Ekonomi Islam Fithrah Insani Nomor 421.4/001/STEI.FI/II/2024 tentang Rencana Strategis Sekolah Tinggi Ekonomi Islam Fithrah Insani';
const SK_STRUKTUR = 'Keputusan Ketua Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2026 tentang Revisi Struktur Organisasi';

const ketua = (...mid) => [UU_SISDIKNAS, UU_DIKTI, ...mid, PP_DIKTI, PM_MUTU, IZIN, STATUTA, SK_KETUA];
const B = '';
const RAPIM = 'Hasil Rapat Pimpinan STEI Fithrah Insani tanggal ______ 2026';
const T = (...extra) => ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', ...extra, 'Arsip'];
const USULAN = 'Catatan: ketentuan kehadiran minimal, konversi nilai, batas cuti akademik, dan predikat kelulusan adalah usulan awal. Ketentuan tersebut perlu diselaraskan dengan Buku Pedoman Akademik dan disepakati dalam rapat pimpinan sebelum SK ditetapkan. Ketentuan SKS, beban belajar, dan masa studi mengikuti Permendikbudristek Nomor 53 Tahun 2023.';

module.exports = [
// 17 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-17', file: 'F-SK-AKR-17_SK-Penetapan-Visi-Misi-Tujuan-Sasaran', issuer: 'ketua', standar: 'Standar 1', pic: 'Ketua / LPM',
  title: 'Penetapan Visi, Misi, Tujuan, Sasaran, dan Strategi Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa visi, misi, tujuan, sasaran, dan strategi merupakan arah pengembangan jangka panjang yang menjadi acuan seluruh kegiatan tridharma dan tata kelola',
    'bahwa rumusan visi, misi, tujuan, sasaran, dan strategi telah dimuat dalam Rencana Induk Pengembangan 2023–2040, Rencana Strategis, dan Rencana Operasional, sehingga perlu ditetapkan dalam satu keputusan sebagai rujukan resmi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Penetapan Visi, Misi, Tujuan, Sasaran, dan Strategi Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  ],
  mengingat: ketua().concat([RENSTRA]),
  memperhatikan: ['Rencana Induk Pengembangan STEI Fithrah Insani Tahun 2023–2040', 'Rencana Operasional STEI Fithrah Insani', 'Pertimbangan Senat STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Menetapkan Visi, Misi, Tujuan, Sasaran, dan Strategi Sekolah Tinggi Ekonomi Islam Fithrah Insani sebagaimana tercantum dalam Lampiran yang merupakan bagian tidak terpisahkan dari Keputusan ini.' },
    { text: 'Visi, Misi, Tujuan, Sasaran, dan Strategi sebagaimana dimaksud dalam Diktum KESATU menjadi acuan dalam penyusunan visi keilmuan program studi, rencana kerja unit, kurikulum, rencana induk penelitian dan pengabdian kepada masyarakat, serta anggaran.' },
    { text: 'Seluruh unit kerja wajib menyosialisasikan Visi, Misi, Tujuan, Sasaran, dan Strategi kepada dosen, tenaga kependidikan, mahasiswa, dan pemangku kepentingan, serta mendokumentasikan kegiatan sosialisasi tersebut.' },
    { text: 'Lembaga Penjaminan Mutu melaksanakan survei pemahaman Visi, Misi, Tujuan, dan Sasaran kepada sivitas akademika dan pemangku kepentingan paling sedikit 1 (satu) kali setiap tahun.' },
    { text: 'Visi, Misi, Tujuan, Sasaran, dan Strategi ditinjau paling lambat pada akhir periode Rencana Strategis 2024–2029.' },
  ],
  tembusan: T('Ketua Senat STEI Fithrah Insani', 'Kepala LPM dan Kepala LPPM STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah'),
  lampiran: [
    { title: 'Visi, Misi, Tujuan, Sasaran, dan Strategi Sekolah Tinggi Ekonomi Islam Fithrah Insani', blocks: [
      { h: 'A. Visi' },
      { p: 'Menjadi Perguruan Tinggi Berwawasan Kewirausahaan Islami di Jawa Barat pada Tahun 2040.' },
      { h: 'B. Misi' },
      { list: [
        'menyelenggarakan pendidikan dan pembelajaran ekonomi serta keuangan syariah sesuai perkembangan zaman',
        'mengembangkan penelitian dan melaksanakan pengabdian kepada masyarakat dalam bidang ekonomi serta keuangan syariah',
        'membentuk karakter islami yang mandiri dan berintegritas',
      ], style: 'num' },
      { h: 'C. Tujuan' },
      { list: [
        'menghasilkan sarjana ekonomi Islam yang memiliki kompetensi dalam menganalisis masalah-masalah ekonomi dan menerapkan ekonomi syariah dalam kehidupan bermasyarakat, berbangsa, dan bernegara',
        'menghasilkan sarjana ekonomi Islam yang memiliki keahlian di bidang manajemen keuangan syariah, akuntansi syariah, dan perbankan syariah',
        'menghasilkan sarjana ekonomi Islam yang mampu memahami dan menerapkan kompetensi dasar dalam operasional lembaga keuangan syariah',
        'menghasilkan sarjana ekonomi Islam yang memiliki kompetensi berwirausaha dengan menggunakan prinsip-prinsip islami',
        'menghasilkan sarjana ekonomi Islam yang mampu melakukan pendekatan interdisiplin terhadap permasalahan organisasi secara umum dengan pendekatan ilmiah',
        'menghasilkan lulusan yang mampu menggunakan teknologi informasi dalam implementasi dan pengembangan ekonomi dan keuangan syariah dalam kehidupan bermasyarakat, berbangsa, dan bernegara',
        'menghasilkan lulusan yang mampu melakukan penelitian dalam pengembangan ekonomi dan manajemen keuangan syariah, akuntansi syariah, dan perbankan syariah',
      ], style: 'num' },
      { h: 'D. Sasaran' },
      { list: [
        'mengembangkan kurikulum yang sesuai dengan kebutuhan dan perkembangan zaman dalam bidang ekonomi serta keuangan syariah',
        'menerapkan metode pembelajaran yang inovatif dan efektif untuk membentuk karakter yang sesuai dengan prinsip ekonomi serta keuangan syariah',
        'melaksanakan penelitian yang aplikatif dan relevan dengan kebutuhan pengembangan pengetahuan ekonomi Islam',
        'menghasilkan karya penelitian yang berkontribusi pada perkembangan ekonomi dan keuangan syariah secara global',
        'menyelenggarakan kegiatan pembinaan dan pengembangan ekonomi serta keuangan syariah yang berdampak pada peningkatan kesejahteraan dan kemaslahatan umat melalui program pengabdian kepada masyarakat',
      ], style: 'num' },
      { h: 'E. Strategi Pencapaian' },
      { list: [
        'meningkatkan pengakuan masyarakat terhadap keberadaan STEI Fithrah Insani secara nasional',
        'meningkatkan jumlah peminat dan pendaftar',
        'meningkatkan mutu pembelajaran sesuai kebutuhan pemangku kepentingan',
        'meningkatkan kerja sama dengan berbagai pihak terkait',
        'menyediakan sarana dan prasarana yang memadai',
        'meningkatkan status akreditasi',
        'meningkatkan kualitas dosen dan tenaga kependidikan',
        'meningkatkan daya saing alumni',
      ], style: 'num' },
      { note: 'Sumber rumusan: Rencana Operasional STEI Fithrah Insani (Bab 2), dengan perbaikan ejaan tanpa mengubah substansi.' },
    ] },
  ],
},
// 18 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-18', file: 'F-SK-AKR-18_SK-Tim-Monev-Capaian-Renstra', issuer: 'ketua', standar: 'Standar 1', pic: 'Ketua / LPM',
  title: 'Pembentukan Tim Monitoring dan Evaluasi Capaian Rencana Strategis Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2024–2029',
  menimbang: [
    'bahwa Rencana Strategis Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2024–2029 telah ditetapkan dan harus dipantau ketercapaian indikatornya secara berkala',
    'bahwa hasil evaluasi capaian Rencana Strategis menjadi dasar penyusunan Rencana Operasional tahunan, anggaran, dan tinjauan manajemen',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Monitoring dan Evaluasi Capaian Rencana Strategis Tahun 2024–2029',
  ],
  mengingat: ketua().concat([RENSTRA]),
  memperhatikan: [RAPIM],
  diktum: [
    { text: 'Membentuk Tim Monitoring dan Evaluasi Capaian Rencana Strategis Tahun 2024–2029 dengan susunan sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Tim mempunyai tugas:', items: [
      'menyusun instrumen pemantauan indikator kinerja Rencana Strategis dan Rencana Operasional',
      'menghimpun data capaian dari setiap unit kerja setiap semester',
      'menganalisis kesenjangan antara target dan capaian beserta penyebabnya',
      'menyusun Laporan Evaluasi Capaian Rencana Strategis setiap akhir tahun akademik',
      'merekomendasikan penyesuaian program dan anggaran kepada Ketua',
    ] },
    { text: 'Ruang lingkup pemantauan mencakup aspek strategis sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Laporan Evaluasi Capaian Rencana Strategis disampaikan kepada Ketua, dibahas dalam Rapat Tinjauan Manajemen, dan dilaporkan kepada Senat serta Yayasan.' },
  ],
  tembusan: T('Ketua Senat STEI Fithrah Insani', 'Kepala LPM STEI Fithrah Insani', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Tim Monitoring dan Evaluasi Capaian Rencana Strategis', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan'], widths: [6, 26, 34, 34], alignCenter: [0], rows: [
        ['1', 'Pengarah', B, 'Ketua'], ['2', 'Ketua Tim', B, 'Kepala LPM'], ['3', 'Sekretaris', B, 'Staf LPM'],
        ['4', 'Anggota', B, 'Wakil Ketua I'], ['5', 'Anggota', B, 'Wakil Ketua II'], ['6', 'Anggota', B, 'Wakil Ketua III'],
        ['7', 'Anggota', B, 'Kepala LPPM'], ['8', 'Anggota', B, 'Ketua Program Studi Ekonomi Syariah'], ['9', 'Anggota', B, 'Ketua Program Studi Perbankan Syariah'],
      ] } },
    ] },
    { title: 'Ruang Lingkup Pemantauan Rencana Strategis', blocks: [
      { table: { cols: ['No.', 'Aspek Strategis', 'Unit Penyedia Data'], widths: [6, 54, 40], alignCenter: [0], rows: [
        ['1', 'Tata kelola, penjaminan mutu, dan manajemen risiko', 'LPM; Wakil Ketua II'],
        ['2', 'Infrastruktur', 'Bagian Sarana dan Prasarana'],
        ['3', 'Finansial', 'Bagian Keuangan'],
        ['4', 'Sumber daya manusia', 'Bagian SDM dan Kepegawaian'],
        ['5', 'Operasional pendidikan dan pembelajaran', 'Wakil Ketua I; Program Studi'],
        ['6', 'Administrasi dan pengelolaan program akademik', 'Wakil Ketua I'],
        ['7', 'Pelayanan', 'Wakil Ketua III; UPT Perpustakaan'],
        ['8', 'Sistem informasi manajemen', 'UPT Komputer dan TI'],
      ] } },
      { note: 'Aspek strategis mengikuti Rencana Strategis STEI Fithrah Insani 2024–2029, Bab I huruf C.' },
    ] },
  ],
},
// 19 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-19', file: 'F-SK-AKR-19_SK-Kebijakan-dan-Manual-SPMI', issuer: 'ketua', standar: 'Standar 2', pic: 'LPM',
  title: 'Penetapan Kebijakan dan Manual Sistem Penjaminan Mutu Internal Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa berdasarkan Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 53 Tahun 2023, perguruan tinggi wajib menyelenggarakan Sistem Penjaminan Mutu Internal (SPMI) melalui siklus penetapan, pelaksanaan, evaluasi, pengendalian, dan peningkatan standar',
    'bahwa Lembaga Penjaminan Mutu telah menyusun Kebijakan Mutu (F-LPM-01-04) dan Manual Mutu Siklus PPEPP (F-LPM-02-02) yang perlu ditetapkan sebagai dokumen resmi institusi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Penetapan Kebijakan dan Manual Sistem Penjaminan Mutu Internal',
  ],
  mengingat: ketua(),
  memperhatikan: ['Pertimbangan Senat STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Menetapkan dokumen Sistem Penjaminan Mutu Internal Sekolah Tinggi Ekonomi Islam Fithrah Insani yang terdiri atas:', items: [
      'Kebijakan Mutu STEI Fithrah Insani (F-LPM-01-04)',
      'Manual Mutu Siklus PPEPP (F-LPM-02-02)',
      'Manual Pelaksanaan Standar Unit (F-LPM-02-04)',
    ] },
    { text: 'Dokumen sebagaimana dimaksud dalam Diktum KESATU bersama Standar SPMI yang ditetapkan dengan Keputusan Ketua tersendiri menjadi acuan seluruh unit kerja dalam menjalankan siklus penjaminan mutu.' },
    { text: 'Pelaksanaan SPMI diatur sebagaimana tercantum dalam Lampiran.' },
    { text: 'Lembaga Penjaminan Mutu bertanggung jawab atas pemeliharaan dan pengendalian dokumen SPMI, termasuk nomor revisi dan daftar distribusi.' },
    { text: 'Dokumen SPMI ditinjau paling sedikit 1 (satu) kali dalam 4 (empat) tahun atau lebih awal apabila terjadi perubahan peraturan perundang-undangan.' },
  ],
  tembusan: T('Ketua Senat STEI Fithrah Insani', 'Kepala LPM dan Kepala LPPM STEI Fithrah Insani', 'Seluruh kepala unit kerja STEI Fithrah Insani'),
  lampiran: [
    { title: 'Ketentuan Pelaksanaan Sistem Penjaminan Mutu Internal', blocks: [
      { table: { cols: ['Tahap PPEPP', 'Kegiatan Utama', 'Penanggung Jawab', 'Frekuensi'], widths: [16, 46, 22, 16], rows: [
        ['Penetapan', 'Penetapan dan revisi standar SPMI; penetapan sasaran mutu unit', 'Ketua; LPM', 'Tahunan'],
        ['Pelaksanaan', 'Pelaksanaan standar sesuai manual dan SOP; pengisian bukti kinerja', 'Seluruh unit kerja', 'Berkelanjutan'],
        ['Evaluasi', 'Audit Mutu Internal (AMI); survei kepuasan pemangku kepentingan; monitoring indikator', 'LPM; Tim Auditor AMI', 'Tahunan'],
        ['Pengendalian', 'Rapat Tinjauan Manajemen (RTM); rencana tindakan koreksi', 'Ketua; LPM', 'Tahunan'],
        ['Peningkatan', 'Penetapan sasaran mutu baru dan peningkatan standar berdasarkan hasil RTM', 'Ketua; LPM', 'Tahunan'],
      ] } },
      { list: [
        'setiap unit kerja menunjuk 1 (satu) orang penghubung mutu yang berkoordinasi dengan LPM',
        'temuan AMI wajib ditindaklanjuti dalam jangka waktu yang disepakati dalam rencana tindakan koreksi',
        'hasil RTM ditetapkan menjadi sasaran mutu tahun berikutnya dengan Keputusan Ketua (F-LPM-06-05)',
        'LPM menyampaikan laporan pelaksanaan SPMI kepada Ketua dan Senat setiap akhir tahun akademik',
      ] },
    ] },
  ],
},
// 20 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-20', file: 'F-SK-AKR-20_SK-Gugus-Kendali-Mutu-Program-Studi', issuer: 'ketua', standar: 'Standar 2', pic: 'LPM / Kaprodi',
  title: 'Pembentukan Gugus Kendali Mutu Program Studi di Lingkungan Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa pelaksanaan Sistem Penjaminan Mutu Internal memerlukan pelaksana di tingkat program studi yang memantau mutu pembelajaran secara langsung',
    'bahwa Gugus Kendali Mutu (GKM) program studi berperan menghubungkan Lembaga Penjaminan Mutu dengan program studi dalam siklus PPEPP',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Gugus Kendali Mutu Program Studi',
  ],
  mengingat: ketua(),
  memperhatikan: ['Usulan Kepala LPM dan Ketua Program Studi tanggal ______ 2026'],
  diktum: [
    { text: 'Membentuk Gugus Kendali Mutu Program Studi Ekonomi Syariah dan Gugus Kendali Mutu Program Studi Perbankan Syariah dengan susunan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Gugus Kendali Mutu Program Studi mempunyai tugas:', items: [
      'memantau pelaksanaan standar SPMI di tingkat program studi',
      'memantau kesesuaian pelaksanaan perkuliahan dengan RPS dan kehadiran dosen',
      'mengolah dan melaporkan hasil Evaluasi Dosen oleh Mahasiswa (EDOM) tingkat program studi',
      'memantau ketercapaian Capaian Pembelajaran Lulusan (CPL)',
      'menyiapkan dokumen program studi untuk Audit Mutu Internal dan akreditasi',
      'menyampaikan laporan mutu program studi kepada Ketua Program Studi dan Kepala LPM setiap akhir semester',
    ] },
    { text: 'Anggota Gugus Kendali Mutu tidak boleh merangkap sebagai auditor AMI untuk program studinya sendiri.' },
    { text: 'Masa tugas Gugus Kendali Mutu adalah 2 (dua) tahun terhitung sejak Keputusan ini ditetapkan.' },
  ],
  tembusan: T('Kepala LPM STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Gugus Kendali Mutu Program Studi', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan/Unsur'], widths: [6, 24, 36, 34], alignCenter: [0], rows: [
        { section: 'A. Program Studi Ekonomi Syariah' },
        ['1', 'Ketua', B, 'Dosen tetap'], ['2', 'Sekretaris', B, 'Dosen tetap'], ['3', 'Anggota', B, 'Dosen tetap'], ['4', 'Anggota', B, 'Tenaga kependidikan program studi'],
        { section: 'B. Program Studi Perbankan Syariah' },
        ['5', 'Ketua', B, 'Dosen tetap'], ['6', 'Sekretaris', B, 'Dosen tetap'], ['7', 'Anggota', B, 'Dosen tetap'], ['8', 'Anggota', B, 'Tenaga kependidikan program studi'],
      ] } },
    ] },
  ],
},
// 21 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-21', file: 'F-SK-AKR-21_SK-Kode-Etik-Integritas-Akademik-Komisi-Etik', issuer: 'ketua', standar: 'Standar 2 dan 7', pic: 'Ketua / LPPM',
  title: 'Kode Etik dan Integritas Akademik Sivitas Akademika serta Pembentukan Komisi Etik Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa sivitas akademika Sekolah Tinggi Ekonomi Islam Fithrah Insani wajib menjunjung tinggi nilai-nilai keislaman, kejujuran akademik, dan etika profesi',
    'bahwa untuk mencegah dan menangani pelanggaran etika dan integritas akademik, termasuk plagiarisme, fabrikasi, dan falsifikasi data, diperlukan kode etik dan komisi yang berwenang memeriksa pelanggaran',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Kode Etik dan Integritas Akademik Sivitas Akademika serta Pembentukan Komisi Etik',
  ],
  mengingat: ketua(UU_GURU_DOSEN),
  memperhatikan: ['Pedoman Etika Penelitian dan Integritas Ilmiah STEI FI (F-LPPM-08-01)', 'Pertimbangan Senat STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Menetapkan Kode Etik dan Integritas Akademik Sivitas Akademika sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Membentuk Komisi Etik dengan susunan sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Komisi Etik mempunyai tugas:', items: [
      'menerima dan memeriksa laporan dugaan pelanggaran kode etik dan integritas akademik',
      'memanggil dan meminta keterangan pihak terlapor, pelapor, dan saksi',
      'memberikan rekomendasi sanksi kepada Ketua',
      'menjaga kerahasiaan identitas pelapor dan proses pemeriksaan',
      'menyelenggarakan sosialisasi kode etik kepada sivitas akademika',
    ] },
    { text: 'Penjatuhan sanksi ditetapkan oleh Ketua berdasarkan rekomendasi Komisi Etik setelah pihak terlapor diberi kesempatan membela diri.' },
    { text: 'Masa tugas Komisi Etik adalah 2 (dua) tahun terhitung sejak Keputusan ini ditetapkan.' },
  ],
  tembusan: T('Ketua Senat STEI Fithrah Insani', 'Kepala LPM dan Kepala LPPM STEI Fithrah Insani', 'Seluruh dosen, tenaga kependidikan, dan mahasiswa'),
  lampiran: [
    { title: 'Kode Etik dan Integritas Akademik Sivitas Akademika', blocks: [
      { h: 'A. Nilai Dasar' },
      { p: 'Seluruh sivitas akademika menjunjung nilai kejujuran (al-amanah), kebenaran (al-haq), kemaslahatan (maslahah), dan pertanggungjawaban (al-mas\'uliyah) dalam kegiatan pendidikan, penelitian, pengabdian kepada masyarakat, dan pelayanan.' },
      { h: 'B. Kewajiban' },
      { table: { cols: ['Unsur', 'Kewajiban Utama'], widths: [22, 78], rows: [
        ['Dosen', 'Melaksanakan tridharma secara profesional; bersikap adil dan objektif dalam penilaian; mencantumkan sumber secara benar dalam karya ilmiah; menghindari konflik kepentingan; menjaga kerahasiaan data mahasiswa.'],
        ['Tenaga Kependidikan', 'Memberikan layanan yang adil, cepat, dan ramah; menjaga kerahasiaan dokumen; tidak meminta imbalan di luar ketentuan; menaati prosedur kerja.'],
        ['Mahasiswa', 'Menyusun tugas dan karya ilmiah secara mandiri dan jujur; menghormati dosen, tenaga kependidikan, dan sesama mahasiswa; menaati tata tertib mahasiswa.'],
      ] } },
      { h: 'C. Pelanggaran Integritas Akademik' },
      { table: { cols: ['Jenis Pelanggaran', 'Definisi'], widths: [24, 76], rows: [
        ['Plagiarisme', 'Mengambil karya, ide, atau data orang lain tanpa atribusi yang benar.'],
        ['Fabrikasi', 'Membuat-buat data yang tidak pernah dikumpulkan.'],
        ['Falsifikasi', 'Memanipulasi data yang telah dikumpulkan agar sesuai dengan hipotesis.'],
        ['Kecurangan ujian dan perjokian', 'Menyontek, bekerja sama tanpa izin, atau mewakilkan pengerjaan tugas, ujian, dan skripsi kepada pihak lain.'],
        ['Duplikasi publikasi', 'Menerbitkan artikel yang sama di lebih dari satu terbitan tanpa izin.'],
        ['Kepengarangan tidak sah', 'Mencantumkan nama yang tidak berkontribusi atau menghilangkan nama kontributor.'],
        ['Penyalahgunaan wewenang dan gratifikasi', 'Memperdagangkan nilai, meminta atau menerima imbalan terkait layanan akademik.'],
        ['Kekerasan dan perundungan', 'Kekerasan fisik, psikis, seksual, atau perundungan dalam bentuk apa pun di lingkungan kampus.'],
      ] } },
      { h: 'D. Pemeriksaan Kemiripan Naskah' },
      { list: [
        'skripsi, artikel ilmiah, proposal hibah, dan laporan penelitian wajib diperiksa tingkat kemiripannya sebelum diujikan atau diterbitkan',
        'batas maksimal tingkat kemiripan adalah ___% untuk skripsi dan ___% untuk artikel dan laporan penelitian, di luar daftar pustaka dan kutipan yang sah',
        'hasil pemeriksaan dicatat dalam Laporan Cek Plagiarisme (F-LPPM-08-03)',
      ] },
      { h: 'E. Sanksi' },
      { list: [
        'sanksi ringan: teguran tertulis dan kewajiban memperbaiki karya',
        'sanksi sedang: pembatalan nilai mata kuliah atau pembatalan karya, penundaan kenaikan jabatan fungsional, atau penundaan kelulusan',
        'sanksi berat: pencabutan gelar, pemberhentian sebagai mahasiswa, atau pemberhentian sebagai pegawai sesuai ketentuan peraturan perundang-undangan',
      ] },
    ] },
    { title: 'Susunan Komisi Etik', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Unsur'], widths: [6, 24, 36, 34], alignCenter: [0], rows: [
        ['1', 'Ketua', B, 'Anggota Senat'], ['2', 'Sekretaris', B, 'Kepala LPPM'], ['3', 'Anggota', B, 'Dosen tetap'],
        ['4', 'Anggota', B, 'Dosen tetap'], ['5', 'Anggota', B, 'Tenaga kependidikan'],
      ] } },
      { note: 'Apabila anggota Komisi Etik menjadi pihak terlapor atau memiliki hubungan dengan perkara, yang bersangkutan wajib mengundurkan diri dari pemeriksaan perkara tersebut.' },
    ] },
  ],
},
// 22 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-22', file: 'F-SK-AKR-22_SK-Tim-Asesor-Internal-Beban-Kerja-Dosen', issuer: 'ketua', standar: 'Standar 3', pic: 'WK I / WK II',
  title: 'Pembentukan Tim Asesor Internal Beban Kerja Dosen Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Akademik 2026/2027',
  menimbang: [
    'bahwa dosen wajib melaporkan pelaksanaan tridharma perguruan tinggi setiap semester sebagai bentuk akuntabilitas kinerja',
    'bahwa laporan kinerja dosen perlu dinilai oleh asesor yang memenuhi syarat sebagai dasar evaluasi kinerja, pengembangan karier, dan data akreditasi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Asesor Internal Beban Kerja Dosen Tahun Akademik 2026/2027',
  ],
  mengingat: ketua(UU_GURU_DOSEN, PM_DOSEN),
  diktum: [
    { text: 'Membentuk Tim Asesor Internal Beban Kerja Dosen Tahun Akademik 2026/2027 dengan susunan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Asesor internal adalah dosen tetap yang memiliki sertifikat pendidik dan diutamakan yang telah memiliki Nomor Induk Registrasi Asesor.' },
    { text: 'Tim Asesor Internal mempunyai tugas:', items: [
      'memverifikasi kelengkapan bukti kinerja pendidikan, penelitian, pengabdian kepada masyarakat, dan penunjang',
      'menilai kesesuaian laporan kinerja dengan ketentuan peraturan perundang-undangan yang berlaku',
      'menyampaikan rekapitulasi hasil penilaian kepada Wakil Ketua I dan Wakil Ketua II',
    ] },
    { text: 'Asesor tidak boleh menilai laporan kinerja dirinya sendiri atau dosen yang memiliki hubungan keluarga dengannya.' },
    { text: 'Hasil penilaian menjadi masukan bagi penilaian kinerja dosen sebagaimana diatur dalam Pedoman Penilaian Kinerja Dosen dan Tenaga Kependidikan.' },
  ],
  tembusan: T('Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Kepala Bagian SDM dan Kepegawaian', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Tim Asesor Internal Beban Kerja Dosen', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan Fungsional', 'Dosen yang Dinilai'], widths: [6, 18, 28, 22, 26], alignCenter: [0], rows: [
        ['1', 'Koordinator', B, B, '-'], ['2', 'Asesor', B, B, B], ['3', 'Asesor', B, B, B], ['4', 'Asesor', B, B, B], ['5', 'Sekretariat', B, 'Tenaga kependidikan', '-'],
      ] } },
    ] },
  ],
},
// 23 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-23', file: 'F-SK-AKR-23_SK-Panitia-PMB-2027-2028', issuer: 'ketua', standar: 'Standar 4', pic: 'WK III',
  title: 'Pembentukan Panitia Penerimaan Mahasiswa Baru Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Akademik 2027/2028',
  menimbang: [
    'bahwa penerimaan mahasiswa baru harus dilaksanakan secara terencana, objektif, transparan, dan akuntabel',
    'bahwa untuk kelancaran penerimaan mahasiswa baru Tahun Akademik 2027/2028 diperlukan panitia dengan pembagian tugas yang jelas',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Panitia Penerimaan Mahasiswa Baru Tahun Akademik 2027/2028',
  ],
  mengingat: ketua(),
  memperhatikan: ['Rencana Program PMB (F-WK3-01-01)', 'Evaluasi PMB Tahunan (F-WK3-01-10) Tahun Akademik 2026/2027'],
  diktum: [
    { text: 'Membentuk Panitia Penerimaan Mahasiswa Baru Tahun Akademik 2027/2028 dengan susunan sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Panitia mempunyai tugas:', items: [
      'menyusun rencana, target, dan jadwal penerimaan mahasiswa baru',
      'melaksanakan promosi dan sosialisasi program studi',
      'melaksanakan pendaftaran, seleksi administrasi, tes, dan wawancara calon mahasiswa',
      'menetapkan dan mengumumkan hasil seleksi setelah mendapat persetujuan Ketua',
      'melaksanakan registrasi mahasiswa baru dan menyerahkan data kepada bagian akademik',
      'menyusun laporan dan evaluasi penerimaan mahasiswa baru',
    ] },
    { text: 'Penerimaan mahasiswa baru dilaksanakan sesuai jadwal sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Seleksi dilaksanakan tanpa membedakan suku, ras, golongan, jenis kelamin, status sosial, dan kemampuan ekonomi, serta memperhatikan calon mahasiswa berkebutuhan khusus.' },
    { text: 'Panitia bertanggung jawab kepada Ketua melalui Wakil Ketua III dan menyampaikan Laporan Rekap PMB (F-WK3-01-08) paling lambat 30 (tiga puluh) hari setelah penerimaan berakhir.' },
  ],
  tembusan: T('Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Kepala Bagian Keuangan STEI Fithrah Insani', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Panitia Penerimaan Mahasiswa Baru Tahun Akademik 2027/2028', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Unsur'], widths: [6, 34, 32, 28], alignCenter: [0], rows: [
        ['1', 'Pengarah', B, 'Ketua'], ['2', 'Penanggung Jawab', B, 'Wakil Ketua III'], ['3', 'Ketua Panitia', B, B], ['4', 'Sekretaris', B, B],
        ['5', 'Bendahara', B, 'Staf Bagian Keuangan'], ['6', 'Koordinator Promosi dan Humas', B, B], ['7', 'Anggota Promosi', B, B],
        ['8', 'Koordinator Pendaftaran dan Seleksi', B, B], ['9', 'Pewawancara', B, 'Dosen'], ['10', 'Pewawancara', B, 'Dosen'],
        ['11', 'Koordinator Sistem Informasi', B, 'UPT Komputer dan TI'], ['12', 'Koordinator Registrasi', B, 'Bagian Akademik'],
      ] } },
    ] },
    { title: 'Jadwal Penerimaan Mahasiswa Baru Tahun Akademik 2027/2028', blocks: [
      { table: { cols: ['No.', 'Kegiatan', 'Gelombang I', 'Gelombang II', 'Gelombang III'], widths: [6, 34, 20, 20, 20], alignCenter: [0], rows: [
        ['1', 'Pendaftaran', B, B, B], ['2', 'Tes dan wawancara', B, B, B], ['3', 'Pengumuman hasil seleksi', B, B, B],
        ['4', 'Registrasi dan pembayaran', B, B, B], ['5', 'PKKMB', 'Agustus 2027', '', ''],
      ] } },
    ] },
  ],
},
// 24 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-24', file: 'F-SK-AKR-24_SK-Tata-Tertib-Mahasiswa', issuer: 'ketua', standar: 'Standar 4', pic: 'WK III',
  title: 'Tata Tertib Mahasiswa Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa pembinaan mahasiswa memerlukan aturan yang menjamin hak mahasiswa sekaligus menegaskan kewajiban dan larangan dalam kehidupan kampus',
    'bahwa tata tertib mahasiswa perlu selaras dengan nilai-nilai keislaman dan visi pembentukan karakter islami yang mandiri dan berintegritas',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Tata Tertib Mahasiswa',
  ],
  mengingat: ketua(),
  memperhatikan: ['Masukan Organisasi Kemahasiswaan STEI Fithrah Insani tanggal ______ 2026', RAPIM],
  diktum: [
    { text: 'Menetapkan Tata Tertib Mahasiswa Sekolah Tinggi Ekonomi Islam Fithrah Insani sebagaimana tercantum dalam Lampiran.' },
    { text: 'Tata Tertib Mahasiswa berlaku bagi seluruh mahasiswa di dalam kampus maupun dalam kegiatan di luar kampus yang membawa nama institusi.' },
    { text: 'Pemeriksaan pelanggaran tata tertib dilaksanakan oleh Wakil Ketua III bersama Ketua Program Studi, sedangkan pelanggaran integritas akademik diperiksa oleh Komisi Etik.' },
    { text: 'Tata Tertib Mahasiswa disosialisasikan kepada mahasiswa baru pada kegiatan PKKMB dan dimuat dalam laman institusi.' },
  ],
  tembusan: T('Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Pengurus Organisasi Kemahasiswaan', 'Seluruh mahasiswa'),
  lampiran: [
    { title: 'Tata Tertib Mahasiswa', blocks: [
      { h: 'A. Hak Mahasiswa' },
      { list: [
        'memperoleh layanan pendidikan dan administrasi akademik sesuai ketentuan',
        'memanfaatkan fasilitas kampus sesuai tata tertib penggunaannya',
        'memperoleh bimbingan akademik, konseling, dan layanan karier',
        'menyampaikan pendapat, keluhan, dan aspirasi melalui saluran resmi',
        'berorganisasi dalam organisasi kemahasiswaan yang disahkan institusi',
        'memperoleh perlindungan dari kekerasan dan perundungan',
      ] },
      { h: 'B. Kewajiban Mahasiswa' },
      { list: [
        'menaati peraturan akademik, tata tertib, dan kode etik',
        'membayar biaya pendidikan sesuai ketentuan',
        'menghadiri perkuliahan dan kegiatan akademik sesuai ketentuan kehadiran',
        'berpakaian sopan dan menutup aurat sesuai syariat Islam selama kegiatan kampus',
        'menjaga nama baik institusi, kebersihan, dan fasilitas kampus',
        'menunjukkan kartu tanda mahasiswa apabila diminta petugas',
      ] },
      { h: 'C. Larangan' },
      { list: [
        'menyalahgunakan, mengedarkan, atau membawa narkotika, psikotropika, dan minuman beralkohol',
        'berjudi dalam bentuk apa pun, termasuk judi daring',
        'melakukan kekerasan fisik, psikis, seksual, atau perundungan',
        'membawa senjata tajam atau senjata api',
        'memalsukan dokumen, tanda tangan, atau identitas',
        'merusak atau menggunakan fasilitas kampus tanpa izin',
        'menyebarkan ujaran kebencian dan informasi bohong yang mengatasnamakan institusi',
        'merokok di dalam gedung dan ruang kelas',
      ] },
      { h: 'D. Sanksi' },
      { table: { cols: ['Tingkat', 'Bentuk Sanksi', 'Pejabat yang Menetapkan'], widths: [16, 52, 32], rows: [
        ['Ringan', 'Teguran lisan atau teguran tertulis', 'Ketua Program Studi'],
        ['Sedang', 'Surat peringatan; pencabutan hak mengikuti kegiatan kemahasiswaan; kewajiban mengganti kerugian', 'Wakil Ketua III'],
        ['Berat', 'Skorsing paling lama 2 (dua) semester atau pemberhentian sebagai mahasiswa', 'Ketua'],
      ] } },
      { p: 'Pelanggaran yang merupakan tindak pidana diproses sesuai ketentuan peraturan perundang-undangan tanpa menghapus sanksi akademik. Mahasiswa yang dikenai sanksi berat dapat mengajukan keberatan tertulis kepada Ketua paling lambat 14 (empat belas) hari setelah keputusan diterima.' },
    ] },
  ],
},
// 25 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-25', file: 'F-SK-AKR-25_SK-Tim-Tracer-Study-dan-Survei-Pengguna-Lulusan', issuer: 'ketua', standar: 'Standar 4', pic: 'WK III',
  title: 'Pembentukan Tim Tracer Study dan Survei Pengguna Lulusan Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2027',
  menimbang: [
    'bahwa data keterserapan lulusan, waktu tunggu kerja, kesesuaian bidang kerja, dan kepuasan pengguna lulusan merupakan indikator luaran pendidikan dalam akreditasi',
    'bahwa data tersebut diperoleh melalui tracer study kepada lulusan dan survei kepada pengguna lulusan yang dilaksanakan secara sistematis',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Tracer Study dan Survei Pengguna Lulusan Tahun 2027',
  ],
  mengingat: ketua(),
  diktum: [
    { text: 'Membentuk Tim Tracer Study dan Survei Pengguna Lulusan Tahun 2027 dengan susunan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Tim mempunyai tugas:', items: [
      'memutakhirkan Database Alumni (F-WK3-08-01)',
      'melaksanakan tracer study kepada lulusan menggunakan Kuesioner Tracer Study Alumni (F-WK3-08-02), termasuk pengisian pada platform tracer study nasional',
      'melaksanakan survei kepuasan pengguna lulusan terhadap aspek etika, keahlian bidang ilmu, bahasa asing, teknologi informasi, komunikasi, kerja sama tim, dan pengembangan diri',
      'mengolah data waktu tunggu, kesesuaian bidang kerja, tingkat tempat kerja, dan pendapatan lulusan',
      'menyusun Laporan Tracer Study (F-WK3-08-03) dan menyampaikannya kepada Ketua',
    ] },
    { text: 'Sasaran tracer study adalah lulusan tahun ______ dengan target tingkat respons paling sedikit ___% dari jumlah lulusan.' },
    { text: 'Hasil tracer study dan survei pengguna lulusan menjadi masukan bagi evaluasi kurikulum oleh Wakil Ketua I dan program studi.' },
  ],
  tembusan: T('Kepala LPM STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Tim Tracer Study dan Survei Pengguna Lulusan', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Unsur'], widths: [6, 30, 34, 30], alignCenter: [0], rows: [
        ['1', 'Penanggung Jawab', B, 'Wakil Ketua III'], ['2', 'Ketua', B, B], ['3', 'Sekretaris', B, B],
        ['4', 'Anggota: Program Studi Ekonomi Syariah', B, 'Dosen'], ['5', 'Anggota: Program Studi Perbankan Syariah', B, 'Dosen'],
        ['6', 'Anggota: Pengolah Data', B, 'UPT Komputer dan TI'], ['7', 'Anggota: Perwakilan Alumni', B, 'Ikatan Alumni'],
      ] } },
    ] },
  ],
},
// 26 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-26', file: 'F-SK-AKR-26_SK-Layanan-Bimbingan-Konseling-dan-Karier', issuer: 'ketua', standar: 'Standar 4', pic: 'WK III',
  title: 'Pembentukan Unit Layanan Bimbingan Konseling dan Pengembangan Karier Mahasiswa Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa mahasiswa berhak memperoleh layanan bimbingan konseling untuk mengatasi hambatan akademik dan nonakademik serta layanan pengembangan karier untuk mempersiapkan diri memasuki dunia kerja dan wirausaha',
    'bahwa layanan tersebut perlu dikelola oleh unit dengan penanggung jawab, prosedur, dan pencatatan yang jelas',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Unit Layanan Bimbingan Konseling dan Pengembangan Karier Mahasiswa',
  ],
  mengingat: ketua(),
  diktum: [
    { text: 'Membentuk Unit Layanan Bimbingan Konseling dan Pengembangan Karier Mahasiswa, yang selanjutnya disebut Unit Layanan, di bawah koordinasi Wakil Ketua III dengan susunan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Layanan bimbingan konseling meliputi:', items: [
      'konseling akademik bagi mahasiswa dengan hambatan belajar atau berisiko putus studi',
      'konseling pribadi dan sosial',
      'rujukan kepada tenaga profesional apabila diperlukan',
    ] },
    { text: 'Layanan pengembangan karier meliputi:', items: [
      'pelatihan kesiapan kerja dan penulisan surat lamaran',
      'informasi lowongan kerja, magang, dan beasiswa',
      'pembinaan kewirausahaan islami bersama Pusat Inkubator Bisnis',
      'kerja sama penempatan magang dengan mitra',
    ] },
    { text: 'Unit Layanan wajib menjaga kerahasiaan data konseli dan mencatat layanan dalam Form Konseling (F-WK3-06-02), Kartu Riwayat Konseling (F-WK3-06-03), dan Rekap Kasus Konseling (F-WK3-06-06).' },
    { text: 'Unit Layanan menyampaikan laporan semesteran kepada Wakil Ketua III dan Laporan Karier dan Magang Tahunan (F-WK3-07-10) kepada Ketua.' },
  ],
  tembusan: T('Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Kepala Pusat Inkubator Bisnis', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Unit Layanan Bimbingan Konseling dan Pengembangan Karier Mahasiswa', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Unsur'], widths: [6, 32, 34, 28], alignCenter: [0], rows: [
        ['1', 'Penanggung Jawab', B, 'Wakil Ketua III'], ['2', 'Koordinator', B, 'Dosen'],
        ['3', 'Konselor', B, 'Dosen'], ['4', 'Konselor', B, 'Dosen'],
        ['5', 'Koordinator Layanan Karier', B, B], ['6', 'Staf Administrasi', B, 'Tenaga kependidikan'],
      ] } },
    ] },
  ],
},
// 27 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-27', file: 'F-SK-AKR-27_SK-Kalender-Akademik-TA-2026-2027', issuer: 'ketua', standar: 'Standar 5', pic: 'WK I',
  title: 'Kalender Akademik Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Akademik 2026/2027',
  menimbang: [
    'bahwa penyelenggaraan kegiatan akademik memerlukan jadwal yang pasti dan diketahui seluruh sivitas akademika',
    'bahwa Wakil Ketua I bersama Ketua Program Studi telah menyusun Kalender Akademik Tahun Akademik 2026/2027',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Kalender Akademik Tahun Akademik 2026/2027',
  ],
  mengingat: ketua(),
  diktum: [
    { text: 'Menetapkan Kalender Akademik Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Akademik 2026/2027 sebagaimana tercantum dalam Lampiran.' },
    { text: 'Kalender Akademik menjadi acuan penyusunan jadwal perkuliahan, ujian, penyerahan nilai, dan layanan akademik oleh seluruh unit kerja.' },
    { text: 'Perubahan Kalender Akademik hanya dapat dilakukan dengan Keputusan Ketua atas usul Wakil Ketua I.' },
  ],
  tembusan: T('Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Seluruh dosen dan mahasiswa'),
  lampiran: [
    { title: 'Kalender Akademik Tahun Akademik 2026/2027', blocks: [
      { table: { cols: ['No.', 'Kegiatan', 'Waktu'], widths: [6, 58, 36], alignCenter: [0], rows: [
        { section: 'A. Fase Persiapan dan Registrasi Semester Ganjil' },
        ['1', 'Penerimaan dan registrasi mahasiswa baru; registrasi keuangan dan akademik (KRS); pengumuman KHS; layanan cuti, pindah studi, dan pengunduran diri', 'Agustus 2026'],
        ['2', 'Penyusunan dan sosialisasi jadwal kuliah', '8 Agustus 2026'],
        ['3', 'Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB)', '28–29 Agustus 2026'],
        ['4', 'Pelantikan mahasiswa baru dan pengenalan akademik kampus', '29 Agustus 2026'],
        { section: 'B. Semester Ganjil' },
        ['5', 'Perkuliahan Semester Ganjil', '1 September – 26 Desember 2026'],
        ['6', 'Ujian Tengah Semester dan Evaluasi FINE Project', '19–24 Oktober 2026'],
        ['7', 'Batas akhir penyerahan nilai UTS', '1 November 2026'],
        ['8', 'Ujian Akhir Semester dan Evaluasi FINE Project', '14–19 Desember 2026'],
        ['9', 'Batas akhir penyerahan nilai UAS', '26 Desember 2026'],
        { section: 'C. Semester Genap' },
        ['10', 'Penyusunan jadwal; registrasi dan KRS; pengumuman KHS; layanan cuti, pindah studi, dan pengunduran diri', 'Januari 2027'],
        ['11', 'Perkuliahan Semester Genap', '18 Januari – 12 Juni 2027'],
        ['12', 'Ujian Tengah Semester dan Evaluasi FINE Project', '22–27 Maret 2027'],
        ['13', 'Batas akhir penyerahan nilai UTS', '3 April 2027'],
        ['14', 'Ujian Akhir Semester dan Evaluasi FINE Project', '24–29 Mei 2027'],
        ['15', 'Batas akhir penyerahan nilai UAS', '5 Juni 2027'],
        { section: 'D. PKL, KKN, dan Wisuda' },
        ['16', 'Praktik Kerja Lapangan (PKL)', 'Juni 2027'],
        ['17', 'Ujian PKL dan batas akhir penyerahan nilai PKL', '7 Agustus 2027'],
        ['18', 'Kuliah Kerja Nyata (KKN) dan Wisuda STEI Fithrah Insani ke-2', 'Agustus 2027'],
        ['19', 'Ujian KKN dan batas akhir penyerahan nilai KKN', '7 September 2027'],
      ] } },
      { note: 'Sumber: Kalender Akademik TA 2026/2027 (KALENDER_AKADEMIK_TA_2026_2027.xlsx dan infografis resmi Wakil Ketua I).' },
    ] },
  ],
},
// 28 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-28', file: 'F-SK-AKR-28_SK-Peraturan-Akademik', issuer: 'ketua', standar: 'Standar 5', pic: 'WK I',
  title: 'Peraturan Akademik Program Sarjana Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa penyelenggaraan pendidikan program sarjana memerlukan peraturan akademik yang mengatur beban belajar, masa studi, penilaian, dan kelulusan secara pasti',
    'bahwa peraturan akademik perlu disesuaikan dengan Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 53 Tahun 2023 tentang Penjaminan Mutu Pendidikan Tinggi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Peraturan Akademik Program Sarjana',
  ],
  mengingat: ketua(),
  memperhatikan: ['Pertimbangan Senat STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Menetapkan Peraturan Akademik Program Sarjana Sekolah Tinggi Ekonomi Islam Fithrah Insani sebagaimana tercantum dalam Lampiran.' },
    { text: 'Ketentuan teknis pelaksanaan Peraturan Akademik dimuat dalam Buku Pedoman Akademik yang ditetapkan oleh Wakil Ketua I.' },
    { text: 'Peraturan Akademik berlaku bagi mahasiswa Program Studi Ekonomi Syariah dan Program Studi Perbankan Syariah mulai Tahun Akademik 2026/2027.' },
  ],
  tembusan: T('Ketua Senat STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Seluruh dosen dan mahasiswa'),
  lampiran: [
    { title: 'Peraturan Akademik Program Sarjana', blocks: [
      { h: 'A. Beban Belajar dan Masa Studi' },
      { list: [
        'satu satuan kredit semester (SKS) setara dengan 45 (empat puluh lima) jam kegiatan belajar per semester',
        'beban belajar program sarjana paling sedikit 144 (seratus empat puluh empat) SKS',
        'masa studi program sarjana paling lama 7 (tujuh) tahun akademik',
        'satu semester terdiri atas paling sedikit 16 (enam belas) minggu efektif, termasuk ujian',
      ] },
      { h: 'B. Registrasi dan Perkuliahan' },
      { list: [
        'mahasiswa wajib melakukan registrasi keuangan dan akademik setiap semester sesuai Kalender Akademik',
        'jumlah SKS yang dapat diambil pada semester berikutnya ditentukan oleh Indeks Prestasi Semester dan persetujuan Dosen Pembimbing Akademik',
        'mahasiswa wajib hadir paling sedikit 75% dari jumlah pertemuan untuk dapat mengikuti Ujian Akhir Semester',
        'dosen wajib menyampaikan RPS kepada mahasiswa pada pertemuan pertama',
      ] },
      { h: 'C. Penilaian' },
      { table: { cols: ['Nilai Angka', 'Nilai Huruf', 'Bobot'], widths: [34, 33, 33], alignCenter: [0, 1, 2], rows: [
        ['85–100', 'A', '4,00'], ['80–84', 'A-', '3,75'], ['75–79', 'B+', '3,50'], ['70–74', 'B', '3,00'], ['65–69', 'B-', '2,75'],
        ['60–64', 'C+', '2,50'], ['55–59', 'C', '2,00'], ['40–54', 'D', '1,00'], ['0–39', 'E', '0,00'],
      ] } },
      { p: 'Nilai akhir mata kuliah dihitung dari komponen kehadiran, tugas, Ujian Tengah Semester, dan Ujian Akhir Semester dengan bobot yang dicantumkan dalam RPS. Mahasiswa dapat mengajukan keberatan atas nilai kepada dosen pengampu paling lambat 7 (tujuh) hari setelah nilai diumumkan.' },
      { h: 'D. Cuti Akademik, Pindah, dan Pengunduran Diri' },
      { list: [
        'cuti akademik dapat diambil paling banyak 2 (dua) semester selama masa studi dan tidak dihitung dalam masa studi',
        'mahasiswa yang tidak melakukan registrasi tanpa izin dinyatakan nonaktif pada semester tersebut',
        'mahasiswa yang nonaktif 2 (dua) semester berturut-turut tanpa keterangan dapat dinyatakan mengundurkan diri',
      ] },
      { h: 'E. Kelulusan dan Predikat' },
      { list: [
        'mahasiswa dinyatakan lulus apabila telah menyelesaikan seluruh beban SKS, lulus ujian skripsi, mencapai IPK paling rendah 2,00 tanpa nilai E, dan memenuhi persyaratan administrasi',
        'predikat kelulusan ditetapkan sebagai berikut: Memuaskan (IPK 2,76–3,00), Sangat Memuaskan (IPK 3,01–3,50), dan Pujian (IPK lebih dari 3,50 dengan masa studi paling lama 4 tahun dan tanpa nilai di bawah B)',
      ] },
      { note: USULAN },
    ] },
  ],
},
// 29 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-29', file: 'F-SK-AKR-29_SK-Tim-Monev-Pembelajaran-dan-RPS', issuer: 'ketua', standar: 'Standar 5', pic: 'WK I / LPM',
  title: 'Pembentukan Tim Monitoring dan Evaluasi Pembelajaran Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Akademik 2026/2027',
  menimbang: [
    'bahwa mutu pembelajaran harus dipantau secara berkala untuk menjamin kesesuaian pelaksanaan perkuliahan dengan Rencana Pembelajaran Semester (RPS) dan ketercapaian Capaian Pembelajaran Lulusan',
    'bahwa pemantauan pembelajaran memerlukan tim dengan instrumen, jadwal, dan pelaporan yang ditetapkan secara resmi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Monitoring dan Evaluasi Pembelajaran Tahun Akademik 2026/2027',
  ],
  mengingat: ketua(UU_GURU_DOSEN),
  diktum: [
    { text: 'Membentuk Tim Monitoring dan Evaluasi Pembelajaran Tahun Akademik 2026/2027 dengan susunan sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Tim mempunyai tugas:', items: [
      'memeriksa kelengkapan dan kesesuaian RPS setiap mata kuliah sebelum semester dimulai menggunakan Checklist Review RPS (F-WK1-02-03)',
      'memantau kesesuaian materi perkuliahan dengan RPS menggunakan Form Kesesuaian Materi (F-WK1-03-07)',
      'memantau kehadiran dosen dan jumlah pertemuan setiap mata kuliah',
      'memantau kesesuaian soal ujian dengan capaian pembelajaran mata kuliah',
      'merekapitulasi hasil Evaluasi Dosen oleh Mahasiswa (EDOM)',
      'menyusun laporan dan rekomendasi perbaikan pembelajaran setiap akhir semester',
    ] },
    { text: 'Monitoring dan evaluasi dilaksanakan sesuai tahapan sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Laporan Tim disampaikan kepada Wakil Ketua I dan Kepala LPM, serta ditindaklanjuti oleh Ketua Program Studi bersama dosen yang bersangkutan.' },
  ],
  tembusan: T('Kepala LPM STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Tim Monitoring dan Evaluasi Pembelajaran', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan'], widths: [6, 26, 34, 34], alignCenter: [0], rows: [
        ['1', 'Penanggung Jawab', B, 'Wakil Ketua I'], ['2', 'Ketua', B, 'Kepala LPM'], ['3', 'Sekretaris', B, 'Staf Bagian Akademik'],
        ['4', 'Anggota', B, 'Ketua Program Studi Ekonomi Syariah'], ['5', 'Anggota', B, 'Ketua Program Studi Perbankan Syariah'],
        ['6', 'Anggota', B, 'Ketua GKM Program Studi Ekonomi Syariah'], ['7', 'Anggota', B, 'Ketua GKM Program Studi Perbankan Syariah'],
      ] } },
    ] },
    { title: 'Tahapan Monitoring dan Evaluasi Pembelajaran per Semester', blocks: [
      { table: { cols: ['Tahap', 'Kegiatan', 'Waktu', 'Keluaran'], widths: [14, 40, 22, 24], rows: [
        ['Awal', 'Review RPS dan penerimaan RPS oleh mahasiswa', 'Sebelum perkuliahan dan minggu ke-1', 'Checklist Review RPS; Lembar Penerimaan RPS (F-WK1-02-05)'],
        ['Tengah', 'Pemantauan kesesuaian materi dan kehadiran dosen', 'Sekitar UTS', 'Rekap kesesuaian materi dan kehadiran'],
        ['Akhir', 'EDOM, telaah soal UAS, dan rekap nilai', 'Sekitar UAS', 'Rekap EDOM; hasil telaah soal'],
        ['Tindak lanjut', 'Penyusunan laporan dan rekomendasi', 'Paling lambat 1 bulan setelah UAS', 'Laporan Monev Pembelajaran'],
      ] } },
    ] },
  ],
},
// 30 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-30', file: 'F-SK-AKR-30_SK-Penetapan-RIP-dan-Renstra-PkM', issuer: 'ketua', standar: 'Standar 7', pic: 'LPPM',
  title: 'Penetapan Rencana Induk Penelitian dan Rencana Strategis Pengabdian kepada Masyarakat Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2024–2029',
  menimbang: [
    'bahwa penelitian dan pengabdian kepada masyarakat harus diarahkan pada tema unggulan yang selaras dengan visi institusi dan kebutuhan masyarakat',
    'bahwa Lembaga Penelitian dan Pengabdian kepada Masyarakat telah menyusun Rencana Induk Penelitian (F-LPPM-01-01) yang memuat visi penelitian, tema riset unggulan, dan target kinerja',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Penetapan Rencana Induk Penelitian dan Rencana Strategis Pengabdian kepada Masyarakat Tahun 2024–2029',
  ],
  mengingat: ketua().concat([RENSTRA]),
  memperhatikan: ['Pertimbangan Senat STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Menetapkan Rencana Induk Penelitian dan Rencana Strategis Pengabdian kepada Masyarakat Tahun 2024–2029 dengan pokok-pokok sebagaimana tercantum dalam Lampiran.' },
    { text: 'Rencana sebagaimana dimaksud dalam Diktum KESATU menjadi acuan dalam seleksi proposal hibah internal, penyusunan Program Kerja Tahunan LPPM (F-LPPM-01-02), dan penganggaran penelitian serta pengabdian kepada masyarakat.' },
    { text: 'Paling sedikit ___% dari judul penelitian dan pengabdian kepada masyarakat yang didanai institusi setiap tahun wajib sesuai dengan tema unggulan.' },
    { text: 'Kepala LPPM mengevaluasi capaian target kinerja setiap tahun dan melaporkannya kepada Ketua.' },
  ],
  tembusan: T('Ketua Senat STEI Fithrah Insani', 'Kepala LPPM STEI Fithrah Insani', 'Seluruh dosen'),
  lampiran: [
    { title: 'Pokok-Pokok Rencana Induk Penelitian dan Rencana Strategis Pengabdian kepada Masyarakat', blocks: [
      { h: 'A. Visi Penelitian' },
      { p: 'Menjadi pusat penelitian unggulan ekonomi Islam yang relevan, berdampak, dan berkontribusi bagi pengembangan ilmu serta pemberdayaan masyarakat.' },
      { h: 'B. Tema Riset Unggulan' },
      { table: { cols: ['No.', 'Tema', 'Sub-Tema', 'Relevansi Strategis'], widths: [6, 26, 34, 34], alignCenter: [0], rows: [
        ['1', 'Pengembangan Keuangan Islam', 'Perbankan syariah, takaful, sukuk, wakaf produktif', 'Mendukung literasi dan pengembangan produk keuangan syariah'],
        ['2', 'Pemberdayaan Ekonomi Berbasis Zakat dan Wakaf', 'Optimalisasi ZIS, wakaf uang, BMT', 'Mendukung pengentasan kemiskinan berbasis Islam'],
        ['3', 'Ekosistem Halal dan Kewirausahaan Islam', 'Sertifikasi halal, bisnis syariah digital', 'Mendukung pertumbuhan ekonomi halal Indonesia'],
        ['4', 'Tata Kelola Kelembagaan Islam', 'Akuntabilitas lembaga keuangan syariah, SPMI PTKI', 'Meningkatkan kualitas tata kelola institusi Islam'],
        ['5', 'Digitalisasi Keuangan Syariah (Islamic Fintech)', 'Fintech syariah, crowdfunding berbasis wakaf, e-commerce halal', 'Mendukung transformasi digital sektor halal'],
      ] } },
      { p: 'Tema pengabdian kepada masyarakat mengikuti tema riset unggulan dengan fokus pada pemberdayaan ekonomi desa dan UMKM, literasi keuangan syariah, serta pendampingan kewirausahaan islami.' },
      { h: 'C. Target Kinerja' },
      { table: { cols: ['Indikator', '2025', '2026', '2027', '2028', '2029'], widths: [40, 12, 12, 12, 12, 12], alignCenter: [1, 2, 3, 4, 5], rows: [
        ['Jumlah judul penelitian dosen', '___', '___', '___', '___', '___'],
        ['Jumlah judul pengabdian kepada masyarakat', '___', '___', '___', '___', '___'],
        ['Publikasi di jurnal nasional terakreditasi', '___', '___', '___', '___', '___'],
        ['Publikasi di jurnal internasional', '___', '___', '___', '___', '___'],
        ['HKI yang didaftarkan', '___', '___', '___', '___', '___'],
        ['Hibah penelitian dan PkM dari pihak eksternal', '___', '___', '___', '___', '___'],
        ['Penelitian dan PkM yang melibatkan mahasiswa (%)', '___', '___', '___', '___', '___'],
      ] } },
      { note: 'Visi dan tema riset unggulan diambil dari Rencana Induk Penelitian STEI FI (F-LPPM-01-01).' },
    ] },
  ],
},
// 31 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-31', file: 'F-SK-AKR-31_SK-Tim-Reviewer-Internal-Penelitian-dan-PkM', issuer: 'ketua', standar: 'Standar 7', pic: 'LPPM',
  title: 'Pembentukan Tim Reviewer Internal Penelitian dan Pengabdian kepada Masyarakat Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2027',
  menimbang: [
    'bahwa seleksi proposal dan evaluasi hasil penelitian serta pengabdian kepada masyarakat yang didanai institusi harus dilaksanakan secara objektif dan transparan',
    'bahwa penilaian proposal dan hasil kegiatan memerlukan reviewer internal yang memiliki kompetensi di bidangnya',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Reviewer Internal Penelitian dan Pengabdian kepada Masyarakat Tahun 2027',
  ],
  mengingat: ketua(UU_GURU_DOSEN),
  memperhatikan: ['Usulan Kepala LPPM STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Membentuk Tim Reviewer Internal Penelitian dan Pengabdian kepada Masyarakat Tahun 2027 dengan susunan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Tim Reviewer mempunyai tugas:', items: [
      'menilai proposal penelitian dan pengabdian kepada masyarakat menggunakan Lembar Penilaian Proposal Reviewer (F-LPPM-02-05)',
      'menilai kesesuaian proposal dengan tema riset unggulan dalam Rencana Induk Penelitian',
      'melaksanakan pemantauan kemajuan dan evaluasi laporan akhir kegiatan',
      'memberikan rekomendasi pendanaan kepada Kepala LPPM',
    ] },
    { text: 'Reviewer tidak boleh menilai proposal yang diajukan oleh dirinya sendiri atau tim yang melibatkan dirinya, dan wajib menyatakan konflik kepentingan sebelum penilaian.' },
    { text: 'Setiap proposal dinilai oleh paling sedikit 2 (dua) reviewer.' },
    { text: 'Masa tugas Tim Reviewer adalah 1 (satu) tahun anggaran.' },
  ],
  tembusan: T('Kepala LPPM STEI Fithrah Insani', 'Yang bersangkutan'),
  lampiran: [
    { title: 'Susunan Tim Reviewer Internal Penelitian dan Pengabdian kepada Masyarakat', blocks: [
      { table: { cols: ['No.', 'Nama', 'Jabatan Fungsional', 'Bidang Keahlian', 'Tema Unggulan yang Direviu'], widths: [6, 26, 20, 24, 24], alignCenter: [0], rows: [
        ['1', B, B, B, B], ['2', B, B, B, B], ['3', B, B, B, B], ['4', B, B, B, B],
      ] } },
      { note: 'Reviewer dapat berasal dari luar institusi apabila jumlah dosen dengan keahlian yang sesuai belum mencukupi.' },
    ] },
  ],
},
// 32 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-32', file: 'F-SK-AKR-32_SK-Pedoman-Kerja-Sama', issuer: 'ketua', standar: 'Standar 7', pic: 'WK III',
  title: 'Pedoman Pengelolaan Kerja Sama Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa kerja sama dengan lembaga pemerintah, dunia usaha, dunia industri, lembaga keuangan syariah, perguruan tinggi, dan masyarakat diperlukan untuk meningkatkan mutu tridharma perguruan tinggi',
    'bahwa kerja sama harus dikelola secara tertib mulai dari penjajakan, penandatanganan, pelaksanaan, hingga evaluasi agar memberikan manfaat yang terukur',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pedoman Pengelolaan Kerja Sama',
  ],
  mengingat: ketua(),
  diktum: [
    { text: 'Menetapkan Pedoman Pengelolaan Kerja Sama Sekolah Tinggi Ekonomi Islam Fithrah Insani sebagaimana tercantum dalam Lampiran.' },
    { text: 'Pengelolaan kerja sama dikoordinasikan oleh Wakil Ketua III, sedangkan pelaksanaannya menjadi tanggung jawab unit pengusul.' },
    { text: 'Naskah kerja sama ditandatangani oleh Ketua atau pejabat yang diberi kuasa tertulis oleh Ketua.' },
    { text: 'Setiap unit wajib melaporkan pelaksanaan kerja sama beserta bukti kegiatannya kepada Wakil Ketua III paling lambat 30 (tiga puluh) hari setelah kegiatan selesai.' },
  ],
  tembusan: T('Kepala LPM dan Kepala LPPM STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah'),
  lampiran: [
    { title: 'Pedoman Pengelolaan Kerja Sama', blocks: [
      { h: 'A. Jenis Naskah Kerja Sama' },
      { table: { cols: ['Jenis', 'Isi', 'Penandatangan'], widths: [28, 46, 26], rows: [
        ['Nota Kesepahaman (MoU)', 'Kesepakatan umum tentang bidang kerja sama', 'Ketua dan pimpinan mitra'],
        ['Perjanjian Kerja Sama (MoA/PKS)', 'Rincian kegiatan, hak dan kewajiban, pembiayaan, dan jangka waktu', 'Ketua atau pejabat yang diberi kuasa'],
        ['Implementation Arrangement (IA)', 'Rencana pelaksanaan kegiatan tertentu di tingkat unit atau program studi', 'Pimpinan unit dan mitra'],
      ] } },
      { h: 'B. Tahapan' },
      { list: [
        'penjajakan dan penilaian kelayakan mitra oleh unit pengusul',
        'penyusunan draf naskah menggunakan Naskah MoU Kerja Sama (F-WK3-09-03) dan telaah oleh Wakil Ketua III',
        'penandatanganan naskah dan pencatatan nomor sesuai Pedoman Tata Naskah Dinas',
        'pelaksanaan kegiatan dan pengumpulan bukti (surat tugas, daftar hadir, foto, laporan, luaran)',
        'monitoring dan evaluasi manfaat kerja sama setiap tahun',
        'perpanjangan atau pengakhiran kerja sama berdasarkan hasil evaluasi',
      ], style: 'num' },
      { h: 'C. Ruang Lingkup' },
      { p: 'Kerja sama dapat meliputi bidang pendidikan (dosen tamu, magang, PKL, praktik profesi, kurikulum bersama), penelitian, pengabdian kepada masyarakat, pengembangan kewirausahaan islami, serta pengembangan kelembagaan dan sumber daya manusia, baik dengan mitra dalam negeri maupun luar negeri.' },
      { h: 'D. Evaluasi Kerja Sama' },
      { table: { cols: ['Aspek Evaluasi', 'Indikator'], widths: [30, 70], rows: [
        ['Relevansi', 'Kesesuaian kegiatan dengan visi, misi, dan tridharma'],
        ['Realisasi', 'Jumlah kegiatan yang terlaksana dibandingkan rencana'],
        ['Manfaat', 'Luaran bagi mahasiswa, dosen, dan institusi'],
        ['Kepuasan mitra', 'Hasil survei kepuasan mitra kerja sama'],
        ['Keberlanjutan', 'Rekomendasi perpanjangan atau pengakhiran'],
      ] } },
      { p: 'Wakil Ketua III menyusun rekapitulasi kerja sama setiap tahun yang memuat nama mitra, tingkat (lokal, nasional, internasional), bidang tridharma, masa berlaku, dan bukti pelaksanaan.' },
    ] },
  ],
},
];
