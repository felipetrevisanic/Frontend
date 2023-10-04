import { useEffect, useState } from 'react';
import { CardPergunta, CardOpcao, BotaoOpcao, BlocoOpcao } from './style.js'
import { BotaoStyle } from '../Botao/style.js';
import ax from '../../service/axios.js';

const Quiz = ({pergunta, opcaoA, opcaoB, opcaoC, opcaoD}) => {
    
    const [opcaoSelecionada, setOpcaoSelecionada] = useState()
    const [confirmacao,setConfirmacao] = useState(false)
    // isselected={value.toString()}

    const handleOptionClick = opcao => {
        if(!confirmacao){
            setOpcaoSelecionada(opcao)
            console.log(opcaoSelecionada)
        }
    }

    const handleConfirmClick = () => {
        if (opcaoSelecionada !== null) {
          setConfirmacao(true);
          console.log(`esta ${opcaoSelecionada} foi a opcao selecionada`)
        }
      };

    

    return (
        <div>
            <CardPergunta>
                {pergunta}
            </CardPergunta>
            <BlocoOpcao>
                <BotaoOpcao value={'a'}  onClick={() => handleOptionClick('a')}>A</BotaoOpcao>
                <CardOpcao>
                {opcaoA}
                </CardOpcao>

            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'b'}  onClick={() => handleOptionClick('b')}>B</BotaoOpcao>
                <CardOpcao>
                    {opcaoB}
                </CardOpcao>

            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'c'}  onClick={() => handleOptionClick('c')}>C</BotaoOpcao>
                <CardOpcao>
                    {opcaoC}
                </CardOpcao>
            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'d'}  onClick={() => handleOptionClick('d')}>D</BotaoOpcao>
                <CardOpcao>
                    {opcaoD}
                </CardOpcao>
            </BlocoOpcao>
            {/* <BlocoOpcao>
                <BotaoOpcao value={'e'}  onClick={() => handleOptionClick('e')}>E</BotaoOpcao>
                <CardOpcao>
                    é uma descrição de uma classe
                </CardOpcao>
            </BlocoOpcao> */}
        </div>
    );
}

// isselected={opcaoSelecionada === 'a'}
// isselected={opcaoSelecionada === 'b'}
// isselected={opcaoSelecionada === 'c'}
// isselected={opcaoSelecionada === 'd'}
// isselected={opcaoSelecionada === 'e'}|

export default Quiz;