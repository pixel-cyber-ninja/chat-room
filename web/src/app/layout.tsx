import "./globals.css"

export const metadata = {
  title: "Pixel Chat Room",
  description: "Powered by Bruce Song"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
