
var mensagem = document.querySelector('.Mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click', function(evento){
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')


if (email.value == "" || email.value.lenght == 0){

mensagem.textContent = 'Digite um email válido'
return


} else if (email.value.indexOf ('@')== -1) {
    mensagem.textContent = 'O email informado é inválido'
return

}
else {
    mensagem.textContent = 'O email' + email.value +' foi cadastrado com sucesso!'
    console.log (email.value.indexOf ('@'))}
}

)



// if (true && true)
//  {console.log ('verdade verdadeira')}


//  if (true || true)
//  {console.log ('verdade verdadeira')}