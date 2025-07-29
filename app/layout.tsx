import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Momo Florist - Toko Bunga Online Surabaya | Bunga Papan, Standing Flower, Hand Bouquet",
  description:
    "Momo Florist adalah toko bunga online di Surabaya yang melayani pengiriman ke seluruh Indonesia. Spesialis bunga papan, standing flower, dan hand bouquet. Buka 24 jam, gratis ongkir, pengerjaan cepat 2 jam.",
  keywords:
    "bunga, bunga papan, karangan bunga, standing flower, bouquet, toko bunga surabaya, florist, bunga duka cita, bunga pernikahan",
    generator: 'Aga',
  icons: {
    icon: "/logo MomoFlorist.png",
    shortcut: "/logo MomoFlorist.png",
    apple: "/logo MomoFlorist.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
