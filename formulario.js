const form = document.getElementById("formulario");
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();

});

var opcaoCheck = [];
function checkInputs(){
    let formValido = true;

    const spanNome = document.getElementById("spanNome");
    const spanTel = document.getElementById("spanTel");
    const spanEncontrado = document.getElementById("spanEncontrado");

    const verificaNome = document.getElementById("nome").value;
    const verificaTel = document.getElementById("tele").value;

    var teste = verificaNome.indexOf(" ");
    console.log(teste);
    if((verificaNome === "") || (verificaNome.indexOf(" ") < 0)){
        document.getElementById("nome").style.borderColor = "red";
       spanNome.innerHTML = "Por favor insira seu Nome e Sobrenome. <br>";
       formValido = false;
    }

    if((verificaTel === "") || (verificaTel.length < 8)){
        document.getElementById("tele").style.borderColor = "red";
        spanTel.innerHTML = "Favor verificar o número de telefone. <br>";
        formValido = false;
    }

    const verificaCheck1 = document.getElementById("check1");
    const verificaCheck2 = document.getElementById("check2");
    const verificaCheck3 = document.getElementById("check3");
    const verificaCheck4 = document.getElementById("check4"); 
    cont = 0;
    console.log(verificaCheck1.value);
    if (verificaCheck1.checked == true){ 
           opcaoCheck[cont] = verificaCheck1.value;
           cont++;
    }
    if (verificaCheck2.checked == true){ 
        opcaoCheck[cont] = verificaCheck2.value;
        cont++;
    }
    if (verificaCheck3.checked == true){ 
        opcaoCheck[cont] = verificaCheck3.value;
        cont++;
    }
    if (verificaCheck4.checked == true){ 
        opcaoCheck[cont] = verificaCheck4.value;
        cont++;
    }
    
    if(cont==0){
        spanEncontrado.innerHTML = "Escolha ao menos 1 opção.";
        formValido = false;
        verificaCheck1.style.borderColor = "red";
        verificaCheck2.style.borderColor = "red";
        verificaCheck3.style.borderColor = "red";
        verificaCheck4.style.borderColor = "red";
    }

    
    if(formValido == true){
        //janela = document.getElementById("modalExemplo");
        //botao.dataTarget = "#modalExemplo";
        //janela => modal({
        //    show: true
        //  });
        //const caixa = document.getElementById("caixa");
        //caixa.style.display = "block";
        document.getElementById("cNome").innerHTML = document.getElementById("nome").value;
        document.getElementById("cTel").innerHTML = document.getElementById("tele").value;
        document.getElementById("cEmail").innerHTML = document.getElementById("mail").value;
        document.getElementById("cCurso").innerHTML = opcaoCheck;
        document.getElementById("cDesc").innerHTML = document.getElementById("textArea").value;

        const verificaRadio1 = document.getElementById("radio1");
        const verificaRadio2 = document.getElementById("radio2");
        const verificaRadio3 = document.getElementById("radio3");
        const verificaRadio4 = document.getElementById("radio4");
        if (verificaRadio1.checked == true){ 
            document.getElementById("cMot").innerHTML = verificaRadio1.value;
        }
        else if (verificaRadio2.checked == true){ 
            document.getElementById("cMot").innerHTML = verificaRadio2.value;
        }
        else if (verificaRadio3.checked == true){ 
            document.getElementById("cMot").innerHTML = verificaRadio3.value;
        }
        else{ 
            document.getElementById("cMot").innerHTML = verificaRadio4.value;
        }
        abreModal();
    }

}
function abreModal() {
    $("#modalExemplo").modal({
         show: true
       });
    }

function voltar(){
    sessao = document.getElementById("sessaoForm");
    sessao.style.display = "block";

    const caixa = document.getElementById("caixa");
    caixa.style.display = "none";
}
