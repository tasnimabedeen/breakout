const bar = document.getElementById('bar');
let pos0 = 0;
var totalwidth = window.innerWidth;
let posX = totalwidth - 100;

window.addEventListener('mousemove', (event) => {
    const pos1 = event.pageX;
    let pos2 = 50;
    let pos3 = pos1 - pos2;
    if (pos1 < 50) {
        bar.style.left = '0px';
    }
    else if(Math.abs(totalwidth - pos1) < 50) {
        bar.style.left = posX + 'px';
    }
    else {
        bar.style.left = pos3 + 'px';
    }
});


