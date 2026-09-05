# My Stars IT Solution — Company Profile

Website company profile untuk software house **My Stars IT Solution**, dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS**, disusun mengikuti prinsip **Clean Architecture**.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Struktur folder (Clean Architecture)

```
src/
├── domain/            # Lapisan paling inti — TIDAK bergantung ke lapisan lain
│   ├── entities/       # Model data: CompanyProfile, Portfolio, GalleryItem, Client
│   └── repositories/   # Interface/kontrak (misal IPortfolioRepository)
│
├── application/       # Logika bisnis (use-case), bergantung pada domain saja
│   └── use-cases/      # GetCompanyProfile, GetPortfolios, GetGalleryItems, GetClients
│
├── infrastructure/     # Implementasi konkret + sumber data
│   ├── data/            # ← FILE YANG PALING SERING ANDA EDIT (data placeholder)
│   └── repositories/    # Implementasi interface domain (StaticXxxRepository)
│
├── presentation/       # UI: komponen, layout, dan composition root (DI container)
│   ├── components/
│   └── di/container.ts  # Merangkai use-case dengan repository konkret
│
└── app/                # Routing Next.js App Router (memanggil use-case dari DI container)
    ├── page.tsx           → Beranda
    ├── portfolio/page.tsx → Halaman Portofolio
    ├── gallery/page.tsx   → Halaman Galeri
    └── clients/page.tsx   → Halaman Daftar Klien
```

**Alur ketergantungan** selalu mengarah ke dalam:
`app` → `presentation` → `application` → `domain`
`infrastructure` mengimplementasikan interface yang didefinisikan di `domain`.

Artinya: jika suatu saat sumber data ingin dipindah dari data statis ke database/API,
Anda hanya perlu membuat implementasi repository baru di `infrastructure/repositories/`
dan menggantinya di `presentation/di/container.ts` — tanpa mengubah use-case atau komponen UI sama sekali.

## Bagian yang perlu Anda lengkapi sendiri

| Yang ingin diubah | Edit file |
|---|---|
| Nama, alamat, logo, kontak, Visi & Misi (About Me) | `src/infrastructure/data/company-profile.data.ts` |
| Daftar Portofolio | `src/infrastructure/data/portfolio.data.ts` |
| Daftar Galeri | `src/infrastructure/data/gallery.data.ts` |
| Daftar Klien | `src/infrastructure/data/client.data.ts` |
| Logo perusahaan | Ganti file `public/images/logo-placeholder.svg` (atau ganti path `logoUrl` ke file baru, misal `.png`/`.jpg`) |
| Foto Portofolio/Galeri/Klien | Ganti file di `public/images/portfolio/`, `public/images/gallery/`, `public/images/clients/` |

Semua gambar saat ini adalah **placeholder SVG** bertema navy & emas — tinggal ganti nama filenya
dengan foto asli (format apa pun: `.jpg`, `.png`, `.webp`), lalu sesuaikan path `imageUrl`/`logoUrl` di file data terkait.

## Desain

- Warna: navy (`#0B1224`) sebagai warna utama, emas (`#E7B24B`) sebagai aksen "bintang", teal (`#3F8F82`) sebagai aksen sekunder.
- Font: `Space Grotesk` (judul), `Inter` (isi).
- Ilustrasi hero berupa "peta bintang" (constellation) di `src/presentation/components/ui/ConstellationArt.tsx` — merepresentasikan nama brand sekaligus citra jaringan/sistem software.
