//utilizando a api da viacep é retornado o endereço do usuário
function exercise04(){
  const CEP = 65636756;
  const NUMERO = (339).toString();
  const URL_TO_FETCH = 'https://viacep.com.br/ws/' + CEP + '/json/';

  fetch(URL_TO_FETCH, {
    method: 'get'
  })
  .then(function(response) {
    response.json()
    .then(function(result) {
      var str = result["logradouro"] +
                "," + result["bairro"]  +
                "," + NUMERO + "," +
                result["localidade"] + "/" +
                result["uf"];
      console.log(str);

    })
  })
  .catch(function(err) { 
    console.error(err);
  });
}