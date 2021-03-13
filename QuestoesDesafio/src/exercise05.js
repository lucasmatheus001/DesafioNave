
let itensArray = [
    {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
    {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
    {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
    {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
]
// imprime uma mensagem de saudação com nome completo para cada objeto
function exercise05(){
    itensArray.map((e) => {console.log('Olá, ' + e.first_name + ' ' + e.last_name)})
}