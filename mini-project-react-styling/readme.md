# MW75 Custom — Atelier Audio (React + Vite)

Halaman detail produk interaktif untuk **MW75 Custom Wireless ANC Headphones** dari **Atelier Audio** yang dibangun ulang menggunakan **React** dan **Vite** dengan pendekatan komponen modular serta *styling* responsif.

## Fitur Utama

- **Pemilihan Warna & Galeri Interaktif**: Ganti varian warna produk dan pilih *thumbnail* untuk memperbarui gambar utama serta indikator nomor gambar secara langsung.
- **Kustomisasi *Engraving* Opsional**: Aktifkan *custom engraving*, masukkan teks personalisasi, dan lihat *preview* ukiran secara langsung pada tampilan produk.
- **Pengaturan Jumlah & Kalkulasi Harga Otomatis**: Atur jumlah unit (dengan validasi stok minimum/maksimum) dan hitung total harga secara otomatis termasuk biaya tambahan *engraving*.
- **Konfirmasi Pesanan & Animasi Tas Belanja**: Validasi input sebelum konfirmasi, perbarui jumlah item pada `Tas belanja`, tampilkan ringkasan pesanan, serta berikan efek animasi *feedback* pada tombol konfirmasi dan indikator tas belanja.
- **Tata Letak Responsif**: Menggunakan *CSS Grid* dua kolom pada layar *desktop* dan beradaptasi ke layar tablet maupun *mobile*.

## Struktur Proyek

```text
mini-project-react-styling/
├── public/
│   └── assets/
│       └── images/            # Aset gambar produk dan thumbnail
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigasi atas dan indikator jumlah tas belanja
│   │   ├── ProductGallery.jsx # Stage gambar utama, preview engraving, dan thumbnail
│   │   ├── ProductDetails.jsx # Info produk, swatch warna, engraving, qty, dan tombol pesan
│   │   ├── FeatureStrip.jsx   # Strip keunggulan produk
│   │   └── Footer.jsx         # Footer halaman
│   ├── data/
│   │   └── productData.js     # Data produk, varian warna, thumbnail, dan fitur
│   ├── App.jsx                # Manajemen state utama dan logika validasi/konfirmasi
│   ├── App.css                # Styling halaman, layout grid, responsivitas, dan animasi
│   └── main.jsx               # Entry point aplikasi React
├── index.html
└── package.json
```

## Menjalankan Proyek Secara Lokal

1. **Instal dependensi**
   ```bash
   npm install
   ```

2. **Jalankan server pengembangan (Vite)**
   ```bash
   npm run dev
   ```

3. **Buka di browser**
   Akses URL lokal yang tampil di terminal (umumnya `http://localhost:5173/`).

4. **Build untuk produksi**
   ```bash
   npm run build
   ```

## Catatan Pengembangan

- Aset gambar berada di `public/assets/images/` sehingga dapat dipanggil menggunakan path absolut seperti `/assets/images/...`.
- Pastikan tidak ada aturan CSS global yang bertabrakan dengan tata letak `.product-layout`, `.gallery-column`, dan `.details-column` di `src/App.css`.