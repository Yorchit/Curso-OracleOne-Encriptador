let textarea = document.getElementById("comentario");

function soloMinusculas(texto){
  let sololetras = /^[a-za z]+$/;
  return sololetras.test(texto);
}


function encriptartext(){
  let reemtext = document.getElementById("comentario").value;
  let textoencriptado = reemtext.replace(/[e]/gi, "enter").replace(/[i]/gi, "imes").replace(/[a]/gi, "ai").replace(/[o]/gi, "ober").replace(/[u]/gi, "ufat");
  
  if(reemtext == ""){
    alert("Ingrese un texto para encriptar")
  }else 

  if(soloMinusculas(textoencriptado) === true){
    document.getElementById("cajaImgtext").style.display = "none";
    console.log(textoencriptado);
    document.getElementById("sinmensaje").innerHTML=textoencriptado
  }else
    alert("ingrese solo minusculas")
 
  textarea.value = "";
  textarea.focus();

}

let bottonenc = document.querySelector("button1");
button1.onclick = encriptartext;


 
function desencriptartext(){
  let reemtext2 = document.getElementById("comentario").value;
  let textodesencriptado = reemtext2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  if(reemtext2 == ""){
    alert("Ingrese texto para desencriptar")
  }else

  if(soloMinusculas(textodesencriptado) === true){
    document.getElementById("cajaImgtext").style.display = "none";
    console.log(textodesencriptado);
    document.getElementById("sinmensaje").innerHTML=textodesencriptado;
  }else
    alert("ingrese solo minusculas")
  
  textarea.value = "";
  textarea.focus();
}

let buttondesenc = document.querySelector("button2");
button2.onclick = desencriptartext;


function copiaTexto(){
  var copiParrafo = document.getElementById("sinmensaje");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", copiParrafo.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Se compio texto");
  console.log(copiaTexto)
}

let copiartext = document.querySelector("button3");
button3.onclick = copiaTexto; 


