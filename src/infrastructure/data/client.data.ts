import { Client } from "@domain/entities/Client";

/**
 * Daftar klien asli — diambil dari dokumentasi klien perusahaan.
 * Untuk menambah/menghapus klien, tambah/hapus objek pada array ini
 * dan taruh logonya di public/images/clients/.
 */
export const clientData: Client[] = [
  { id: "client-01", name: "Sumber Karya Makmur", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-01.png" },
  { id: "client-02", name: "Koperasi Amana", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-02.png" },
  { id: "client-03", name: "BMT Al Manshur", type: "Koperasi Syariah (BMT)", logoUrl: "/images/clients/client-03.png" },
  { id: "client-04", name: "Koperasi Jasa Keuangan Syariah Ash-Shiddiq", type: "Koperasi Syariah", logoUrl: "/images/clients/client-04.png" },
  { id: "client-05", name: "Lamina", type: "Koperasi Karyawan", logoUrl: "/images/clients/client-05.png" },
  { id: "client-06", name: "KSP Swadana Mandiri", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-06.png" },
  { id: "client-07", name: "PT. Nilas Wahana Antika", type: "Perusahaan", logoUrl: "/images/clients/client-07.png" },
  { id: "client-08", name: "Koperasi Pegawai RI — Dinkes Kab. Subang", type: "Koperasi Pegawai", logoUrl: "/images/clients/client-08.png" },
  { id: "client-09", name: "Koperasi Wibawa", type: "Koperasi Pegawai (Bappeda Jabar)", logoUrl: "/images/clients/client-09.png" },
  { id: "client-10", name: "KSP Rukun Makmur Abadi", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-10.png" },
  { id: "client-11", name: "Koperasi Wilantang", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-11.png" },
  { id: "client-12", name: "KSP Arta Mandiri Jaya", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-12.png" },
  { id: "client-13", name: "CV. Anggunmas Sejati", type: "Perusahaan Dagang", logoUrl: "/images/clients/client-13.png" },
  { id: "client-14", name: "Koperasi Luberingsih", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-14.png" },
  { id: "client-15", name: "Koperasi Simpan Pinjam Sunhodos", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-15.png" },
  { id: "client-16", name: "PGDI Tangerang", type: "Organisasi Profesi", logoUrl: "/images/clients/client-16.png" },
  { id: "client-17", name: "Koperasi Tunas Manidiri", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-17.png" },
  { id: "client-18", name: "Pusekdes Rinjani Emas", type: "Pusat Ekonomi Desa", logoUrl: "/images/clients/client-18.png" },
  { id: "client-19", name: "KSU Agung Mandiri", type: "Koperasi Serba Usaha", logoUrl: "/images/clients/client-19.png" },
  { id: "client-20", name: "Koperasi Cipta Sejahtera", type: "Koperasi Simpan Pinjam", logoUrl: "/images/clients/client-20.png" },
  { id: "client-21", name: "Dewa Travelindo", type: "Perusahaan Travel", logoUrl: "/images/clients/client-21.png" },
];
