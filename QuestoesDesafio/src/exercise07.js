

//encontra o primeiro objeto com idade inferior a 25
function exercise07(){
    let pessoa = null
    pessoa = itensArray.find( itens =>  itens.age < 25 )
    if(pessoa){
        console.log(pessoa.first_name + ' ' + pessoa.last_name)
    }else{
        console.log('nenhum resultado foi encontrado')
    }
}