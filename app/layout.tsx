import './styles/globals.scss'
import   './styles/cards.scss'
import   './styles/sections.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
