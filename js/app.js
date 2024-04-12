//alert("Olá") aparece uma notificação com o tetxo Olá

//function nomedaFç(parametros) {###} função declarada

//const nomeDaFç = function(){} função anonima

//const nomeDaFç = () => {}

let btn = document.getElementById("btn")
let resultado = document.getElementById("resultado")

let arrPessoa = []

function cadastrar() {


    let nome = document.getElementById("nome").value
   
    let categoria = document.getElementById("categoria").value
    //-------------------------------------------------------
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    //-------------------------------------------------------

    const pessoa = {
        nome: nome,
        categoria: categoria,
        peso: peso,
        altura: altura,
        imc: calculaIMC(peso, altura),
        categoriaImc: categoriaIMC(calculaIMC(peso, altura))
    }

    arrPessoa.push(pessoa)
    imprimir()
    console.log(arrPessoa)



    //resultado.innerHTML = "NOME: " + nome + " SOBRENOME: " + sobrenome + "."



}

function calculaIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function categoriaIMC(imc) {

    if (imc <= 18.5) {
        return "Abaixo do normal"
    } else if (imc <= 24.9) {
        return "normal"
    } else if (imc <= 29.9) {
        return "Sobrepeso"
    } else if (imc <= 34.9) {
        return "Obesidade Grau I"
    } else if (imc <= 39.9) {
        return "Obesidade Grau II"
    } else {
        return "Obesidade Grau III"
    }
}
function imprimir() {
    resultado.innerHTML = ''

    for (let i = 0; i < arrPessoa.length; i++) {
        resultado.innerHTML += `
        <tr> 
                    <td>${arrPessoa[i].nome}</td>
                    <td>${arrPessoa[i].categoria}</td>
                    <td>${arrPessoa[i].altura}</td>
                    <td>${arrPessoa[i].peso}</td>
                    <td> ${arrPessoa[i].imc.toFixed(2)}</td>
                    <td>${arrPessoa[i].categoriaImc}</td>

                    </tr>`
        
        
        
        //<p> NOME: ${arrPessoa[i].nome} <br> SOBRENOME: ${arrPessoa[i].sobrenome} <br> CATEGORIA: ${arrPessoa[i].categoria} <br> IMC: ${arrPessoa[i].imc.toFixed(2)} <br> Categoria IMC: ${arrPessoa[i].categoriaImc}. </p>`
      //  console.log(nome, sobrenome, categoria)
    }
}


btn.addEventListener('click', cadastrar)



