import '@styles/global.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Footer, Navbar } from '@components'

export const metadata: Metadata = {
  title: 'eCommerce Tico Toys',
  description: 'Aplicativo de estudos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
