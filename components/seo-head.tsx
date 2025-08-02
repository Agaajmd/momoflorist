import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
}

export default function SEOHead({
  title = "Momo Florist - Toko Bunga Online Surabaya",
  description = "Toko bunga online terpercaya di Surabaya. Spesialis bunga papan, standing flower, hand bouquet. Buka 24 jam, gratis ongkir, pengerjaan cepat 2 jam.",
  image = "/logo MomoFlorist.png",
  url = "https://momoflorist.vercel.app",
  type = "website",
  keywords = []
}: SEOHeadProps) {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`
  
  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Momo Florist" />
      <meta property="og:locale" content="id_ID" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Momo Florist" />
      <meta name="publisher" content="Momo Florist" />
      <meta name="copyright" content="© 2024 Momo Florist. All rights reserved." />
      <meta name="language" content="Indonesian" />
      <meta name="geo.region" content="ID-JI" />
      <meta name="geo.placename" content="Surabaya" />
      <meta name="geo.position" content="-7.2575;112.7521" />
      <meta name="ICBM" content="-7.2575, 112.7521" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="id" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Head>
  )
}
