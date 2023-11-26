const bar = document.getElementById('bar');
let pos0 = 0;
var totalwidth = window.innerWidth;
window.addEventListener("resize", () => {
    totalwidth = window.innerWidth;
});
window.addEventListener('mousemove', (event) => {
    const mousepos = event.pageX;
    let offset = 50;
    let barpos = mousepos - offset;
    if (mousepos < 50) {
        bar.style.left = '0px';
    }
    else if (Math.abs(totalwidth - mousepos) < 50) {
        bar.style.left = totalwidth - 100 + 'px';
    }
    else {
        bar.style.left = barpos + 'px';
    }
});


