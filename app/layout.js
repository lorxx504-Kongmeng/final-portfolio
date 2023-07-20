import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "developedbyKongmengLor",
    template: "%s | developedbyKongmengLor"
  },
  description: "developedbyKongmengLor, Kongmenglorwebsite, Software engineer, Full Stack Engineer"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
