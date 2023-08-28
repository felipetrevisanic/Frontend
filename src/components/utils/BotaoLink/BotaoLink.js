import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Botao = styled.button`
    padding: 8px;
    background-color: #514442;  
    border: none;
    border-radius: 8px;
    width: 128px;
    margin: 8px;
`



const BotaoLink = (props) => {
    return ( 
        <Botao><Link to={props.nav}>{props.children}</Link></Botao>
     );
}
 
export default BotaoLink;