// "use strict";
// let printnum = 0;
// let printcount = 0;
// let para = document.getElementById('para');
// setInterval(() => {
//     if (printcount < 20) {
//         printnum += 1;
//         printcount += 1;
//     }
//     else if (printcount >= 20 && printcount < 40) {
//         printnum -= 1;
//         printcount += 1;
//     }
//     else {
//         printcount = 0;
//         printnum = 0
//     }
//     para.innerText = printnum;
// }, 2000)

//chatGPT

"use strict";
let printnum = 0;
let printcount = 0;
let para = document.getElementById('para');

setInterval(() => {
    printnum = (printcount < 20) ? (printnum + 1) : (printnum - 1);
    printcount = (printcount + 1) % 40;
    para.innerText = printnum;
}, 2000);

