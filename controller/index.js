var express = require('express');
var router = express.Router();
var Pessoa = require('../model/pessoas');
require('../mongo/mongoUtil')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  var idadePessoa = req.body.idade;
  var sexoPessoa = req.body.sexo;
  var rendaPessoa = req.body.renda;
  var carroPessoa = req.body.carro;

  if(carroPessoa == "on"){
    carroPessoa = true;
  }else{
    carroPessoa = false;
  }

  var pessoa = new Pessoa(idadePessoa, sexoPessoa, rendaPessoa, carroPessoa);

  insert(pessoa);
  find();

})

module.exports = router;
