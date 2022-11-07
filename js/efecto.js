function nombre(){
    document.querySelector('.tit').addEventListener('mouseover', function(){
        this.textContent='Reiniciar';
    });
    document.querySelector('.tit').addEventListener('mouseout', function(){
        this.textContent='Gato';
    });
}
export {nombre};