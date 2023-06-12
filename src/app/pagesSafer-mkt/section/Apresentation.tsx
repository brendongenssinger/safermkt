import styles from './section.module.css'
import WhatsAppButtonClient from "./../component/buttons";

export default function Section_Apresentation() {
    return (
        <section>
            <div className= {"row " +styles.borderSection}>
                <div className="col" style={{ marginTop: '5%' }}>
                    <h1 className="color-white">Soluções de Marketing para maximizar seu faturamento</h1>
                    <hr />
                    <div className="col">
                        <p>Tenha um time de marketing completo atuando diariamente no crescimento do seu negócio.</p>
                    </div>
                    <hr />
                    <div className="col">
                        <WhatsAppButtonClient />
                    </div>
                </div>
                <div className="col">
                    <img
                        src="/pessoa-empresaria.webp"
                        className="img-fluid"
                        alt="..."
                        width={'60%'}
                        height={'100'}
                        style={{paddingLeft:'30%'}}
                    >
                    </img>
                </div>
            </div>
        </section>
    )
}