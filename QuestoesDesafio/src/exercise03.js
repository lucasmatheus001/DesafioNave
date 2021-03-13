
function exercise03(){
  //susbtitui todos os numeros por suas respectivas letras
  obj = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
  str = 'T35t3 d3 35t4g1o';

  for(let key in obj){
    var re = new RegExp(key, 'g');
    str = str.replace(re, obj[key]);
  }
  console.log(str);
}