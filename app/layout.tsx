import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PopX Mobile App",
  description: "A mobile app interface for PopX",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md h-[800px] bg-white shadow-lg overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'