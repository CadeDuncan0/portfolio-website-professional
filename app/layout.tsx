import type { Metadata } from 'next'
import { Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const techMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cade — Software Engineer',
  description:
    'Portfolio of Cade, a software engineer building aesthetic, accessible web applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${techMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
