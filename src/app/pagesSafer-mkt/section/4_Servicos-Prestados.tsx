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

                <div className="card mb-3 text-light " style={{width:'33.333%'}}>
                    <img src="./images/feed.jpg" className="card-img opactiy-75 " alt="..."/>
                    <div className="card-img-overlay ">
                        <h5 className="bg-dark text-light rounded">Publicações no Feed</h5>
                        <p className="card-text bg-dark rounded">
                            No feed escolhemos as melhores imagens e utilizamos o recurso copywrite onde é chamado a atenção do usuário.
                        </p>
                        {/* <p className="card-text bg-dark"><small>Last updated 3 mins ago</small></p> */}
                    </div>
                </div>

                <div className="card mb-3 text-light " style={{width:'33.333%'}}>
                    <img src="./images/feed.jpg" className="card-img opactiy-75 " alt="..."/>
                    <div className="card-img-overlay ">
                        <h5 className="bg-dark text-light rounded">Publicações no Feed</h5>
                        <p className="card-text bg-dark rounded">
                            No feed escolhemos as melhores imagens e utilizamos o recurso copywrite onde é chamado a atenção do usuário.
                        </p>
                        {/* <p className="card-text bg-dark"><small>Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>

        </section>
    );
}