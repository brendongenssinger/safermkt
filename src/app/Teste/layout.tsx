import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function TesteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    

    <section>
    {/* Include shared UI here e.g. a header or sidebar */}
    <nav></nav>
    <h1>Layout 2</h1>
    {children}    
  </section>
    
  )
}
