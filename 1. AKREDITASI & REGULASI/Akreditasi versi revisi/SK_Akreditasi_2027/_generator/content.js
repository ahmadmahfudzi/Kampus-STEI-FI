// Isi 16 SK akreditasi. Semua nama, nomor, tanggal, dan nominal sengaja dikosongkan.
const UU_SISDIKNAS = 'Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional';
const UU_DIKTI = 'Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi';
const UU_GURU_DOSEN = 'Undang-Undang Nomor 14 Tahun 2005 tentang Guru dan Dosen';
const UU_YAYASAN = 'Undang-Undang Nomor 16 Tahun 2001 tentang Yayasan sebagaimana telah diubah dengan Undang-Undang Nomor 28 Tahun 2004 tentang Perubahan atas Undang-Undang Nomor 16 Tahun 2001 tentang Yayasan';
const UU_NAKER = 'Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan sebagaimana telah diubah terakhir dengan Undang-Undang Nomor 6 Tahun 2023 tentang Penetapan Peraturan Pemerintah Pengganti Undang-Undang Nomor 2 Tahun 2022 tentang Cipta Kerja menjadi Undang-Undang';
const UU_ARSIP = 'Undang-Undang Nomor 43 Tahun 2009 tentang Kearsipan';
const UU_PERPUS = 'Undang-Undang Nomor 43 Tahun 2007 tentang Perpustakaan';
const UU_PDP = 'Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi';
const PP_DIKTI = 'Peraturan Pemerintah Nomor 4 Tahun 2014 tentang Penyelenggaraan Pendidikan Tinggi dan Pengelolaan Perguruan Tinggi';
const PP_ARSIP = 'Peraturan Pemerintah Nomor 28 Tahun 2012 tentang Pelaksanaan Undang-Undang Nomor 43 Tahun 2009 tentang Kearsipan';
const PP_PKWT = 'Peraturan Pemerintah Nomor 35 Tahun 2021 tentang Perjanjian Kerja Waktu Tertentu, Alih Daya, Waktu Kerja dan Waktu Istirahat, dan Pemutusan Hubungan Kerja';
const PP_SMK3 = 'Peraturan Pemerintah Nomor 50 Tahun 2012 tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja';
const PM_MUTU = 'Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 53 Tahun 2023 tentang Penjaminan Mutu Pendidikan Tinggi';
const PM_DOSEN = 'Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 44 Tahun 2024 tentang Profesi, Karier, dan Penghasilan Dosen';
const KMA = 'Keputusan Direktur Jenderal Pendidikan Islam Kementerian Agama Republik Indonesia Nomor 1137 Tahun 2023 tentang Izin Perubahan Nama, Pindah Alamat, dan Alih Kelola STEI Ar-Risalah menjadi STEI Fithrah Insani';
const AKTA = 'Akta Pendirian Yayasan Fithrah Insani Indonesia Nomor ______ tanggal ______ beserta perubahannya, yang telah disahkan dengan Keputusan Menteri Hukum dan Hak Asasi Manusia Nomor ______';
const STATUTA = 'Statuta Sekolah Tinggi Ekonomi Islam Fithrah Insani Revisi Tahun 2024';
const SK_KETUA = 'Keputusan Pengurus Yayasan Fithrah Insani Indonesia Nomor ______ tentang Pengangkatan Ketua Sekolah Tinggi Ekonomi Islam Fithrah Insani';
const SK_STRUKTUR = 'Keputusan Ketua Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2026 tentang Revisi Struktur Organisasi';

const ketua = (...mid) => [UU_SISDIKNAS, UU_DIKTI, ...mid, PP_DIKTI, PM_MUTU, KMA, STATUTA, SK_KETUA];
const yayasan = (...mid) => [UU_SISDIKNAS, UU_DIKTI, UU_YAYASAN, ...mid, PP_DIKTI, AKTA, KMA, STATUTA];

