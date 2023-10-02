import {styled} from 'styled-components'

export const CardPergunta = styled.div` 
    width: 85%;
    background-color: var(--second-color);
    color: var(--dark-color);
    font-weight: bold;
    margin-bottom: 32px;
    border-radius: 8px;
    padding: 16px;
`;

export const BlocoOpcao = styled.div`
    display: flex;
    margin-bottom: 32px;
`

export const BotaoOpcao = styled.button`
    border: none;
    border-radius: 50%;
    margin-right: 8px;
    width: 50px;
    height: 50px;
    background-color: var(--light-color);
    color: var(--dark-color);
    /* background-color: ${props => (props.isselected ? 'var(--dark-color)' : 'var(--light-color)')};
    color: ${props => (props.isselected ? 'var(--light-color)' : 'var(--dark-color)')}; */
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background-color: var(--dark-color);
        color: var(--light-color);
        transition: 700ms;
        font-weight: bold;
    }

`


export const CardOpcao = styled.div` 
    width: calc(85% + 16px);
    background-color: var(--second-color);
    color: var(--dark-color);
    font-weight: 700;
    margin-bottom: 16px;
    border-radius: 8px;
    padding: 8px;
`;

