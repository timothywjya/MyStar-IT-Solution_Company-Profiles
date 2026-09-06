import { Portfolio } from "@domain/entities/Portfolio";

/**
 * Portofolio asli — screenshot aplikasi nyata yang sudah berjalan
 * di berbagai klien. Untuk menambah, tambahkan objek baru di sini
 * dan taruh gambarnya di public/images/portfolio/.
 */
export const portfolioData: Portfolio[] = [
  {
    id: "portfolio-1",
    title: "Sistem Koperasi Simpan Pinjam",
    category: "Desktop Application",
    client: "Koperasi Simpan Pinjam Bintang Perdana",
    year: 2016,
    description:
      "Aplikasi inti simpan pinjam koperasi: data anggota, produk pinjaman (investasi, modal kerja), jaminan (BPKB/sertifikat), perhitungan bagi hasil, jadwal angsuran, hingga laporan keuangan koperasi.",
    techStack: ["Visual Basic .NET", "MySQL", "Crystal Reports"],
    imageUrl: "/images/portfolio/portfolio-1.jpg",
  },
  {
    id: "portfolio-2",
    title: "Sistem Pembiayaan Koperasi Syariah (BMT)",
    category: "Desktop Application",
    client: "Koperasi Syariah BMT",
    year: 2016,
    description:
      "Varian syariah dari sistem koperasi: akad pembiayaan (Al-Mudharabah, dll.), perhitungan nisbah bagi hasil, jaminan akta tanah/bangunan, dan jenis angsuran anuitas sesuai kaidah syariah.",
    techStack: ["Visual Basic .NET", "MySQL", "Crystal Reports"],
    imageUrl: "/images/portfolio/portfolio-2.jpg",
  },
  {
    id: "portfolio-3",
    title: "Sistem Distribusi & Sales Canvassing",
    category: "Desktop Application",
    client: "Toko Sumber Maju",
    year: 2025,
    description:
      "Sistem penjualan untuk toko distributor (sparepart & retail): canvassing, jadwal kunjungan sales, piutang pelanggan, promo & poin, serta sinkronisasi transaksi dari aplikasi Android sales lapangan ke kantor pusat.",
    techStack: ["Visual Basic .NET", "MySQL", "Sinkronisasi Android"],
    imageUrl: "/images/portfolio/portfolio-3.jpg",
  },
  {
    id: "portfolio-4",
    title: "Sistem Gudang & Barcode Label Otomatis",
    category: "Desktop Application",
    client: "Al Mahira",
    year: 2025,
    description:
      "Manajemen gudang lengkap: kategori & satuan barang, konversi satuan, cetak label harga dan barcode otomatis, permintaan & mutasi gudang, stok opname, hingga rakit/urai barang.",
    techStack: ["Visual Basic .NET", "MySQL", "Cetak Barcode"],
    imageUrl: "/images/portfolio/portfolio-4.jpg",
  },
  {
    id: "portfolio-5",
    title: "Sistem Koperasi Multi-Cabang (White-Label per Klien)",
    category: "Desktop Application",
    client: "Koperasi Tri Matra Sejahtera & 10+ koperasi lainnya",
    year: 2025,
    description:
      "Satu sistem inti yang dapat diberi identitas (nama, logo) sesuai masing-masing koperasi, sudah diimplementasikan di lebih dari 10 koperasi berbeda — termasuk BP2T Mandiri Sejahtera, Bina Mandiri, Primer Koperasi Kartika Cobra, dan Koperasi Promoter Jaya Tangsel — masing-masing dengan modul Akuntansi, Keuangan, hingga Personalia.",
    techStack: ["Visual Basic .NET", "MySQL", "Multi-Tenant Branding"],
    imageUrl: "/images/portfolio/portfolio-5.jpg",
  },
  {
    id: "portfolio-6",
    title: "Sistem Point of Sales Retail & Minimarket",
    category: "Point of Sales",
    client: "Toko Jajanan Kirana, Kudus",
    year: 2026,
    description:
      "Implementasi kasir POS untuk toko retail/minimarket dengan beberapa titik kasir sekaligus, lengkap dengan pelatihan langsung di lokasi untuk staf toko sebelum sistem digunakan sehari-hari.",
    techStack: ["Visual Basic .NET", "MySQL", "Integrasi Perangkat Kasir"],
    imageUrl: "/images/portfolio/portfolio-6.jpg",
  },
];
