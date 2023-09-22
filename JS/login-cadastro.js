const senha  = document.querySelector("#senha")
const confirm_senha = document.querySelector("#senha_confirm")
const msg_senha_diferente = document.querySelector("#msg_senha_diferente")
const container_data = document.querySelector("#container-data")
const tipo_cliente = document.querySelectorAll(".tipo_cliente")
const container_cnpj = document.querySelector("#container-cnpj")
const campos = document.querySelectorAll(".flip-card__input")

confirm_senha.addEventListener("blur",()=>{
    if(senha.value!=confirm_senha.value){
        msg_senha_diferente.textContent = "Erro: senhas diferentes. Digite a mesma senha em ambos os campos de senha!!!"
        senha.value = ""
        confirm_senha.value = ""
    }else{
        msg_senha_diferente.textContent = ""
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


campos.forEach((campo)=>{
    if(campo != "email_login" || campo != "senha_login")
    campo.addEventListener("blur",()=>{
        switch(campo){
            case "CNPJ":
                console.log("HI!!!")
            break;

            case "nome":




        }
    })
})
