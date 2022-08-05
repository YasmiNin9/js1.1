// exercício com janela prompt para coletar dados do usuário e tratar eles

var nome = window.prompt('Olá, pode me dizer seu nome?') // coleta os dados e armazena // trata eles ↓
    document.write(` <h2> Olá, ${nome}! Aqui estão informações sobre seu nome...<br>`)  
    document.write(` Seu nome tem <strong> ${nome.length} </strong> letras.<br>`)
    document.write(` Seu nome em maiúsculas é <strong> ${nome.toUpperCase()}. </strong>`)


