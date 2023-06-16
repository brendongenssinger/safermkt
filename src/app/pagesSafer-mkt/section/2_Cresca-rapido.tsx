import styles from './section.module.css'

export default function Section_CrescaRapido() {
    return (
        <section className={`${styles.borderSection}`}>
            <div className="row">                
                <h1 className={styles.alignSpecificElement_flex} style={{color:'white',marginBottom:'20px'}}>Cresça rápido usando a internet</h1>
                
                <div className="col ">     

                    <div className={styles.bordaElemento}>
                        <h3 style={{color:'white'}}>Clientes Lucrativos</h3>
                        <p style={{color:'white'}}> Trazemos o melhor cliente para o seu negócio. O cliente que custa menos e compra muito mais. </p>
                    </div>
                </div>
                <div className="col">
                    <div className={styles.bordaElemento}>
                        <h3 style={{color:'white'}}>Gerenciamento das redes sociais</h3>
                        <p style={{color:'white'}}>Gerenciamos a sua rede social. Engajando o seu público.</p>
                    </div>
                    
                </div>
                <div className="col"> 
                    <div className={styles.bordaElemento}>
                        <h3 style={{color:'white'}}>Divulgações</h3>
                        <p style={{color:'white'}}>Propondo as melhores divulgações em horários e dias certos . </p>
                    </div>
                </div>
            <div className="row" style={{marginTop:'50px'}}>                
            <div className="col">                
                    <input type="button" className={'btn btn-info ' + styles.alignSpecificElement} 
                            title='Falar com especialista'
                            value={'Falar com Especialista'}
                            />

            </div>
            </div>
            </div>
        </section>
    );
}
