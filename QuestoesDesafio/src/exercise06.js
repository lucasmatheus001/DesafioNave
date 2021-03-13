

//calculado a soma das idades utilizando o metodo reduce
function exercise06(){
    let array = []
    itensArray.map((e) => array.push(e.age))
    console.log(array.reduce((a, b) => a + b ))
}