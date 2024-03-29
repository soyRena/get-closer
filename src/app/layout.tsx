import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationMenu } from '~/domains/navigation/navigation-menu/navigation-menu'
import QueryProvider from '~/providers/query-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get Closer',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
            <div className="flex flex-1 h-screen">
              <aside className="w-64">
                <NavigationMenu />
              </aside>
              <main className="flex flex-col items-center gap-10 p-6 w-screen">{children}</main>
            </div>
        </QueryProvider>
      </body>
    </html>
  )
}
