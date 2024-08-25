import { Montserrat, Alkatra } from 'next/font/google'
import './globals.css'

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const alcatra = Alkatra({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-artist',
})
