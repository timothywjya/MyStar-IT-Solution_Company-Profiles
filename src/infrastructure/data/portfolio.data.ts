import { Portfolio } from "@domain/entities/Portfolio";

/**
 * DATA PLACEHOLDER — ganti dengan portofolio asli.
 * Tambah/hapus item dengan menambah/menghapus objek pada array ini.
 */
export const portfolioData: Portfolio[] = [
  {
    id: "portfolio-1",
    title: "Sistem Point of Sales Koperasi",
    category: "Point of Sales",
    client: "Koperasi AAA",
    year: 2023,
    description:
      "Aplikasi kasir dan manajemen stok untuk unit usaha koperasi, lengkap dengan laporan penjualan harian dan bulanan.",
    techStack: ["Next.js", "PostgreSQL", "Prisma"],
    imageUrl: "/images/portfolio/portfolio-1.svg",
  },
  {
    id: "portfolio-2",
    title: "Website Company Profile & Katalog",
    category: "Company Profile",
    client: "Toko BBB",
    year: 2023,
    description:
      "Website company profile dengan katalog produk dinamis dan integrasi WhatsApp untuk pemesanan.",
    techStack: ["Next.js", "Tailwind CSS"],
    imageUrl: "/images/portfolio/portfolio-2.svg",
  },
  {
    id: "portfolio-3",
    title: "Aplikasi Mobile Manajemen Anggota",
    category: "Mobile Application",
    client: "Koperasi Simpan Pinjam",
    year: 2022,
    description:
      "Aplikasi mobile untuk anggota koperasi memantau simpanan, pinjaman, dan riwayat transaksi secara real-time.",
    techStack: ["React Native", "Node.js", "MySQL"],
    imageUrl: "/images/portfolio/portfolio-3.svg",
  },
  {
    id: "portfolio-4",
    title: "Sistem Informasi Manajemen Sekolah",
    category: "Web Application",
    client: "Yayasan Pendidikan",
    year: 2022,
    description:
      "Sistem informasi akademik untuk manajemen data siswa, nilai, absensi, dan komunikasi dengan wali murid.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    imageUrl: "/images/portfolio/portfolio-4.svg",
  },
  {
    id: "portfolio-5",
    title: "Integrasi Sistem Gudang & Kasir",
    category: "System Integration",
    client: "CCC Retail Group",
    year: 2021,
    description:
      "Menghubungkan sistem manajemen gudang dengan kasir di beberapa cabang agar stok selalu sinkron secara otomatis.",
    techStack: ["Next.js", "REST API", "PostgreSQL"],
    imageUrl: "/images/portfolio/portfolio-5.svg",
  },
  {
    id: "portfolio-6",
    title: "Dashboard Laporan Keuangan UMKM",
    category: "Web Application",
    client: "DDD Group",
    year: 2021,
    description:
      "Dashboard visualisasi arus kas dan laporan keuangan sederhana yang mudah dipahami pemilik usaha.",
    techStack: ["Next.js", "Chart.js"],
    imageUrl: "/images/portfolio/portfolio-6.svg",
  },
];
