import { styled } from "styled-components";
import BotaoLink from "../utils/BotaoLink/BotaoLink";

const AbaLateral = styled.div`
    display: flex;
    flex-direction: column;
`

const Logo = styled.img`
    margin: 32px 8px ;

`

const AbaNavegacao = () => {
    return (
        <AbaLateral>
            <Logo src="../../../public/images/logo.svg"></Logo>
            <BotaoLink nav='/home'>HOME</BotaoLink>
            <BotaoLink nav='/game'>GAME</BotaoLink>
            <BotaoLink nav='/console'>CONSOLE</BotaoLink>
            <BotaoLink nav='/artigos'>ARTIGOS</BotaoLink>
        </AbaLateral>
    );
}
 
export default AbaNavegacao;