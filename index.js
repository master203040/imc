const botonResultado = document.querySelector("#btnResultado");

botonResultado.addEventListener("click", function () {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const mostrar = document.querySelector("#resultadoImc");
  const Img = document.querySelector("#img");
  const resultado = parseFloat(peso) / parseFloat(altura * altura);

  if (parseInt(resultado) < 18.5) {
    
    Img.src = "./img/bajoPeso.jpg";
    mostrar.textContent = "Su imc es: " + resultado.toFixed(1);
    console.log(resultado);
  }
  else if (parseInt(resultado) < 25) {
    
    Img.src = "./img/pesoNormal.jpg";
    mostrar.textContent = "Su imc es: " + resultado.toFixed(1);
    console.log(resultado);
  } 
  else if (parseInt(resultado) < 30) {
    
    Img.src = "./img/sobrePeso.jpg";
    mostrar.textContent = "Su imc es: " + resultado.toFixed(1);
    console.log(resultado);
  }
   else if (parseInt(resultado) < 35) {
     
     Img.src = "./img/obecidadaUno.jpg";
     mostrar.textContent = "Su imc es: " + resultado.toFixed(1);
     console.log(resultado);
   } 
   else if (parseInt(resultado) < 40) {
     
     Img.src = "./img/obecidadDos.jpg";
     mostrar.textContent = "Su imc es: " + resultado.toFixed(1);
     console.log(resultado);
   } 
   else if (parseInt(resultado) >= 40) {
     
     Img.src = "./img/obecidadTres.jpg";
     mostrar.textContent = "Su imc es: " + resultado.toFixed(1);
     console.log(resultado);
   } else {
     mostrar.textContent = "Revise los datos digitados";
     console.log("Revise los datos digitados");
   }
});