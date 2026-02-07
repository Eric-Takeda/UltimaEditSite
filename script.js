function mostrarFormulario() { //Cria a função
    document.getElementById("formulario").style.display = "block"; //Seleciona o elemento com Id formulário, o tornando visível
    document.getElementById("iframe").style.display = "none"; //O que tem o Id Iframe desaparece
}

function mostrarIframe() { //Aqui o Iframe aparece e o formulário desaparece
    document.getElementById("formulario").style.display = "none"; //O ".style.display" muda diretamente o estilo CSS
    document.getElementById("iframe").style.display = "block";

}

function botaoMenu(){
  let menu = document.getElementById("menuConteudo");
  if(menu.style.display === "block"){
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
