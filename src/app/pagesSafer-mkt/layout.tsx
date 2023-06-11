import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function pagesSafermktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <div className="container-sm" style={{backgroundColor:'black'}}>
        {children}
    </div>    
  )
}
