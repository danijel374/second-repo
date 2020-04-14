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
// 16.
var broj = parseInt(prompt('unesite broj')),
    suma = 0;

if (broj % 2 === 0) {
    for (let i = broj; i >= 1; i--) {
        console.log(i)
    }
} else {
    for (var j = 1; j < broj; j++) {
        suma += j;
    }

    console.log(suma);

}

// ! 17. zadatak trazi ispis svakog drugog koji je djeljiv sa 2 i 3...i na prezentaciji je ovako po meni nije tocno
var broj1 = parseInt(prompt('unesite prvi broj')),
    broj2 = parseInt(prompt('unesite drugi broj')),
    temp;
if (broj1 > broj2) {
    temp = broj2;
    broj2 = broj1;
    broj1 = temp;
}

for (let i = broj1; i < broj2; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// 18. 

var broj = parseInt(prompt('unesite dvoznamenkasti broj'));

if (broj > 9 && broj < 100) {
    for (let i = 1; i < broj; i++) {
        if (broj % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log('broj nije dvoznamenkast');
}

// 19.

var broj = parseInt(prompt('unesite dvoznamenkasti broj'));

if (broj > 9 && broj < 100) {
    for (let i = 1; i <= 10; i++) {
        if (broj % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log('nije dvoznamenkast')
}

// 20.

var text = prompt('unesite neki text');
text = text.toLowerCase();
var brojac = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
        brojac++;
    }
}
for (let i = 0; i < 5; i++) {
    console.log(text[i]);
}
console.log('broj samoglasnika je' + ' ' + brojac);

//21.
var text = prompt('unesite neki text');
text = text.toLowerCase();
var brojac = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] !== 'a' && text[i] !== 'e' && text[i] !== 'i' && text[i] !== 'o' && text[i] !== 'u' && text[i].charCodeAt() >= 97 && text[i].charCodeAt() <= 122) {
        brojac++;
    }
}
for (let i = 0; i < 3; i++) {
    console.log(text[i]);
}
console.log('broj suglasnika je' + ' ' + brojac);

// 22.
var broj1 = parseInt(prompt('unesite prvi broj')),
    broj2 = parseInt(prompt('unesite drugi broj')),
    zbroj, razlika, umnozak, kolicnik, temp, sumapar = 0, sumanepar = 0;

zbroj = broj1 + broj2;
razlika = broj1 - broj2;
umnozak = broj1 * broj2;
kolicnik = broj1 / broj2;

if (broj1 > broj2) {
    temp = broj2;
    broj2 = broj1;
    broj1 = temp;
}
for (let i = broj1; i < broj2; i++) {
    if (i % 2 === 0) {
        sumapar += i;
    }
}
for (let i = broj1; i < broj2; i++) {
    if (i % 2 !== 0) {
        sumanepar += i;
    }
}
console.log('suma par je- ' + sumapar + 'suma nepar je- ' + sumanepar);

// 23. Što će se ispisati:
var a = 3, b = 18, c = '6';
for (var i = a; i < b; i += 3) {

    if (i == c) {
        console.log(i + " = " + c);
    }
    if (b % i !== 0) {
        console.log(i - 1
        );
    }
    else {
        console.log(i);
    }
}
//  ISPIS:
// 3
// 6 = 6
// 6
// 9
// 11
// 14 

// 24. Sto ce se ispisati:
var a = 2, b = 20, c = '6';
for (var i = a; i < b; i += 4) {
    if (i === c) {
        console.log(i + " = " + c);
    }
    if (b % i === 0
    ) {
        console.log(
            i);
    }
    else {
        console.log(i + 1);
    }
}

// 2,7,10,15,19

//25. Što će se ispisati:
var j = 80;
for (var i = 8; i < j; i += 2) {
    if (j % i === 0) {
        console.log(i);
    }
    else {
        console.log(j
        );
    }
    j -= 10;
}
// 8,10,12,50,40,30

// todo Javascript 1

// todo Javascript 2