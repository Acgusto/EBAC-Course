function funcaoMuitoPesada() {
 let execucoes = 0
 for (let i = 0; i < 1000000000; i++) {
  execucoes++
 }
 return execucoes
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject ) => {
 try {
  let execucoes = 0
  for (let i = 0; i < 1000000000; i++) {
   execucoes++
  }
  resolve(execucoes)
 } catch(e) {
  reject('Erro')
 }
})

const promiseComParametros = (login, senha) => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve(`Logado com o usuário: ${login}`)
  }, 3000)
 })
}

async function execucaoPrincipal() {
 console.log("inicio")

 promiseComParametros('gian@gmail.com', 123456).then((resultado) => {
  console.log(resultado)
 })

 /* console.log(funcaoMuitoPesada()) */
 /*  await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)) */
 try {
  const resultado = await funcaoMuitoPesadaPromise
  console.log(resultado)
 } catch(e) {
  console.log(e)
 }

 console.log("fim")
}

execucaoPrincipal()
