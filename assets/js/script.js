let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
  let txtNome = document.querySelector('#txtNome')

  if (nome.value.length < 3){
    txtNome.innerHTML = 'Caracteres Inválidos'
    txtNome.style.color = 'red'
  }else{
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}
function validaEmail(){
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1 ||  email.value.indexOf('.com') == -1){
    txtEmail.innerHTML = 'Caracteres Inválidos'
    txtEmail.style.color = 'red'
  }else{
    txtEmail.innerHTML = 'Email válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >=100){
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  }else{
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk ==true){
    alert('Formulário enviado com sucesso')
  }else{
    alert('Dados inválidos verifique os campos em vermelho do formulário')
  }
}