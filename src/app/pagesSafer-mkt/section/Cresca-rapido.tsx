import styles from './section.module.css'

export default function Section_CrescaRapido() {
    return (
        <section className={styles.borderSection}>
            <div className="row">                
                <h1>Cresça rápido usando a internet</h1>
                <div className="col">
                    <h3>Clientes Lucrativos</h3>
                    <p> Trazemos o melhor cliente para o seu negócio. O cliente que custa menos e compra muito mais. </p>
                </div>
                <div className="col">
                    <h3>Clientes Lucrativos</h3>
                    <p> Trazemos o melhor cliente para o seu negócio. O cliente que custa menos e compra muito mais. </p>
                </div>
                <div className="col">
                    <h3>Clientes Lucrativos</h3>
                    <p> Trazemos o melhor cliente para o seu negócio. O cliente que custa menos e compra muito mais. </p>
                </div>
            <div className="row">                
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