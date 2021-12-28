function showResultInDomKvadrat () {
    a = document.getElementById('dlinaStoroniKvadrata').value;
    S = a*a;
    document.getElementById('ploschadKvadrata').innerHTML = `Площадь квадрата равна ${S}`;
}

function showResultInDomPriamougolnika () {
    a = document.getElementById('pervayaStoronaPriamougolnika').value;
    b = document.getElementById('drugayaStoronaPriamougolnika').value;
    S = a*b;
    document.getElementById('ploschadPriamougolnika').innerHTML = `Площадь прямоугольника равна ${S}`;
}

function showResultInDomParalelograma () {
    a = document.getElementById('dlinaStoronyParalelograma').value;
    b = document.getElementById('dlinaVisotyParalelograma').value;
    S = a*b;
    document.getElementById('ploschadParalelograma').innerHTML = `Площадь паралелограма равна ${S}`;
}

function showResultInDomRomba () {
    a = document.getElementById('dlinaStoronyRomba').value;
    h = document.getElementById('dlinaVisotyRomba').value;
    S = a*h;
    document.getElementById('ploschadRomba').innerHTML = `Площадь ромба равна ${S}`;
}