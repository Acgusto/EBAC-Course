import './perfil.css'

const Perfil = () => {
 const usuario = {
  nome: "Augusto",
  avatar: "https://github.com/Acgusto.png"
 }

 return (
  <div>
   <img className='perfil-avatar' src={usuario.avatar} alt="" />
   <h3 className='perfil-titulo'>
    {usuario.nome}
   </h3>
  </div>
 )
}

export default Perfil