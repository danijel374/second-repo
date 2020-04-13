// todo Uvod u programiranje
// 1.
var a, b, c, d;
a = 20;
b = 15;
c = 10;
d = 5;
console.log(a + c);
console.log(b / d);
// 2.

var a = 4, b = 44, c = 24, d = "44";
console.log(a > c);
console.log((a > b) || (b > c));
console.log((a < b) && (a < c));
console.log((c > b) && (b < a));
console.log(!(a > b) || ((a > c) && (c > b)));
console.log(!(a > b));
console.log((b === d));

// 3. 
var broj1 = parseInt(prompt('unesite broj1')),
    broj2 = parseInt(prompt('unesite broj2')),
    broj3 = parseInt(prompt('unesite broj3'));

if (broj1 > 10 && broj2 > 10 && broj3 > 10) {
    console.log(broj1 + broj2 + broj3)
} else {
    if (broj1 > broj2 && broj1 > broj3) {
        broj1 *= broj1;
    } else if (broj2 > broj1 && broj2 > broj3) {
        broj2 *= broj2;
    } else if (broj3 > broj1 && broj3 > broj2) {
        broj3 *= broj3;
    }
    console.log(broj1 + broj2 + broj3);
}

// 4.
var a = 12, b = 13, c = "12", d = "13";
if (a < b) {
    if (b < d) {
        console.log("log 1")
    } else {
        if (a < d) {
            console.log("log 2");
        } else {
            console.log("log 3");
        }
    }
} else {
    if (c > a) {
        console.log("log 4");
    } else {
        if (b > c) {
            console.log("log 5");
        } else {
            console.log("log 6");
        }
    }
}

// 5.
// Zatražiti od korisnika unos njegove godine rođenja. Izračunati starost korisnika i ispisati
// odgovarajuću poruku (‘Punoljetni ste’/’Niste punoljetni’). Ne uzeti u obzir ako korisnik
// unese nevaljanu godinu (npr. 2016) - u tom slučaju ispisati odgovarajuću poruku.

// 6.
var godProizvodnje = parseInt(prompt('unesite godinu proizvodnje'));
if (godProizvodnje > 1000 && godProizvodnje < 2020) {
    if (new Date().getFullYear() - godProizvodnje > 30) {
        console.log('oldtimer');
    } else if (new Date().getFullYear() - godProizvodnje < 5) {
        console.log('newbie');
    }
} else {
    console.log('pogresa unos');
}

// 7.
var ime = prompt('unesite ime'),
    prezime = prompt('unesite prezime'),
    godine = parseInt(prompt('unesite koliko godina imate'));
if (godine > 0 && godine <= 45) {
    if (godine < 20) {
        console.log(`${ime} ${prezime} veoma ste mladi`);
    } else if (godine < 30) {
        console.log(`${ime} ${prezime} mladi ste`);
    } else {
        console.log(`${ime} ${prezime} u najboljim ste godinama`);
    }

}

// 8. 
var ime = prompt('unesite ime'),
    godine = parseInt(prompt('unesite broj godina')),
    ime2 = prompt('unesite ime'),
    godine2 = parseInt(prompt('unesite broj godina')),
    ime3 = prompt('unesite ime'),
    godine3 = parseInt(prompt('unesite broj godina'));

if (godine === godine2) {
    console.log(ime + ' ' + ime2);
} else if (godine === godine3) {
    console.log(ime + ' ' + ime3);
} else if (godine2 === godine3) {
    console.log(ime2 + ' ' + ime3);
} else if (ime === ime2) {
    console.log(ime + ' ' + ime2 + (godine + godine2));
} else if (ime === ime3) {
    console.log(ime + ' ' + ime3 + (godine + godine3));
} else if (ime2 === ime3) {
    console.log(ime2 + ' ' + ime3 + (godine + godine3));
} else {
    console.log('nema imenjaka ni vrsnjaka')
}

// 9.
var a = parseInt(prompt('unesite prvu ocjenu')),
    b = parseInt(prompt('unesite drugu ocjenu')),
    c = parseInt(prompt('unesite trecu ocjenu')),
    prosijek;

if (a === 1 || b === 1 || c === 1) {
    console.log('niste zadovoljili');
} else {
    prosijek = (a + b + c) / 3
    if (prosijek < 2.5) {
        console.log('dovoljan 2');
    } else if (prosijek > 2.5 && prosijek < 3.5) {
        console.log('dobar 3');
    } else if (prosijek > 3.5 && prosijek < 4.5) {
        console.log('vrlodobar');
    } else { console.log('odlican') };
}

// 10.
var pitanje = prompt('bojite li se zubara');

switch (pitanje) {
    case 'ne':
        console.log('hrabri ste');
        break;
    case 'da':
        console.log('i ja sam');
        break;
    default:
        console.log('nepravilan unos');
}

// 11.
var broj = parseInt(prompt('unesite broj manji od 25'));
if (broj > 0 && broj <= 20) {
    switch (broj) {
        case 5:
            console.log(broj);
            break;
        case 10:
            console.log(broj);
            break;
        case 15:
            console.log(broj);
            break;
        case 20:
            console.log(broj);
            break;
        default:
            console.log('broj nije visekratnik broja 5')
    }
} else {
    console.log('pogersan unos');
}
//12.
var dan = prompt('unesite dan');

switch (dan) {
    case 'ponedjeljak':
        console.log('kada ce vise vikend');
        break;
    case 'utorak':
        console.log('kada ce vise vikend');
        break;
    case 'srijeda':
        console.log('kada ce vise vikend');
        break;
    case 'cetvrtak':
        console.log('kada ce vise vikend');
        break;
    case 'petak':
        console.log('Its Friday,firaday gotta get down on firday');
        break;
    case 'subota':
        console.log('vikend je');
        break;
    case 'nedjelja':
        console.log('vikend je');
        break;
    default:
        console.log('pogresan unos');
}

// 13.

var text = prompt('unesite nekoliko rijeci');

var brojac = 1;
for (var i = 0; i < text.length; i++) {
    if (text[i] == ' ') {
        brojac++;
    }
}
console.log(brojac);

// 14.
var broj = parseInt(prompt("Unesite broj"));
var suma = 0;
for (var i = 1; i < broj; i++) {
    suma += i;
}
console.log(suma);

// 15.
var broj = parseInt(prompt('unesite broj manji od 20'));

if (broj < 20) {
    for (let i = broj; i >= 1; i--) {
        console.log(i);
    }
} else {
    console.log(broj);
}


// todo Javascript 1

// todo Javascript 2