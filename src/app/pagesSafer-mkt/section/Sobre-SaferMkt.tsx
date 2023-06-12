import styles from './section.module.css'
export default function AboutSaferMkt(){
    return(
        <section className={styles.borderSection}>
            <div className="row">
                <div className="col">
                    <h3>O que é a Safer MKT</h3>
                    <hr style={{width:'150px',color:'aqua'}}/>
                    <p>Com mais de uma década de experiência, e mais de 10 mil clientes atendidos, hoje somos a maior Assessoria de Marketing Digital do Brasil.
                    Responsáveis por construir campanhas de marketing eficazes, apresentar a sua empresa ao público-alvo ideal, aumentar o seu número de clientes e impulsionar o crescimento do seu negócio.</p>
                </div>
                <div className="col">
                <img 
                    src="/pessoa-empresaria.webp"
                    className={"img-fluid " + styles.imgApresentation}
                    alt="..."
                    width={'20%'}
                    height={'100'}
                    
                    />
                    <img 
                    src="/pessoa-empresaria.webp"
                    className="img-fluid"
                    alt="..."
                    width={'40%'}
                    height={'100'}
                    style={{borderRadius:'50% 50%',marginLeft:'100px'}}
                    />
                </div>
            </div>
        </section>
    );
}