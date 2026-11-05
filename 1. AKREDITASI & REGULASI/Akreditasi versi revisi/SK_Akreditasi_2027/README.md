# Paket SK untuk Akreditasi Perguruan Tinggi 2027

Draf 16 Surat Keputusan (SK) yang menjadi dokumen bukti akreditasi BAN-PT STEI Fithrah Insani, terutama untuk standar yang dikoordinasikan Wakil Ketua II (Standar 2, 3, dan 6). Daftar ini diturunkan dari `7. WK2_BIDANG_KEUANGAN/WK2_DAFTAR_SK_WAJIB.md`.

Setiap berkas sudah memuat struktur lengkap: kop, nomor, konsiderans (Menimbang, Mengingat, Memperhatikan), diktum, blok tanda tangan, tembusan, dan lampiran. Format: A4, Times New Roman 12, margin 2,5 cm.

## Daftar SK

| Kode | Judul singkat | Penetap | Standar BAN-PT | PIC penyusun |
|---|---|---|---|---|
| F-SK-AKR-01 | Tim Akreditasi Perguruan Tinggi 2027 | Ketua | 1–7 (koordinasi) | Ketua / LPM |
| F-SK-AKR-02 | Pengangkatan Pejabat Struktural Bidang II | Ketua | 2 | WK II |
| F-SK-AKR-03 | Pedoman Tata Naskah Dinas | Ketua | 2 | WK II / Adm. Umum |
| F-SK-AKR-04 | Bendahara Penerimaan, Pengeluaran, dan Kas Kecil TA 2027 | Ketua | 6 | WK II / Keuangan |
| F-SK-AKR-05 | Standar Biaya Masukan TA 2027 | Ketua | 6 | WK II / Keuangan |
| F-SK-AKR-06 | Tim Penyusun RAPB TA 2027 | Ketua | 6 | WK II |
| F-SK-AKR-07 | Tim dan Pedoman Pengadaan Barang/Jasa | Ketua | 6 | WK II / Sarpras |
| F-SK-AKR-08 | Tim Inventarisasi dan Stock Opname Aset (Ganjil 2026/2027) | Ketua | 6 | WK II / Sarpras |
| F-SK-AKR-09 | Pedoman dan Tim Penilaian Kinerja Dosen dan Tendik | Ketua | 3 | WK II / SDM |
| F-SK-AKR-10 | Rencana Pengembangan SDM 2026–2029 | Ketua | 3 | WK II / SDM |
| F-SK-AKR-11 | Kebijakan Keamanan Informasi dan Pelindungan Data Pribadi | Ketua | 2 dan 6 | WK II / UPT TI |
| F-SK-AKR-12 | Kebijakan Koleksi dan Layanan Perpustakaan | Ketua | 6 | WK II / UPT Perpustakaan |
| F-SK-AKR-13 | Nama Resmi, Logo, Kop Surat, dan Cap/Stempel | Yayasan | 2 | WK II / Adm. Umum |
| F-SK-AKR-14 | Batas Kewenangan Otorisasi Pengeluaran dan Penandatangan Rekening | Yayasan | 2 dan 6 | WK II / Keuangan |
| F-SK-AKR-15 | Biaya Pendidikan Mahasiswa Baru TA 2027/2028 | Yayasan | 6 | WK II / Keuangan |
| F-SK-AKR-16 | Peraturan Kepegawaian | Yayasan | 3 | WK II / SDM |

SK APB Yayasan, SK Pengangkatan Pegawai, SK Penyesuaian Gaji/Pembinaan, dan SK Izin Studi Lanjut sudah ada di `wk2/Dokumen_SOP_WK2_STEI_FI_2026/`, jadi tidak dibuat ulang di sini.

## Yang harus dilengkapi sebelum ditandatangani

1. **Ejaan nama institusi.** Semua SK memakai "Fithrah" sesuai mayoritas dokumen di repo. Templat lama di folder `wk2/` dan `lpm/` memakai "Fitrah". Cocokkan dengan naskah Keputusan Menteri Agama tentang izin pendirian, lalu tetapkan lewat F-SK-AKR-13.
2. **Isian kosong (`______`).** Nama pejabat, NIDN, nomor SK, tanggal, alamat kampus, nomor izin pendirian, dan nomor akta yayasan.
3. **Semua nominal rupiah** (standar biaya, biaya pendidikan, ambang otorisasi, ambang pengadaan) dikosongkan. Pengecualiannya ambang survei harga Rp1.000.000, yang diambil dari Tupoksi WK II 2026.
4. **Bobot dan predikat penilaian kinerja** pada F-SK-AKR-09 adalah usulan awal. Rapat pimpinan perlu menyepakatinya.
5. **Masa jabatan 2 tahun** pada F-SK-AKR-02 mengikuti masa jabatan Wakil Ketua di Statuta. Cek apakah Statuta mengatur masa jabatan Kepala Bagian/UPT secara berbeda.
6. **Logo** pada lampiran F-SK-AKR-13 masih berupa tempat kosong.

## Membuat ulang berkas

Isi SK tersimpan sebagai data di `_generator/content.js`. Setelah mengubah isinya, jalankan:

```bash
cd _generator
npm install docx   # sekali saja
node gen.js ..
```
