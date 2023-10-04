import { useEffect, useState } from "react";
import { BotaoStyle } from "../../components/Botao/style";
import Quiz from "../../components/Quiz";
import ax from "../../service/axios";

const GamePage = () => {

    const [pergunta, setPergunta] = useState(null)  
    const [indicePergunta, setIndicePergunta] = useState(0)
    const respostasUsuario = []

    useEffect(() => {
        const BuscarDadosApi = async ()=>{
            try {
                const res = await ax.get('/perguntas')
                setPergunta(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        BuscarDadosApi()
    }, [])  

    const enviarResposta = () => {
        setIndicePergunta(indicePergunta + 1)
        
    }

    const [opcaoSelecionada, setOpcaoSelecionada] = useState()
    const [confirmacao,setConfirmacao] = useState(false)

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


    while(pergunta == null){
        return (<div>loading...</div>)
    }
    if(pergunta != null){ 
        return ( 
            <div>
                {
                      indicePergunta < pergunta.length ? (
                            <div>
                                <Quiz {...pergunta[indicePergunta]}></Quiz>
                                <BotaoStyle onClick={() => enviarResposta() && handleConfirmClick()}>enviar</BotaoStyle>
                            </div>
                        ) : (
                            <h2>Fim do quiz</h2>
                        )
                }
            </div>
         );
    }
}
 
export default GamePage;