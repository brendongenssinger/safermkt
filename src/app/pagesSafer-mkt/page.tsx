
import "bootstrap/dist/css/bootstrap.min.css";


import Section_CrescaRapido from "./section/Cresca-rapido";
import Section_AboutSaferMk from "./section/Sobre-SaferMkt";
import Section_Apresentation from "./section/Apresentation";

export default function Home() {
    return (
        <div>
            <div style={{backgroundColor:'brown'}}>
                <Section_Apresentation></Section_Apresentation>
            </div>
            <div style={{backgroundColor:'black'}}>
                <Section_CrescaRapido></Section_CrescaRapido>
            </div>
            <div style={{backgroundColor:'brown'}}>
                <Section_AboutSaferMk />
            </div>
        </div>
    );
}