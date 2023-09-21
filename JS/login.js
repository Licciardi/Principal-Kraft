const senha  = document.querySelector("#senha")
const confirm_senha = document.querySelector("#senha_confirm")
const msg_senha_diferente = document.querySelector("#msg_senha_diferente")
const container_data = document.querySelector("#container-data")
const tipo_cliente = document.querySelectorAll(".tipo_cliente")
const container_cnpj = document.querySelector("#container-cnpj")
console.log(tipo_cliente)

confirm_senha.addEventListener("blur",()=>{
    if(senha.value!=confirm_senha.value){
        msg_senha_diferente.textContent = "Erro: senhas diferentes. Digite a mesma senha em ambos os campos de senha!!!"
        confirm_senha.value = ""
    }
})

tipo_cliente.forEach((campo)=>{campo.addEventListener("click",()=>{
    console.log(campo.value)
    if(campo.value == "empresa"){
        container_data.classList.add("none")
        container_cnpj.classList.remove("none")
    }else{
        container_data.classList.remove("none")
        container_cnpj.classList.add("none")
    }
})})
