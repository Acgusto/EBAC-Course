import { useState } from 'react'
import './App.css'

function App() {
 let [height, setHeight] = useState(0);
 let [weight, setWeight] = useState(0);

 const calculaIMC = () => {
  if (height > 0) {
   return ((weight / (height * height)))
  }
  return 0;
 }

 const imc = calculaIMC();

 const classifica = () => {
  if (imc < 18.5) {
   return "Magreza"
  }
  if (imc > 18.5 && imc < 24.9) {
   return "Normal"
  }
  if (imc > 25 && imc < 29.9) {
   return "Sobrepeso"
  }
  if (imc > 30 && imc < 34.9) {
   return "Obesidade Grau I"
  }
  if (imc > 35 && imc < 39.9) {
   return "Obesidade Grau II"
  }
  return "Obesidade Grau III"
 }

 return (
  <>
   <h1>
    Calcula IMC
   </h1>
   <div className="calculator">
    <div className="values">
     <h3>
      Altura: {height} M
     </h3>
     <input type="number" step={0.01} value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} placeholder='Digite sua altura em metros' />
     <h3>
      Peso: {weight} Kg
     </h3>
     <input type="number" step={0.01} value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} placeholder='Digite seu peso em Kg' />
    </div>
    <h3>
     IMC
    </h3>
    <div className="result">
     <p>
      {imc.toFixed(2)}
     </p>
     <p>
      {classifica()}
     </p>
    </div>
   </div>
  </>
 )
}

export default App