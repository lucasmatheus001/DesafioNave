

//imprime todos os elementos com idade inferiores a 30
function exercise08(){
    itensArray.map((e) => e.age < 30 ? console.log(e.first_name + ' ' + e.last_name) : null)
}