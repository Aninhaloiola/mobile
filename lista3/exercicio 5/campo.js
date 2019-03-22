function liberar()
{
var nome = document.getElementById("nome");    
var sobre= document.getElementById("senha");
if(nome.value != "")
{
    sobre.disabled=false;
}
};
function liberarSenha1()
{
var senha = document.getElementById("senha");    
var senha2 = document.getElementById("senha2");
if(senha.value != ""  )
{

    senha2.disabled=false;

     
}
};

function liberarSenha2()
{

var senha = document.getElementById("senha");    

var senha2 = document.getElementById("senha2");

var botao = document.getElementById("botao");
if(senha2.value != ""){
    if(senha.value == senha2.value)
    {
        botao.disabled = false;


    }else{
        botao.disabled = true;
         alert("Digite senhas iguais");
    }    
}else{
    botao.disabled = true;
     
}    
if(senha.value.length >= 6 && senha.value.length <= 10) {


    }else{
        alert("senha deve conter de 6 a 10 caracteres");
    }
};
  
