'use client'

export default function Template({ children }: { children: React.ReactNode }) {
    return(
    <div>
        <header>My App Header</header>
        <main>{children}</main>
        <footer>My App Footer</footer>
    </div>
    )
  }