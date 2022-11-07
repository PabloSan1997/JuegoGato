import { nombre } from "./efecto.js";
import { inicio, convertir, reiniciar ,ganar, dibujar} from "./funciones.js";
inicio();
nombre();
reiniciar();
let caja = document.querySelectorAll(".cuadro");

if(localStorage.ganador=='perdedor'){
    for (let i = 0; i < caja.length; i++) {
        caja[i].addEventListener("click", selecionar);
      }
}
function selecionar() {
  if (this.firstElementChild.textContent == "") {
    if (localStorage.turno=='1') {
      this.firstElementChild.textContent = "X";
      localStorage.turno='2'
    } else {
      this.firstElementChild.textContent = "O";
      localStorage.turno='1'
    }
  }
  let generar = [];
  for (let i = 0; i < caja.length; i++) {
    generar[i] = caja[i].firstElementChild.textContent;
  }
  localStorage.tablero = generar;
 let ganador= ganar();
 if(ganador){
    for (let i = 0; i < caja.length; i++) {
        caja[i].removeEventListener("click", selecionar);
      }
      if(localStorage.turno=='2'){
        alert('Gana jugador 1');
      }else{
        alert('Gana jugador 2');
      }
      localStorage.ganador='ganador';
      dibujar();
 }
}
