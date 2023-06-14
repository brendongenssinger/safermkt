import styles from './section.module.css'



export default function ServicosPrestados(){
    return(
        <section className={`${styles.borderSection} ${styles.lazySection}`} id='lazySection'>
            
            <div className="row">
                <div style={{display:'flex', justifyContent:'center'}}>
                    <h1 >Serviços Prestados</h1>
                </div>

                <div className="container">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img
                                    src="./images/feed.png" 
                                    alt="" 
                                    className={"img-fluid"}
                                    width={100}
                                    style={{marginLeft:'100%'}}/>
                            </div>
                            <div className="col" >
                                <p style={{marginLeft:'20%'}}>Publicações no Feed</p>
                            </div>
                        </div>

                        <div className="row" style={{marginTop:'10px'}}>
                            <div className="col">
                                <img
                                    src="./images/feed.png" 
                                    alt="" 
                                    className={"img-fluid"}
                                    width={100}
                                    style={{marginLeft:'100%'}}/>
                            </div>
                            <div className="col" >
                                <p style={{marginLeft:'20%'}}>Publicações no Feed</p>
                            </div>
                        </div>

                        <div className="row" style={{marginTop:'10px'}}>
                            <div className="col">
                                <img
                                    src="./images/feed.png" 
                                    alt="" 
                                    className={"img-fluid"}
                                    width={100}
                                    style={{marginLeft:'100%'}}/>
                            </div>
                            <div className="col" >
                                <p style={{marginLeft:'20%'}}>Publicações no Feed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                     
        </section>
    );
}