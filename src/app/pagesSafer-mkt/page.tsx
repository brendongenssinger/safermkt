import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../page.module.css'
import Image from 'next/image'

export default function Home(){
    return(
        <div style={{backgroundColor:'black'}}>
            <img 
                src="/pessoa-empresaria.webp" 
                className="img-fluid" 
                alt="..." 
                width={'35%'} 
                style={{borderRadius:'20px',marginLeft:'50%',marginTop:'2.55%'}}                
                >
            </img>    
            <div>
            </div>                     
        </div>
        
    );
}