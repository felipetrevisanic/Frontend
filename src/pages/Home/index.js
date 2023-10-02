import { Quadro, Nota, NotaTitulo} from './style.js'

const HomePage = () => {
    return ( 
        <div>
            <h1>Bem-vindo ao POOT</h1>
            <h2>Uma pagina web que ira utilizar de recursos para te ensinar de uma vez por todas a programação orientada ao objeto</h2>
            <h3>Você pode se orientar na nossa págia atraves dos botões a esquerda, em que cada um respresenta...</h3>
            <Quadro>
                <Nota>
                    <NotaTitulo>Artigos</NotaTitulo>
                    <p>Seção onde estarão todos os artigos necessários para que possa entender sobre o assunto.</p>
                </Nota>
                <Nota>
                    <NotaTitulo>Game</NotaTitulo>
                    <p>Seção onde você poderá testar suas habilidades através de um quiz preparado especialmente por nós.</p>
                </Nota>
                <Nota>
                    <NotaTitulo>Console</NotaTitulo>
                    <p>Seção especial onde você poderá colocar a mão na massa e testar seus conhecimentos no código.</p>
                </Nota>
            </Quadro>
        </div>
     );
}
 
export default HomePage;