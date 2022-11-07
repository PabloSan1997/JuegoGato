function inicio() {
  if (localStorage.tablero == undefined) {
    localStorage.tablero = ",,,,,,,,";
    localStorage.turno = 1;
    localStorage.ganador='perdedor';
  }
  let tablero = document.querySelectorAll(".cuadro");
  let cadena = convertir(localStorage.tablero);
  for (let i = 0; i < tablero.length; i++) {
    tablero[i].firstElementChild.textContent = cadena[i];
  }
}
function convertir(texto) {
  let cadena = texto.split(",");
  return cadena;
}
function reiniciar() {
  document.querySelector(".tit").addEventListener("click", function () {
    localStorage.ganador='perdedor';
    let checar = confirm("¿Desea reiniciar el juego?");
    if (checar) {
      localStorage.tablero = ",,,,,,,,";
      localStorage.turno = 1;
      location.reload();
    }
  });
}
function ganar(){
    let aver = convertir(localStorage.tablero);
    let cad=[];
    let res = 0;
    for(let i=0;i<3;i++){
        cad[i]=[];
        for(let j=0;j<3;j++){
            cad[i][j]=aver[res];
            res++;
        }
    }
    for(let i=0;i<3;i++){
        let res=0;
        let res2=0;
        for(let j=0;j<2;j++){
            if(cad[i][j]==cad[i][j+1] && cad[i][j]!=''){
                res++;
            }
            if(cad[j][i]==cad[j+1][i] && cad[j+1][i]!=''){
                res2++;
            }
        }
        if(res==2 || res2==2){
            return true;
        }
    }
    let a=0;
    let cont=0, cont2=0;
    for(let i=0;i<2;i++){
        if(cad[i][a]==cad[i+1][a+1] && cad[i][a]!=''){
            cont++;
        }
        if(cad[i][2-a]==cad[i+1][2-(a+1)] && cad[i][a]!=''){
            cont2++;
        }
        a++;
    }

    return cont==2 || cont2==2;
}
function dibujar(){
    
}
export { inicio, convertir, reiniciar,ganar, dibujar };
