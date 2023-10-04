import { useState } from 'react';
import { Moldura, ConsoleArea, ConsoleTexto, ConsoleBotao } from './style.js'
import ax from '../../service/axios.js';

const Console = () => {

    const [code, setCode] = useState('');
  const [language, setLanguage] = useState('c');
  const [result, setResult] = useState('');

//   const compileCode = async () => {
//     try {
//       const response = await ax.post('http://localhost:3001/compile', {
//         code: code,
//         language: language
//       });

//       setResult(response.data.result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

    return (
        <div>
            <Moldura>
                <ConsoleArea>
                    <ConsoleBotao>
                         {/* <div>
      <textarea value={code} onChange={e => setCode(e.target.value)} />
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
      </select>
      <button onClick={compileCode}>Compilar</button>
      <div>
        <h2>Resultado:</h2>
        <pre>{result}</pre>
      </div>
    </div> */}
                        <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#FF5F56" />
                            <circle cx="26" cy="6" r="6" fill="#FFBD2E" />
                            <circle cx="46" cy="6" r="6" fill="#27C93F" />
                        </svg>
                    </ConsoleBotao>
                    <ConsoleTexto name="" id="" cols="30" rows="40"></ConsoleTexto>
                </ConsoleArea>
            </Moldura>
        </div>
    );
}

export default Console;