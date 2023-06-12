import { Inter } from 'next/font/google'
import './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function pagesSafermktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <div>
      {children}
    </div>
  )
}
