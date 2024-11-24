import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mirza Ali Hassan - Portfolio',
  description: 'Full-Stack Developer Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-[#000000] to-[#121212] min-h-screen flex items-center justify-center`}
      >
        <div className="w-full max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
