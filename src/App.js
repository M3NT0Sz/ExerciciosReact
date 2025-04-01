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
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');
  const [raio, setRaio] = useState('');
  const [base, setBase] = useState('');
  const [expoente, setExpoente] = useState('');
  const [metros, setMetros] = useState('');
  const [quilometros, setQuilometros] = useState('');
  const [peso, setPeso] = useState('');
  const [alturaIMC, setAlturaIMC] = useState('');
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [dias, setDias] = useState('');

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
  const calcularPerimetroRetangulo = () => {
    const perimetro = 2 * (Number(largura) + Number(altura));
    alert(`Perímetro do retângulo: ${perimetro}`);
  };

  const calcularAreaRetangulo = () => {
    const area = Number(largura) * Number(altura);
    alert(`Área do retângulo: ${area}`);
  };

  const calcularAreaCirculo = () => {
    const area = Math.PI * Math.pow(Number(raio), 2);
    alert(`Área do círculo: ${area}`);
  };

  const calcularPerimetroCirculo = () => {
    const perimetro = 2 * Math.PI * Number(raio);
    alert(`Perímetro do círculo: ${perimetro}`);
  };

  const calcularPotencia = () => {
    const resultado = Math.pow(Number(base), Number(expoente));
    alert(`Resultado da potência: ${resultado}`);
  };

  const converterMetrosParaCentimetros = () => {
    const centimetros = Number(metros) * 100;
    alert(`Valor em centímetros: ${centimetros}`);
  };

  const converterQuilometrosParaMilhas = () => {
    const milhas = Number(quilometros) * 0.621371;
    alert(`Valor em milhas: ${milhas}`);
  };

  const calcularIMC = () => {
    const imc = Number(peso) / Math.pow(Number(alturaIMC), 2);
    alert(`Seu IMC: ${imc}`);
  };

  const calcularPrecoComDesconto = () => {
    const precoFinal = Number(preco) - (Number(preco) * (Number(desconto) / 100));
    alert(`Preço com desconto: ${precoFinal}`);
  };

  const calcularJurosSimples = () => {
    const juros = Number(capital) * (Number(taxa) / 100) * Number(periodo);
    alert(`Juros simples: ${juros}`);
  };

  const calcularMontanteComJurosCompostos = () => {
    const montante = Number(capital) * Math.pow(1 + (Number(taxa) / 100), Number(periodo));
    alert(`Montante com juros compostos: ${montante}`);
  };

  const converterDiasParaHorasMinutosSegundos = () => {
    const horas = Number(dias) * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    alert(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`);
  };

  return (
    <div>
      <h1>Olá Mundo!</h1>
      <p>Contador: {contador}</p>
      <Botao texto="Contador + 1" aoClicar={clicarBotao1} />
      <hr />
      <h2>Calculadora de Soma</h2>
      <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder='Informe o valor 1' />
      <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder='Informe o valor 2' />
      <Botao texto="Soma" aoClicar={clicarBotao2} />
      <hr />
      <h2>Calculadora de Média Ex1</h2>
      <input type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} placeholder='Informe a primeira nota' />
      <input type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} placeholder='Informe a segunda nota' />
      <input type="text" value={nota3} onChange={(e) => setNota3(e.target.value)} placeholder='Informe a terceira nota' />
      <Botao texto="Média" aoClicar={calcularMedia} />
      <hr />
      <h2>Celsius para Fahrenheit Ex2</h2>
      <input type="text" value={celsius} onChange={(e) => setCelsius(e.target.value)} placeholder='Informe a temperatura em Celsius' />
      <Botao texto="Converter" aoClicar={converterCelsiusParaFahrenheit} />
      <hr />
      <h2>Fahrenheit para Celsius Ex3</h2>
      <input type="text" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} placeholder='Informe a temperatura em Fahrenheit' />
      <Botao texto="Converter" aoClicar={converterFahrenheitParaCelsius} />
      <hr />
      <h2>Área do Retângulo Ex4</h2>
      <input type="text" value={largura} onChange={(e) => setLargura(e.target.value)} placeholder='Informe a largura' />
      <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder='Informe a altura' />
      <Botao texto="Calcular Área" aoClicar={calcularAreaRetangulo} />
      <hr />
      <h2>Área do Círculo Ex5</h2>
      <input type="text" value={raio} onChange={(e) => setRaio(e.target.value)} placeholder='Informe o raio' />
      <Botao texto="Calcular Área" aoClicar={calcularAreaCirculo} />
      <hr />
      <h2>Perímetro do Retângulo Ex6</h2>
      <input type="text" value={largura} onChange={(e) => setLargura(e.target.value)} placeholder='Informe a largura' />
      <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} placeholder='Informe a altura' />
      <Botao texto="Calcular Perímetro" aoClicar={calcularPerimetroRetangulo} />
      <Botao texto="Calcular Área" aoClicar={calcularAreaRetangulo} />
      <hr />
      <h2>Área e Perímetro do Círculo Ex7</h2>
      <input type="text" value={raio} onChange={(e) => setRaio(e.target.value)} placeholder='Informe o raio' />
      <Botao texto="Calcular Área" aoClicar={calcularAreaCirculo} />
      <Botao texto="Calcular Perímetro" aoClicar={calcularPerimetroCirculo} />
      <hr />
      <h2>Potência Ex8</h2>
      <input type="text" value={base} onChange={(e) => setBase(e.target.value)} placeholder='Informe a base' />
      <input type="text" value={expoente} onChange={(e) => setExpoente(e.target.value)} placeholder='Informe o expoente' />
      <Botao texto="Calcular Potência" aoClicar={calcularPotencia} />
      <hr />
      <h2>Conversão de Metros para Centímetros Ex9</h2>
      <input type="text" value={metros} onChange={(e) => setMetros(e.target.value)} placeholder='Informe o valor em metros' />
      <Botao texto="Converter" aoClicar={converterMetrosParaCentimetros} />
      <hr />
      <h2>Conversão de Quilômetros para Milhas Ex10</h2>
      <input type="text" value={quilometros} onChange={(e) => setQuilometros(e.target.value)} placeholder='Informe o valor em quilômetros' />
      <Botao texto="Converter" aoClicar={converterQuilometrosParaMilhas} />
      <hr />
      <h2>IMC Ex11</h2>
      <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder='Informe o peso (kg)' />
      <input type="text" value={alturaIMC} onChange={(e) => setAlturaIMC(e.target.value)} placeholder='Informe a altura (m)' />
      <Botao texto="Calcular IMC" aoClicar={calcularIMC} />
      <hr />
      <h2>Preço com Desconto Ex12</h2>
      <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder='Informe o preço' />
      <input type="text" value={desconto} onChange={(e) => setDesconto(e.target.value)} placeholder='Informe o desconto (%)' />
      <Botao texto="Calcular Preço" aoClicar={calcularPrecoComDesconto} />
      <hr />
      <h2>Juros Simples Ex13</h2>
      <input type="text" value={capital} onChange={(e) => setCapital(e.target.value)} placeholder='Informe o capital' />
      <input type="text" value={taxa} onChange={(e) => setTaxa(e.target.value)} placeholder='Informe a taxa (%)' />
      <input type="text" value={periodo} onChange={(e) => setPeriodo(e.target.value)} placeholder='Informe o período' />
      <Botao texto="Calcular Juros Simples" aoClicar={calcularJurosSimples} />
      <hr />
      <h2>Montante com Juros Compostos Ex14</h2>
      <input type="text" value={capital} onChange={(e) => setCapital(e.target.value)} placeholder='Informe o capital' />
      <input type="text" value={taxa} onChange={(e) => setTaxa(e.target.value)} placeholder='Informe a taxa (%)' />
      <input type="text" value={periodo} onChange={(e) => setPeriodo(e.target.value)} placeholder='Informe o período' />
      <Botao texto="Calcular Montante" aoClicar={calcularMontanteComJurosCompostos} />
      <hr />
      <h2>Conversão de Dias para Horas, Minutos e Segundos Ex15</h2>
      <input type="text" value={dias} onChange={(e) => setDias(e.target.value)} placeholder='Informe o valor em dias' />
      <Botao texto="Converter" aoClicar={converterDiasParaHorasMinutosSegundos} />
      <hr />
    </div>
  );
}

export default App;
