
var mensagem = document.querySelector('.Mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click', function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
    email.value
    mensagem.textContent = 'O email '+ email.value +' foi cadastrado com sucesso!'
    
})

