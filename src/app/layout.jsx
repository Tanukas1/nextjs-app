import '../styles/globals.css'
import ScrollToTop from '../layout/ScrollToTop'

export const metadata = {
  title: "KNK Salon Awadh | Luxury Hair, Skin & Bridal Studio",
  description:
    "KNK Salon, Awadh Lucknow — hair colour, keratin, facials and bridal makeup. Spin the Lucky Wheel for an instant discount and book instantly.",
  icons: {
    icon: '/assets/images/new/logo.png',
    shortcut: '/assets/images/new/logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
