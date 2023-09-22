const senha = document.querySelector("#senha")
const confirm_senha = document.querySelector("#senha_confirm")
const msg_senha_diferente = document.querySelector("#msg_senha_diferente")
const container_data = document.querySelector("#container-data")
const tipo_cliente = document.querySelectorAll(".tipo_cliente")
const container_cnpj = document.querySelector("#container-cnpj")
const campos = document.querySelectorAll(".flip-card__input")
const container_cpf = document.querySelector("#container-cpf")
const msg_cpf_invalido = document.querySelector("#msg_cpf_invalido")
const msg_cnpj_invalido = document.querySelector("#msg_cnpj_invalido")
const cpf = document.querySelector("#cpf")
const cnpj = document.querySelector("msg_cnpj_invalido")

confirm_senha.addEventListener("blur", () => {
    if (senha.value != confirm_senha.value) {
        msg_senha_diferente.textContent = "Erro: senhas diferentes. Digite a mesma senha em ambos os campos de senha!!!"
        senha.value = ""
        confirm_senha.value = ""
    } else {
        msg_senha_diferente.textContent = ""
        senha.value = ""
        confirm_senha = ""
    }
})



tipo_cliente.forEach((campo) => {
    campo.addEventListener("click", () => {
        if (campo.value == "empresa") {
            container_data.classList.add("none")
            container_cpf.classList.add("none")
            container_cnpj.classList.remove("none")
            msg_cpf_invalido.classList.add("none")
        } else {
            container_data.classList.remove("none")
            container_cnpj.classList.add("none")
            container_cpf.classList.remove("none")
            msg_cnpj_invalido.classList.add("none")
        }
    })
})


campos.forEach((campo) => {

    if (campo != "email_login" || campo != "senha_login")
        campo.addEventListener("blur", (e) => {
            let erro_cadastro_pessoa = false
            let erro_cadastro_empresa = false
            switch (campo.name) {
                case "cpf":
                    erro_cadastro_pessoa = exibeMsgCPF(campo.value)
                    break
                case "cnpj":
                    erro_cadastro_empresa = exibeMsgCNPJ(campo.value)
                    break
            }

            if(erro_cadastro_pessoa || erro_cadastro_empresa){
                e.preventDefault()
            }

        })
})


function exibeMsgCPF(cpf) {
    let vaiExibirMsgErro = false
    let pesos = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    let verificacao1 = verificaDigitosCPF(cpf, pesos, 9)
    pesos = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    let verificacao2 = verificaDigitosCPF(cpf, pesos, 10)
    if (cpf.length == 11 && verificacao1 && verificacao2)
        msg_cpf_invalido.classList.add("none")
    else {
        msg_cpf_invalido.classList.remove("none")
        vaiExibirMsgErro = true
    }
    return vaiExibirMsgErro
}

function verificaDigitosCPF(cpf, pesos, numDoDigito) {
    let multiplicacao = 0
    for (let i = 0; i < pesos.length; i++) {
        let mult = parseInt(cpf[i]) * pesos[i]
        multiplicacao += mult
    }
    let restoDivPor11 = multiplicacao % 11
    if (restoDivPor11 < 2) {
        return digVerificador == parseInt(cpf[numDoDigito])

    } else {
        digVerificador = 11 - restoDivPor11
        return digVerificador == parseInt(cpf[numDoDigito])
    }
}

function validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}

function exibeMsgCNPJ(cnpj) {
    console.log("VAamskdoferofvr")
    let vaiExibirMsgErro = false
    if (validarCNPJ(cnpj)) {
        msg_cnpj_invalido.classList.add("none")
    } else {
        msg_cnpj_invalido.classList.remove("none")
        vaiExibirMsgErro = true
    }
    return vaiExibirMsgErro
}

function validaTelefone(e, telefone) {
    if (telefone.length < 11) {
        e.preventDefault()

    }
}
