import { useState } from "react"

const Formulario = () => {
 let [materiaA, setMateriaA] = useState(0)
 let [materiaB, setMateriaB] = useState(0)
 let [materiaC, setMateriaC] = useState(0)

 const renderizaResultado = () => {
  const soma = materiaA + materiaB + materiaC
  const media = soma / 3

  if (media >= 7) {
   return (
    <p>
     Você foi Aprovado!
    </p>
   )
  } else {
    return (
     <p>
      Você não foi Aprovado.
     </p>
    )
  }
 }

 return (
  <form>
   <input type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
   <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
   <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
   {renderizaResultado()}
   {materiaA}
   {materiaB}
   {materiaC}
  </form>
 )
}

export default Formulario