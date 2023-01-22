/*FUNÇÃO QUE MUDAR A COR DO IPHONE*/

function mudarCor(e) {
    document.querySelector('.img-blue').src = e;
}

/*FUNÇÃO QUE MUDA A COR DO CÍRCULO*/

function corCirculo(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color; 
}
