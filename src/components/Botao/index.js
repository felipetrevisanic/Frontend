import { BotaoStyle } from './style.js'

const Botao = (props) => {
    return ( 
        <BotaoStyle onClick={props.funcao}>{props.children}</BotaoStyle>
     );
}
 
export default Botao;