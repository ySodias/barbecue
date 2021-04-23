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

//Bot
let mensagem = document.querySelector('#mensagem')
let resposta = document.querySelector('#resposta')
let chat = document.querySelector('#chat')
function mensagemUsuario(){

  if (mensagem.value.indexOf('localização') > -1){
    resposta.innerHTML = 'Você poderá encontrar a nossa localização no final da página'
    resposta.style.backgroundColor = '#6c757d';
    resposta.style.borderRadius = '5px';
    resposta.style.marginBottom= '10px';
    chat.style.height= '215px';
  }
  if(mensagem.value.indexOf('sobre')> -1){
    resposta.innerHTML = 'Você poderá encontrar sobre a empresa na guia sobre'
    resposta.style.backgroundColor = '#6c757d';
    resposta.style.borderRadius = '5px';
    resposta.style.marginBottom= '10px';
    chat.style.height= '215px';
  }
  if(mensagem.value.indexOf('horário de funcionamento')> -1){
    resposta.innerHTML = 'Funcionamos de segunda a segunda para sempre levar alegria, e churrasco de qualidade aos nossos clientes'
    resposta.style.backgroundColor = '#6c757d';
    resposta.style.borderRadius = '5px';
    resposta.style.marginBottom= '10px';
    chat.style.height= '235px';
  }
}

function fecharBot(){
  document.querySelector('#ze').style.setProperty("display", "none", "important");
}

let falabot = document.querySelector('#falabot')
let fotobot = document.querySelector('#foto-zezinho')
function ativarBot(){
  falabot.style.display='flex';
}
function desativaBot(){
  falabot.style.display='none';
}
function ativaChat(){
  fotobot.classList.remove('d-flex');
  fotobot.classList.add('d-none');
  chat.classList.remove('d-none');
  chat.classList.add('d-flex flex-column');
}