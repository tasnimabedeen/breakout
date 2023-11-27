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



let id = null;
const elem = document.getElementById("ball");
let pos1 = 300;
let pos2 = 0;
clearInterval(id);
id = setInterval(frame, 10);
function frame() {
    if (pos1 == 0) {
        clearInterval(id);
        let idtop = null;
        const elem2 = document.getElementById("ball");
        let pos3 = pos1;
        let pos4 = totalwidth - pos2 - 15;
        clearInterval(idtop);
        idtop = setInterval(frame2, 10);
        function frame2() {
            if (pos4 == 0) {
                clearInterval(id);

            }
            else if (pos3 => 0) {
                pos3++;
                pos2++;
                elem2.style.top = pos3 + "px";
                elem2.style.left = pos2 + "px";
                pos4 = totalwidth - pos2 - 15;
            }
        }
    } else if (pos2 => 0) {
        pos1--;
        pos2++;
        elem.style.top = pos1 + "px";
        elem.style.left = pos2 + "px";

    }


}
/*
let idbottom = null;
const elem3 = document.getElementById("ball");
let pos5 = window.innerHeight - 40 - pos3;
let pos6 = pos2;
clearInterval(idbottom);
idbottom = setInterval(frame3, 10);
function frame3() {
    if (pos5 == 0) {
        clearInterval(idbottom);
    }
    else {
        pos3++;
        pos6--;
        elem3.style.top = pos3 + "px";
        elem3.style.left = pos6 + "px";
        pos5 = window.innerHeight - 40 - pos3;
    }
}
*/