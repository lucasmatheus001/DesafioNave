
function exercise02(){
    //saída gerada substitui todos os numeros por '$'
    str = 'teste 1 de 2 string 3';
    str = str.replace(/[0-9]/g, '$');

    console.log(str);
}