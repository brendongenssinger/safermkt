import Script from 'next/script';
import styles from './section.module.css'
import * as bootstrap from 'bootstrap'


export default function ServicosPrestados() {
    return (
        <section className={`${styles.borderSection} ${styles.lazySection}`} id='lazySection'>

            <div className="row">
                <div className="container">
                    <div className="col">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1 style={{ color: 'white', marginBottom: '5px' }}>Serviços Prestados</h1>
                        </div>
                        <hr style={{marginLeft:'auto',marginRight:'auto'}}/>                    
                    </div>
                </div>

                <div className="container" style={{ display: 'flex', justifyContent: 'center',marginTop:'50px' }}>
                    <div className="row">                    
                    <div className="card mb-3" style={{ 'maxWidth': '20rem', marginRight:'5rem'}}>
                        <div className="card-header" style={{ textAlign: 'center', fontSize: '20px' }}>Feed</div>
                        <div className="card-body">
                            <img src="./images/feed.jpg" className={`${'d-block w-100 '} ${styles.opactiy_images}`} alt="..."
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                                height={'200'} />
                            <h5 className="card-title">Publicações no Feed</h5>
                            <p className="card-text" style={{color:'black'}}>
                                No feed escolhemos as melhores imagens e utilizamos o recurso copywrite onde é chamado a atenção do usuário.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ 'maxWidth': '20rem', marginRight:'5rem' }}>
                        <div className="card-header" style={{ textAlign: 'center', fontSize: '20px' }}>Story</div>
                        <div className="card-body">
                            <img src="./images/feed.jpg" className={`${'d-block w-100 '}`} alt="..."                               
                                height={'200'} />
                            <h5 className="card-title">Publicações no Story</h5>
                            <p className="card-text" style={{color:'black'}}>No Story vamos interagir e buscar o máximo de engajamento do usuário .</p>
                        </div>
                    </div>

                    <div className="card mb-3" style={{ 'maxWidth': '20rem', marginRight:'5rem' }}>
                        <div className="card-header" style={{ textAlign: 'center', fontSize: '20px' }}>Reels</div>
                        <div className="card-body">
                            <img src="./images/feed.jpg" className={`${'d-block w-100 '} ${styles.opactiy_images}`} alt="..."
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                                height={'200'} />
                            <h5 className="card-title">Interação com o Usuário</h5>
                            <p className="card-text" style={{color:'black'}}>Videos curtos onde desperta a curiosidade do seu cliente.</p>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>

        </section>
    );
}