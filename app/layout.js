import './globals.css'

export const metadata = {
  title: 'BotSales',
  description: 'BotSales Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
