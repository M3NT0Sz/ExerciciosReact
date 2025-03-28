import './App.css';
import Botao from './components/Botao';
import React, { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const clicarBotao1 = () => {
    setContador(contador + 1);
  }
  const clicarBotao2 = () => {
    const soma = Number(valor1) + Number(valor2);
    alert(`Resultado da soma: ${soma}`);
  }
  const calcularMedia = () => {
    const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    alert(`Resultado da média: ${media}`);
  }
  return (
    <div>
      <h1>Olá Mundo!</h1>
      <p>Contador: {contador}</p>
      <Botao texto="Batata 1" aoClicar={clicarBotao1} />
      <hr />
      <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Informe o valor 1' />
      <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Informe o valor 2' />
      <Botao texto="Batata 2" aoClicar={clicarBotao2} />
      <hr />

      <input type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} placeholder='Informe a primeira nota' />
      <input type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} placeholder='Informe a segunda nota' />
      <input type="text" value={nota3} onChange={(e) => setNota3(e.target.value)} placeholder='Informe a terceira nota' />
      <Botao texto="Média" aoClicar={calcularMedia} />
      
    </div>
  );
}

export default App;
