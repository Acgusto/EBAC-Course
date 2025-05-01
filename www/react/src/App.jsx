import Formulario from "./components/Formulario"
import Perfil from "./components/Perfil"

function App() {
 const nome = "Augusto"

 function retornaNome() {
  return nome
 }

 const pessoa = {
  nome: "Maria"
 }

 let estaDeDia = true

 return(
  <div>
   <Perfil></Perfil>
   <h1>
    Olá, {pessoa.nome}
   </h1>
   <h2>
    Subtitulo
   </h2>
   {estaDeDia ? 'Bom dia!' : 'Boa Tarde!'}
   <Formulario></Formulario>
  </div>
 )
}

export default App