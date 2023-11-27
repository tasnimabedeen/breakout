const bar = document.getElementById('bar');
let pos0 = 0;
var totalwidth = window.innerWidth;
var totalheight = window.innerHeight;

window.addEventListener("resize", () => {
    totalwidth = window.innerWidth;
    totalheight = window.innerHeight;
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



const elem = document.getElementById("ball");
let pos1 = 300;
let pos2 = 0;

for (let n = 0; n < 1; n++) {
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos1 == 0) {
            clearInterval(id);
            let idtop = null;
            let pos3 = totalwidth - pos2 - 15;
            clearInterval(idtop);
            idtop = setInterval(frame2, 10);
            function frame2() {
                if (pos3 == 0) {
                    clearInterval(idtop);
                    let idright = null;
                    let pos4 = totalheight - 40 - pos3;
                    clearInterval(idright);
                    idright = setInterval(frame3, 10);
                    function frame3() {
                        if (pos4 == 0) {
                            clearInterval(idright);
                            let idbottom = null;
                            clearInterval(idbottom);
                            idbottom = setInterval(frame4, 10);
                            function frame4() {
                                if (pos2 == 0) {
                                    clearInterval(idbottom);
                                }
                                else {
                                    pos1--;
                                    pos2--;
                                    elem.style.top = pos1 + "px";
                                    elem.style.left = pos2 + "px";
                                }
                            }
                        }
                        else {
                            pos1++;
                            pos2--;
                            elem.style.top = pos1 + "px";
                            elem.style.left = pos2 + "px";
                            pos4 = window.innerHeight - 55 - pos1;
                        }
                    }
                }
                else {
                    pos1++;
                    pos2++;
                    elem.style.top = pos1 + "px";
                    elem.style.left = pos2 + "px";
                    pos3 = totalwidth - pos2 - 15;
                }
            }
        } 
        else {
            pos1--;
            pos2++;
            elem.style.top = pos1 + "px";
            elem.style.left = pos2 + "px";
        }
    }
}

