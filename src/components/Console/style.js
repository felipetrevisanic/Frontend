import { styled } from "styled-components";

export const Moldura = styled.div`
  width: 100%;
  height: 80vh;
  background-color: var(--dark-color);
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const ConsoleArea = styled.div`
  background-color: black;
  border: none;
  border-radius: 8px;
  width: 93%;
  height: 70vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const ConsoleTexto = styled.textarea`
  background-color: black;
  color: #FFFFFF;
  border: none;
  resize: none;
  outline: none;
  font-family: var(--console-font);
`;

export const ConsoleBotao = styled.div`
    margin-bottom: 16px;
`

