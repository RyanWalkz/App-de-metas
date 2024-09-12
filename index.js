const { select } = require('@inquirer/prompts')
const start=()=>{
    while(true){
        let opcao='Cadastrar'
        switch(opcao){
            case 'cadastrar':
                console.log('Vamos cadastrar')
                break
            case 'Listar':
                console.log('Vamos listar')
                break
            case 'sair':
                return 
        }
    }

}

start()