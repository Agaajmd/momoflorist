# Social Sidebar Component

Komponen sidebar vertikal melayang yang menampilkan ikon media sosial dan tombol "ORDER NOW" untuk website Momo Florist.

## Fitur

✅ **Responsif**: Tampil hanya pada desktop (lg+), tersembunyi pada mobile
✅ **Animasi Smooth**: Menggunakan Framer Motion untuk animasi masuk dan hover
✅ **Modern Design**: Gradasi pink dengan efek blur dan shadow
✅ **Tooltip**: Hover untuk melihat nama platform
✅ **3 Platform**: Instagram, WhatsApp, dan Telepon
✅ **WhatsApp Integration**: Tombol ORDER NOW terintegrasi dengan WhatsApp
✅ **TypeScript**: Fully typed components

## Versi

### 1. Tailwind CSS Version
File: `components/social-sidebar.tsx`
- Menggunakan Tailwind CSS classes
- Lebih fleksibel untuk customization
- Animasi dengan Framer Motion

### 2. CSS Modules Version  
File: `components/social-sidebar-css.tsx` + `components/SocialSidebar.module.css`
- Styling terpisah dalam CSS file
- Lebih organized untuk projek besar
- Kontrol CSS yang lebih detil

## Instalasi

```bash
npm install react-icons framer-motion
```

## Penggunaan

### Import dan Gunakan
```tsx
import SocialSidebar from "@/components/social-sidebar"
// atau untuk CSS Modules version
import SocialSidebarCSS from "@/components/social-sidebar-css"

export default function Layout() {
  return (
    <div>
      <SocialSidebar />
      {/* konten lainnya */}
    </div>
  )
}
```

### Kustomisasi URL Media Sosial
Edit array `socialLinks` di dalam komponen:

```tsx
const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/username-anda", // Ganti URL
    color: "hover:bg-blue-600"
  },
  // ... platform lainnya
]
```

### Kustomisasi Pesan WhatsApp
Edit prop `message` pada WhatsAppButton:

```tsx
<WhatsAppButton
  message="Pesan khusus Anda untuk WhatsApp"
  // ... props lainnya
>
```

## Struktur CSS

### Tailwind Version Classes:
- `fixed left-4 top-1/2`: Posisi fixed di kiri tengah
- `bg-gradient-to-b from-pink-500 to-pink-600`: Gradasi pink
- `rounded-2xl`: Border radius besar
- `shadow-2xl`: Shadow dramatis
- `hover:scale-110`: Efek zoom saat hover

### CSS Modules Version:
- `.socialSidebar`: Container utama
- `.socialIcon`: Style untuk setiap ikon
- `.tooltip`: Tooltip yang muncul saat hover
- `.orderButton`: Style tombol ORDER NOW

## Responsivitas

- **Desktop (lg+)**: Sidebar tampil penuh
- **Tablet & Mobile**: Sidebar tersembunyi (`hidden lg:block`)
- **Tidak mengganggu konten**: Positioning absolute tidak mempengaruhi layout

## Animasi

1. **Entrance**: Slide dari kiri dengan opacity fade
2. **Hover Icons**: Scale + rotate ringan
3. **Button Hover**: Scale up dengan shadow enhancement
4. **Staggered Load**: Ikon muncul berurutan dengan delay

## Teknologi

- **Next.js 14+**: App Router support
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **React Icons**: Icon library (Font Awesome)

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Performance

- 🚀 Lazy loaded dengan motion animations
- 🎯 Tree-shaking friendly imports
- 📱 Mobile-optimized (hidden on small screens)
- ⚡ Minimal bundle size impact
