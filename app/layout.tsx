"use client"
import './styles/globals.scss'
import   './styles/cards.scss'
import   './styles/sections.scss'
import { store } from '@/redux/store'
import { Provider as ReduxProvider } from 'react-redux'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <ReduxProvider store={store}>
        {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
