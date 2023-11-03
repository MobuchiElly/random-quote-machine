import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'FCC : Random Quote Machine',
  description: 'Random Quote Machine by ellydev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
