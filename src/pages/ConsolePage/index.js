import Botao from "../../components/Botao";
import Console from "../../components/Console";

const verificando = (e) => {
   
    console.log('funcionar')
}

const ConsolePage = () => {
    return ( 
        <div>
            <Console></Console>
            <Botao funcao={verificando()}>Rodar código</Botao> 
            {/* preciso verificar como fazer esse botao funcionar */}
        </div>
     );
}
 
export default ConsolePage;