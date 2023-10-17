var saldo=0;

function consumo(tipo) {

    var valor = parseInt(document.getElementById("valor").value);

    var li = document.createElement("li");

    if(valor < 0){
        alert("oops! nao podes fazer isto")
        return
    }

    if(valor == 0){
        alert("Nada foi adicionado ou retirado")
        return
    }

    if(tipo == true){

        saldo += valor

        li.innerText = "Adicionou: " + valor + " €"

        li.className = "list-group-item list-group-item-success"
    }
    else if (tipo == false) {
        saldo -= valor

        li.innerText = "Retirou: " + valor + " €"

        li.className = "list-group-item list-group-item-danger"
    }

    
    //atualizar o saldo do utilizador a medida que vai retirando/adicionando
    document.getElementById("saldo").innerText = "Saldo = " + saldo + " €"

    //ver o historico das transações
    document.getElementById("lista").appendChild(li);

}
