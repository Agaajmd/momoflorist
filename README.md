# 🌸 Popo Florist - Website Toko Bunga Online

Website resmi **Popo Florist**, toko bunga online terpercaya di Surabaya yang melayani pengiriman ke seluruh Indonesia. Kami menyediakan berbagai jenis rangkaian bunga untuk berbagai kebutuhan dan acara spesial Anda.

## 📋 Deskripsi Proyek

Popo Florist adalah platform e-commerce modern yang dibangun dengan teknologi terdepan untuk memberikan pengalaman berbelanja bunga yang mudah dan menyenangkan. Website ini menampilkan katalog produk lengkap, galeri foto, dan sistem pemesanan yang user-friendly.

## ✨ Fitur Utama

- 🌺 **Katalog Produk Lengkap**: Bunga Papan, Standing Flower, dan Hand Bouquet
- 📱 **Responsive Design**: Optimal di semua perangkat (desktop, tablet, mobile)
- 🌙 **Dark/Light Mode**: Tema yang dapat disesuaikan dengan preferensi pengguna
- 📞 **Integrasi WhatsApp**: Pemesanan langsung melalui WhatsApp
- 🖼️ **Galeri Interaktif**: Showcase produk dengan carousel dan modal view
- ⚡ **Loading Cepat**: Optimasi performa dengan Next.js 14
- 🎨 **UI/UX Modern**: Desain elegan dengan animasi smooth menggunakan Framer Motion

## 🛠️ Teknologi yang Digunakan

### Frontend Framework
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - Modern React component library
- **Radix UI** - Headless UI components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

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
   git clone https://github.com/Agaajmd/popoflorist01.git
   cd popoflorist01
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
popoflorist01/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── bunga-papan/      # Halaman Bunga Papan
│   ├── bunga-standing/   # Halaman Bunga Standing
│   ├── hand-bouquet/     # Halaman Hand Bouquet
│   └── gallery/          # Halaman Gallery
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Header navigation
│   ├── footer.tsx        # Footer component
│   └── ...
├── hooks/                # Custom React hooks
├── lib/                  # Utilities & configurations
├── public/               # Static assets
│   ├── logo popo florist.jpg
│   ├── background/
│   ├── bunga papan/
│   ├── bunga standing/
│   ├── hand bouquet/
│   └── gallery/
└── styles/               # Additional styles
```

## 🛍️ Kategori Produk

### 1. 🏵️ Bunga Papan
- Untuk acara pernikahan, ulang tahun, grand opening
- Berbagai ukuran dan desain elegan
- Kustomisasi sesuai tema acara

### 2. 🌹 Standing Flower
- Bunga berdiri untuk acara formal
- Cocok untuk seminar, peluncuran produk
- Tampilan professional dan mewah

### 3. 💐 Hand Bouquet
- Buket bunga tangan untuk moment spesial
- Wisuda, anniversary, valentine
- Berbagai pilihan bunga segar

## 📞 Kontak & Pemesanan

- **WhatsApp**: Terintegrasi langsung di website
- **Jam Operasional**: 24 jam
- **Area Layanan**: Surabaya dan seluruh Indonesia
- **Keunggulan**: Proses cepat 2 jam, gratis ongkir area Surabaya

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
  <p>Dibuat dengan ❤️ oleh <strong>Aga</strong> untuk <strong>Popo Florist</strong></p>
  <p>🌸 Menyebarkan kebahagiaan melalui bunga 🌸</p>
</div>
