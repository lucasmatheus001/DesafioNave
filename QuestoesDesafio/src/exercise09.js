
//organiza em ordem decrescente os nomes  do array e desempata pelo id
function exercise09(){
    itensArray.sort((a, b) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.id > b.id) ? 1 : -1) : -1)
    console.log(itensArray)
}