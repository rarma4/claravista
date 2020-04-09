function abreFechaMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function valida_campus(){
  let nome = document.getElementById("inputName").value;
  var empresa = document.getElementById("inputEmpresa").value;
  var cargo = document.getElementById("inputCargo").value;
  var email = document.getElementById("inputEmail").value;
  var emailconfirm = document.getElementById("inputConfEmail").value;
  var tel = document.getElementById("inputTel").value;
  var msg = document.getElementById("inputMsg").value;

  if(nome == ""){
  Swal.fire(
    'Atenção',
    'O campo "nome" não pode estar vazio...',
    'error'
  )
  meu_form.nome.focus();
  return false;
  }else{
    
  }
  if(empresa==""){
    Swal.fire(
      'Atenção',
      'O campo "Empresa" não pode estar vazio...',
      'error'
    )
    meu_form.empresa.focus();
    return false;
  }
  if(cargo==""){
    Swal.fire(
      'Atenção',
      'O campo "Cargo" não pode estar vazio...',
      'error'
    )
    meu_form.cargo.focus();
    return false;
  }
  if(email == "" || emailconfirm == ""){
    Swal.fire(
      'Atenção',
      'O campo e-mail e confirmação não pode estar vazio...',
      'error'
    )
    meu_form.email.focus();
    return false;
  }
  if(email != emailconfirm){
    Swal.fire(
      'Atenção',
      'O campo e-mail e confirmação não são iguais',
      'error'
    )
    meu_form.email.focus();
    return false;
  }
  if(tel==""){
    Swal.fire(
      'Atenção',
      'O campo "Telefone" não pode estar vazio...',
      'error'
    )
    meu_form.tel.focus();
    return false;
  }
  if(msg==""){
    Swal.fire(
      'Atenção',
      'Digite sua mensagem...',
      'error'
    )
    meu_form.msg.focus();
    return false;
  }
}