
import "bootstrap/dist/css/bootstrap.min.css";

import Section_Apresentation from "./section/1_Apresentation";
import Section_CrescaRapido from "./section/2_Cresca-rapido";
import Section_AboutSaferMk from "./section/3_Sobre-SaferMkt";
import Section_ServicosPrestados from "./section/4_Servicos-Prestados";

export default function Home() {
    return (
        <div className='lazySection'>
            <div style={{backgroundColor:'#050404'}}>
                <Section_Apresentation/>
            </div>
            <div style={{backgroundColor:'#2F2E2E'}}>
                <Section_ServicosPrestados/>
            </div>
            <div style={{backgroundColor:'#2F2E2E'}}>
                <Section_CrescaRapido/>
            </div>
            <div style={{backgroundColor:'#050404'}}>
                <Section_AboutSaferMk />
            </div>
            
        </div>
    );
}