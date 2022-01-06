// function showResultInDomKvadrat () {
//     const x = document.getElementById('dlinaStoroniKvadrata').value;
//     const result = formulaKvadrat(x);
//     document.getElementById('ploschadKvadrata').innerHTML = result;
// }
 

const showResultInDomKvadrat = () => {
    const x = document.getElementById('dlinaStoroniKvadrata').value;
    document.getElementById('ploschadKvadrata').innerHTML = formulaKvadrat(x);
}   



// function showResultInDomPriamougolnika () {
//     const x = document.getElementById('pervayaStoronaPriamougolnika').value;
//     const y = document.getElementById('drugayaStoronaPriamougolnika').value;
//     const result = formulaPramougolnik(x,y);
//     document.getElementById('ploschadPriamougolnika').innerHTML = result;
// }

const showResultInDomPriamougolnika = () => {
    const elm = [x=document.getElementById('pervayaStoronaPriamougolnika').value, y=document.getElementById('drugayaStoronaPriamougolnika').value]
    document.getElementById('ploschadPriamougolnika').innerHTML = formulaPramougolnik(x,y);
}

// function showResultInDomParalelograma () {
//     const x = document.getElementById('dlinaStoronyParalelograma').value;
//     const h = document.getElementById('dlinaVisotyParalelograma').value;
//     const result = formulaParalelogram(x,h);
//     document.getElementById('ploschadParalelograma').innerHTML = result;
// }

const showResultInDomParalelograma = () => {
    const elm = [x=document.getElementById('dlinaStoronyParalelograma').value, h = document.getElementById('dlinaVisotyParalelograma').value]
    document.getElementById('ploschadParalelograma').innerHTML = formulaPramougolnik(x,h);
}

// function showResultInDomRomba () {
//     const a = document.getElementById('dlinaStoronyRomba').value;
//     const h = document.getElementById('dlinaStoronyRomba').value;
//     const result = formulaRomb(a,h);
//     document.getElementById('ploschadRomba').innerHTML = result;
// }

const showResultInDomRomba = () => {
    const elm = [a = document.getElementById('dlinaStoronyRomba').value, h = document.getElementById('dlinaStoronyRomba').value]
    document.getElementById('ploschadRomba').innerHTML = formulaRomb(a,h);
}