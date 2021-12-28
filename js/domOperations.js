function showResultInDomKvadrat () {
    const x = document.getElementById('dlinaStoroniKvadrata').value;
    const result = formulaKvadrat(x);
    document.getElementById('ploschadKvadrata').innerHTML = result;
}

function showResultInDomPriamougolnika () {
    const x = document.getElementById('pervayaStoronaPriamougolnika').value;
    const y = document.getElementById('drugayaStoronaPriamougolnika').value;
    const result = formulaPramougolnik(x,y);
    document.getElementById('ploschadPriamougolnika').innerHTML = result;
}

function showResultInDomParalelograma () {
    const x = document.getElementById('dlinaStoronyParalelograma').value;
    const h = document.getElementById('dlinaVisotyParalelograma').value;
    const result = formulaParalelogram(x,h);
    document.getElementById('ploschadParalelograma').innerHTML = result;
}

function showResultInDomRomba () {
    const x = document.getElementById('dlinaStoronyRomba').value;
    const h = document.getElementById('dlinaStoronyRomba').value;
    const result = formulaRomb(x,h);
    document.getElementById('ploschadRomba').innerHTML = result;
}