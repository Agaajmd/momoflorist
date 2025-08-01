# 🌸 Momo Florist - Website Toko Bunga Online

Website resmi **Momo Florist**, toko bunga online terpercaya yang melayani berbagai kebutuhan bunga untuk acara spesial Anda. Kami menyediakan layanan pemesana## 📄 Lisensi

Proyek ini dibuat oleh **Tim Development** untuk **Momo Florist**. Semua hak cipta dilindungi.

## 📈 Roadmap

- [x] Responsive navigation dengan mega dropdown
- [x] Social media integration
- [x] WhatsApp integration untuk pemesanan
- [x] Dark/Light mode toggle
- [x] Interactive product galleries
- [x] Mobile-optimized design
- [ ] Sistem pembayaran online
- [ ] Dashboard admin untuk manajemen produk
- [ ] Sistem review dan rating
- [ ] Notifikasi push untuk promo
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)an kualitas terbaik dan pengiriman yang cepat.

## 📋 Deskripsi Proyek

Momo Florist adalah platform e-commerce modern yang dibangun dengan teknologi terdepan untuk memberikan pengalaman berbelanja bunga yang mudah dan menyenangkan. Website ini menampilkan katalog produk lengkap, galeri foto, dan sistem pemesanan yang user-friendly melalui integrasi WhatsApp langsung.

## ✨ Fitur Utama

- 🌺 **Katalog Produk Lengkap**: Bunga Papan, Bunga Papan Mini, Bunga Standing, dan Hand Bouquet
- 📱 **Responsive Design**: Optimal di semua perangkat (desktop, tablet, mobile)
- 🌙 **Dark/Light Mode**: Tema yang dapat disesuaikan dengan preferensi pengguna
- 📞 **Integrasi WhatsApp**: Pemesanan langsung melalui WhatsApp dengan nomor +62 812-1314-2558
- 🖼️ **Galeri Interaktif**: Showcase produk dengan carousel dan modal view
- 🗺️ **Social Media Integration**: Link ke Instagram, TikTok, dan lokasi Google Maps
- ⚡ **Loading Cepat**: Optimasi performa dengan Next.js 14
- 🎨 **UI/UX Modern**: Desain elegan dengan animasi smooth menggunakan Framer Motion
- 🎯 **Dropdown Navigation**: Menu navigasi dengan preview produk yang interaktif
- 📍 **Social Sidebar**: Akses cepat ke media sosial dan tombol ORDER NOW

## 🛠️ Teknologi yang Digunakan

### Frontend Framework
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - Modern React component library
- **Radix UI** - Headless UI components
- **Framer Motion** - Animation library untuk smooth transitions
- **Lucide React** - Beautiful icons
- **React Icons** - Icon library untuk social media

### Tools & Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Fast package manager

## 🚀 Cara Menjalankan Proyek

