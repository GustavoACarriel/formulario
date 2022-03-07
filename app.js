function checkForm(form)
  {
    if(form.pwd1.value != form.pwd2.value){
      alert("Senhas não conferem!\n Verifique as senhas e tente novamente!");
      form.pwd1.focus();
      return false;
    }
    return true;
  }
  function logar(){
      alert("Login concluido com sucesso!!!");
  }
  function cadastrar(){
      alert("Usuario cadastrado!!!");
  }