import React, { useState } from "react";
import './App.scss';

function calculaIMC(altura, peso) {
  if (!altura || !peso) return { imc: "", category: "" };

  const alturaM = altura / 100;
  const imc = peso / (alturaM * alturaM);
  let category = "";

  if (imc < 18.5) category = "Abaixo do Peso";
  else if (imc < 24.9) category = "Peso Normal";
  else if (imc < 29.9) category = "Sobrepeso";
  else category = "Obesidade";

  return { imc: imc.toFixed(2), category };
}

export default function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const { imc, category } = calculaIMC(Number(altura), Number(peso));

  return (
    <main>
      <h1>Calculadora IMC</h1>
      <form>
        <div class="altura">
          <label>
            Altura (cm):
            <input
              type="number"
              value={altura}
              onChange={e => setAltura(e.target.value)}
              placeholder="ex. 170"
              min="0"
            />
          </label>
        </div>
        <div class="peso">
          <label>
            Peso (kg):
            <input
              type="number"
              value={peso}
              onChange={e => setPeso(e.target.value)}
              placeholder="ex. 65"
              min="0"
            />
          </label>
        </div>
      </form>
      {imc && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{imc}</td>
              <td>{category}</td>
            </tr>
          </tbody>
        </table>
      )}
    </main>
  );
}