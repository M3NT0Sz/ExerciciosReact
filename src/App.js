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
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

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
  const converterCelsiusParaFahrenheit = () => {
    const fahrenheit = (Number(celsius) * 9 / 5) + 32;
    alert(`Resultado da conversão: ${fahrenheit}`);
  }
  const converterFahrenheitParaCelsius = () => {
    const celsius = (Number(fahrenheit) - 32) * 5 / 9;
    alert(`Resultado da conversão: ${celsius}`);
  }
  return (
    <div>
      <h1>Olá Mundo!</h1>
      <p>Contador: {contador}</p>
      <Botao texto="Batata 1" aoClicar={clicarBotao1} />
      <hr />
      <h2>Calculadora de Soma</h2>
      <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Informe o valor 1' />
      <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Informe o valor 2' />
      <Botao texto="Batata 2" aoClicar={clicarBotao2} />
      <hr />
      <h2>Calculadora de Média Ex1</h2>
      <input type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} placeholder='Informe a primeira nota' />
      <input type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} placeholder='Informe a segunda nota' />
      <input type="text" value={nota3} onChange={(e) => setNota3(e.target.value)} placeholder='Informe a terceira nota' />
      <Botao texto="Média" aoClicar={calcularMedia} />
      <hr />
      <h2>Calculadora de Celsius para Fahrenheit Ex2</h2>
      <input type="text" value={celsius} onChange={(e) => setCelsius(e.target.value)} placeholder='Informe a temperatura em Celsius' />
      <Botao texto="Converter" aoClicar={converterCelsiusParaFahrenheit} />
      <hr />
      <h2>Calculadora de Fahrenheit para Celsius Ex3</h2>
      <input type="text" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} placeholder='Informe a temperatura em Fahrenheit' />
      <Botao texto="Converter" aoClicar={converterFahrenheitParaCelsius} />
    </div>
  );
}

export default App;
