// build layout in next.js


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   <html>
        <body>

          <h1>from root layout</h1>

          <main>

            {children}


          </main>
      </body>
   </html>
  )
} 