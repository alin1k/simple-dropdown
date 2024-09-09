import { ThemeProvider } from "@/components/theme-provider"
import "./index.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Docs - simple-dropdown',
  description: 'Documentation for alin-simple-dropdown React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen h-full">
            <Navbar/>
            <div className="flex-1 flex flex-col">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
