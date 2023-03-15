import "./globals.css"

export const metadata = {
  title: "Pixel Chat Room",
  description: "Powered by Bruce Song"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className="min-h-full min-w-full"
      lang="en"
    >
      <body className="h-screen w-screen">{children}</body>
    </html>
  )
}
