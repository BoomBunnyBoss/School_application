// function formulaKvadrat(x) {
//     return x*x;
// }

let formulaKvadrat = x => x*x;//строчная функция

// function formulaPramougolnik(x,y) {
//     return x*y;
// }

let formulaPramougolnik = (x,h) => x*h;//строчная функция

// function formulaParalelogram(x,h) {
//     return x*h;
// }

let formulaParalelogram = (x,h) => x*h;//строчная функция

// function formulaRomb(x,h) {
//     return x*h;
// }

let formulaRomb = (a,h) => a*h;//строчная функция


//не правильный вариант

// function showResultInDomPriamougolnika () {
//     let a = document.getElementById('pervayaStoronaPriamougolnika').value;
//     let b = document.getElementById('drugayaStoronaPriamougolnika').value;
//     S = a*b;
//     document.getElementById('ploschadPriamougolnika').innerHTML = `Площадь прямоугольника равна ${S}`;
// }

// function showResultInDomParalelograma () {
//     let a = document.getElementById('dlinaStoronyParalelograma').value;
//     let b = document.getElementById('dlinaVisotyParalelograma').value;
//     S = a*b;
//     document.getElementById('ploschadParalelograma').innerHTML = `Площадь паралелограма равна ${S}`;
// }

// function showResultInDomRomba () {
//     let a = document.getElementById('dlinaStoronyRomba').value;
//     let h = document.getElementById('dlinaVisotyRomba').value;
//     S = a*h;
//     document.getElementById('ploschadRomba').innerHTML = `Площадь ромба равна ${S}`;
// }