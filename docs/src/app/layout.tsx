import { ThemeProvider } from "@/components/theme-provider"
import "./index.css"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"

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
      <body className="h-full antialiased w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen h-full w-full">
            <Navbar/>
            <div className="flex-1 flex flex-col p-4 w-full">
              {children}
            </div>
          </main>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}
