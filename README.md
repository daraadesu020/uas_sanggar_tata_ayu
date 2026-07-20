# Sanggar Rias Tata Ayu — Website Sewa Busana (UAS Pemrog Web 1)

Tema No. 9 — Jasa Sewa Pakaian. Dibuat murni **HTML, CSS, JavaScript, jQuery, dan Bootstrap** (tanpa React, tanpa database — semua transaksi memakai `localStorage` di browser).

Struktur **single-page** — Beranda, Katalog, Cara Sewa, Kontak, dan Keranjang & Checkout semuanya berada dalam satu `index.html`. Klik menu navbar akan otomatis **scroll halus (smooth scroll)** ke section terkait. Hanya halaman Login yang terpisah.

## Cara menjalankan
1. Ekstrak folder ini.
2. Buka `index.html` langsung di browser, **atau** upload seluruh folder ke hosting gratis (misalnya Netlify Drop, Vercel, InfinityFree, atau GitHub Pages) untuk memenuhi ketentuan "di-upload ke domain & hosting".

## Struktur file
```
griya-busana-mahkota/
├── index.html   -> Single-page: Beranda(#beranda), Katalog(#katalog), Cara Sewa(#cara-sewa),
│                     Kontak(#kontak), Keranjang & Checkout(#keranjang) + struk otomatis
├── login.html    -> Form Login & Daftar (akun tersimpan di localStorage)
├── css/style.css  -> Semua styling (tema gold-black-cream)
├── js/app.js       -> Data produk, metode pembayaran, logika login/logout & keranjang
└── README.md
```

## Navigasi
Menu di navbar (`Beranda`, `Katalog`, `Cara Sewa`, `Kontak`, `Keranjang`) memakai anchor link (`#id-section`) menuju section yang bersangkutan di `index.html`, dengan efek smooth scroll bawaan CSS (`scroll-behavior: smooth`). Menu mobile otomatis tertutup setelah link diklik.

## Akun demo
- Username: `customer1`
- Password: `sewa123`

(atau daftar akun baru sendiri lewat tab "Daftar" di halaman Login)

## Logika ongkos kirim (lokasi usaha: Kec. Siwalan, Kabupaten Pekalongan)
Alamat asli hasil observasi: **4H5X+RQM, Krasak, Siwalan, Kec. Siwalan, Kabupaten Pekalongan, Jawa Tengah 51137** (diambil dari Google Maps).

| Kecamatan tujuan            | Ongkir     |
|------------------------------|-----------|
| Siwalan (lokasi toko sendiri) | Rp 5.000  |
| Wonokerto                     | Rp 6.000  |
| Sragi                         | Rp 7.000  |
| Karangdadap                   | Rp 7.500  |

*Keempat kecamatan ini dipilih karena bertetangga langsung dengan Kecamatan Siwalan (Wonokerto, Sragi, dan Karangdadap dulunya satu wilayah dengan Siwalan sebelum pemekaran Kecamatan Sragi pada tahun 2001).*

Total bayar = subtotal sewa busana + ongkir sesuai kecamatan yang dipilih saat checkout.

## Metode pembayaran & QRIS
Pemilihan metode pembayaran (Transfer Bank, OVO, DANA, GoPay, SeaBank, Bayar di Tempat) di section Keranjang bersifat **simulasi UI** untuk keperluan demo — tercatat di struk, namun tidak terhubung ke gateway pembayaran sungguhan (situs ini murni frontend tanpa backend).

Setiap metode (kecuali "Bayar di Tempat") menampilkan **kode QRIS** otomatis saat dipilih. Gambar QRIS masih berupa **placeholder contoh** di folder `images/`:
```
images/qris-transfer.png
images/qris-ovo.png
images/qris-dana.png
images/qris-gopay.png
images/qris-seabank.png
```
**Tinggal ganti file-file di atas dengan QRIS asli milikmu** (nama file & ukuran gambar harus sama persis / rasio persegi) — otomatis akan tampil di website tanpa perlu ubah kode apa pun.

## Cetak struk
Tombol "Cetak Struk" pada struk pembayaran memakai `window.print()` dengan CSS khusus (`@media print`) sehingga **hanya struknya saja yang tercetak**, tanpa ikut mencetak seluruh halaman website.

## Cara mengganti foto (hero, galeri, produk)

Website ini sudah disiapkan agar foto tinggal **ditaruh di folder `images/` dengan nama yang sudah ditentukan** — tidak perlu ubah kode apapun. Kalau nama filenya belum ada/salah, otomatis fallback ke ikon vektor supaya tidak muncul gambar rusak.

### 1. Foto Hero (slider di Beranda) — 3 foto
```
images/hero-1.jpg
images/hero-2.jpg
images/hero-3.jpg
```
Disarankan foto landscape/portrait dengan rasio dekat 4:5 (portrait), karena akan dipotong otomatis (`object-fit: cover`) mengisi bingkai di hero.

### 2. Foto Galeri (section "Kenapa Memilih Kami") — 3 foto
```
images/galeri-1.jpg   (foto utama, lebih besar)
images/galeri-2.jpg
images/galeri-3.jpg
```

### 3. Foto Produk Katalog — 48 foto
Taruh di dalam folder `images/produk/`, **nama file harus angka sesuai ID produk** (bukan nama busananya), format `.jpg`. Contoh: `images/produk/1.jpg`, `images/produk/2.jpg`, dst.

Tabel padanan ID ↔ nama busana:

