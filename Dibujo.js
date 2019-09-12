var Texto = document.getElementById("IngresoDeLineas");
var Button = document.getElementById("Boton");
Button.addEventListener("click", DibujoPorClick);

var d = document.getElementById("Dibujito");
var Lienzo = d.getContext("2d");

function DibujoDeLinea (Color, XInicial, YInicial, XFinal,YFinal){
  Lienzo.beginPath();
  Lienzo.strokeStyle=Color;
  Lienzo.moveTo(XInicial, YInicial);
  Lienzo.lineTo(XFinal, YFinal);
  Lienzo.stroke();
  Lienzo.closePath();
}

function DibujoPorClick(){
   var NumeroDeLineas = parseInt (Texto.value);
   var Limite = 0;
   var Contador = 0;
   var Yi, Xf;
   var BMColorRed =  "#E11B10";
   var BMColorBlack = "#180204";
   var Ancho = d.width;
   var Largo = d.height;
   Limite = NumeroDeLineas;
   var LineasEnElLienzoX = Ancho/Limite;
   var LineasEnElLienzoY = Largo/Limite;

   for (Contador = 0; Contador < Limite; Contador++){
     Xf = LineasEnElLienzoX * Contador;
     Yi = LineasEnElLienzoY * (Contador + 1);
     DibujoDeLinea(BMColorRed, 1, Yi, Xf, 299);
   }

   DibujoDeLinea(BMColorBlack, 1, 1, 1, );
   DibujoDeLinea(BMColorBlack, 1, 299, 299, 299);

}
