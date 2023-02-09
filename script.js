// PRÁTICA GUIADA I
// versão concatenação
function imprimirStringNomeECor(nome, cor, citacao){
    const frase = ('A cor favorita de ' + nome + ' é ' + cor + '. A citação favorita é "' + citacao + '".')
    console.log(frase)
}

const nomeUsuario = prompt('Insira seu nome: ')
const corUsuario = prompt('Insira sua cor favorita: ')
const citacaoUsuario = prompt('Qual a sua citação favorita? ')

imprimirStringNomeECor(nomeUsuario,corUsuario, citacaoUsuario) 

// versão template strings
function imprimirStringNomeECorTemplateString(nome, cor, citacao){
    // visualização I:
    //const frase = (`A cor favorita de ${nome} é ${cor}. A citação favorita é "${citacao}".`)

    // visualização II:

    const frase = `
    Nome: ${nome}
    Cor favorita: ${cor}
    Citaçao favorita: ${citacao}`

    const incluiA = nome.includes('a')

    console.log('Versão com template strings:')
    console.log(frase)
    console.log('Quantidade de caracteres no nome: ', nome.length)
    console.log('O nome possui a letra "a": ', incluiA)
}

const nomeUsuario2 = prompt('Insira seu nome: ')
const corUsuario2 = prompt('Insira sua cor favorita: ')
const citacaoUsuario2 = prompt('Qual a sua citação favorita? ')

imprimirStringNomeECorTemplateString(nomeUsuario2,corUsuario2, citacaoUsuario2)


// PRÁTICA GUIADA II
const pegaNomeEmail = (nome, email) => {
    const frase = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`
    console.log(frase)

    const fraseSubstituida = frase.replaceAll('R', 'X').replaceAll('r', 'x')
    console.log(fraseSubstituida)

    const incluiArroba = email.includes('@')
    console.log('O email enviado inclui "@"?', incluiArroba)
}

const nomeUser = prompt('Qual o seu nome? ')
const emailUser = prompt('Qual o seu e-mail? ')

pegaNomeEmail(nomeUser, emailUser)

