const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart');
console.log('Alem de suas verificacoes, precisamos verifificar se voce esta na lista de presenca do horario');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce tem habilitacao? (Sim/Nao) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce nao tem habilitacao para entrar no Kart');
            }else{
                readLine.question("Qual seu nome:", nome =>{
                    switch(nome){
                        case 'Daniel' :
                            console.log('bem vindo ao Kart Daniel');
                            break;
                        case 'Flavia' :
                            console.log('bem vindo ao Kart Flavia');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                    }
                });
            }
        })
    }
})
