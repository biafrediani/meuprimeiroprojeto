const primeiro = document.getElementById ('primeiro')
const segundo = document.getElementById ('segundo')

const soma = document.getElementById ('soma')
const sub = document.getElementById ('sub')
const multi = document.getElementById ('multi')
const divi = document.getElementById ('divi')

const resultado = document.getElementById ('resultado')

// Criando uma variável para receber o resultado da conta
let conta

// Criando uma variável para receber o que estiver no input primeiro numero
let primeiro_numero

// Criando uma variável para receber o que estiver no input segundo numero
let segundo_numero

// Criando a função do botão 
soma.addEventListener ('click', () => {
     primeiro_numero = parseInt(primeiro.value)
     segundo_numero = parseInt(segundo.value)
     conta = primeiro_numero + segundo_numero
     resultado.value = conta
 })

 sub.addEventListener ('click', () => {
     primeiro_numero = parseInt(primeiro.value)
     segundo_numero = parseInt(segundo.value)
     conta = primeiro_numero - segundo_numero
     resultado.value = conta
 })

 multi.addEventListener ('click', () => {
     primeiro_numero = parseInt(primeiro.value)
     segundo_numero = parseInt(segundo.value)
     conta = primeiro_numero * segundo_numero
     resultado.value = conta
 })

 divi.addEventListener ('click', () => {
     primeiro_numero = parseInt(primeiro.value)
     segundo_numero = parseInt(segundo.value)
     conta = primeiro_numero / segundo_numero
     resultado.value = conta
 })