const T_PIMPINAN = ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Ketua STEI Fithrah Insani', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Kepala LPM STEI Fithrah Insani', 'Arsip'];
const T_YAYASAN = ['Pembina Yayasan Fithrah Insani Indonesia', 'Pengawas Yayasan Fithrah Insani Indonesia', 'Ketua STEI Fithrah Insani', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Arsip'];
const B = '';
const BOBOT_NOTE = 'Catatan: angka bobot dan rentang nilai di atas adalah usulan awal. Rapat pimpinan dapat menyesuaikannya sebelum SK ditetapkan.';

module.exports = [
// 01 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-01', file: 'F-SK-AKR-01_SK-Tim-Akreditasi-Perguruan-Tinggi-2027', issuer: 'ketua', standar: 'Standar 1–7 (koordinasi)', pic: 'Ketua / LPM',
  title: 'Pembentukan Tim Akreditasi Perguruan Tinggi Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2027',
  menimbang: [
    'bahwa berdasarkan Pasal 55 Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi, akreditasi dilakukan untuk menentukan kelayakan program studi dan perguruan tinggi',
    'bahwa Sekolah Tinggi Ekonomi Islam Fithrah Insani akan menjalani akreditasi perguruan tinggi oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) pada tahun 2027',
    'bahwa penyusunan Laporan Evaluasi Diri (LED), Laporan Kinerja Perguruan Tinggi (LKPT), dan dokumen pendukung memerlukan tim yang bekerja secara terkoordinasi lintas unit',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a, huruf b, dan huruf c, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Akreditasi Perguruan Tinggi Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2027',
  ],
  mengingat: ketua(),
  memperhatikan: ['Peraturan Badan Akreditasi Nasional Perguruan Tinggi tentang Instrumen Akreditasi Perguruan Tinggi yang berlaku', 'Hasil Rapat Pimpinan STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Membentuk Tim Akreditasi Perguruan Tinggi Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2027, yang selanjutnya disebut Tim Akreditasi, dengan susunan keanggotaan sebagaimana tercantum dalam Lampiran I yang merupakan bagian tidak terpisahkan dari Keputusan ini.' },
    { text: 'Tim Akreditasi mempunyai tugas:', items: [
      'menyusun rencana kerja dan jadwal persiapan akreditasi',
      'menghimpun, memverifikasi, dan memutakhirkan data dan dokumen bukti untuk setiap standar akreditasi',
      'menyusun Laporan Evaluasi Diri (LED) dan Laporan Kinerja Perguruan Tinggi (LKPT)',
      'memastikan kesesuaian data LKPT dengan Pangkalan Data Pendidikan Tinggi (PDDIKTI)',
      'menyelenggarakan simulasi asesmen kecukupan dan asesmen lapangan',
      'mendampingi asesor BAN-PT selama asesmen lapangan',
      'menyusun rencana tindak lanjut atas rekomendasi hasil akreditasi',
    ] },
    { text: 'Pembagian tugas setiap koordinator standar beserta dokumen bukti utama yang menjadi tanggung jawabnya tercantum dalam Lampiran II yang merupakan bagian tidak terpisahkan dari Keputusan ini.' },
    { text: 'Tim Akreditasi bertanggung jawab kepada Ketua dan menyampaikan laporan kemajuan secara tertulis paling sedikit 1 (satu) kali setiap bulan.' },
    { text: 'Seluruh unit kerja di lingkungan Sekolah Tinggi Ekonomi Islam Fithrah Insani wajib menyediakan data dan dokumen yang diminta Tim Akreditasi sesuai tenggat yang ditetapkan.' },
    { text: 'Biaya pelaksanaan tugas Tim Akreditasi dibebankan pada Anggaran Pendapatan dan Belanja Sekolah Tinggi Ekonomi Islam Fithrah Insani.' },
    { text: 'Masa tugas Tim Akreditasi berakhir setelah keputusan akreditasi dari BAN-PT diterbitkan dan rencana tindak lanjut disahkan oleh Ketua.' },
  ],
  tembusan: T_PIMPINAN.slice(0, 2).concat(['Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Kepala LPM dan Kepala LPPM STEI Fithrah Insani', 'Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Yang bersangkutan', 'Arsip']),
  lampiran: [
    { title: 'Susunan Keanggotaan Tim Akreditasi Perguruan Tinggi Tahun 2027', blocks: [
      { table: { cols: ['No.', 'Kedudukan dalam Tim', 'Nama', 'Jabatan/Unsur'], widths: [6, 34, 30, 30], alignCenter: [0], rows: [
        ['1', 'Pengarah', B, 'Ketua STEI Fithrah Insani'],
        ['2', 'Penanggung Jawab', B, 'Wakil Ketua I'],
        ['3', 'Penanggung Jawab', B, 'Wakil Ketua II'],
        ['4', 'Penanggung Jawab', B, 'Wakil Ketua III'],
        ['5', 'Ketua Tim', B, 'Kepala LPM'],
        ['6', 'Sekretaris', B, 'Staf LPM'],
        ['7', 'Bendahara', B, 'Staf Bagian Keuangan'],
        ['8', 'Koordinator Standar 1: Visi, Misi, Tujuan, dan Strategi', B, 'Kepala LPM'],
        ['9', 'Koordinator Standar 2: Tata Kelola, Kepemimpinan, dan Sistem Manajemen', B, 'Wakil Ketua II'],
        ['10', 'Koordinator Standar 3: Sumber Daya Manusia', B, 'Wakil Ketua II / Kepala Bagian SDM'],
        ['11', 'Koordinator Standar 4: Mahasiswa dan Lulusan', B, 'Wakil Ketua III'],
        ['12', 'Koordinator Standar 5: Kurikulum, Pembelajaran, dan Suasana Akademik', B, 'Wakil Ketua I'],
        ['13', 'Koordinator Standar 6: Pembiayaan, Sarana, dan Prasarana', B, 'Wakil Ketua II'],
        ['14', 'Koordinator Standar 7: Penelitian, Pengabdian kepada Masyarakat, dan Kerja Sama', B, 'Kepala LPPM'],
        ['15', 'Anggota: Data PDDIKTI dan LKPT', B, 'Operator PDDIKTI'],
        ['16', 'Anggota: Data Program Studi Ekonomi Syariah', B, 'Ketua Program Studi Ekonomi Syariah'],
        ['17', 'Anggota: Data Program Studi Perbankan Syariah', B, 'Ketua Program Studi Perbankan Syariah'],
        ['18', 'Anggota: Penyunting LED', B, 'Dosen'],
        ['19', 'Anggota: Dokumentasi dan Sistem Informasi', B, 'Kepala UPT Komputer dan TI'],
      ] } },
    ] },
    { title: 'Pembagian Tugas Koordinator Standar dan Dokumen Bukti Utama', blocks: [
      { table: { cols: ['Standar', 'Koordinator', 'Dokumen Bukti Utama'], widths: [22, 18, 60], rows: [
        ['1. Visi, Misi, Tujuan, dan Strategi', 'Kepala LPM', 'Statuta 2024; Renstra 2024–2029; Rencana Induk Pengembangan; bukti sosialisasi visi dan misi'],
        ['2. Tata Kelola, Kepemimpinan, dan Sistem Manajemen', 'Wakil Ketua II', 'SK Struktur Organisasi; SK Pejabat Struktural; Pedoman Tata Naskah Dinas; SK Nama Resmi, Logo, dan Stempel; Kebijakan Keamanan Informasi; dokumen SPMI'],
        ['3. Sumber Daya Manusia', 'Wakil Ketua II', 'Peraturan Kepegawaian; SK pengangkatan dosen dan tendik; Pedoman Penilaian Kinerja; Rencana Pengembangan SDM; data jabatan fungsional dan sertifikasi dosen'],
        ['4. Mahasiswa dan Lulusan', 'Wakil Ketua III', 'Data PMB; data mahasiswa aktif dan lulusan; laporan tracer study; data prestasi mahasiswa'],
        ['5. Kurikulum, Pembelajaran, dan Suasana Akademik', 'Wakil Ketua I', 'SK Pemberlakuan Kurikulum; RPS; SK Tugas Mengajar; hasil EDOM; kalender akademik'],
        ['6. Pembiayaan, Sarana, dan Prasarana', 'Wakil Ketua II', 'SK APB; SK Biaya Pendidikan; SK Standar Biaya; SK Batas Kewenangan Otorisasi; laporan keuangan dan audit; Buku Inventaris Aset; BA Stock Opname; Kebijakan Perpustakaan'],
        ['7. Penelitian, Pengabdian kepada Masyarakat, dan Kerja Sama', 'Kepala LPPM', 'Rencana Induk Penelitian; SK penelitian dan PkM didanai; luaran publikasi; dokumen kerja sama (MoU/MoA)'],
      ] } },
    ] },
  ],
},
// 02 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-02', file: 'F-SK-AKR-02_SK-Pengangkatan-Pejabat-Struktural-Bidang-II', issuer: 'ketua', standar: 'Standar 2', pic: 'WK II',
  title: 'Pengangkatan Pejabat Struktural di Lingkungan Bidang Keuangan, Administrasi Umum, dan Sumber Daya Manusia Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa berdasarkan Revisi Struktur Organisasi Tahun 2026, Wakil Ketua II mengoordinasikan Bagian Keuangan, Bagian Administrasi Umum, Bagian Sumber Daya Manusia, Bagian Sarana dan Prasarana, UPT Perpustakaan, serta UPT Komputer dan Teknologi Informasi',
    'bahwa untuk menjamin kejelasan kewenangan dan akuntabilitas pelaksanaan tugas pada unit-unit tersebut, perlu mengangkat pejabat struktural yang memenuhi syarat',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pengangkatan Pejabat Struktural di Lingkungan Bidang Keuangan, Administrasi Umum, dan Sumber Daya Manusia',
  ],
  mengingat: ketua(UU_GURU_DOSEN, UU_NAKER).concat([SK_STRUKTUR]),
  memperhatikan: ['Usulan Wakil Ketua II STEI Fithrah Insani tanggal ______ 2026', 'Hasil Rapat Pimpinan STEI Fithrah Insani tanggal ______ 2026'],
  diktum: [
    { text: 'Mengangkat nama-nama sebagaimana tercantum dalam Lampiran I sebagai pejabat struktural di lingkungan Bidang Keuangan, Administrasi Umum, dan Sumber Daya Manusia Sekolah Tinggi Ekonomi Islam Fithrah Insani.' },
    { text: 'Pejabat struktural sebagaimana dimaksud dalam Diktum KESATU melaksanakan tugas sesuai uraian tugas sebagaimana tercantum dalam Lampiran II, berada di bawah koordinasi dan bertanggung jawab kepada Wakil Ketua II.' },
    { text: 'Masa jabatan pejabat struktural sebagaimana dimaksud dalam Diktum KESATU adalah 2 (dua) tahun terhitung sejak tanggal ditetapkan dan dapat diangkat kembali berdasarkan hasil penilaian kinerja.' },
    { text: 'Kepada pejabat struktural sebagaimana dimaksud dalam Diktum KESATU diberikan tunjangan jabatan sesuai ketentuan remunerasi yang berlaku di Sekolah Tinggi Ekonomi Islam Fithrah Insani.' },
    { text: 'Pejabat struktural wajib menyampaikan laporan kinerja unit secara bulanan kepada Wakil Ketua II dan laporan tahunan kepada Ketua.' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Kepala LPM STEI Fithrah Insani', 'Yang bersangkutan', 'Arsip'],
  lampiran: [
    { title: 'Daftar Pejabat Struktural Bidang Keuangan, Administrasi Umum, dan Sumber Daya Manusia', blocks: [
      { table: { cols: ['No.', 'Jabatan', 'Nama', 'NIDN/NIP Yayasan', 'Status Kepegawaian'], widths: [6, 34, 24, 18, 18], alignCenter: [0], rows: [
        ['1', 'Kepala Bagian Keuangan', B, '__________', '__________'],
        ['2', 'Kepala Bagian Administrasi Umum', B, '__________', '__________'],
        ['3', 'Kepala Bagian Sumber Daya Manusia dan Kepegawaian', B, '__________', '__________'],
        ['4', 'Kepala Bagian Sarana dan Prasarana', B, '__________', '__________'],
        ['5', 'Kepala UPT Perpustakaan', B, '__________', '__________'],
        ['6', 'Kepala UPT Komputer dan Teknologi Informasi', B, '__________', '__________'],
      ] } },
    ] },
    { title: 'Uraian Tugas Pokok Pejabat Struktural', blocks: [
      { table: { cols: ['Jabatan', 'Tugas Pokok'], widths: [28, 72], rows: [
        ['Kepala Bagian Keuangan', 'Mengelola penerimaan dan pengeluaran dana; menyelenggarakan pembukuan; melakukan rekonsiliasi bank setiap bulan; menyusun laporan keuangan bulanan, semesteran, dan tahunan; menghimpun bahan penyusunan RAPB.'],
        ['Kepala Bagian Administrasi Umum', 'Mengelola surat masuk dan surat keluar; menyelenggarakan kearsipan; mengelola penggunaan cap dan stempel; mengoordinasikan logistik serta keamanan dan kebersihan kampus.'],
        ['Kepala Bagian SDM dan Kepegawaian', 'Mengelola rekrutmen, kontrak kerja, penggajian, cuti, dan pemberhentian; mengelola basis data kepegawaian; menyiapkan usulan jabatan fungsional dosen; melaksanakan penilaian kinerja dan program pengembangan SDM.'],
        ['Kepala Bagian Sarana dan Prasarana', 'Merencanakan kebutuhan sarana dan prasarana; melaksanakan pengadaan sesuai pedoman; mengelola inventarisasi dan stock opname aset; mengoordinasikan pemeliharaan dan perbaikan fasilitas.'],
        ['Kepala UPT Perpustakaan', 'Mengelola pengadaan, pengolahan, dan pelestarian koleksi; menyelenggarakan layanan sirkulasi dan referensi; mengelola e-resources dan repositori institusi; menyelenggarakan pelatihan literasi informasi.'],
        ['Kepala UPT Komputer dan TI', 'Mengelola infrastruktur jaringan, server, dan laboratorium komputer; mendukung operasional SIAKAD dan pelaporan PDDIKTI; melaksanakan pencadangan data; menangani insiden keamanan informasi.'],
      ] } },
    ] },
  ],
},
// 03 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-03', file: 'F-SK-AKR-03_SK-Pedoman-Tata-Naskah-Dinas', issuer: 'ketua', standar: 'Standar 2', pic: 'WK II / Bagian Administrasi Umum',
  title: 'Pedoman Tata Naskah Dinas Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa naskah dinas merupakan alat komunikasi kedinasan dan bukti akuntabilitas penyelenggaraan perguruan tinggi',
    'bahwa untuk mewujudkan keseragaman bentuk, penomoran, dan kewenangan penandatanganan naskah dinas di seluruh unit kerja, diperlukan pedoman tata naskah dinas',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pedoman Tata Naskah Dinas Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  ],
  mengingat: ketua(UU_ARSIP, PP_ARSIP),
  diktum: [
    { text: 'Menetapkan Pedoman Tata Naskah Dinas Sekolah Tinggi Ekonomi Islam Fithrah Insani sebagaimana tercantum dalam Lampiran yang merupakan bagian tidak terpisahkan dari Keputusan ini.' },
    { text: 'Pedoman sebagaimana dimaksud dalam Diktum KESATU wajib digunakan oleh seluruh unit kerja dalam menyusun, menomori, menandatangani, mengirim, dan mengarsipkan naskah dinas.' },
    { text: 'Penomoran naskah dinas dicatat dalam Buku Agenda Surat Keluar (F-WK2-05-02) dan Daftar Nomor Surat Keluar (F-WK2-05-07) yang dikelola oleh Bagian Administrasi Umum.' },
    { text: 'Naskah dinas yang diterbitkan sebelum Keputusan ini ditetapkan dinyatakan tetap berlaku sampai dengan berakhirnya masa berlaku naskah tersebut.' },
  ],
  tembusan: T_PIMPINAN.concat(['Seluruh kepala unit kerja STEI Fithrah Insani']).filter(t => t !== 'Arsip').concat(['Arsip']),
  lampiran: [
    { title: 'Pedoman Tata Naskah Dinas', blocks: [
      { h: 'A. Jenis Naskah Dinas dan Kewenangan Penandatanganan' },
      { table: { cols: ['No.', 'Jenis Naskah', 'Kode', 'Penandatangan'], widths: [6, 38, 12, 44], alignCenter: [0, 2], rows: [
        ['1', 'Peraturan Ketua', 'PER', 'Ketua'],
        ['2', 'Keputusan (Surat Keputusan)', 'SK', 'Ketua; Pengurus Yayasan untuk keputusan Yayasan'],
        ['3', 'Surat Edaran', 'SE', 'Ketua atau Wakil Ketua sesuai bidang'],
        ['4', 'Surat Tugas', 'ST', 'Ketua atau Wakil Ketua sesuai bidang'],
        ['5', 'Surat Dinas/Undangan', 'SD', 'Ketua, Wakil Ketua, atau kepala unit sesuai lingkup'],
        ['6', 'Nota Dinas (internal)', 'ND', 'Kepala unit kerja'],
        ['7', 'Berita Acara', 'BA', 'Para pihak yang terlibat'],
        ['8', 'Surat Keterangan', 'KET', 'Wakil Ketua sesuai bidang atau kepala unit yang diberi wewenang'],
        ['9', 'Memorandum of Understanding/Perjanjian Kerja Sama', 'KS', 'Ketua'],
      ] } },
      { p: 'Wakil Ketua II berwenang menandatangani naskah dinas administrasi umum yang bersifat operasional atas nama institusi dengan menggunakan keterangan "a.n. Ketua".' },
      { h: 'B. Format Nomor Naskah Dinas' },
      { p: 'Nomor naskah dinas disusun dengan format: [Nomor Urut]/[Kode Jenis]/[Kode Unit]/[Bulan dalam Angka Romawi]/[Tahun]. Contoh: 015/SK/STEI-FI/XI/2026. Nomor urut dimulai kembali dari 001 pada setiap awal tahun takwim.' },
      { table: { cols: ['Unit', 'Kode Unit'], widths: [70, 30], alignCenter: [1], rows: [
        ['Ketua (institusi)', 'STEI-FI'], ['Wakil Ketua I', 'WK1'], ['Wakil Ketua II', 'WK2'], ['Wakil Ketua III', 'WK3'],
        ['Lembaga Penjaminan Mutu', 'LPM'], ['Lembaga Penelitian dan Pengabdian kepada Masyarakat', 'LPPM'],
        ['Program Studi Ekonomi Syariah', 'PRODI-ES'], ['Program Studi Perbankan Syariah', 'PRODI-PS'],
        ['UPT Perpustakaan', 'UPT-PUS'], ['UPT Komputer dan Teknologi Informasi', 'UPT-TI'], ['Yayasan Fithrah Insani Indonesia', 'YFI'],
      ] } },
      { h: 'C. Ketentuan Bentuk' },
      { list: [
        'naskah dinas menggunakan kop resmi sesuai Keputusan Pengurus Yayasan tentang Penetapan Nama Resmi, Logo, Kop Surat, dan Cap/Stempel',
        'huruf yang digunakan adalah Times New Roman ukuran 12 dengan kertas A4 dan margin 2,5 cm',
        'bahasa yang digunakan adalah Bahasa Indonesia baku sesuai Pedoman Umum Ejaan Bahasa Indonesia',
        'naskah dinas yang ditandatangani wajib dibubuhi cap/stempel resmi oleh petugas yang ditunjuk',
      ] },
      { h: 'D. Pengarsipan' },
      { list: [
        'naskah asli disimpan oleh unit penerbit dan salinannya diserahkan kepada Bagian Administrasi Umum',
        'surat masuk dicatat dalam Buku Agenda Surat Masuk (F-WK2-05-01) dan diteruskan dengan Lembar Disposisi (F-WK2-05-03)',
        'SK, perjanjian kerja sama, dan dokumen hukum lainnya digolongkan sebagai arsip vital dan disimpan secara permanen dalam bentuk fisik dan digital',
      ] },
    ] },
  ],
},
// 04 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-04', file: 'F-SK-AKR-04_SK-Pengangkatan-Bendahara', issuer: 'ketua', standar: 'Standar 6', pic: 'WK II / Bagian Keuangan',
  title: 'Pengangkatan Bendahara Penerimaan, Bendahara Pengeluaran, dan Pemegang Kas Kecil Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Anggaran 2027',
  menimbang: [
    'bahwa pengelolaan keuangan Sekolah Tinggi Ekonomi Islam Fithrah Insani harus dilaksanakan secara tertib, transparan, dan akuntabel',
    'bahwa untuk menjamin pemisahan fungsi antara penerimaan dan pengeluaran dana, perlu menunjuk pejabat pengelola keuangan dengan tugas dan tanggung jawab yang jelas',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pengangkatan Bendahara Penerimaan, Bendahara Pengeluaran, dan Pemegang Kas Kecil Tahun Anggaran 2027',
  ],
  mengingat: ketua(UU_YAYASAN),
  diktum: [
    { text: 'Mengangkat nama-nama sebagaimana tercantum dalam Lampiran sebagai Bendahara Penerimaan, Bendahara Pengeluaran, dan Pemegang Kas Kecil Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Anggaran 2027.' },
    { text: 'Bendahara Penerimaan bertugas:', items: [
      'menerima dan mencatat seluruh penerimaan dana institusi dalam Buku Kas Penerimaan Harian (F-WK2-02-02)',
      'menerbitkan kuitansi resmi untuk setiap penerimaan (F-WK2-02-03)',
      'menyetorkan penerimaan tunai ke rekening institusi paling lambat 1 (satu) hari kerja setelah diterima',
      'menyusun rekapitulasi penerimaan mingguan dan bulanan serta rekapitulasi piutang mahasiswa',
    ] },
    { text: 'Bendahara Pengeluaran bertugas:', items: [
      'melakukan pembayaran berdasarkan pengajuan dana yang telah diverifikasi kesesuaiannya dengan APB dan disetujui pejabat yang berwenang',
      'mencatat seluruh pengeluaran dalam Buku Kas Pengeluaran (F-WK2-03-08)',
      'menagih dan memeriksa kelengkapan Laporan Pertanggungjawaban (LPJ) keuangan',
      'memotong dan menyetorkan pajak sesuai ketentuan peraturan perundang-undangan',
    ] },
    { text: 'Pemegang Kas Kecil mengelola dana kas kecil untuk pengeluaran operasional bernilai kecil dengan batas saldo sesuai ketetapan Wakil Ketua II dan mengajukan pengisian kembali disertai bukti pengeluaran.' },
    { text: 'Fungsi Bendahara Penerimaan dan Bendahara Pengeluaran tidak boleh dirangkap oleh orang yang sama.' },
    { text: 'Bendahara Penerimaan, Bendahara Pengeluaran, dan Pemegang Kas Kecil bertanggung jawab kepada Wakil Ketua II melalui Kepala Bagian Keuangan, serta wajib melakukan rekonsiliasi kas dan bank setiap akhir bulan.' },
    { text: 'Masa tugas sebagaimana dimaksud dalam Diktum KESATU berlaku untuk Tahun Anggaran 2027, yaitu tanggal 1 Januari 2027 sampai dengan 31 Desember 2027.' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua II STEI Fithrah Insani', 'Kepala Bagian Keuangan STEI Fithrah Insani', 'Yang bersangkutan', 'Arsip'],
  lampiran: [
    { title: 'Daftar Pengelola Keuangan Tahun Anggaran 2027', blocks: [
      { table: { cols: ['No.', 'Jabatan', 'Nama', 'NIP Yayasan', 'Unit Asal'], widths: [6, 30, 28, 18, 18], alignCenter: [0], rows: [
        ['1', 'Bendahara Penerimaan', B, '__________', '__________'],
        ['2', 'Bendahara Pengeluaran', B, '__________', '__________'],
        ['3', 'Pemegang Kas Kecil', B, '__________', '__________'],
      ] } },
    ] },
  ],
},
// 05 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-05', file: 'F-SK-AKR-05_SK-Standar-Biaya-Masukan', issuer: 'ketua', standar: 'Standar 6', pic: 'WK II / Bagian Keuangan',
  title: 'Standar Biaya Masukan Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Anggaran 2027',
  menimbang: [
    'bahwa penyusunan dan pelaksanaan anggaran memerlukan satuan biaya yang seragam sebagai batas tertinggi pembayaran honorarium dan biaya operasional',
    'bahwa standar biaya diperlukan untuk menjamin efisiensi, kewajaran, dan akuntabilitas penggunaan dana institusi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Standar Biaya Masukan Tahun Anggaran 2027',
  ],
  mengingat: ketua(UU_GURU_DOSEN),
  memperhatikan: ['Keputusan Pengurus Yayasan Fithrah Insani Indonesia tentang Penetapan Anggaran Pendapatan dan Belanja STEI Fithrah Insani Tahun Anggaran 2027'],
  diktum: [
    { text: 'Menetapkan Standar Biaya Masukan Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Anggaran 2027 sebagaimana tercantum dalam Lampiran yang merupakan bagian tidak terpisahkan dari Keputusan ini.' },
    { text: 'Standar Biaya Masukan sebagaimana dimaksud dalam Diktum KESATU merupakan batas tertinggi yang digunakan dalam penyusunan rencana anggaran unit dan pembayaran.' },
    { text: 'Pembayaran honorarium dikenai pajak penghasilan sesuai ketentuan peraturan perundang-undangan perpajakan.' },
    { text: 'Pembayaran yang melebihi Standar Biaya Masukan hanya dapat dilakukan dengan persetujuan tertulis Ketua berdasarkan pertimbangan Wakil Ketua II.' },
  ],
  tembusan: T_PIMPINAN.slice(0, 3).concat(['Kepala Bagian Keuangan STEI Fithrah Insani', 'Arsip']),
  lampiran: [
    { title: 'Standar Biaya Masukan Tahun Anggaran 2027', blocks: [
      { table: { cols: ['No.', 'Uraian', 'Satuan', 'Besaran (Rp)'], widths: [6, 52, 22, 20], alignCenter: [0], rows: [
        { section: 'A. Honorarium Pendidikan' },
        ['1', 'Honor mengajar dosen tidak tetap', 'per SKS per pertemuan', '__________'],
        ['2', 'Honor kelebihan mengajar dosen tetap (di atas beban wajib)', 'per SKS per pertemuan', '__________'],
        ['3', 'Honor pembimbing skripsi', 'per mahasiswa', '__________'],
        ['4', 'Honor penguji seminar proposal', 'per mahasiswa', '__________'],
        ['5', 'Honor penguji sidang skripsi', 'per mahasiswa', '__________'],
        ['6', 'Honor pembuatan soal ujian', 'per mata kuliah', '__________'],
        ['7', 'Honor pengawas ujian', 'per sesi', '__________'],
        ['8', 'Honor dosen pembimbing akademik', 'per mahasiswa per semester', '__________'],
        { section: 'B. Honorarium Kegiatan' },
        ['9', 'Narasumber internal', 'per jam', '__________'],
        ['10', 'Narasumber eksternal', 'per jam', '__________'],
        ['11', 'Moderator', 'per kegiatan', '__________'],
        ['12', 'Panitia kegiatan (ketua/anggota)', 'per kegiatan', '__________'],
        ['13', 'Tim penyusun dokumen (LED, Renstra, pedoman)', 'per dokumen', '__________'],
        { section: 'C. Biaya Operasional' },
        ['14', 'Uang harian perjalanan dinas dalam kota', 'per orang per hari', '__________'],
        ['15', 'Uang harian perjalanan dinas luar kota', 'per orang per hari', '__________'],
        ['16', 'Biaya penginapan perjalanan dinas', 'per orang per malam', '__________'],
        ['17', 'Konsumsi rapat', 'per orang per kegiatan', '__________'],
        ['18', 'Transportasi lokal', 'per orang per kegiatan', '__________'],
      ] } },
    ] },
  ],
},
// 06 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-06', file: 'F-SK-AKR-06_SK-Tim-Penyusun-RAPB-2027', issuer: 'ketua', standar: 'Standar 6', pic: 'WK II',
  title: 'Pembentukan Tim Penyusun Rencana Anggaran Pendapatan dan Belanja Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Anggaran 2027',
  menimbang: [
    'bahwa berdasarkan Statuta Sekolah Tinggi Ekonomi Islam Fithrah Insani Revisi Tahun 2024, Rencana Anggaran Pendapatan dan Belanja (RAPB) disusun oleh pimpinan, disetujui Senat, dan ditetapkan oleh Yayasan',
    'bahwa penyusunan RAPB harus melibatkan seluruh unit kerja dan selaras dengan Rencana Strategis 2024–2029',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Penyusun RAPB Tahun Anggaran 2027',
  ],
  mengingat: ketua(UU_YAYASAN),
  diktum: [
    { text: 'Membentuk Tim Penyusun Rencana Anggaran Pendapatan dan Belanja Tahun Anggaran 2027 dengan susunan keanggotaan sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Tim Penyusun RAPB mempunyai tugas:', items: [
      'menghimpun usulan anggaran seluruh unit dengan Formulir Usulan Anggaran Unit (F-WK2-01-01)',
      'menyusun rekapitulasi dan draf RAPB dengan berpedoman pada Rencana Strategis 2024–2029 dan Standar Biaya Masukan',
      'membahas draf RAPB dalam rapat pimpinan',
      'menyiapkan RAPB final untuk mendapatkan persetujuan Senat',
      'menyampaikan RAPB yang telah disetujui Senat kepada Yayasan untuk ditetapkan',
    ] },
    { text: 'Tim Penyusun RAPB bekerja sesuai jadwal sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Tim Penyusun RAPB bertanggung jawab kepada Ketua dan dikoordinasikan oleh Wakil Ketua II.' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Ketua Senat STEI Fithrah Insani', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Yang bersangkutan', 'Arsip'],
  lampiran: [
    { title: 'Susunan Tim Penyusun RAPB Tahun Anggaran 2027', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan'], widths: [6, 24, 34, 36], alignCenter: [0], rows: [
        ['1', 'Pengarah', B, 'Ketua'], ['2', 'Ketua Tim', B, 'Wakil Ketua II'], ['3', 'Sekretaris', B, 'Kepala Bagian Keuangan'],
        ['4', 'Anggota', B, 'Wakil Ketua I'], ['5', 'Anggota', B, 'Wakil Ketua III'], ['6', 'Anggota', B, 'Kepala LPM'],
        ['7', 'Anggota', B, 'Kepala LPPM'], ['8', 'Anggota', B, 'Ketua Program Studi Ekonomi Syariah'], ['9', 'Anggota', B, 'Ketua Program Studi Perbankan Syariah'],
        ['10', 'Anggota', B, 'Kepala Bagian SDM dan Kepegawaian'], ['11', 'Anggota', B, 'Kepala Bagian Sarana dan Prasarana'],
      ] } },
    ] },
    { title: 'Jadwal Penyusunan RAPB Tahun Anggaran 2027', blocks: [
      { table: { cols: ['No.', 'Tahapan', 'Keluaran', 'Target Waktu'], widths: [6, 40, 34, 20], alignCenter: [0], rows: [
        ['1', 'Penyampaian usulan anggaran unit', 'Formulir F-WK2-01-01', '__________'],
        ['2', 'Kompilasi usulan anggaran', 'Rekap F-WK2-01-02', '__________'],
        ['3', 'Penyusunan draf RAPB', 'Draf RAPB F-WK2-01-03', '__________'],
        ['4', 'Rapat pembahasan pimpinan', 'Notulen F-WK2-01-04', '__________'],
        ['5', 'Penyampaian RAPB kepada Senat', 'RAPB final F-WK2-01-05', '__________'],
        ['6', 'Persetujuan Senat', 'Berita Acara F-WK2-01-06', '__________'],
        ['7', 'Penetapan oleh Yayasan', 'SK APB F-WK2-01-07', '__________'],
        ['8', 'Sosialisasi APB', 'Surat Edaran F-WK2-01-08', '__________'],
      ] } },
    ] },
  ],
},
// 07 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-07', file: 'F-SK-AKR-07_SK-Tim-dan-Pedoman-Pengadaan-Barang-Jasa', issuer: 'ketua', standar: 'Standar 6', pic: 'WK II / Bagian Sarpras',
  title: 'Tim Pengadaan dan Pedoman Pengadaan Barang dan Jasa Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa pengadaan barang dan jasa harus dilaksanakan secara efisien, transparan, akuntabel, dan bebas dari konflik kepentingan',
    'bahwa diperlukan tim pengadaan serta ketentuan ambang nilai dan kewenangan persetujuan yang jelas sebagai pelaksanaan SOP Pengadaan Barang dan Jasa (SOP-WK2-ADM-03)',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Tim Pengadaan dan Pedoman Pengadaan Barang dan Jasa',
  ],
  mengingat: ketua(UU_YAYASAN),
  diktum: [
    { text: 'Membentuk Tim Pengadaan Barang dan Jasa serta Tim Penerima Barang dengan susunan sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Menetapkan ambang nilai dan metode pengadaan sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Setiap proses pengadaan wajib didokumentasikan dengan Formulir Permohonan Pengadaan (F-WK2-07-01), Survei Perbandingan Harga (F-WK2-07-03), Persetujuan Pengadaan (F-WK2-07-04), Purchase Order (F-WK2-07-05), dan Berita Acara Penerimaan Barang (F-WK2-07-06).' },
    { text: 'Anggota Tim Pengadaan dilarang menjadi anggota Tim Penerima Barang untuk pengadaan yang sama dan wajib menyatakan konflik kepentingan apabila memiliki hubungan dengan penyedia.' },
    { text: 'Pemecahan paket pengadaan dengan tujuan menghindari ambang nilai sebagaimana dimaksud dalam Diktum KEDUA tidak diperbolehkan.' },
    { text: 'Barang yang diterima wajib dicatat dalam Buku Inventaris Aset (F-WK2-07-07) dan diberi label kode aset paling lambat 7 (tujuh) hari kerja setelah diterima.' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Kepala Bagian Keuangan dan Kepala Bagian Sarana dan Prasarana', 'Yang bersangkutan', 'Arsip'],
  lampiran: [
    { title: 'Susunan Tim Pengadaan dan Tim Penerima Barang', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan'], widths: [6, 30, 32, 32], alignCenter: [0], rows: [
        { section: 'A. Tim Pengadaan' },
        ['1', 'Penanggung Jawab', B, 'Wakil Ketua II'], ['2', 'Ketua', B, 'Kepala Bagian Sarana dan Prasarana'],
        ['3', 'Sekretaris', B, 'Staf Bagian Administrasi Umum'], ['4', 'Anggota', B, 'Staf Bagian Sarana dan Prasarana'],
        ['5', 'Anggota (wakil unit pengguna)', B, 'Sesuai unit pengusul'],
        { section: 'B. Tim Penerima Barang' },
        ['6', 'Ketua', B, 'Kepala Bagian Administrasi Umum'], ['7', 'Anggota', B, 'Staf Bagian Keuangan'],
        ['8', 'Anggota', B, 'Wakil unit pengguna barang'],
      ] } },
    ] },
    { title: 'Ambang Nilai, Metode Pengadaan, dan Kewenangan Persetujuan', blocks: [
      { table: { cols: ['Nilai Pengadaan per Paket', 'Metode', 'Persetujuan'], widths: [34, 40, 26], rows: [
        ['Sampai dengan Rp1.000.000', 'Pembelian langsung dengan 1 (satu) bukti pembelian', 'Kepala Bagian Sarana dan Prasarana'],
        ['Di atas Rp1.000.000 sampai dengan Rp__________', 'Survei harga paling sedikit 2 (dua) penyedia', 'Wakil Ketua II'],
        ['Di atas Rp__________ sampai dengan Rp__________', 'Permintaan penawaran tertulis paling sedikit 3 (tiga) penyedia dan evaluasi oleh Tim Pengadaan', 'Ketua'],
        ['Di atas Rp__________', 'Penawaran tertulis paling sedikit 3 (tiga) penyedia, evaluasi Tim Pengadaan, dan perjanjian tertulis', 'Pengurus Yayasan'],
      ] } },
      { note: 'Ambang Rp1.000.000 mengikuti Tupoksi Revisi Wakil Ketua II 2026. Ambang lainnya diisi dan disesuaikan dengan SK Yayasan tentang Batas Kewenangan Otorisasi Pengeluaran (F-SK-AKR-14).' },
    ] },
  ],
},
// 08 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-08', file: 'F-SK-AKR-08_SK-Tim-Inventarisasi-Stock-Opname-Aset', issuer: 'ketua', standar: 'Standar 6', pic: 'WK II / Bagian Sarpras',
  title: 'Pembentukan Tim Inventarisasi dan Stock Opname Aset Sekolah Tinggi Ekonomi Islam Fithrah Insani Semester Ganjil Tahun Akademik 2026/2027',
  menimbang: [
    'bahwa aset institusi harus tercatat secara lengkap dan akurat sebagai dasar perencanaan sarana dan prasarana serta pelaporan kepada Yayasan',
    'bahwa berdasarkan SOP Inventarisasi dan Pemeliharaan Sarana Prasarana (SOP-WK2-SAR-01), stock opname fisik dilaksanakan setiap semester',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pembentukan Tim Inventarisasi dan Stock Opname Aset Semester Ganjil Tahun Akademik 2026/2027',
  ],
  mengingat: ketua(UU_YAYASAN),
  diktum: [
    { text: 'Membentuk Tim Inventarisasi dan Stock Opname Aset Semester Ganjil Tahun Akademik 2026/2027 dengan susunan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Ruang lingkup stock opname meliputi:', items: [
      'tanah, gedung, dan bangunan',
      'perabot dan peralatan ruang kuliah, ruang kantor, dan ruang pertemuan',
      'perangkat komputer, jaringan, dan peralatan laboratorium',
      'koleksi dan perlengkapan perpustakaan',
      'kendaraan dan aset bergerak lainnya',
    ] },
    { text: 'Tim melaksanakan stock opname pada tanggal ______ sampai dengan ______ dan menyampaikan Berita Acara Opname Aset (F-WK2-11-03) serta Laporan Selisih Temuan Opname (F-WK2-11-04) kepada Ketua melalui Wakil Ketua II paling lambat 14 (empat belas) hari setelah opname selesai.' },
    { text: 'Setiap kelompok pemeriksa paling sedikit beranggotakan 1 (satu) orang yang bukan pemegang barang pada ruang atau unit yang diperiksa.' },
    { text: 'Hasil stock opname menjadi dasar pemutakhiran Buku Inventaris Aset Institusi (F-WK2-11-01), usulan penghapusan aset, dan Laporan Inventarisasi Aset Tahunan (F-WK2-11-09).' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua II STEI Fithrah Insani', 'Kepala Bagian Sarana dan Prasarana', 'Yang bersangkutan', 'Arsip'],
  lampiran: [
    { title: 'Susunan Tim Inventarisasi dan Stock Opname Aset', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan', 'Area Pemeriksaan'], widths: [6, 18, 26, 26, 24], alignCenter: [0], rows: [
        ['1', 'Penanggung Jawab', B, 'Wakil Ketua II', 'Seluruh area'],
        ['2', 'Ketua', B, 'Kepala Bagian Sarana dan Prasarana', 'Seluruh area'],
        ['3', 'Sekretaris', B, 'Staf Bagian Administrasi Umum', 'Pencatatan'],
        ['4', 'Anggota', B, 'Staf Bagian Keuangan', 'Gedung dan ruang kantor'],
        ['5', 'Anggota', B, 'Staf UPT Komputer dan TI', 'Ruang kuliah dan pertemuan'],
        ['6', 'Anggota', B, 'Staf UPT Perpustakaan', 'Laboratorium komputer'],
        ['7', 'Anggota', B, 'Staf Bagian Sarana dan Prasarana', 'Perpustakaan dan kendaraan'],
      ] } },
      { note: 'Pembagian area disusun silang agar pemeriksa tidak memeriksa aset di unitnya sendiri.' },
    ] },
  ],
},
// 09 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-09', file: 'F-SK-AKR-09_SK-Pedoman-Penilaian-Kinerja-Dosen-Tendik', issuer: 'ketua', standar: 'Standar 3', pic: 'WK II / Bagian SDM',
  title: 'Pedoman dan Tim Penilaian Kinerja Dosen dan Tenaga Kependidikan Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa penilaian kinerja yang objektif dan terukur diperlukan sebagai dasar pembinaan, pengembangan karier, dan pemberian penghargaan bagi dosen dan tenaga kependidikan',
    'bahwa sebagai pelaksanaan SOP Evaluasi Kinerja Dosen dan Staf (SOP-WK2-SDM-02), diperlukan pedoman penilaian dan tim penilai yang ditetapkan secara resmi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Pedoman dan Tim Penilaian Kinerja Dosen dan Tenaga Kependidikan',
  ],
  mengingat: ketua(UU_GURU_DOSEN, UU_NAKER, PM_DOSEN),
  diktum: [
    { text: 'Menetapkan Pedoman Penilaian Kinerja Dosen dan Tenaga Kependidikan sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Membentuk Tim Penilai Kinerja dengan susunan sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Penilaian kinerja dilaksanakan setiap tahun akademik, sedangkan Evaluasi Dosen oleh Mahasiswa (EDOM) dilaksanakan setiap akhir semester.' },
    { text: 'Hasil penilaian kinerja disampaikan kepada pegawai yang dinilai melalui sesi umpan balik individual (F-WK2-09-07) dan menjadi dasar penyusunan rencana pengembangan, penyesuaian gaji, atau pembinaan.' },
    { text: 'Pegawai yang tidak sependapat dengan hasil penilaian dapat mengajukan keberatan tertulis kepada Wakil Ketua II paling lambat 14 (empat belas) hari setelah hasil diterima.' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Kepala LPM STEI Fithrah Insani', 'Seluruh dosen dan tenaga kependidikan', 'Arsip'],
  lampiran: [
    { title: 'Pedoman Penilaian Kinerja Dosen dan Tenaga Kependidikan', blocks: [
      { h: 'A. Komponen dan Bobot Penilaian Dosen' },
      { table: { cols: ['Komponen', 'Sumber Data', 'Bobot'], widths: [40, 44, 16], alignCenter: [2], rows: [
        ['Kinerja Tridharma (pendidikan, penelitian, pengabdian, penunjang)', 'Laporan Beban Kerja Dosen dan bukti luaran', '40%'],
        ['Evaluasi Dosen oleh Mahasiswa (EDOM)', 'Kuesioner EDOM (F-WK2-09-03)', '25%'],
        ['Penilaian atasan langsung', 'Formulir F-WK2-09-04', '20%'],
        ['Penilaian diri', 'Formulir F-WK2-09-01', '10%'],
        ['Kedisiplinan dan kehadiran', 'Rekap presensi', '5%'],
      ] } },
      { h: 'B. Komponen dan Bobot Penilaian Tenaga Kependidikan' },
      { table: { cols: ['Komponen', 'Sumber Data', 'Bobot'], widths: [40, 44, 16], alignCenter: [2], rows: [
        ['Capaian sasaran kerja individu', 'Laporan kerja dan target unit', '40%'],
        ['Penilaian atasan langsung', 'Formulir F-WK2-09-04', '30%'],
        ['Kepuasan pengguna layanan', 'Survei kepuasan layanan', '15%'],
        ['Penilaian diri', 'Formulir F-WK2-09-02', '10%'],
        ['Kedisiplinan dan kehadiran', 'Rekap presensi', '5%'],
      ] } },
      { h: 'C. Predikat Kinerja' },
      { table: { cols: ['Nilai Akhir', 'Predikat', 'Tindak Lanjut'], widths: [20, 22, 58], alignCenter: [0, 1], rows: [
        ['≥ 90', 'Sangat Baik', 'Penghargaan dan prioritas pengembangan karier'],
        ['76–89', 'Baik', 'Pengembangan sesuai rencana'],
        ['61–75', 'Cukup', 'Rencana perbaikan kinerja dengan pendampingan atasan'],
        ['≤ 60', 'Kurang', 'Pembinaan tertulis dan evaluasi ulang dalam 6 (enam) bulan'],
      ] } },
      { note: BOBOT_NOTE },
      { h: 'D. Tahapan' },
      { list: ['pengisian penilaian diri oleh pegawai', 'penilaian oleh atasan langsung', 'rekapitulasi nilai oleh Tim Penilai (F-WK2-09-05)', 'sesi umpan balik individual', 'penyusunan Laporan Evaluasi Kinerja Tahunan (F-WK2-09-06) kepada Ketua'] },
    ] },
    { title: 'Susunan Tim Penilai Kinerja', blocks: [
      { table: { cols: ['No.', 'Kedudukan', 'Nama', 'Jabatan'], widths: [6, 26, 34, 34], alignCenter: [0], rows: [
        ['1', 'Ketua', B, 'Wakil Ketua II'], ['2', 'Sekretaris', B, 'Kepala Bagian SDM dan Kepegawaian'],
        ['3', 'Anggota', B, 'Wakil Ketua I'], ['4', 'Anggota', B, 'Kepala LPM'],
        ['5', 'Anggota', B, 'Ketua Program Studi Ekonomi Syariah'], ['6', 'Anggota', B, 'Ketua Program Studi Perbankan Syariah'],
      ] } },
    ] },
  ],
},
// 10 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-10', file: 'F-SK-AKR-10_SK-Rencana-Pengembangan-SDM-2026-2029', issuer: 'ketua', standar: 'Standar 3', pic: 'WK II / Bagian SDM',
  title: 'Rencana Pengembangan Sumber Daya Manusia Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun 2026–2029',
  menimbang: [
    'bahwa peningkatan kualifikasi dan kompetensi dosen serta tenaga kependidikan merupakan bagian dari sasaran Rencana Strategis Sekolah Tinggi Ekonomi Islam Fithrah Insani 2024–2029',
    'bahwa sebagai pelaksanaan SOP Pengembangan SDM (SOP-WK2-SDM-03), diperlukan rencana pengembangan yang terukur dan berbasis analisis kebutuhan pelatihan',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Rencana Pengembangan Sumber Daya Manusia Tahun 2026–2029',
  ],
  mengingat: ketua(UU_GURU_DOSEN, PM_DOSEN),
  memperhatikan: ['Rencana Strategis STEI Fithrah Insani Tahun 2024–2029', 'Laporan Analisis Kebutuhan Pelatihan (F-WK2-10-01) Tahun 2026'],
  diktum: [
    { text: 'Menetapkan Rencana Pengembangan Sumber Daya Manusia Tahun 2026–2029 sebagaimana tercantum dalam Lampiran.' },
    { text: 'Rencana sebagaimana dimaksud dalam Diktum KESATU menjadi acuan dalam penyusunan RAPB, pemberian izin studi lanjut, pengusulan jabatan fungsional, dan penyelenggaraan pelatihan.' },
    { text: 'Wakil Ketua II mengevaluasi capaian rencana setiap tahun dan melaporkannya kepada Ketua sebagai bahan tinjauan manajemen.' },
  ],
  tembusan: ['Ketua Pengurus Yayasan Fithrah Insani Indonesia', 'Wakil Ketua I, II, dan III STEI Fithrah Insani', 'Kepala LPM STEI Fithrah Insani', 'Arsip'],
  lampiran: [
    { title: 'Rencana Pengembangan Sumber Daya Manusia Tahun 2026–2029', blocks: [
      { p: 'Kolom target diisi berdasarkan data kepegawaian terkini dan hasil analisis kebutuhan pelatihan. Kondisi awal diisi dengan data per tanggal SK ditetapkan.' },
      { table: { cols: ['No.', 'Program', 'Indikator', 'Kondisi Awal', '2027', '2028', '2029'], widths: [5, 27, 28, 10, 10, 10, 10], alignCenter: [0, 3, 4, 5, 6], size: 18, rows: [
        { section: 'A. Dosen' },
        ['1', 'Studi lanjut doktor (S3)', 'Jumlah dosen tetap bergelar doktor', '___', '___', '___', '___'],
        ['2', 'Jabatan fungsional', 'Persentase dosen tetap ber-JAD minimal Asisten Ahli', '___%', '___%', '___%', '___%'],
        ['3', 'Kenaikan jabatan fungsional', 'Jumlah dosen naik ke Lektor atau Lektor Kepala', '___', '___', '___', '___'],
        ['4', 'Sertifikasi pendidik', 'Jumlah dosen bersertifikat pendidik', '___', '___', '___', '___'],
        ['5', 'Pelatihan pedagogi (Pekerti/AA)', 'Persentase dosen tetap lulus pelatihan', '___%', '___%', '___%', '___%'],
        ['6', 'Pelatihan penulisan artikel ilmiah', 'Jumlah peserta per tahun', '___', '___', '___', '___'],
        ['7', 'Rasio dosen tetap terhadap mahasiswa', 'Rasio (batas maksimal 1:30)', '1:___', '1:___', '1:___', '1:___'],
        { section: 'B. Tenaga Kependidikan' },
        ['8', 'Pelatihan administrasi keuangan dan perpajakan', 'Jumlah peserta per tahun', '___', '___', '___', '___'],
        ['9', 'Pelatihan kearsipan dan tata naskah', 'Jumlah peserta per tahun', '___', '___', '___', '___'],
        ['10', 'Pelatihan teknologi informasi dan PDDIKTI', 'Jumlah peserta per tahun', '___', '___', '___', '___'],
        ['11', 'Sertifikasi atau diklat pustakawan', 'Jumlah pengelola perpustakaan bersertifikat', '___', '___', '___', '___'],
        ['12', 'Studi lanjut tenaga kependidikan', 'Jumlah tendik studi lanjut', '___', '___', '___', '___'],
      ] } },
    ] },
  ],
},
// 11 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-11', file: 'F-SK-AKR-11_SK-Kebijakan-Keamanan-Informasi-dan-PDP', issuer: 'ketua', standar: 'Standar 2 dan 6', pic: 'WK II / UPT Komputer & TI',
  title: 'Kebijakan Keamanan Informasi dan Pelindungan Data Pribadi Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa Sekolah Tinggi Ekonomi Islam Fithrah Insani mengelola data pribadi mahasiswa, dosen, dan tenaga kependidikan melalui sistem informasi akademik, keuangan, dan kepegawaian',
    'bahwa Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi mewajibkan pengendali data pribadi menjamin keamanan dan kerahasiaan data pribadi yang diprosesnya',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Kebijakan Keamanan Informasi dan Pelindungan Data Pribadi',
  ],
  mengingat: ketua(UU_PDP),
  diktum: [
    { text: 'Menetapkan Kebijakan Keamanan Informasi dan Pelindungan Data Pribadi sebagaimana tercantum dalam Lampiran.' },
    { text: 'Menunjuk Kepala UPT Komputer dan Teknologi Informasi sebagai pejabat yang melaksanakan fungsi pelindungan data pribadi di lingkungan Sekolah Tinggi Ekonomi Islam Fithrah Insani.' },
    { text: 'Setiap pimpinan unit, dosen, tenaga kependidikan, dan pihak ketiga yang memiliki akses ke sistem informasi institusi wajib mematuhi kebijakan sebagaimana dimaksud dalam Diktum KESATU.' },
    { text: 'Pelanggaran terhadap kebijakan ini dikenai sanksi sesuai Peraturan Kepegawaian dan ketentuan peraturan perundang-undangan.' },
  ],
  tembusan: T_PIMPINAN.slice(0, 3).concat(['Kepala UPT Komputer dan Teknologi Informasi', 'Arsip']),
  lampiran: [
    { title: 'Kebijakan Keamanan Informasi dan Pelindungan Data Pribadi', blocks: [
      { h: 'A. Klasifikasi Informasi' },
      { table: { cols: ['Kelas', 'Contoh', 'Ketentuan Akses'], widths: [18, 46, 36], rows: [
        ['Publik', 'Profil institusi, kalender akademik, pengumuman', 'Dapat diakses umum'],
        ['Internal', 'Notulen rapat, SOP, laporan unit', 'Pegawai STEI Fithrah Insani'],
        ['Rahasia', 'Laporan keuangan rinci, berkas seleksi, soal ujian', 'Pejabat dan petugas yang ditunjuk'],
        ['Data pribadi', 'NIK, alamat, nomor telepon, nilai, data gaji, data rekening', 'Petugas berwenang sesuai kebutuhan tugas'],
        ['Data pribadi spesifik', 'Data kesehatan, data keuangan pribadi, data anak', 'Pejabat berwenang dengan persetujuan tertulis'],
      ] } },
      { h: 'B. Pengendalian Akses' },
      { list: [
        'hak akses diberikan berdasarkan peran dan kebutuhan tugas serta dicabut paling lambat 1 (satu) hari kerja setelah pegawai berhenti atau pindah tugas',
        'kata sandi paling sedikit 8 (delapan) karakter, memuat kombinasi huruf dan angka, dan tidak boleh dibagikan',
        'akun administrator sistem hanya digunakan untuk pekerjaan administrasi sistem',
        'akses pihak ketiga dibatasi waktu dan dituangkan dalam perjanjian kerahasiaan',
      ] },
      { h: 'C. Pencadangan dan Pemulihan Data' },
      { list: [
        'data aktif sistem informasi dicadangkan setiap minggu dan arsip dicadangkan setiap bulan',
        'salinan cadangan disimpan paling sedikit di 2 (dua) lokasi berbeda, salah satunya di luar server utama',
        'uji pemulihan data dilaksanakan paling sedikit 1 (satu) kali setiap semester dan dicatat dalam Laporan Backup Data (F-WK2-13-06)',
        'langkah pemulihan layanan mengikuti Disaster Recovery Plan (F-WK2-13-08)',
      ] },
      { h: 'D. Penanganan Insiden' },
      { list: [
        'setiap pegawai yang mengetahui insiden keamanan informasi wajib melaporkannya kepada UPT Komputer dan TI paling lambat 1 x 24 jam',
        'UPT Komputer dan TI melakukan penanganan awal, mendokumentasikan insiden dengan Formulir Laporan Gangguan IT (F-WK2-13-07), dan melaporkannya kepada Wakil Ketua II',
        'apabila terjadi kegagalan pelindungan data pribadi, institusi menyampaikan pemberitahuan tertulis kepada subjek data pribadi dan lembaga yang berwenang paling lambat 3 x 24 jam sesuai Pasal 46 Undang-Undang Nomor 27 Tahun 2022',
      ] },
      { h: 'E. Hak Subjek Data' },
      { p: 'Mahasiswa, dosen, dan tenaga kependidikan berhak mengakses, memperbarui, dan memperbaiki data pribadinya melalui permohonan kepada unit pengelola data. Data pribadi hanya digunakan untuk tujuan penyelenggaraan pendidikan tinggi, kepegawaian, dan pelaporan yang diwajibkan peraturan perundang-undangan.' },
    ] },
  ],
},
// 12 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-12', file: 'F-SK-AKR-12_SK-Kebijakan-Layanan-dan-Koleksi-Perpustakaan', issuer: 'ketua', standar: 'Standar 6', pic: 'WK II / UPT Perpustakaan',
  title: 'Kebijakan Pengembangan Koleksi dan Layanan Perpustakaan Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa perpustakaan perguruan tinggi wajib menyediakan koleksi dan layanan yang mendukung pendidikan, penelitian, dan pengabdian kepada masyarakat',
    'bahwa berdasarkan Revisi Struktur Organisasi Tahun 2026, UPT Perpustakaan berada di bawah koordinasi Wakil Ketua II dan memerlukan kebijakan pengelolaan yang ditetapkan secara resmi',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Ketua tentang Kebijakan Pengembangan Koleksi dan Layanan Perpustakaan',
  ],
  mengingat: ketua(UU_PERPUS).concat([SK_STRUKTUR]),
  diktum: [
    { text: 'Menetapkan Kebijakan Pengembangan Koleksi dan Layanan Perpustakaan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Setiap mahasiswa yang akan mengikuti yudisium wajib memiliki Surat Keterangan Bebas Pustaka dan telah menyerahkan salinan digital skripsi ke repositori institusi.' },
    { text: 'Dosen wajib menyerahkan salinan digital karya ilmiah yang dihasilkan atas nama Sekolah Tinggi Ekonomi Islam Fithrah Insani untuk dimuat dalam repositori institusi, dengan memperhatikan hak cipta dan ketentuan penerbit.' },
    { text: 'Kepala UPT Perpustakaan menyampaikan laporan bulanan (F-WK2-12-07) dan laporan evaluasi semester (F-WK2-12-08) kepada Wakil Ketua II.' },
  ],
  tembusan: T_PIMPINAN.slice(0, 3).concat(['Ketua Program Studi Ekonomi Syariah dan Perbankan Syariah', 'Kepala UPT Perpustakaan', 'Arsip']),
  lampiran: [
    { title: 'Kebijakan Pengembangan Koleksi dan Layanan Perpustakaan', blocks: [
      { h: 'A. Pengembangan Koleksi' },
      { list: [
        'koleksi diprioritaskan untuk memenuhi referensi wajib dan pendukung dalam Rencana Pembelajaran Semester Program Studi Ekonomi Syariah dan Perbankan Syariah',
        'usulan koleksi dihimpun dari program studi, dosen, dan mahasiswa setiap semester menggunakan Daftar Usulan Koleksi (F-WK2-12-02)',
        'pengadaan koleksi mencakup buku cetak, buku elektronik, jurnal ilmiah, dan basis data daring',
        'koleksi yang rusak, usang, atau tidak relevan dinilai setiap tahun untuk diperbaiki, diganti, atau dihapus',
        'seluruh koleksi dicatat dalam katalog (F-WK2-12-03) dan sistem otomasi perpustakaan',
      ] },
      { h: 'B. Keanggotaan dan Layanan' },
      { table: { cols: ['Ketentuan', 'Mahasiswa', 'Dosen/Tendik'], widths: [40, 30, 30], alignCenter: [1, 2], rows: [
        ['Syarat keanggotaan', 'Mahasiswa aktif', 'Pegawai aktif'],
        ['Jumlah pinjaman maksimal', '___ eksemplar', '___ eksemplar'],
        ['Lama peminjaman', '___ hari', '___ hari'],
        ['Perpanjangan', '___ kali', '___ kali'],
        ['Denda keterlambatan', 'Rp___ per hari per eksemplar', 'Rp___ per hari per eksemplar'],
        ['Penggantian koleksi hilang/rusak', 'Mengganti judul yang sama atau senilai harga', 'Mengganti judul yang sama atau senilai harga'],
      ] } },
      { p: 'Jam layanan perpustakaan adalah hari ______ sampai dengan ______ pukul ______ sampai dengan ______ WIB. Koleksi referensi, skripsi, dan terbitan berkala hanya dapat dibaca di tempat.' },
      { h: 'C. Literasi Informasi dan Repositori' },
      { list: [
        'UPT Perpustakaan menyelenggarakan pelatihan literasi informasi paling sedikit 2 (dua) kali setiap semester',
        'UPT Perpustakaan mengelola repositori institusi untuk skripsi, artikel dosen, laporan penelitian, dan laporan pengabdian kepada masyarakat',
        'UPT Perpustakaan mengupayakan akses e-resources dan mencatat bukti langganan (F-WK2-12-09)',
      ] },
    ] },
  ],
},
// 13 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-13', file: 'F-SK-AKR-13_SK-Yayasan-Nama-Resmi-Logo-Kop-Stempel', issuer: 'yayasan', standar: 'Standar 2', pic: 'WK II / Bagian Administrasi Umum',
  title: 'Penetapan Nama Resmi, Logo, Kop Surat, dan Cap/Stempel Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa dalam dokumen institusi ditemukan perbedaan penulisan nama perguruan tinggi, yaitu "Fithrah" dan "Fitrah", yang berpotensi menimbulkan keraguan atas keabsahan dokumen',
    'bahwa nama, logo, kop surat, dan cap/stempel merupakan identitas resmi yang harus seragam dan sesuai dengan izin pendirian',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Pengurus Yayasan tentang Penetapan Nama Resmi, Logo, Kop Surat, dan Cap/Stempel Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  ],
  mengingat: yayasan(),
  diktum: [
    { text: 'Menetapkan nama resmi perguruan tinggi adalah "Sekolah Tinggi Ekonomi Islam Fithrah Insani", dengan singkatan resmi "STEI Fithrah Insani" atau "STEI FI", sesuai dengan Keputusan Direktur Jenderal Pendidikan Islam Kementerian Agama Nomor 1137 Tahun 2023.' },
    { text: 'Nama sebagaimana dimaksud dalam Diktum KESATU wajib digunakan secara seragam dalam seluruh dokumen resmi, termasuk surat keputusan, ijazah, transkrip, laman, dan media publikasi.' },
    { text: 'Logo, spesifikasi kop surat, serta jenis, pemegang, dan tata penggunaan cap/stempel ditetapkan sebagaimana tercantum dalam Lampiran.' },
    { text: 'Setiap penggunaan cap/stempel institusi dicatat dalam buku log penggunaan stempel yang memuat tanggal, jenis dokumen, nomor dokumen, dan nama petugas.' },
    { text: 'Cap/stempel dan kop surat yang tidak sesuai dengan Keputusan ini ditarik dan dimusnahkan dengan berita acara paling lambat 30 (tiga puluh) hari sejak Keputusan ini ditetapkan.' },
  ],
  tembusan: T_YAYASAN.slice(0, 4).concat(['Kepala Bagian Administrasi Umum STEI Fithrah Insani', 'Arsip']),
  lampiran: [
    { title: 'Spesifikasi Logo, Kop Surat, dan Cap/Stempel', blocks: [
      { h: 'A. Logo' },
      { p: 'Logo resmi adalah logo sebagaimana tercantum di bawah ini dengan kode warna ______ dan ______. Logo tidak boleh diubah proporsi, warna, atau unsurnya.' },
      { p: '[Tempelkan gambar logo resmi di sini]' },
      { h: 'B. Kop Surat' },
      { list: [
        'logo ditempatkan di sisi kiri kop dengan tinggi 2,5 cm',
        'baris pertama memuat "YAYASAN FITHRAH INSANI INDONESIA"',
        'baris kedua memuat "SEKOLAH TINGGI EKONOMI ISLAM FITHRAH INSANI" dengan huruf kapital tebal',
        'baris ketiga memuat alamat lengkap, nomor telepon, surel, dan laman kampussteifi.ac.id',
        'kop diakhiri dengan garis ganda di bawahnya',
      ] },
      { h: 'C. Jenis dan Pemegang Cap/Stempel' },
      { table: { cols: ['No.', 'Jenis Cap/Stempel', 'Penggunaan', 'Pemegang'], widths: [6, 30, 38, 26], alignCenter: [0], rows: [
        ['1', 'Stempel Yayasan Fithrah Insani Indonesia', 'Keputusan dan dokumen Yayasan', 'Sekretaris Yayasan'],
        ['2', 'Stempel Ketua STEI Fithrah Insani', 'SK Ketua, ijazah, perjanjian kerja sama', 'Sekretaris Pimpinan'],
        ['3', 'Stempel Wakil Ketua I/II/III', 'Naskah dinas sesuai bidang', 'Staf administrasi bidang'],
        ['4', 'Stempel Program Studi Ekonomi Syariah', 'Dokumen akademik program studi', 'Staf administrasi prodi'],
        ['5', 'Stempel Program Studi Perbankan Syariah', 'Dokumen akademik program studi', 'Staf administrasi prodi'],
        ['6', 'Stempel Bagian Keuangan "LUNAS"', 'Kuitansi dan bukti pembayaran', 'Bendahara Penerimaan'],
      ] } },
      { note: 'Ejaan "Fithrah" mengikuti Keputusan Direktur Jenderal Pendidikan Islam Nomor 1137 Tahun 2023 sebagaimana dikutip dalam SK Rencana Strategis Nomor 421.4/001/STEI.FI/II/2024. Cocokkan kembali dengan naskah asli sebelum ditetapkan.' },
    ] },
  ],
},
// 14 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-14', file: 'F-SK-AKR-14_SK-Yayasan-Batas-Kewenangan-Otorisasi-Pengeluaran', issuer: 'yayasan', standar: 'Standar 2 dan 6', pic: 'WK II / Bagian Keuangan',
  title: 'Batas Kewenangan Otorisasi Pengeluaran dan Penandatangan Rekening Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa pengendalian internal atas pengeluaran dana memerlukan pembagian kewenangan persetujuan yang jelas sesuai besaran nilai transaksi',
    'bahwa pengelolaan rekening bank institusi memerlukan penetapan pejabat penandatangan dengan prinsip persetujuan ganda',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Pengurus Yayasan tentang Batas Kewenangan Otorisasi Pengeluaran dan Penandatangan Rekening',
  ],
  mengingat: yayasan(),
  diktum: [
    { text: 'Menetapkan batas kewenangan otorisasi pengeluaran dana sebagaimana tercantum dalam Lampiran I.' },
    { text: 'Menetapkan pejabat penandatangan rekening bank institusi sebagaimana tercantum dalam Lampiran II.' },
    { text: 'Setiap transaksi pengeluaran melalui rekening bank wajib disetujui paling sedikit oleh 2 (dua) orang penandatangan yang ditetapkan dalam Lampiran II.' },
    { text: 'Pengeluaran wajib sesuai dengan Anggaran Pendapatan dan Belanja yang telah ditetapkan. Pengeluaran di luar anggaran hanya dapat dilakukan dengan persetujuan tertulis Pengurus Yayasan.' },
    { text: 'Pemecahan transaksi dengan tujuan menghindari batas kewenangan sebagaimana dimaksud dalam Diktum KESATU tidak diperbolehkan.' },
  ],
  tembusan: T_YAYASAN.slice(0, 4).concat(['Kepala Bagian Keuangan STEI Fithrah Insani', 'Pimpinan bank tempat rekening institusi', 'Arsip']),
  lampiran: [
    { title: 'Batas Kewenangan Otorisasi Pengeluaran', blocks: [
      { table: { cols: ['Nilai Pengeluaran per Transaksi', 'Pejabat yang Menyetujui', 'Pejabat yang Memverifikasi'], widths: [36, 32, 32], rows: [
        ['Sampai dengan Rp__________', 'Kepala Bagian Keuangan', 'Bendahara Pengeluaran'],
        ['Di atas Rp__________ sampai dengan Rp__________', 'Wakil Ketua II', 'Kepala Bagian Keuangan'],
        ['Di atas Rp__________ sampai dengan Rp__________', 'Ketua', 'Wakil Ketua II'],
        ['Di atas Rp__________', 'Pengurus Yayasan', 'Ketua'],
      ] } },
    ] },
    { title: 'Pejabat Penandatangan Rekening Bank', blocks: [
      { table: { cols: ['No.', 'Nama', 'Jabatan', 'Nomor Rekening', 'Contoh Tanda Tangan'], widths: [6, 26, 24, 20, 24], alignCenter: [0], rows: [
        ['1', B, 'Ketua Pengurus Yayasan', '__________', '\n\n'],
        ['2', B, 'Ketua STEI Fithrah Insani', '__________', '\n\n'],
        ['3', B, 'Wakil Ketua II', '__________', '\n\n'],
      ] } },
    ] },
  ],
},
// 15 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-15', file: 'F-SK-AKR-15_SK-Yayasan-Biaya-Pendidikan-TA-2027-2028', issuer: 'yayasan', standar: 'Standar 6', pic: 'WK II / Bagian Keuangan',
  title: 'Penetapan Biaya Pendidikan Mahasiswa Baru Sekolah Tinggi Ekonomi Islam Fithrah Insani Tahun Akademik 2027/2028',
  menimbang: [
    'bahwa biaya pendidikan harus ditetapkan sebelum penerimaan mahasiswa baru sebagai kepastian bagi calon mahasiswa dan dasar penyusunan anggaran',
    'bahwa penetapan biaya pendidikan perlu mempertimbangkan biaya operasional pendidikan per mahasiswa dan kemampuan masyarakat',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Pengurus Yayasan tentang Penetapan Biaya Pendidikan Mahasiswa Baru Tahun Akademik 2027/2028',
  ],
  mengingat: yayasan(),
  memperhatikan: ['Usulan Ketua STEI Fithrah Insani Nomor ______ tanggal ______ tentang Usulan Biaya Pendidikan Tahun Akademik 2027/2028'],
  diktum: [
    { text: 'Menetapkan biaya pendidikan mahasiswa baru Program Studi Ekonomi Syariah dan Program Studi Perbankan Syariah Tahun Akademik 2027/2028 sebagaimana tercantum dalam Lampiran.' },
    { text: 'Biaya pendidikan sebagaimana dimaksud dalam Diktum KESATU berlaku tetap sampai mahasiswa yang bersangkutan menyelesaikan studi pada masa studi normal.' },
    { text: 'Pembayaran dilakukan melalui rekening resmi institusi. Pembayaran tunai hanya diterima oleh Bendahara Penerimaan dengan kuitansi resmi.' },
    { text: 'Ketua dapat memberikan keringanan, penundaan, atau pembayaran secara angsuran berdasarkan permohonan mahasiswa dengan mempertimbangkan kondisi ekonomi dan prestasi akademik.' },
  ],
  tembusan: T_YAYASAN.slice(0, 4).concat(['Kepala Bagian Keuangan STEI Fithrah Insani', 'Panitia Penerimaan Mahasiswa Baru', 'Arsip']),
  lampiran: [
    { title: 'Biaya Pendidikan Mahasiswa Baru Tahun Akademik 2027/2028', blocks: [
      { table: { cols: ['No.', 'Komponen Biaya', 'Waktu Pembayaran', 'Ekonomi Syariah (Rp)', 'Perbankan Syariah (Rp)'], widths: [6, 32, 22, 20, 20], alignCenter: [0], rows: [
        ['1', 'Biaya pendaftaran', 'Saat mendaftar', '__________', '__________'],
        ['2', 'Biaya pengenalan kampus (PKKMB)', 'Sekali, semester 1', '__________', '__________'],
        ['3', 'Biaya registrasi/daftar ulang', 'Setiap semester', '__________', '__________'],
        ['4', 'Sumbangan Pembinaan Pendidikan (SPP)', 'Setiap semester', '__________', '__________'],
        ['5', 'Biaya praktikum laboratorium', 'Sesuai mata kuliah', '__________', '__________'],
        ['6', 'Biaya Praktik Kerja Lapangan/KKN', 'Sekali', '__________', '__________'],
        ['7', 'Biaya ujian skripsi', 'Sekali', '__________', '__________'],
        ['8', 'Biaya wisuda', 'Sekali', '__________', '__________'],
      ] } },
    ] },
  ],
},
// 16 ─────────────────────────────────────────────
{
  code: 'F-SK-AKR-16', file: 'F-SK-AKR-16_SK-Yayasan-Peraturan-Kepegawaian', issuer: 'yayasan', standar: 'Standar 3', pic: 'WK II / Bagian SDM',
  title: 'Peraturan Kepegawaian Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  menimbang: [
    'bahwa pengelolaan dosen dan tenaga kependidikan memerlukan aturan kepegawaian yang memberikan kepastian hak, kewajiban, dan jenjang karier',
    'bahwa peraturan kepegawaian harus selaras dengan peraturan perundang-undangan di bidang ketenagakerjaan serta guru dan dosen',
    'bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan Pengurus Yayasan tentang Peraturan Kepegawaian Sekolah Tinggi Ekonomi Islam Fithrah Insani',
  ],
  mengingat: yayasan(UU_GURU_DOSEN, UU_NAKER, PP_PKWT, PM_DOSEN),
  diktum: [
    { text: 'Menetapkan Peraturan Kepegawaian Sekolah Tinggi Ekonomi Islam Fithrah Insani sebagaimana tercantum dalam Lampiran.' },
    { text: 'Peraturan Kepegawaian berlaku bagi seluruh dosen dan tenaga kependidikan yang diangkat oleh Yayasan Fithrah Insani Indonesia atau Ketua Sekolah Tinggi Ekonomi Islam Fithrah Insani.' },
    { text: 'Perjanjian kerja yang telah ada sebelum Keputusan ini ditetapkan tetap berlaku sampai berakhirnya perjanjian, dan penyesuaiannya dilakukan pada saat perpanjangan.' },
    { text: 'Ketentuan pelaksanaan Peraturan Kepegawaian diatur lebih lanjut dengan Keputusan Ketua.' },
  ],
  tembusan: T_YAYASAN.slice(0, 4).concat(['Kepala Bagian SDM dan Kepegawaian STEI Fithrah Insani', 'Seluruh dosen dan tenaga kependidikan', 'Arsip']),
  lampiran: [
    { title: 'Peraturan Kepegawaian Sekolah Tinggi Ekonomi Islam Fithrah Insani', blocks: [
      { h: 'BAB I  Ketentuan Umum' },
      { list: [
        'Pegawai adalah dosen dan tenaga kependidikan yang bekerja di Sekolah Tinggi Ekonomi Islam Fithrah Insani berdasarkan surat keputusan pengangkatan atau perjanjian kerja',
        'Dosen Tetap adalah dosen yang diangkat oleh Yayasan untuk bekerja penuh waktu dan memiliki NIDN atau NIDK dengan homebase di Sekolah Tinggi Ekonomi Islam Fithrah Insani',
        'Dosen Tidak Tetap adalah dosen yang bekerja berdasarkan perjanjian kerja waktu tertentu untuk mengampu mata kuliah tertentu',
        'Tenaga Kependidikan adalah pegawai yang bertugas melaksanakan administrasi, pengelolaan, pengembangan, pengawasan, dan pelayanan teknis penunjang tridharma',
      ], style: 'num' },
      { h: 'BAB II  Status dan Pengangkatan' },
      { list: [
        'status kepegawaian terdiri atas pegawai tetap dan pegawai dengan perjanjian kerja waktu tertentu',
        'pengangkatan pegawai dilaksanakan melalui rekrutmen dan seleksi sesuai SOP Rekrutmen Dosen dan Tenaga Kependidikan (SOP-WK2-SDM-01)',
        'pegawai tetap diangkat dengan Keputusan Pengurus Yayasan; dosen tidak tetap dan tenaga kependidikan kontrak diangkat dengan Keputusan Ketua',
        'perjanjian kerja waktu tertentu dibuat secara tertulis dan jangka waktunya, termasuk perpanjangannya, tidak melebihi 5 (lima) tahun sesuai Peraturan Pemerintah Nomor 35 Tahun 2021',
      ] },
      { h: 'BAB III  Hari dan Jam Kerja' },
      { list: [
        'jam kerja adalah 40 (empat puluh) jam dalam 1 (satu) minggu, dengan pola 5 (lima) atau 6 (enam) hari kerja yang ditetapkan dengan Keputusan Ketua',
        'dosen tetap memenuhi beban kerja tridharma sesuai ketentuan peraturan perundang-undangan yang berlaku dan dilaporkan setiap semester',
        'kehadiran pegawai dicatat melalui sistem presensi',
      ] },
      { h: 'BAB IV  Hak Pegawai' },
      { list: [
        'gaji dan tunjangan sesuai pedoman remunerasi yang ditetapkan Yayasan',
        'kepesertaan program jaminan sosial kesehatan dan ketenagakerjaan sesuai ketentuan peraturan perundang-undangan',
        'cuti tahunan paling sedikit 12 (dua belas) hari kerja setelah bekerja 12 (dua belas) bulan secara terus-menerus, serta cuti sakit, cuti melahirkan, dan cuti alasan penting',
        'pengembangan karier melalui pelatihan, studi lanjut, dan pengusulan jabatan fungsional',
        'penilaian kinerja yang objektif dan hak mengajukan keberatan atas hasilnya',
      ] },
      { h: 'BAB V  Kewajiban dan Larangan' },
      { list: [
        'menaati peraturan perundang-undangan, Statuta, dan peraturan institusi',
        'melaksanakan tugas dengan jujur, disiplin, dan bertanggung jawab',
        'menjaga kerahasiaan data dan dokumen institusi',
        'menjunjung nilai-nilai keislaman dan etika akademik',
        'pegawai dilarang menyalahgunakan wewenang, melakukan plagiarisme, menerima gratifikasi terkait jabatan, dan merangkap jabatan yang menimbulkan konflik kepentingan',
      ] },
      { h: 'BAB VI  Penilaian Kinerja dan Pengembangan' },
      { p: 'Penilaian kinerja dilaksanakan setiap tahun sesuai Pedoman Penilaian Kinerja Dosen dan Tenaga Kependidikan. Pengembangan pegawai dilaksanakan sesuai Rencana Pengembangan Sumber Daya Manusia yang ditetapkan Ketua.' },
      { h: 'BAB VII  Disiplin dan Sanksi' },
      { list: [
        'sanksi atas pelanggaran disiplin diberikan secara bertahap berupa teguran lisan, surat peringatan pertama, surat peringatan kedua, dan surat peringatan ketiga',
        'masing-masing surat peringatan berlaku paling lama 6 (enam) bulan',
        'pelanggaran berat dapat dikenai sanksi pemutusan hubungan kerja sesuai ketentuan peraturan perundang-undangan',
        'setiap pemberian sanksi didahului pemeriksaan dan pemberian kesempatan kepada pegawai untuk memberikan penjelasan',
      ] },
      { h: 'BAB VIII  Pemberhentian' },
      { list: [
        'pegawai berhenti karena meninggal dunia, mengundurkan diri, mencapai batas usia pensiun, berakhirnya perjanjian kerja, atau pemutusan hubungan kerja',
        'batas usia pensiun dosen mengikuti ketentuan peraturan perundang-undangan di bidang guru dan dosen, sedangkan batas usia pensiun tenaga kependidikan adalah ______ tahun',
        'pengunduran diri disampaikan secara tertulis paling lambat 30 (tiga puluh) hari sebelum tanggal berhenti',
        'hak pegawai yang berhenti diberikan sesuai ketentuan peraturan perundang-undangan dan perjanjian kerja',
      ] },
    ] },
  ],
},
];
