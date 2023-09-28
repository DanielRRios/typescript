let {consultarCep} = require('correios-brasil');
let cep = "65077185";

consultarCep(cep).then((response) => {
    console.log(response);
    console.log(response.logradouro);
});