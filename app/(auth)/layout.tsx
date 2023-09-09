import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import '@styles/global.css'

export const metadata: Metadata = {
  title: "Auth",
  description: "Um site de ecommerce desenvolvido com nextjs 13"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
