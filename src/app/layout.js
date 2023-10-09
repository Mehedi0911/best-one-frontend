import Navbar from '@/components/Layout/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Layout/Footer'

export const metadata = {
  title: 'ECHO 2.0',
  description: 'Promising Chemical Supplier in Bangladesh',
}

const poppins = Poppins({
  weight: ['200', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
