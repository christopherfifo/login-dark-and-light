const mode = document.getElementById("mode_icon");

mode.addEventListener("click", () => {
  const form = document.getElementById("login_form");

  if (mode.classList.contains("fa-moon")) { //| se o mode moon for clicado ele faz
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return; //- fecha a ação
  }
//| se o mode sun for clicado ele faz
  mode.classList.remove("fa-sun");
  mode.classList.add("fa-moon");

  form.classList.remove("dark");
});

function mostrarSenha(){
  var inputPass = document.getElementById('password-p') //| pega o id do input
  var modeSenha = document.getElementById('olho')//| pega o id do mode (figura)

  if(inputPass.type === 'password' ){
    inputPass.setAttribute('type','text')
    modeSenha.classList.replace('fa-eye','fa-eye-slash')
    return; //- se o tipo da variavel for senha, ele muda o type e o incone
  }
  inputPass.setAttribute('type','password')
  modeSenha.classList.replace('fa-eye-slash','fa-eye')

}
