import styles from './section.module.css'



export default function ServicosPrestados() {
    return (
        <section className={`${styles.borderSection} ${styles.lazySection}`} id='lazySection'>

            <div className="row">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ color: 'white',marginBottom:'50px' }}>Serviços Prestados</h1>
                </div>

                <div id="carouselExampleCaptions" className="carousel slide">                    
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                            <img src="./images/feed.jpg" className="d-block w-50" alt="..." style={{marginLeft:'auto',marginRight:'auto'}} height={'700'}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5  style={{color:'black'}}>Gerenciando suas publicações no Instagram</h5>
                                <p style={{color:'black'}}>Gerenciando as publicações no feed para aumentar o engajamento .</p>
                            </div>
                        </div>
                    
                        <div className="carousel-item">
                        <img src="./images/feed.jpg" className="d-block w-50" alt="..." style={{marginLeft:'auto',marginRight:'auto'}} height={'700'}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{color:'black'}}>Gerenciando suas publicações no Instagram</h5>
                                <p style={{color:'black'}}>Gerenciando as publicações no feed para aumentar o engajamento .</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                            <img src="./images/feed.jpg" className="d-block w-50" alt="..." style={{marginLeft:'auto',marginRight:'auto'}} height={'700'}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Gerenciando suas publicações no Instagram</h5>
                                <p>Gerenciando as publicações no feed para aumentar o engajamento .</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{marginTop:'0%'}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{marginTop:'0%'}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}