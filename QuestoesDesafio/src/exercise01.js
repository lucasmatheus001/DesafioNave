
//recebe como parametros 2 variáveis  e retorna a de maior valor
function exercise01(str1, str2){
    if(str1.length > str2.length){
      console.log(str1)
      return str1;
    }else if(str1.length < str2.length){
      console.log(str2)
      return str2;
    }
  }