import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skillgu',
  description: 'Miejsce, gdzie znajdziesz swojego mentora. ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="pl">
      <body className={montserrat.className}>{children}</body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  )
}
