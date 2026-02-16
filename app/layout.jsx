import './globals.css'

export const metadata = {
  title: 'VELORY — Premium Websites for Local Businesses',
  description:
    'VELORY designs fast, modern websites that make local businesses look established and generate more enquiries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
