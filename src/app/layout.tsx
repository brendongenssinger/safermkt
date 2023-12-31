import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'

import { Inter } from 'next/font/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SaferMKT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Menu />
        {children}
      </body>      



<Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.min.js"/>
<Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'/>
<Script src='./js/scriptCarousel.js'/>
<Script src='/js/scripRedirection.js' />   
   

    </html>
  )
}


function Menu() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'white'}}>
      <div className="container">        
        <a className="navbar-brand" href="#">
          <img src="./images/logo-safer.jpeg" alt="Logo" width="150%" height="150" className="d-inline-block align-text-top" />          
        </a>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active colorLink" aria-current="page" href="#">O que SaferMkt faz </a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorLink" href="#">Benefícios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorLink" href="#">Nossos Clientes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link colorLink">Perguntas Frequentes</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}