### Prasyarat
Pastikan Anda sudah menginstall:
- **Node.js** (versi 18 atau lebih baru)
- **pnpm** (recommended) atau **npm**

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/Agaajmd/momoflorist.git
   cd momoflorist
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # atau
   npm install
   ```

3. **Jalankan development server**
   ```bash
   pnpm dev
   # atau
   npm run dev
   ```

4. **Buka di browser**
   ```
   http://localhost:3000
   ```

## 📁 Struktur Folder

```
momoflorist/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── bunga-papan/      # Halaman Bunga Papan
│   ├── bunga-papan-mini/ # Halaman Bunga Papan Mini
│   ├── bunga-standing/   # Halaman Bunga Standing
│   ├── hand-bouquet/     # Halaman Hand Bouquet
│   └── gallery/          # Halaman Gallery
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Header navigation dengan dropdown
│   ├── footer.tsx        # Footer component
│   ├── social-sidebar.tsx # Social media sidebar
│   ├── whatsapp-button.tsx # WhatsApp integration
│   ├── image-gallery.tsx # Image gallery component
│   ├── maps-embed.tsx    # Google Maps component
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utilities & configurations
├── public/               # Static assets
│   ├── logo MomoFlorist.png
│   ├── background/       # Background images
│   ├── bunga papan/      # Bunga papan product images
│   ├── bunga standing/   # Bunga standing product images
│   ├── hand bouquet/     # Hand bouquet product images
│   └── gallery/          # Gallery images
└── styles/               # Additional styles
```

## 🛍️ Kategori Produk

### 1. 🏵️ Bunga Papan
- Untuk acara pernikahan, duka cita, grand opening, dan ucapan selamat
- Berbagai ukuran dan desain elegan
- Kategori: Wedding, Duka Cita, Selamat & Sukses

### 2. 🌸 Bunga Papan Mini
- Versi mini dari bunga papan untuk space yang lebih kecil
- Cocok untuk acara intimate dan personal
- Kategori: Wedding, Duka Cita, Selamat & Sukses

### 3. 🌹 Bunga Standing
- Bunga berdiri untuk acara formal dan semi-formal
- Tampilan professional dan mewah
- Kategori: Wedding, Duka Cita, Selamat & Sukses

### 4. 💐 Hand Bouquet
- Buket bunga tangan untuk moment spesial
- Berbagai kategori: Anniversary, Birthday, Get Well, Apology, Congratulations, Valentine, Wedding, Graduation
- Berbagai pilihan bunga segar dan arrangements

### 5. 🖼️ Gallery
- Showcase karya-karya terbaik Momo Florist
- Kategori khusus: Bunga Salib, Bunga Potong Pita
- Portfolio untuk inspirasi pelanggan

## 📞 Kontak & Pemesanan

- **WhatsApp**: +62 812-1314-2558 (Terintegrasi langsung di website)
- **Instagram**: [@Momoflorist01](https://www.instagram.com/Momoflorist01/)
- **TikTok**: [@momoflorist99](https://www.tiktok.com/@momoflorist99)
- **Lokasi**: Tersedia link Google Maps di website
- **Jam Operasional**: Siap melayani pesanan Anda
- **Keunggulan**: Kualitas terbaik, pelayanan ramah, dan pengiriman tepat waktu

## 🎨 Komponen Khusus

### Navigation Component
- **Floating Navbar**: Berubah style saat di-scroll
- **Mega Dropdown**: Preview produk dengan kategori
- **Responsive Design**: Optimal untuk mobile dan desktop
- **Dark/Light Mode Toggle**: Switch tema yang smooth

### Social Sidebar
- **Fixed Position**: Sidebar kiri dengan social media links
- **ORDER NOW Button**: Akses cepat ke pemesanan WhatsApp
- **Social Links**: Instagram, TikTok, WhatsApp, dan Lokasi
- **Tooltip Animations**: Hover effects yang elegant

### Product Galleries
- **Interactive Cards**: Hover effects dan smooth transitions
- **Category Filtering**: Organisasi produk berdasarkan kategori
- **Modal Views**: Preview produk dalam modal
- **Mobile Optimization**: Grid responsif untuk semua device

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Alternatif Platform
- **Netlify**
- **Railway**
- **AWS Amplify**

## 🧑‍💻 Development

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Menambah Komponen Baru
```bash
# Menambah komponen UI dari shadcn
npx shadcn-ui@latest add [component-name]
```

## 🤝 Kontribusi

Jika Anda ingin berkontribusi pada proyek ini:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini dibuat oleh **Aga** untuk **Popo Florist**. Semua hak cipta dilindungi.

## 📈 Roadmap

- [ ] Sistem pembayaran online
- [ ] Dashboard admin untuk manajemen produk
- [ ] Sistem review dan rating
- [ ] Notifikasi push untuk promo
- [ ] Multi-language support
- [ ] Mobile app (React Native)

## 🐛 Melaporkan Bug

Jika Anda menemukan bug, silakan buat issue di:
- GitHub Issues
- Atau hubungi langsung melalui WhatsApp

---

<div align="center">
  <p>Dibuat dengan ❤️ untuk <strong>Momo Florist</strong></p>
  <p>🌸 Momo Florist, siap melayani pesanan anda 🌸</p>
  
  ### 📱 Kontak Cepat
  [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6281213142558)
  [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/Momoflorist01/)
  [![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@momoflorist99)
</div>