| ID (nama file) | Kategori | Nama Busana |
|---|---|---|
| produk/1.jpg | Kebaya | Kebaya Encim Modern Emas |
| produk/2.jpg | Kebaya | Kebaya Wisuda Brokat Putih |
| produk/3.jpg | Kebaya | Kebaya Kutubaru Batik Pekalongan |
| produk/4.jpg | Kebaya | Kebaya Kartini Klasik Beludru |
| produk/5.jpg | Kebaya | Kebaya Modern Payet Silver |
| produk/6.jpg | Kebaya | Kebaya Brokat Prancis Nude |
| produk/7.jpg | Kebaya | Kebaya Encim Toska Bordir |
| produk/8.jpg | Kebaya | Kebaya Kutubaru Lurik Modern |
| produk/9.jpg | Kebaya | Kebaya Pesta Merah Marun |
| produk/10.jpg | Kebaya | Kebaya Pengantin Songket Emas |
| produk/11.jpg | Kebaya | Kebaya Simple Elegan Pastel |
| produk/12.jpg | Kebaya | Kebaya Tile Transparan Mewah |
| produk/13.jpg | Gaun | Gaun Pesta Malam Beludru |
| produk/14.jpg | Gaun | Gaun Bridesmaid Satin |
| produk/15.jpg | Gaun | Gaun Pesta Sequin Emas |
| produk/16.jpg | Gaun | Gaun Prom Off-Shoulder |
| produk/17.jpg | Gaun | Gaun Cocktail Midi Elegan |
| produk/18.jpg | Gaun | Gaun Wisuda Ballgown |
| produk/19.jpg | Gaun | Gaun Pesta Backless Hitam |
| produk/20.jpg | Gaun | Gaun Tile Mermaid Biru |
| produk/21.jpg | Gaun | Gaun Pesta Two-Piece Modern |
| produk/22.jpg | Gaun | Gaun Bridesmaid Chiffon Dusty Pink |
| produk/23.jpg | Gaun | Gaun Malam Beaded Silver |
| produk/24.jpg | Gaun | Gaun A-Line Sederhana Elegan |
| produk/25.jpg | Jas | Jas Pengantin Pria Klasik |
| produk/26.jpg | Jas | Beskap Jawa Lengkap |
| produk/27.jpg | Jas | Jas Formal Hitam Slimfit |
| produk/28.jpg | Jas | Beskap Solo Modern |
| produk/29.jpg | Jas | Jas Pengantin Putih Mewah |
| produk/30.jpg | Jas | Setelan Jas Prewedding |
| produk/31.jpg | Jas | Beskap Yogyakarta Klasik |
| produk/32.jpg | Jas | Jas Groomsmen Navy |
| produk/33.jpg | Jas | Jas Tuxedo Hitam Elegan |
| produk/34.jpg | Jas | Beskap Batik Pekalongan |
| produk/35.jpg | Jas | Jas Vest Coklat Casual Formal |
| produk/36.jpg | Jas | Setelan Jas Wisuda Pria |
| produk/37.jpg | Aksesoris | Aksesoris Set (Selendang, Bros, Sanggul) |
| produk/38.jpg | Aksesoris | Selendang Batik Motif Pesisiran |
| produk/39.jpg | Aksesoris | Sanggul Modern Cepol |
| produk/40.jpg | Aksesoris | Mahkota Bunga Pengantin |
| produk/41.jpg | Aksesoris | Bros Kebaya Mewah |
| produk/42.jpg | Aksesoris | Kalung Aksesoris Pesta |
| produk/43.jpg | Aksesoris | Anting Set Pengantin |
| produk/44.jpg | Aksesoris | Sepatu Heels Pesta |
| produk/45.jpg | Aksesoris | Clutch Bag Pesta Elegan |
| produk/46.jpg | Aksesoris | Sarung Tangan Pengantin |
| produk/47.jpg | Aksesoris | Veil / Kerudung Pengantin |
| produk/48.jpg | Aksesoris | Ikat Pinggang Payet Kebaya |

> Kalau baju/kategorimu di dunia nyata urutannya beda dari daftar di atas, gampang — upload dulu semua foto dengan nama angka sembarang sesuai urutan file dari HP/kamera, lalu kasih tahu saya urutan fotonya mewakili busana apa saja, nanti saya cocokkan ulang nomornya di `js/app.js` biar sesuai.

### Format & ukuran foto
- Format: `.jpg` (kalau punya `.png` atau `.webp`, kasih tahu saya biar kode `<img>`-nya disesuaikan)
- Ukuran disarankan: foto produk sekitar 600×700px (potret), tidak perlu resolusi besar-besar supaya website tetap ringan dimuat

## Checklist ketentuan soal
- [x] Layout dibuat sendiri (header 200px, footer 120px, logo 120x120, tema warna sendiri)
- [x] Login & Logout tersedia (localStorage)
- [x] Slide menggunakan jQuery, efek **fade** (bukan geser kiri-kanan)
- [x] Struk menghitung ongkir sesuai kecamatan (4 pilihan), ada logo PT & ucapan terima kasih
- [x] Header/Footer memuat nama usaha & kalimat "Terima kasih atas Kunjungan Anda"
- [x] Ada Maps, YouTube, dan sosial media di section Kontak
- [x] Dibuat dengan HTML, JavaScript, jQuery, dan Bootstrap
- [ ] Upload ke domain/hosting gratis — dilakukan oleh mahasiswa setelah menerima file ini
- [ ] Datang langsung ke objek untuk observasi — dilakukan oleh mahasiswa
