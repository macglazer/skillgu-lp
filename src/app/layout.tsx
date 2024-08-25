import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { montserrat } from '@/app/fonts'
import './globals.css'

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
    <html lang="pl" className={montserrat.className}>
      <body>{children}</body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  )
}
