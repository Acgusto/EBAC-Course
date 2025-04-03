<script setup>
 const nome = "augusto"

 const meuObj = {
  nome: "Augusto",
  filmeFavorito: "Fallen Angels"
 }

 function dizOla(nome) {
  return `${nome} diz oi`;
 }

 const batman = "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
 const superman = "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"

 const botaoDesabilitado = false

 const gostaDoBatman = false
 const gostaDoSuperman = true

 const estaAutorizado = false
</script>

<template>
 <h1>
  Goodbye, {{ dizOla("paula") }}!
 </h1>

 <img v-if="gostaDoBatman" :src="batman" alt="">
 <img v-else-if="gostaDoSuperman" :src="superman" alt="">
 <h2 v-else>
  Não curte heróis da DC
 </h2>

 <h1 v-if="estaAutorizado">
  Bem-vindo
 </h1>
 <h1 v-else>
  Não possui acesso
 </h1>

 <button :disabled="!botaoDesabilitado">enviar mensagem</button>
</template>

<style scoped>
 img {
  max-width: 200px;
 }
</style>
