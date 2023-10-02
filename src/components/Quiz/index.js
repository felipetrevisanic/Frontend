import { useState } from 'react';
import { CardPergunta, CardOpcao, BotaoOpcao, BlocoOpcao } from './style.js'
import { BotaoStyle } from '../Botao/style.js';

const Quiz = () => {
    
    const [opcaoSelecionada, setOpcaoSelecionada] = useState()
    const [confirmacao,setConfirmacao] = useState(false)
    // isselected={value.toString()}

    const handleOptionClick = opcao => {
        if(!confirmacao){
            setOpcaoSelecionada(opcao)
        }
    }

    const handleConfirmClick = () => {
        if (opcaoSelecionada !== null) {
          setConfirmacao(true);
          // Aqui você pode fazer a validação da resposta
        }
      };
    

    return (
        <div>
            <CardPergunta>
                O que é herança?
            </CardPergunta>
            <BlocoOpcao>
                <BotaoOpcao value={'a'}  onClick={() => handleOptionClick('a')}>A</BotaoOpcao>
                <CardOpcao>
                    é uma descrição de um objeto, enquanto um objeto é uma instância de uma classe.
                </CardOpcao>

            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'b'}  onClick={() => handleOptionClick('b')}>B</BotaoOpcao>
                <CardOpcao>
                    é um princípio de POO que oculta as informações de implementação de um objeto de seus usuários.
                </CardOpcao>

            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'c'}  onClick={() => handleOptionClick('c')}>C</BotaoOpcao>
                <CardOpcao>
                    é um princípio de POO que permite que uma classe herde as propriedades e comportamentos de outra classe
                </CardOpcao>
            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'d'}  onClick={() => handleOptionClick('d')}>D</BotaoOpcao>
                <CardOpcao>
                    A herança é um princípio de POO que permite que uma classe herde as classes e comportamentos de outra propriedade.
                </CardOpcao>
            </BlocoOpcao>
            <BlocoOpcao>
                <BotaoOpcao value={'e'}  onClick={() => handleOptionClick('e')}>E</BotaoOpcao>
                <CardOpcao>
                    é uma descrição de uma classe
                </CardOpcao>
            </BlocoOpcao>
        </div>
    );
}

// isselected={opcaoSelecionada === 'a'}
// isselected={opcaoSelecionada === 'b'}
// isselected={opcaoSelecionada === 'c'}
// isselected={opcaoSelecionada === 'd'}
// isselected={opcaoSelecionada === 'e'}|

export default Quiz;