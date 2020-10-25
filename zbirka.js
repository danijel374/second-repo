//  Uvod u programiranje

// 1.
// Deklarirati 4 varijable, dodijeliti im proizvoljne numeričke vrijednosti. Pomoću
// console.log funkcije ispišite zbroj prve i treće varijable, ispišite zatim rezultat dijeljenja
// druge i četvrte varijable.

var a, b, c, d;
a = 20;
b = 15;
c = 10;
d = 5;
console.log(a + c);
console.log(b / d);
// 2.
// Ako su deklarirane varijable var a = 4, b = 44, c = 24, d = "44". Napišite koji je rezultat
// operacija ( true ili false ):

var a = 4,
	b = 44,
	c = 24,
	d = '44';
console.log(a > c);
console.log(a > b || b > c);
console.log(a < b && a < c);
console.log(c > b && b < a);
console.log(!(a > b) || (a > c && c > b));
console.log(!(a > b));
console.log(b === d);

// 3.
// Unesite 3 broja. Ukoliko su svi veći od 10, ispišite njihov zbroj. U suprotnom ispitajte
// koji je od njih najveći pa ga pomnožite sa samim sobom te nakon toga ispišite njihov
// zbroj.

var broj1 = parseInt(prompt('unesite broj1')),
	broj2 = parseInt(prompt('unesite broj2')),
	broj3 = parseInt(prompt('unesite broj3'));

if (broj1 > 10 && broj2 > 10 && broj3 > 10) {
	console.log(broj1 + broj2 + broj3);
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
// Ako su deklarirane varijable var a = 12, b = 13, c = "12", d = "13"; Napišite što će se
// ispisati:

var a = 12,
	b = 13,
	c = '12',
	d = '13';
if (a < b) {
	if (b < d) {
		console.log('log 1');
	} else {
		if (a < d) {
			console.log('log 2');
		} else {
			console.log('log 3');
		}
	}
} else {
	if (c > a) {
		console.log('log 4');
	} else {
		if (b > c) {
			console.log('log 5');
		} else {
			console.log('log 6');
		}
	}
}

// 5.
// Zatražiti od korisnika unos njegove godine rođenja. Izračunati starost korisnika i ispisati
// odgovarajuću poruku (‘Punoljetni ste’/’Niste punoljetni’). Ne uzeti u obzir ako korisnik
// unese nevaljanu godinu (npr. 2016) - u tom slučaju ispisati odgovarajuću poruku.

// 6.
// Zatražiti od korisnika unos godine proizvodnje njegovog automobila. Izračunati starost
// automobila te ukoliko je stariji od 30 godina, ispisati ‘Oldtimer’, a ukoliko je mlađi od 5
// godina ispisati ‘Newbie’. Ne uzeti u obzir ako korisnik unese nevaljanu godinu (npr.
// 2016)
// - u tom slučaju ispisati odgovarajuću poruku.

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
// Zatražiti od korisnika da unese svoje ime, prezime i broj godina. Ukoliko je korisnik
// mlađi od 20, ispišite: Ime + prezime + '', veoma ste mladi!''. Ukoliko je korisnik mlađi od
// 30, ispišite: Ime + prezime + '', mladi ste!''. Ukoliko je korisnik između 30 i 45, ispišite:
// Ime + prezime + '', u najboljim ste godinama! ''. Starije osobe nemojte komentirati.

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
// Zatražiti od korisnika da unese ime i broj godina. Ponovite to 3 puta. Ukoliko postoje 2
// osobe istih godina, ispišite njihova imena. U suprotnom provjerite postoje li 2 osobe istog
// imena, ako postoje, ispišite njihovo ime te zbroj godina. Ukoliko nijedno nije
// zadovoljeno, ispišite da nema imenjaka ni vršnjaka!

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
	console.log('nema imenjaka ni vrsnjaka');
}

// 9.
// Zatražiti od korisnika da unese 3 ocjene. Ukoliko je jedna od njih 1, ispišite ''Niste
// zadovoljili''. U suprotnom, zbrojite sve 3 ocjene i izračunajte prosjek. Ukoliko je prosjek
// manji od 2.5, ispišite ''Dovoljan 2'', za prosjek između 2.5 i 3.5 ispišite ''Dobar 3'', za
// prosjek između 3.5 i 4.5 ispišite ''Vrlo dobar 4'', za prosjek iznad 4.5 ispišite ''Odličan 5''.

var a = parseInt(prompt('unesite prvu ocjenu')),
	b = parseInt(prompt('unesite drugu ocjenu')),
	c = parseInt(prompt('unesite trecu ocjenu')),
	prosijek;

if (a === 1 || b === 1 || c === 1) {
	console.log('niste zadovoljili');
} else {
	prosijek = (a + b + c) / 3;
	if (prosijek < 2.5) {
		console.log('dovoljan 2');
	} else if (prosijek > 2.5 && prosijek < 3.5) {
		console.log('dobar 3');
	} else if (prosijek > 3.5 && prosijek < 4.5) {
		console.log('vrlodobar');
	} else {
		console.log('odlican');
	}
}

// 10.
// Zatražiti od korisnika da unese odgovor na pitanje ''Bojite li se zubara?''. Ukoliko je
// odgovor negativan, ispišite ''Hrabri ste!!'', u suprotnom, ispišite ''I ja!!''. Za ostale
// odgovore ispisati da je unos nepravilan. Ovaj zadatak riješiti preko switch-case-a.

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
// Zatražiti od korisnika da unese broj manji od 25. Preko switch-case-a provjeriti je li
// uneseni broj višekratnik broja 5 (to su brojevi 5, 10, 15 i 20). Ukoliko jest, ispišite uneseni
// broj, ukoliko nije, ispišite da broj nije višekratnik broja 5. Za sve druge brojeve koji nisu
// između 0 i 20 ispišite da je unesen pogrešan broj

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
			console.log('broj nije visekratnik broja 5');
	}
} else {
	console.log('pogersan unos');
}
//12.
// Ako je unesen dan u tjednu, pomoću switch case-a ispišite: ako je ponedeljak, utorak
// srijeda ili četvrtak “Kada će više vikend”, za petak “It's Friday, Friday. Gotta get down on
// Friday”, ako je subota ili nedelja “Jej, vikend je!”. Ako je uneseno nešto drugo, ispišite “Pogrešan unos”.

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
// Zatražiti od korisnika da unese neki tekst. Izračunati koliko riječi ima unutar unesenog teksta.

var text = prompt('unesite nekoliko rijeci');

var brojac = 1;
for (var i = 0; i < text.length; i++) {
	if (text[i] == ' ') {
		brojac++;
	}
}
console.log(brojac);

// 14.
// Unijeti cijeli broj preko prompt funkcije. Nakon toga preko for petlje zbrojiti sve brojeve
// od 1 do unesenog broja, te ispisati rezultat.

var broj = parseInt(prompt('Unesite broj'));
var suma = 0;
for (var i = 1; i < broj; i++) {
	suma += i;
}
console.log(suma);

// 15.
// Zatražiti od korisnika da unose broj manji od 20. Zatim ispisati sve brojeve od unesenog
// broja do 1. Ako je unio veći broj, ispisati uneseni broj.

var broj = parseInt(prompt('unesite broj manji od 20'));

if (broj < 20) {
	for (let i = broj; i >= 1; i--) {
		console.log(i);
	}
} else {
	console.log(broj);
}
// 16.
// Zatražiti od korisnika da unese broj. Ukoliko je paran, ispisati sve brojeve unatrag od
// unesenog do 1, u suprotnom, zbrojiti sve brojeve od 1 do unesenog broja.

var broj = parseInt(prompt('unesite broj')),
	suma = 0;

if (broj % 2 === 0) {
	for (let i = broj; i >= 1; i--) {
		console.log(i);
	}
} else {
	for (var j = 1; j < broj; j++) {
		suma += j;
	}

	console.log(suma);
}

//  17.
// Učitati dva broja, zatim ispisati svaki drugi broj između njih koji je djeljiv sa 2 i 3.

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
// Zatražiti unos dvoznamenkastog broja. Ispisati sve njegove djelitelje. Ako nije
// dvoznamenkast, samo treba ispisati odgovarajuću poruku.

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
// Zatražiti unos dvoznamenkastog broja. Ispisati s kojim je brojevima od 1 do 10 djeljiv.
// Ako nije dvoznamenkast, samo treba ispisati odgovarajuću poruku.

var broj = parseInt(prompt('unesite dvoznamenkasti broj'));

if (broj > 9 && broj < 100) {
	for (let i = 1; i <= 10; i++) {
		if (broj % i === 0) {
			console.log(i);
		}
	}
} else {
	console.log('nije dvoznamenkast');
}

// 20.
// Zatražiti od korisnika unos nekog stringa. Ispisati koliko ima samoglasnika u tom stringu.
// Ispisati prvih 5 slova unesenog stringa.

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

// 21.
// Zatražiti od korisnika unos nekog stringa. Ispisati koliko ima suglasnika u tom stringu.
// Ispisati prva 3 slova unesenog stringa.

var text = prompt('unesite neki text');
text = text.toLowerCase();
var brojac = 0;
for (var i = 0; i < text.length; i++) {
	if (
		text[i] !== 'a' &&
		text[i] !== 'e' &&
		text[i] !== 'i' &&
		text[i] !== 'o' &&
		text[i] !== 'u' &&
		text[i].charCodeAt() >= 97 &&
		text[i].charCodeAt() <= 122
	) {
		brojac++;
	}
}
for (let i = 0; i < 3; i++) {
	console.log(text[i]);
}
console.log('broj suglasnika je' + ' ' + brojac);

// 22.
// Učitati 2 cijela broja, koristeći prompt funkciju i izračunati im zbroj, razliku, umnožak i
// količnik, ispisati sumu svih parnih brojeva između ta 2 broja, te sumu svih neparnih
// brojeva između njih, ne uključujući njih.

var broj1 = parseInt(prompt('unesite prvi broj')),
	broj2 = parseInt(prompt('unesite drugi broj')),
	zbroj,
	razlika,
	umnozak,
	kolicnik,
	temp,
	sumapar = 0,
	sumanepar = 0;

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

var a = 3,
	b = 18,
	c = '6';
for (var i = a; i < b; i += 3) {
	if (i == c) {
		console.log(i + ' = ' + c);
	}
	if (b % i !== 0) {
		console.log(i - 1);
	} else {
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

var a = 2,
	b = 20,
	c = '6';
for (var i = a; i < b; i += 4) {
	if (i === c) {
		console.log(i + ' = ' + c);
	}
	if (b % i === 0) {
		console.log(i);
	} else {
		console.log(i + 1);
	}
}

// ISPIS
// 2,7,10,15,19

//25. Što će se ispisati:

var j = 80;
for (var i = 8; i < j; i += 2) {
	if (j % i === 0) {
		console.log(i);
	} else {
		console.log(j);
	}
	j -= 10;
}

// ISPIS
// 8,10,12,50,40,30

// 26. Što će se ispisati:

var j = 60;
for (var i = 6; i < j; i += 4) {
	if (j % i !== 0) {
		console.log(j);
	} else {
		console.log(i);
	}
	j -= 10;
}

// ISPIS
// 6,10,40,30

// 27.
// Učitati 5 cijelih dvoznamenkastih brojeva. Ukoliko uneseni broj nije dvoznamenkast,
//     odbaciti ga.Zbrojiti zadnje znamenke svakog unesenog broja i ispisati zbroj.

var input,
	brojac = 12,
	suma = 0;

while (brojac <= 5) {
	input = parseInt(prompt('unesite dvoznamenkast broj'));
	suma += input % 10;
	brojac++;
}
console.log(suma);

// 28.
// Zatražiti od korisnika da unosi brojeve sve dok ne unese broj koji je veći od 20. Kada
// unese taj broj, ispisati iz kojeg je pokušaja unesen broj veći od 20.

var brojac = 0,
	input;

while (brojac < Infinity) {
	input = parseInt(prompt('unesite broj'));
	brojac++;
	if (input > 20) {
		break;
	}
}
console.log('pokusaj broj ' + brojac);

// 29.
// Pomoću while petlje omogućite korisniku da unese točno 8 brojeva. Pomoću console.log
// funkcije ispišite četvrti unešeni broj te zbroj prvog i petog unesenog broja.

var brojac = 1,
	niz = [];

while (brojac <= 8) {
	niz.push(parseInt(prompt('unesite broj')));
	brojac++;
}
console.log(niz[3]);
console.log('zbroj prvog i petog je: ' + (niz[0] + niz[4]));

// 30.
// Učitavati brojeve sve dok zbroj unesenih brojeva ne dosegne 100. Na kraju ispisati koliko
// je korisnik ukupno unio brojeva.

var zbroj = 0,
	brojac = 1;

while (brojac < Infinity) {
	zbroj += parseInt(prompt('unesite broj'));
	if (zbroj >= 100) {
		break;
	}
	brojac++;
}

console.log(brojac);

// 31.
// Napravite program koji korisniku omogućuje unošenje brojeva sve dok ne unese broj 0.
// Program treba ispisati koliko je korisnik upisao pozitivnih, a koliko negativnih brojeva.

var brojacpoz = 0,
	brojacneg = 0,
	input,
	xd = 1;

while (xd < Infinity) {
	input = parseInt(prompt('unesite broj'));
	if (input > 0) {
		brojacpoz++;
	} else if (input < 0) {
		brojacneg++;
	}
	if (input === 0) {
		break;
	}
}
console.log('uneseno pozitivnig- ' + brojacpoz + ' a negativnih- ' + brojacneg);

// 32.
// Zatražiti od korisnika da unese 2 broja. Koristeći do-while petlju ispisati neparne brojeve
// koji se nalaze između ta dva broja.

var broj1 = parseInt(prompt('unesite broj 1')),
	broj2 = parseInt(prompt('unesite broj 2')),
	temp,
	i = broj1;

if (broj1 > broj2) {
	temp = broj1;
	broj1 = broj2;
	broj2 = temp;
}

do {
	if (i % 2 !== 0) {
		console.log(i);
	}
	i++;
} while (i < broj2);

// 33.
// Preko petlje popunite niz od 10 članova, te ispišite niz.

var niz = [];

for (let i = 0; i < 10; i++) {
	niz[i] = i + 1;
}
console.log(niz);

// 34.
// Deklarirati prazan niz i tražiti od korisnika da unosi brojeve dok suma unesenih članova
// niza ne pređe 50. Nakon toga ispisati duljinu niza.

var niz = [],
	zbroj = 0,
	input;

do {
	input = parseInt(prompt('unesite broj'));
	niz.push(input);
	zbroj += input;
} while (zbroj < 50);
console.log(niz.length);

// 35.
// Ako imate rečenicu: “Hello world je najbolja udruga ikada” izbacite sve samoglasnike iz
// nje i ispišite rečenicu bez njih. To možete spremiti u neku novu varijablu. Potom izbacite
// sve suglasnike iz iste rečenice te i nju ispišite.

var text = 'Hello world je najbolja udruga ikada';

function disemvowel(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	return str
		.split('')
		.filter(function (el) {
			return vowels.indexOf(el.toLowerCase()) === -1;
		})
		.join('');
}
var bezsamoglasnika = disemvowel(text);
console.log('recenica bez samoglasnika je: ' + bezsamoglasnika);

var niz = text.split('');
for (let i = 0; i < niz.length; i++) {
	if (niz[i] !== 'a' && niz[i] !== 'e' && niz[i] !== 'i' && niz[i] !== 'o' && niz[i] !== 'u') {
		niz[i] = '';
	}
}
text = niz.join('');
console.log('recenica bez suglasnika je: ' + text);

// 36.
// Zadan je niz od 10 realnih brojeva: var niz = [ 87, 93, 11, 27, 38, 100, 42, 31, 8, 40 ]
// Naći broj najbliži nuli te broj najdalji od nule.

var niz = [87, 93, 11, 27, 38, 100, 42, 31, 8, 40],
	min = niz[0],
	max = niz[0];

for (let i = 0; i < niz.length; i++) {
	if (niz[i] < min) {
		min = niz[i];
	} else if (niz[i] > max) {
		max = niz[i];
	}
}

console.log('najblizi je: ' + min + ' a najudaljeniji je: ' + max);

// 37.
// Ako imate deklariran niz: var array = [15, 123, 678, 23, 797, 905, 769, 567, 67], ispišite
// prvi, srednji i zadnji element niza. (kod mora raditi za bilo koji niz, neovisno o broju
// elemenata).

var array = [15, 123, 678, 23, 797, 905, 769, 567, 67],
	srednji,
	srednji2,
	index = parseInt(array.length / 2);

if (array.length % 2 !== 0) {
	srednji = array[index];
	console.log(
		'prvi je: ' + array[0] + ' zadnji je: ' + array[array.length - 1] + ' srednji je: ' + srednji
	);
} else {
	srednji = array[index];
	srednji2 = array[index - 1];
	console.log(
		'prvi je: ' +
			array[0] +
			' zadnji je: ' +
			array[array.length - 1] +
			' srednji su: ' +
			srednji +
			' ' +
			srednji2
	);
}

// 38.
// Učitavati brojeve u niz sve dok im zbroj ne prijeđe 150. Napraviti novi niz sastavljen od
// neparnih brojeva iz prvog niza. Ispisati novi niz sortiran od najvećeg prema najmanjem.

var niz1 = [],
	niz2 = [],
	input,
	zbroj = 0;

do {
	input = parseInt(prompt('unesite broj'));
	niz1.push(input);
	zbroj += input;
} while (zbroj < 150);
console.log(niz1);

for (let i = 0; i < niz1.length; i++) {
	if (niz1[i] % 2 !== 0) {
		niz2.push(niz1[i]);
	}
}
niz2.sort(function (a, b) {
	return b - a;
});
console.log(niz2);

// 39.
// Učitavati brojeve u niz sve dok im zbroj ne prijeđe 250. Napraviti novi niz sastavljen od
// parnih brojeva iz prvog niza. Ispisati novi niz sortiran od najmanjeg prema najvećem.

var niz1 = [],
	niz2 = [],
	input,
	zbroj = 0;

do {
	input = parseInt(prompt('unesite broj'));
	niz1.push(input);
	zbroj += input;
} while (zbroj < 250);

for (let i = 0; i < niz1.length; i++) {
	if (niz1[i] % 2 === 0) {
		niz2.push(niz1[i]);
	}
}
niz2.sort(function (a, b) {
	return a - b;
});
console.log(niz2);

// 40.
// Deklarirati niz koji se sastoji od 5 riječi. Napraviti novi niz koji se sastoji samo od onih
// riječi iz prvog niza koje imaju više od 2 slova.Ispisati novi niz riječi.

var niz1 = ['ovo', 'je', 'bas', 'pet', 'rijeci'],
	niz2 = [];

for (let i = 0; i < niz1.length; i++) {
	if (niz1[i].length > 2) {
		niz2.push(niz1[i]);
	}
}
console.log('niz sa rijecima iz prvog niza koje imaju vise od 2 slova: ' + niz2);

// 41.
// Deklarirati niz koji se sastoji od 5 riječi. Ispisati koja je najduža i najkraća riječ iz niza.

var niz = ['ovaj', 'niz', 'je', 'pet', 'rijeci'],
	najduza = niz[0],
	najkraca = niz[0];

for (let i = 0; i < niz.length; i++) {
	if (niz[i].length > najduza.length) {
		najduza = niz[i];
	} else if (niz[i].length < najkraca.length) {
		najkraca = niz[i];
	}
}

console.log('najduza rijec je: ' + najduza + ' najkraca rijec je: ' + najkraca);

// 42.
// Učitati niz od 10 brojeva. Ispisati koliko je parnih, a koliko neparnih brojeva u nizu.
// Zatim ispisati prosječnu vrijednost parnih brojeva. Također ispisati koji zbroj je veći:
// zbroj parnih brojeva ili zbroj neparnih brojeva.

var input,
	temp,
	niz = [],
	parni = [],
	neparni = [],
	sumParni = 0,
	sumNeparni = 0,
	prosijecnaParnih,
	prosijecnaNeparnig;

for (var i = 0; i < 10; i++) {
	input = parseInt(prompt('unesite 10 brojeva'));
	niz.push(input);

	if (niz[i] % 2 === 0) {
		parni.push(niz[i]);
	}
	if (niz[i] % 2 !== 0) {
		neparni.push(niz[i]);
	}
}
for (let i = 0; i < parni.length; i++) {
	sumParni += parni[i];
}
for (let i = 0; i < neparni.length; i++) {
	sumNeparni += neparni[i];
}

console.log('parnih je: ' + parni.length + ' neparnih je:' + neparni.length);
console.log('prosijek parnih je: ' + sumParni / parni.length);

if (sumParni > sumNeparni) {
	console.log('zbroj parnih je veci ');
} else {
	console.log('zbroj neparnih je veci ');
}

// 43.
// Učitati niz od 10 brojeva. Ispisati najveći i najmanji član niza, zatim poredati članove niza
// po veličini - od najvećeg prema najmanjem i ispisati ga, potom od najmanjeg prema
// najvećem i njega također ispisati.

var niz = [],
	input,
	min,
	max,
	manjiPremaVecem,
	veciPremaManjim;

for (let i = 0; i < 10; i++) {
	input = parseInt(prompt('unesite broj'));
	niz.push(input);
}

min = niz[0];
max = niz[0];

for (let i = 0; i < niz.length; i++) {
	if (niz[i] > max) {
		max = niz[i];
	} else if (niz[i] < min) {
		min = niz[i];
	}
}
console.log('najmanji je: ' + min + ' najveci je: ' + max);

manjiPremaVecem = niz.sort(function (a, b) {
	return a - b;
});
console.log('od najmanjeg do najveceg: ' + manjiPremaVecem);

veciPremaManjim = niz.sort(function (a, b) {
	return b - a;
});
console.log('od najveceg prema najmanjem: ' + veciPremaManjim);

// TODO Javascript 1

// 1.
// Zatražiti od korisnika da unese 2 broja. Ukoliko je prvi broj veći od drugog, pozvati
// funkciju koja će oduzeti drugi od prvog. U suprotnom, pozvati funkciju koja će ih zbrojiti.
// Ispisati rezultat u oba slučaja.

var broj1 = parseInt(prompt('unesite prvi broj')),
	broj2 = parseInt(prompt('unesite prvi broj'));

function oduzimanje(a, b) {
	return a - b;
}
function zbrajanje(a, b) {
	return a + b;
}

if (broj1 > broj2) {
	console.log(oduzimanje(broj1, broj2));
} else {
	console.log(zbrajanje(broj1, broj2));
}

// 2.
// Jedostavan kalkulator - Zatražiti od korisnika unos dva broja i znaka za operaciju koju
// želi obaviti nad brojevima (+, -, *, /). Napisati funkciju koja imitira rad jednostavnog
// kalkulatora: prima dva broja, i znak operacije. Ovisno o znaku, obaviti traženu operaciju.
// Funkcija vraća rezultat u glavni program, zatim je on ispisuje.

var broj1 = parseInt(prompt('unesite prvi broj')),
	broj2 = parseInt(prompt('unesite drugi broj')),
	operacija = prompt('unesite operaciju');

function kalkulator(prvi, drugi, operator) {
	var result;
	switch (operator) {
		case '+':
			result = prvi + drugi;
			break;
		case '-':
			result = prvi - drugi;
			break;
		case '*':
			result = prvi * drugi;
			break;
		case '/':
			if (drugi === 0) {
				result = Infinity;
				console.log('nije moguce dijeliti sa nula: ' + result);
			} else {
				result = prvi / drugi;
			}
			break;
		default:
			console.log('pogresan unos');
	}
	return result;
}

console.log(kalkulator(broj1, broj2, operacija));

// 3.
// Pomoću prompt-a korisniku postaviti jednostavan matematički izraz (npr: Koliko je
//     2+2?). U funkciji provjeriti točnost unesenog odgovora. Ako je točan, ispisati poruku i
//     vratiti true . Ako nije točan, vratiti točan rezultat u glavni program, gdje se zatim treba
//     ispisati poruka "Vaš odgovor je netočan, točan odgovor glasi: ...".

var odgovor = parseInt(prompt('koliko je 2+2?'));

function provjera(unos) {
	if (unos === 4) {
		console.log('odogovor je tocan');
		return true;
	} else {
		return 4;
	}
}

if (provjera(odgovor) === 4) {
	console.log('vas odgovor je netocan tocan odgovor glasi: 4');
}

provjera(odgovor);

// 4.
// Napraviti funkciju koja je na proslijeđeni mjesec vratiti koliko dana ima u tom mjesecu.
// Rezultat ispisati u glavnom programu.

var mjesec = prompt('unesite mjesec');

function daniUMjesecu(mjesec) {
	switch (mjesec) {
		case 'sijecanj':
		case 'siječanj':
			return 31;
		case 'veljaca':
		case 'veljača':
			return '28/29';
		case 'ozuljak':
		case 'ožuljak':
			return 31;
		case 'travanj':
			return 30;
		case 'svibanj':
			console.log(31);
			break;
		case 'lipanj':
			return 30;
		case 'srpanj':
			return 31;
		case 'kolovoz':
			return 31;
		case 'rujan':
			return 30;
		case 'listopad':
			return 31;
		case 'studeni':
			return 30;
		case 'prosinac':
			return 31;
		default:
			console.log('unesite valjani mjesec');
	}
}

var dani = daniUMjesecu(mjesec);
console.log(dani);

// 5.
// Pomoću funkcije „check_year()“ provjerite je li godina koju je unio korisnik prijestupna
// ili ne.

var godina = parseInt(prompt('unesite godinu'));

function check_year(unos) {
	if ((unos % 4 === 0 && unos % 100 !== 0) || unos % 400 === 0) {
		console.log('godina je prijestupna');
	} else {
		console.log('godina nije prijestupna');
	}
}

check_year(godina);

// 6.
// Napisati funkciju koja će zahtijevati od korisnika da unese 5 brojeva i spremi ih u niz
// (osigurati da ih ima točno 5). Funkcija „check()“ treba provjeriti sve elemente iz niza i
// samo parne negativne pomnožiti same sa sobom. U glavnom programu ispisati niz.

var niz = [],
	input;
function praviNiz() {
	for (let i = 1; i <= 5; i++) {
		input = parseInt(prompt('unesite broj'));
		niz.push(input);
	}
	console.log('napravio sam niz: ' + niz);
}
praviNiz();

function check(unesiniz) {
	for (let i = 0; i < unesiniz.length; i++) {
		if (unesiniz[i] % 2 === 0 && unesiniz[i] < 0) {
			unesiniz[i] *= unesiniz[i];
		}
	}
	console.log(unesiniz);
}

check(niz);

// 7.
// Napisati funkciju koja će izračunati porez na uplaćeni iznos. Stopa poreza za iznose
// između 100 i 500 je 1%, između 500 i 1000 je 5%, a preko 1000 10%. Funkcija kao
// parametar prima iznos, a vraća iznos poreza.

var input = parseInt(prompt('unesite uplaceni iznos')),
	izracunato;

function izracunPoreza(unos) {
	if (unos >= 100) {
		if (unos < 500) {
			unos *= 0.01;
			return unos;
		} else if (unos >= 500 && unos < 1000) {
			unos *= 0.05;
			return unos;
		} else {
			unos *= 0.1;
			return unos;
		}
	} else {
		return 'unesite valjani iznos';
	}
}

izracunato = izracunPoreza(input);

console.log(izracunato);

// 8.
// Napisati funkciju koja će vraćati tiražu za prodani broj ploča. Ako je ploča prodana u više
// od 100 000 primjeraka, treba vratiti 'srebrena', preko 200 000 'zlatna' i preko 500 000
// 'platinasta'. Funkcija prima broj prodanih primjeraka.

var input = parseInt(prompt('unesite broj prodanih ploca'));

function vracamTirazu(unos) {
	if (unos > 0 && unos < 100000) {
		return 'ploca nije presla 100k';
	} else if (unos >= 100000 && unos <= 200000) {
		return 'srebrena';
	} else if (unos > 200000 && unos <= 500000) {
		return 'zlatna';
	} else if (unos > 500000) {
		return 'platinasta';
	} else {
		return 'unesite valjani unos';
	}
}

console.log(vracamTirazu(input));

// 9.
// Napisati funkciju koja će za proslijeđeni tekst vraćati koliko ima dvotočki, a koliko
// razmaka.

var input = prompt('unesite neki tekst');
var nizOdInputa = input.split(''),
	brojacDvo = 0,
	brojacRaz = 0;

function brojiTID(unos) {
	for (let i = 0; i < unos.length; i++) {
		if (nizOdInputa[i] === ':') {
			brojacDvo++;
		} else if (nizOdInputa[i] === ' ') {
			brojacRaz++;
		}
	}
	return brojacDvo + ' ' + brojacRaz;
}

console.log(brojiTID(input));

// 10.
// Napisati funkciju koja će proslijeđenu rečenicu ispisati unatrag, ali i zamijeniti mala i
// velika slova. Funkciju pozvati u glavnom programu.

var input = prompt('unesite recenicu');

function mjenjaRecenicu(unos) {
	var niz = unos.split(''),
		result = [];

	for (let i = niz.length - 1; i >= 0; i--) {
		result.push(niz[i]);
	}

	for (let i = 0; i < result.length; i++) {
		if (result[i] !== result[i].toLowerCase()) {
			result[i] = result[i].toLowerCase();
		} else {
			result[i] = result[i].toUpperCase();
		}
	}

	return result.join('');
}

console.log(mjenjaRecenicu(input));

// 11.
// Zatražiti od korisnika da unese neki tekst. Proslijediti tekst funkciji koja će provjeriti je li
// uneseni tekst palindrom. (Palindrom je riječ koja se isto čita i sprijeda i unatrag.)

var input = prompt('unesite neki tekst');

function palindrom(unos) {
	unos = unos.toLowerCase();
	var len = unos.length;
	var mid = Math.floor(len / 2);

	for (var i = 0; i < mid; i++) {
		if (unos[i] !== unos[len - 1 - i]) {
			return 'nije palindrom';
		}
	}

	return 'palindrom je';
}

console.log(palindrom(input));

// 12.
// Napisati funkciju koja će primati visinu u centimetrima kao parametar i koja će vratiti
// string koji sadrži visinu izraženu u metrima i centimetrima. Pozvati tu funkciju i ispisati
// rezultat. (Ako je parametar 178, funkcija treba vratiti “1m i 78cm”).

function metriICentrimetri(ucm) {
	var metri = parseInt(ucm / 100),
		centimetri = ucm % 100;

	return metri + 'm i ' + centimetri + 'cm';
}

console.log(metriICentrimetri(178));

// 13.
// Napisati funkciju „convertToSeconds()“ koja će proslijeđene sate pretvoriti u sekunde.
// Konverziju vršiti postepeno, i to na način da će se unutar ove funkcije, kreirati funkcija
// „convertToMinutes()“ koja će prvo poslane sate pretvoriti u minute i nakon toga vratiti u
// glavnu funkciju koja će završiti konverziju.

var sati = parseInt(prompt('unesite sate'));

function convertToSeconds(unos) {
	function convertToMinutes(a) {
		return a * 60;
	}
	return convertToMinutes(unos) * 60;
}

console.log(convertToSeconds(sati));

// 14.

// Napisati funkciju koja će kao parametar primiti broj koševa i vraćati poziciju ako je u top
// 5 strijelca u NBA ligi. Ako je broj veći od:
// a) 31419, vratiti 5,
// b) 32292, vratiti 4,
// c) 32482, vratiti 3,
// d) 36928, vratiti 2,
// e) 38387, vratiti 1.
// Napisati drugu funkciju koja će primiti ime igrača i broj koševa. Funkcija treba ispisati
// ime igrača i koliko je koševa postigao u karijeri te pomoću funkcije iz prvog zadatka
// provjeriti nalazi li se njegov broj koševa u top 5 strijelaca u NBA ligi te ispisati koju je
// poziciju zauzeo ako jest.

function top5(brojKoseva) {
	if (brojKoseva > 31419 && brojKoseva < 32292) {
		return 5;
	} else if (brojKoseva >= 32292 && brojKoseva < 32482) {
		return 4;
	} else if (brojKoseva >= 32482 && brojKoseva < 36928) {
		return 3;
	} else if (brojKoseva >= 36928 && brojKoseva < 38387) {
		return 2;
	} else if (brojKoseva >= 38387) {
		return 1;
	} else {
		return 'nije u top 5 strijelaca NBA lige';
	}
}

function imeIBrojKoseva(ime, brojKoseva) {
	console.log(ime + ': broj koseva u karijeri je: ' + brojKoseva);
	console.log('igrac je medu top 5 strijelaca NBA lige,tocnije na poziciji ' + top5(brojKoseva));
}

imeIBrojKoseva('danijel', 39292);

// 15.
// Ispisati sve property-e objekta i njihove vrijednosti:

var ob = {
	naziv: 'The Wire',
	ocjena: 9.4,
	autor: 'David Simon'
};

for (var prop in ob) {
	console.log(prop + ' - ' + ob[prop]);
}

// 16.
// Deklarirati objekt „zgrada“ i property-e adresa, broj zgrade, broj katova, broj stanova.
// Zatražiti od korisnika da preko prompt funkcije unese vrijednosti property-a te ispisati
// dodijeljene vrijednosti: ''Živim u zgradi broj'' +broj zgrade+'’ na adresi''+adresa+''koja
// ima''+broj katova+''katova i ukupno''+broj stanova+''stanova.''

var zgrada = {
	adresa: '',
	brojZgrade: '',
	brojKatova: '',
	brojStanova: ''
};

zgrada.adresa = prompt('unesite adresu');
zgrada.brojZgrade = prompt('unesite broj zgrade');
zgrada.brojKatova = prompt('unesite broj katova');
zgrada.brojStanova = prompt('unesite broj stanova');

console.log(
	'zivim u zgradi broj: ' +
		zgrada.brojZgrade +
		' na adresi: ' +
		zgrada.adresa +
		' koja ima ' +
		zgrada.brojKatova +
		' katova i ukupno ' +
		zgrada.brojStanova +
		' stanova'
);

// 17.
// Deklarirati objekt „test“ koji ima svojstva: ostvareni_bodovi, max_bodovi i ocjena.
// Dodati metodu koja računa ocjenu s obzirom na iznos ostvarenih i maksimalnih bodova
// za taj test.

var test = {
	ostvareni_bodovi: 80,
	max_bodovi: 100,
	ocjena: '',
	racunajOcjenu() {
		this.ocjena = Math.round((this.ostvareni_bodovi * 5) / this.max_bodovi);
	}
};
test.racunajOcjenu();
console.log(test.ocjena);

// 18.
// Deklarirati objekt „osoba“ koja će imati svojstva ime, prezime i kilogrami. Ispisati
// vrijednosti koje ste unijeli. Zatim deklarirati metodu koja će računati koliko kilograma ta
// osoba ima na Marsu. Metodi proslijediti broj kilograma koji ste unijeli. Opet ispisati
// vrijednosti koje ste postavili. (Ubrzanje sile teže na Marsu iznosi 0.38 ubrzanja sile teže
// na Zemlji.)

var osoba = {
	ime: 'john',
	prezime: 'doe',
	kilogrami: 80
};
for (var prop in osoba) {
	console.log(prop + ' - ' + osoba[prop]);
}

osoba.racuna = function () {
	this.kilogrami = this.kilogrami * 0.38;
};

osoba.racuna();
console.log('nakon izracuna tezine: ');
for (var prop in osoba) {
	console.log(prop + ' - ' + osoba[prop]);
}

// 19.
// Zatražiti od korisnika da unese property-e za objekt „grad“. Potrebno je unijeti ime grada,
// broj stanovnika, površinu te gradonačelnika. Za ime grada i gradonačelnika provjeriti da
// nije unesen nijedan broj, a za broj stanovnika i površinu provjeriti da su uneseni samo
// brojevi. Prije dodijeljivanja vrijednosti površini dodati 'km2' i tek onda ispisati sve vezano
// za objekt „grad“.

let grad = {};

let unosIme = prompt('unesi ime grada');
let unosGradonacelnik = prompt('unesi granonacelnika');
let unosStanovnici = parseInt(prompt('unesi broj stanovnika'));
let unosPovrsina = parseInt(prompt('unesi povrsinu grada'));

let regExLetters = /^[A-z]+$/;
let regExNumbers = /^[0-9]+$/;

if (
	regExLetters.test(unosIme) &&
	regExLetters.test(unosGradonacelnik) &&
	regExNumbers.test(unosStanovnici) &&
	regExNumbers.test(unosPovrsina)
) {
	grad.ime = unosIme;
	grad.gradonacelnik = unosGradonacelnik;
	grad.brojStanovnika = unosStanovnici;
	grad.povrsina = unosPovrsina + ' km2';
	console.log(grad);
} else {
	console.log('unesi podatke u ispravnom formatu');
}

// 20.
// Kreirati objekt „time“ koji ce imati property-e hours, minutes i seconds kojima ćete
// dodjeliti proizvoljene vrijednosti. Napraviti i metode: „convertHours“, koja će vraćati
// dodjeljene sate pretvorene u minute, „convertMinutes“ koja će vraćati dodjeljene minute
// (uključujući i sate koje smo pretvorili u minute), pretvorene u sekunde,
// „convertSeconds“ koja će vraćati ukupan broj sekundi te metodu „print()“ koja će
// ispisivati vrijeme u obliku HH:MM:SS.

var time = {
	hours: 1,
	minutes: 1,
	seconds: 30,
	convertHours() {
		return this.hours * 60;
	},
	convertMinutes() {
		return (this.convertHours() + this.minutes) * 60;
	},
	convertSeconds() {
		return this.convertMinutes() + this.seconds;
	},
	print() {
		console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
	}
};

console.log(time.convertHours());
console.log(time.convertMinutes());
console.log(time.convertSeconds());

// 21.
// Deklarirati objekt koji će sadržavati ime, prezime, zanimanje, godina_početka_rada,
// godina_staza i plaću neke osobe. Objekt treba imati metodu „povećaj“ koja će dodati
// 50KM na plaću svaki put kad se staž poveća za godinu (godine_staza računajte kao
// razliku od trenutne godine od godine_početka rada; metoda „povećaj“ se treba pozivati
// kao callback funkcija u metodi „staz“ svaki put kad se izračuna da se staž povećao za
// godinu).

let objekt = {
	ime: 'marko',
	prezime: 'matic',
	zanimanje: 'webdev',
	godinaPocetkaRada: 2018,
	get godinaStaza() {
		return new Date().getFullYear() - this.godinaPocetkaRada;
	},
	placa: 1500,
	povecaj: function () {
		for (let i = 1; i <= objekt.godinaStaza; i++) {
			objekt.placa += 50;
		}
	},
	staz: function (callback) {
		callback();
	}
};

objekt.staz(objekt.povecaj);
console.log(objekt.placa);

// 22.
// Deklarirati prazan objekt „osoba“. Zatražiti od korisnika unos vrijednosti za slijedeća 3
// svojstva objekta: jmbg, ime i prezime. Napisati funkciju koja vrši provjeru za ime i
// prezime - ne smiju biti kraći od 3 znaka i ne smiju sadržavati brojeve te funkciju za
// JMBG - ne smije sadržavati ništa osim brojeva i mora imati točno 13 brojeva. Ukoliko
// provjera nije prošla, funkcija treba ispisati poruku greške i vratiti 0, ukoliko je provjera
// prošla, funkcija vraća 1, i tek tada treba dodijeliti unesene vrijednosti svojstvima objekta.
// Nakon svakog unosa pozvati odgovarajuću funkciju.

const osoba = {},
	imeUnos = prompt('unesite ime'),
	prezimeUnos = prompt('unesite prezime');
provjera(imeUnos, prezimeUnos);
const jmbgUnos = prompt('unesite jmbg');
provjeraJMBG(jmbgUnos);

function provjera(ime, prezime) {
	const regExImeIPrezime = /(\D){3,}/i;
	if (regExImeIPrezime.test(imeUnos) && regExImeIPrezime.test(prezimeUnos)) {
		osoba.ime = imeUnos;
		osoba.prezime = prezimeUnos;
		return 1;
	} else {
		console.log('Pogresan unos imena ili prezimena');
		return 0;
	}
}
function provjeraJMBG(jmbg) {
	const regJMBG = /^\d{13}$/;
	if (regJMBG.test(jmbgUnos)) {
		osoba.jmbg = jmbgUnos;
		return 1;
	} else {
		console.log('Pogresan unos JMBG-a');
		return 0;
	}
}

console.log(osoba);

// 23.
// Deklarirati objekt boja koji će imati property-e R,G,B inicijalno postavljene na 0, te
// metodu „postavi_boju“ koja će postavljati definiranim property-ma nasumično odabranu
// nijansu boje (0,255). Pozvati metodu te ispisati dobivenu vrijednost boje u obliku
// (R,G,B).

const objekt = {
	R: 0,
	G: 0,
	B: 0,
	postavi_boju: function () {
		this.R = Math.floor(Math.random() * 255);
		this.G = Math.floor(Math.random() * 255);
		this.B = Math.floor(Math.random() * 255);
	}
};
objekt.postavi_boju();
console.log(`${objekt.R},${objekt.G},${objekt.B}`);

// 24.
// Zadan je objekt:

var knjige = {
	lektira: [
		{
			naziv: 'Zločin i kazna',
			autor: 'Fjodor Mihajlovič Dostojevskog',
			br_str: 350,
			godina_izdavanja: 1866
		},
		{
			naziv: 'Vlak u snijegu',
			autor: 'Mato Lovrak',
			br_str: 150,
			godina_izdavanja: 1931
		},
		{
			naziv: 'Mali princ',
			autor: ' Antoine de Saint-Exupery',
			br_str: 120,
			godina_izdavanja: 1943
		},
		{
			naziv: 'Rat i mir',
			autor: 'Lav Nikolajevič Tolstoj',
			br_str: 300,
			godina_izdavanja: 1865
		},
		{
			naziv: 'Ana Karenjina',
			autor: 'Lav Nikolajevič Tolstoj',
			br_str: 800,
			godina_izdavanja: 1873
		}
	]
};

// Ispisati nazive knjiga kronološki poredane.

let arr = [];
console.log(
	knjige.lektira.forEach(function (element) {
		arr.push(element.naziv);
	})
);
console.log(arr.sort().join(' -- '));

// 25.
// Ispisati sve knjige koje imaju preko 300 stranica te ispisati autora koji je napisao više od
// jedne knjige.

const arrKnjige = [];
const arrAutori = [];
knjige.lektira.forEach(function (element) {
	if (element.br_str > 300) {
		arrKnjige.push(element.naziv);
	}
	arrAutori.push(element.autor);
});
console.log(`Knjige koje imaju preko 300str. su: ${arrKnjige.join(', ')}`);
let results = [];
for (let i = 0; i < arrAutori.length - 1; i++) {
	if (arrAutori[i] === arrAutori[i + 1]) {
		results.push(arrAutori[i]);
	}
}
const uniqueAges = [...new Set(results)];
console.log(uniqueAges.join(' - '));

// 26.
// Dodati knjigu po vašem izboru i nju sortirati kronološki.

var knjige = {
	lektira: [
		{
			naziv: 'Zločin i kazna',
			autor: 'Fjodor Mihajlovič Dostojevskog',
			br_str: 350,
			godina_izdavanja: 1866
		},
		{
			naziv: 'Vlak u snijegu',
			autor: 'Mato Lovrak',
			br_str: 150,
			godina_izdavanja: 1931
		},
		{
			naziv: 'Mali princ',
			autor: ' Antoine de Saint-Exupery',
			br_str: 120,
			godina_izdavanja: 1943
		},
		{
			naziv: 'Rat i mir',
			autor: 'Lav Nikolajevič Tolstoj',
			br_str: 300,
			godina_izdavanja: 1865
		},
		{
			naziv: 'Ana Karenjina',
			autor: 'Lav Nikolajevič Tolstoj',
			br_str: 800,
			godina_izdavanja: 1873
		},
		{
			naziv: 'The Last Wish',
			autor: 'Andrzej Sapkowski',
			br_str: 288,
			godina_izdavanja: 1993
		}
	]
};
let arr = [];
console.log(
	knjige.lektira.forEach(function (element) {
		arr.push(element.naziv);
	})
);
console.log(arr.sort().join(' -- '));

// 27.
// Zadan je objekt:

var phonebook = {
	contact1: {
		firstName: 'Ana',
		lastName: 'Anic',
		phoneNumber: '063/111-111',
		address: ['Ante Starcevica', '9', 'Mostar', '88000']
	},
	contact2: {
		firstName: 'Ante',
		lastName: 'Antic',
		phoneNumber: '063/222-111',
		address: ['Hrvatske mladeži', '7', 'Mostar', '88000']
	},
	contact3: {
		firstName: 'Marko',
		lastName: 'Markic',
		phoneNumber: '063/222-333',
		address: ['Kraljice Katarine', '10', 'Grude', '88340']
	},
	contact4: {
		firstName: 'Hrvoje',
		lastName: 'Horvat',
		phoneNumber: '098/2522-111',
		address: ['Jarunskaulica', '12', 'Zagreb', '10000']
	}
};

// Ispisati za svaki kontakt njegovo ime, broj i grad stanovanja.

function print(phonebook) {
	let phoneArr = Object.keys(phonebook).map(function (key) {
		return phonebook[key];
	});

	for (let i = 0; i < phoneArr.length; i++) {
		if (typeof phoneArr[i] !== 'function') {
			console.log('Name: ' + phoneArr[i].firstName + ' ' + phoneArr[i].lastName);
			console.log('Number: ' + phoneArr[i].phoneNumber);
			console.log('City: ' + phoneArr[i].address[2]);
		}
	}
}
print(phonebook);

// 28.
// Dodati metodu „search“ koja prima ime kontakta i vraća sve podatke traženog kontakta ili
// 0 ako nije pronađen. U glavnom programu zatražiti od korisnika unos imena kontakta,
// pozvati metodu te ispisati podatke nađenog kontakta ili odgovarajuću poruku.
// TODO idk atm
phonebook.search = function (name) {
	var name = prompt('Enter name for search: ');
	var contacts = [];
	Object.keys(phonebook).forEach(function (contact) {
		if (typeof phonebook[contact] !== 'function') {
			if (phonebook[contact].firstName.toLowerCase() === name.toLowerCase()) {
				contacts.push(phonebook[contact]);
			}
		}
	});

	if (contacts.length > 0) {
		console.log(contacts);
		// TODO hmmm
		console.log(`kontankt pronaden ${contacts}`);
	} else {
		console.log(`kontankt nije pronaden`);
	}
};
// 29.
// Napisati funkciju „addNewContact()“ za dodavanje novog, petog kontakta u imenik koja
// od korisnika traži unos podataka (ime, prezime, broj telefona i adresu - ulica, broj ulice,
// grad i poštanski broj grada). Pozvati funkciju i dodati novi kontakt.

function addNewContact() {
	let contact = {};
	contact.firstName = prompt('Enter first name:');
	contact.lastName = prompt('Enter last name:');
	contact.phoneNumber = prompt('Enter phone number in format xxx/xxx-xxx:');
	contact.address = [];
	contact.address.push(prompt('Enter street name:'));
	contact.address.push(prompt('Enter street number:'));
	contact.address.push(prompt('Enter city:'));
	contact.address.push(prompt('Enter post code:'));
	phonebook['contact5'] = contact;
}

// 30.
// Napisati funkciju „deleteContact() “ koja prima ime kontakta i briše ga iz imenika.
// Zatražiti od korisnika unos imena korisnika kojega želi ukloniti zatim to i učiniti.

function deleteContact(ime) {
	for (kontakt in phonebook) {
		if (typeof phonebook[kontakt] !== 'function') {
			if (ime.toLowerCase() === phonebook[kontakt].firstName.toLowerCase()) {
				delete phonebook[kontakt];
			}
		}
	}
}

let imeZaIzbrisat = prompt('Unesite koje ime zelite izbrisat');

deleteContact(imeZaIzbrisat);
console.log(phonebook);

// 31.
// Deklarirati objekt Film koji će imati svojstva naziv, žanr i trajanje, te metodu koja će
// ispisivati "Film 'naziv filma' je završio u 'vrijeme zavrsetka'.". Metodu pozvati kad završi
// trajanje filma. (setTimeout()).

let film = {
	naziv: 'Avengers:Age of Ultron',
	zanr: 'action',
	trajanje: 141,
	print: function () {
		var today = new Date(),
			h = today.getHours(),
			m = today.getMinutes(),
			s = today.getSeconds();
		console.log('Film ' + this.naziv + ' je zavrsio u ' + h + ':' + m + ':' + s);
	}
};
setTimeout(film.print(), film.trajanje * 1000);

// 32.
// Što će se ispisati i zašto ?

// 33.
// Deklarirati dvije funkcije. Prvoj funkciji proslijediti drugu kao callback parametar. U
// prvoj funkciji deklarirati objekt „osoba“ i nakon 2 sekunde pozvati drugu funkciju. U
// drugoj funkciji zatražiti od korisnika da unese property-e ime, prezime, broj godina.
// Ispisati vrijednosti objekta „osoba“.

// 34.
// Deklarirati objekt „osoba“ sa svojstvima ime, sitost te metode „nahrani“ i „izgladni“ koje
// trebaju povećati, odnosno smanjiti sitost za 1. U glavnom programu koristeći
// 18
// setTimeout() nakon 5 sekundi pozvati metodu „izgladni“, te ispisati poruku "Gladan
// sam", zatim nakon 3 sekunde pozvati metodu „nahrani“ i ispisati "Sit sam".

// 35.
// Deklarirati dvije funkcije. Iz glavnog programa pozvati prvu funkciju i proslijediti joj
// drugu kao callback. Prva funkcija treba od korisnika zatražiti da unese svoje ime, a druga
// da unese broj godina. Sve rezultate funkcija vratiti i ispisati u glavnom programu preko
// console.log: ime + '', vi imate'' + godine + '' godina.''

// 36.
// Deklarirati objekt „stol“ koji će imati svojstva visina, širina, broj_rezerviranih_stolova.
// Objekt treba imati i metodu „rezerviraj_stol“ koja će omogućiti rezervaciju stola
// korisniku na način da se se poveća broj rezerviranih stolova svaki put kad se metoda
// pozove. Napraviti funkciju koja ispisuje koliki je broj rezerviranih stolova. Tu funkciju
// proslijediti kao callback funkciju metodi „rezerviraj_stol“. Rezervirajte 5 stolova.

// 37.
// Deklarirati dvije funkcije. Prva funkcija prima drugu funkciju kao callback. U prvoj
// funkciji zatražiti od korisnika da unesi brojeve sve dok ne unese broj 5. Brojeve spremiti u
// niz. Zatim niz proslijediti drugoj funkciji koja će svaki uneseni paran broj podijeliti sa
// dva. Novi niz ispisati kao rezultat.

// 38.
// Deklarirati 3 funkcije proizvoljnog imena. Prva kao callback prima drugu, a druga kao
// callback prima treću. U glavnom programu zatražiti od korisnika da unese kilometre.
// U prvoj funkciji samo ispisati koliko je korisnik unio kilometara, te unesene kilometre
// pretvoriti u metre i poslati drugoj funkciji. Zatim u drugoj funkciji pretvoriti metre u
// kopnene milje ( 1609,344 m ) te ispisati rezultat. U trećoj funkciji pretvoriti metre u
// nautičke milje (1852 m). Sada ispisati rezultat u kilometrima, kopnenim miljama i
// nautičkim miljama.

// 39.
// Deklarirati objekt „desert“ sa svojstvima naziv, vrsta(npr.kolač, torta, palačinka...),
// broj_komada i težina u gramima (svakog komada) te popuniti proizvoljnim vrijednostima.

// 40.
// Dodati metodu „pojedi“ koja smanjuje broj komada za 1 i metodu „preracunaj“ koja
// prima težinu u gramima i broj komada, te preračunava težinu iz grama u kilograme i vraća
// dobiveni rezultat.

// 41. Metoda „pojedi“ prima callback na metodu „preracunaj“ i ispisuje novu težinu u kg i gr.
// Ispisati težinu deserta u kg i gr koristeći ranije napisanu metodu, zatim pozvati metodu
// „pojedi“.

// 42.
// Deklarirati objekt „korisnik“ sa svojstvima ime, prezime, broj_godina, datum_rođenja i
// popuniti sa proizvoljnim vrijednostima. Napisati funkciju „rodjendan()“ koja prema
// proslijeđenom parametru 'datum_rođenja' provjerava je li danas rođendan korisniku, ako
// jest, ispisuje "Sretan rođendan!", ako ne, vraća 0 (Napomena: Date()).

// 43.
// Dodati metodu „godine“ koja uzima trenutnu godinu i računa koliko korisnik trenutno
// ima godina te to sprema u svojstvo broj_godina. Metoda prima callback na funkciju
// „rodjendan()“ i poziva ga. Pozvati metodu „godine“. (Napomena: slice(), split());

// 44. Napisati funkciju „print()“ koja će primati težinu u gramima kao parametar i vraćati
// string koji sadrži težinu izraženu u kilogramima i gramima. (Ako je parametar 1981,
// funkcija treba vratiti “1kg i 981g”). Deklarirati objekt koji će sadržavati visinu, težinu,
// zanimanje i ime neke osobe. Objekt treba imati metodu „add_mass“ koja će mijenjati
// težinu osobe, ali tako da prima težinu u gramima. Metoda prima i callback na funkciju
// „print()“ i tako ispisuje novu težinu osobe u kilogramima i gramima. Pozvati metodu
// „add_mass“.

// 45.
// Napisati funkciju „ocjena() “ koja vraća odgovarajuću ocjenu za uneseni postotak točnih
// rezultata. Između 40 i 60% ocjena je 2, 61 i 75% ocjena 3, 76 i 90 ocjena 4, preko 90%
// ocjena je 5. Deklarirati objekt koji će sadržavati ime studenta, niz dobivenih bodova
// 20
// odrađenih zadataka [1, 0, 2, 3, 0, 0] (maksimalan broj bodova je 10), postotak i ocjenu
// koji su još nepoznati. Objekt treba imati metodu „bodovi“ koja će izračunati i postaviti
// postotak bodova na testu. Metoda „bodovi“ prima callback funkciju za računanje ocjene.
// Koristeći funkciju „ocjena()“, izračunati ocjenu na testu te preko nje, postaviti vrijednost
// svojstvu 'ocjena'.

// 46.
// Napisati funkciju koja će kao parametar primiti broj koševa i vraćati poziciju ako je u top
// 5 strijelca u NBA ligi. Ako je broj veći od:
// a) 31419, vratiti 5,
// b) 32292, vratiti 4,
// c) 32482, vratiti 3,
// d) 36928, vratiti 2,
// e) 38387, vratiti 1.
// Pozvati funkciju i ispisati što ona vraća.

// 47.
// Zadan je objekt:
// var player = {name : 'Michael Jordan',
// height : 1.98,
// born : '17.2.1963.'
// };
// Ispisati sve property - e objekta i njihove vrijednosti.

// 48.
// Napisati funkciju koja će primiti ime igrača i broj koševa.Funkcija treba ispisati ime
// igrača i koliko je koševa postigao u karijeri te pomoću funkcije iz 46.-og zadatka
// provjeriti nalazi li se njegov broj koševa u top 5 strijelaca NBA lige te ispisati koju je
// poziciju zauzeo ako jest.
// a) Proširiti objekt „player“ iz 47.-og zadatka tako što ćete mu dodati property 'clubs' koji
// će sadržati klubove u kojima je Jordan igrao. 'clubs' treba biti niz koji sadrži objekte s
// informacijama o klubovima u kojima je igrao. Svaki objekt treba imati grad, ime i
// godinu osnivanja kluba. (npr. Chicago Bulls 1966., Washington Wizards 1961.)
// b) Ispisati sve gradove iz „player“ objekta u kojima je Jordan igrao.
// c) Objektu dodajte funkciju „setPoints“ koja prima broj koševa i callback funkciju. Preko
// callback funkcije provjerite je li broj koševa u NBA top 5 i ispišite rezultat. Koristite
// funkciju iz 46. zadatka.

// 49.
// Napisati funkciju „broj_bodova() “ koja će vraćati broj bodova za osvojenu poziciju.Ako
// je netko osvojio poziciju 1, funkcija vraća 6 bodova, poziciju 2 vraća 4 i poziciju 3 vraća
// 2 boda. Funkcija prima poziciju kao parametar. Deklarirati objekt koji će sadržavati naziv
// natjecatelja, njegov redni broj, niz koji sadrži pozicije natjecatelja koje je osvojio na
// zadnjim natjecanjima i broj bodova koje je osvojio. Broj bodova postaviti koristeći
// funkciju „broj_bodova()“. Objektu dodati metodu koja će ispisati sve osvojene pozicije.
// Objektu dodati i metodu koja prima poziciju i callback. Ona treba dodati poziciju u niz
// pozicija u objektu, preko callbacka dohvatiti broj bodova za tu poziciju i ispisati ju.

// TODO Javascript 2

// 1.
// Otvorite http://nsoft.ba/js-tecaj-b/ i kopirajte JSON podatke o proizvodima u varijablu
// json za daljnje korištenje. Ispišite u konzolu prosjek ID-jeva proizvoda, te ima li više
// parnih ili neparnih ID-jeva.

var json = {
	products: {
		76: {
			id: '76',
			name: 'Kruh',
			price: 'KM 1.65',
			qty: '4',
			ingredients: ['sol', 'brasno', 'voda', 'kvasac']
		},
		14: {
			id: '14',
			name: 'Mlijeko',
			price: 'KM 1.43',
			qty: '12',
			ingredients: ['kravlje mlijeko']
		},
		48: {
			id: '48',
			name: 'Secer',
			price: 'KM 2.64',
			qty: '1',
			ingredients: ['secerna trska']
		},
		89: {
			id: '89',
			name: 'Brasno5kg',
			price: 'KM 6.90',
			qty: '1',
			ingredients: ['psenica', 'sjemenke']
		},
		5: {
			id: '5',
			name: 'Argeta',
			price: 'KM 1.33',
			qty: '3',
			ingredients: ['piletina', 'sol', 'zacini']
		}
	}
};

// 2.
// Ispišite u konzolu ime proizvoda koji ima najmanje sastojaka.Ispišite prosječnu količinu
// svih proizvoda.

// 3.
// Nađite ukupnu vrijednost inventara svih proizvoda na stanju.Ako ona prelazi 50 KM,
// ispišite količinu najskupljeg proizvoda, a ako ne, ispišite količinu najjeftinijeg proizvoda.

// 4.
// Napravite klasu „Product“, koja sadrži svojstva name(string), price(number), currency
// (string), qty (number). Napravite javne metode „buy()“ i „sell()“ koje će
// povećavati/smanjivati količinu za 2.

// 5.
// Metode „buy() “ i „sell() “ trebaju imati callback na metodu „changePrice() “, koja treba
// pozvati istoimenu privatnu metodu koja će povećati cijenu za 10% kad se proizvodu
// smanji dostupna količina, i obratno, smanjiti ju za 10% kad se količina poveća. (Urađeno
// iznad!) Instancirajte jedan proizvoljan objekt, podesite mu cijenu na 10 i promijenite
// cijenu pozivom na „buy()“ i „sell()“.

// 6.
// Instancirajte objekte klase „Product“ za svaki proizvod definiran u varijabli json.
// Zamijenite količine najjefitinijem i najskupljem objektu proizvoda. U prototype klase
// „Product“ dodajte metode „getName()“, „getPrice()“, „getCurrency()“ i „getQty()“.

// 7.
// Zadan je objekt:

var putovanje = {
	putovanje1: {
		grad: 'London',
		cijena_putovanja: '580€',
		trajanje_putovanja: '130min',
		polazak: '1. svibanj 2015.',
		povratak: '10. svibanj 2015.',
		osiguran_smjestaj: 'da',
		organizator: 'Crno jaje'
	},
	putovanje2: {
		grad: 'Pariz',
		cijena_putovanja: '600€',
		trajanje_putovanja: '105min',
		polazak: '15. svibanj 2015.',
		povratak: '22. svibanj 2015.',
		osiguran_smjestaj: 'da',
		organizator: 'Crno jaje'
	},
	putovanje3: {
		grad: 'Torino',
		cijena_putovanja: '120€',
		trajanje_putovanja: '40min',
		polazak: '14. travanj 2015.',
		povratak: '16. travanj 2015.',
		osiguran_smjestaj: 'da',
		organizator: 'Trivago'
	},
	putovanje4: {
		grad: 'London',
		cijena_putovanja: '150€',
		trajanje_putovanja: '130min',
		polazak: '1. svibanj 2015.',
		povratak: '10. svibanj 2015.',
		osiguran_smjestaj: 'ne',
		organizator: 'Crno jaje'
	},
	putovanje5: {
		grad: 'Munchen',
		cijena_putovanja: '100€',
		trajanje_putovanja: '80min',
		polazak: '1. svibanj 2015.',
		povratak: '10. svibanj 2015.',
		osiguran_smjestaj: 'ne',
		organizator: 'Trivago'
	}
};
// Ispisati sva putovanja koja organizira Crno jaje, te ispisati broj putovanja koja organizira
// Trivago.

// 8.
// Ispisati sva putovanja koja imaju organiziran smještaj.

// 9.
// Sortirati putovanja po duljini njihovog trajanja(polazak i povratak).Ispisati sva putovanja
// koja imaju isto trajanje putovanja (polazak i povratak).

// 10.
// Napraviti novi property koji će se zvati po vašem izboru te mu dodijeliti cijenu putovanja
// u KM. (1€ = 1.94KM).

// 11.
// Sortirati putovanja od jeftinijeg prema skupljem.

// 12.
// Napraviti metodu koja će preračunati trajanje putovanja iz minuta u sate i minute.Zatim sortirati putovanja prema potrebnom vremenu leta.

// 13.
// Napraviti metodu „odgodi“, koja će odgoditi polazak putovanja za 1 dan.Zatim pozvati
// jedno putovanje i odgoditi njegov polazak, te ispisati rezultat.

// 14.
// Izbrisati nanovo dodavane property - e, te ispisati staro - novo stanje.

// 15.
// Napišite funkciju za asinkroni dohvat podataka sa servera, te dohvatite JSON s
// " http://jsbin.com/hugafagiwe/2.js " i preko callbacka pozovite obradu podataka, ukoliko je
// zahtjev uspješno izvršen.

// 16.
// Ispišite starost svakog CD - a te ukupnu prosječnu starost svih CD - ova.

// 17.
// Ispišite nazive CD - ova kronološki poredane.

// 18.
// Ispišite one zemlje koje se ponavljaju na više od 3 CD - a.

// 19.
// Ispišite najskuplji i najjeftiniji CD.

// 20.
// Ispišite imena autora kronološki poredane.

// 21.
// Napišite funkciju za asinkroni dohvat podataka sa servera.Dohvatite JSON s
// " http://jsbin.com/funimefupo.js " i preko callbacka pozovite obradu podataka. Ako nećete
// raditi u jsbinu, kopirajte JSON.

// 22.
// Ispišite nazive filmova kronološki poredane.

// 23.
// Ispišite prosječnu starost filmova.

// 24.
// Ispišite nazive glumaca koji se ponavljaju u više filmova.

// 25.
// Ispišite za svaki jezik u koliko različitih filmova se koristi.

// 26.
// Definirajte klasu „Movie“ koja će sadržati naziv, prosječnu ocjenu i broj glasova.

// 27.
// Dodajte joj metodu „vote“ koja će primati ocjene 1 - 10 i koja će preračunati prosječnu
// ocjenu.

// 28.
// Instancirajte objekte za svaki film iz JSON - a i glasajte za pojedini film i ispišite novu
// prosječnu ocjenu.

// 29.
// Dodati funkciju „playMovie() “.Ona treba puštati film pretvarajući trajanje iz minuta u
// sekunde (na početku ispiše samo film taj i taj počeo je u x:y). Kada film završi potrebno
// je pozvati callback funkciju „onMovieFinish()“ koja bi ispisala koji film je završio i kada.
// (Koristiti Date() i setTimeout().)

// 30.
// Zadan je JSON objekt:

var jsonObj = {
	phones: [
		{
			id: 6144,
			name: 'Sony Xperia Z2',
			manufacturer: 'Sony',
			ram: '3 GB',
			internal_memory: '16 GB',
			cpu: 'Quad-core 2.3 GHz Krait 400',
			back_camera: '20.7 MP',
			front_camera: '2.2 MP',
			gpu: 'Adreno 330',
			battery: '3200 mAh',
			battery_removable: 'no',
			price: '490 EUR'
		},
		{
			id: 6033,
			name: 'Samsung Galaxy S5',
			manufacturer: 'Samsung',
			ram: '2 GB',
			internal_memory: '32 GB',
			cpu: 'Quad-core 2.5 GHz Krait 400',
			back_camera: '16 MP',
			front_camera: '2 MP',
			gpu: 'Adreno 330',
			battery: '2800 mAh',
			battery_removable: 'yes',
			price: '430 EUR'
		},
		{
			id: 5705,
			name: 'LG Nexus 5',
			manufacturer: 'LG',
			ram: '3 GB',
			internal_memory: '16 GB',
			cpu: 'Quad-core 2.3 GHz Krait 400',
			back_camera: '8 MP',
			front_camera: '1.3 MP',
			gpu: 'Adreno 330',
			battery: '2300 mAh',
			battery_removable: 'no',
			price: '260 EUR'
		},
		{
			id: 6077,
			name: 'LG G2 mini',
			manufacturer: 'LG',
			ram: '1 GB',
			internal_memory: '8 GB',
			cpu: 'Quad-core 1.2 GHz Cortex-A7',
			back_camera: '8 MP',
			front_camera: '1.3 MP',
			gpu: 'Adreno 305',
			battery: '2440 mAh',
			battery_removable: 'yes',
			price: '230 EUR'
		},
		{
			id: 5497,
			name: 'Sony Xperia M',
			manufacturer: 'Sony',
			ram: '1 GB',
			internal_memory: '4 GB',
			cpu: 'Dual-core 1 GHz Krait',
			back_camera: '5 MP',
			front_camera: 'VGA',
			gpu: 'Adreno 305',
			battery: '1750 mAh',
			battery_removable: 'yes',
			price: '110 EUR'
		},
		{
			id: 3724,
			name: 'Samsung Galaxy Ace',
			manufacturer: 'Samsung',
			ram: '512 MB',
			internal_memory: '158 MB',
			cpu: '800 MHz ARM 11',
			back_camera: '5 MP',
			front_camera: 'no',
			gpu: 'Adreno 200',
			battery: '1350 mAh',
			battery_removable: 'yes',
			price: '90 EUR'
		}
	]
};
// Ispisati naziv najskupljeg mobitela.

// 31.
// Ispisati sve mobitele koji imaju uklonjivu bateriju.

// 32.
// Napisati funkciju „changePrice() “ koja omogućava unos nove cijene(od korisnika) i
// promjenu cijene proslijeđenom mobitelu. Pritom pripaziti da korisnik unese prihvatljivu
// cijenu (mora se sastojati samo od brojeva i nova cijena smije biti niža ili viša samo za 0%
// do 20% od stare cijene). Sve dok nova cijena ne prođe provjeru, ispisivati odgovarajuću
// poruku i tražiti ponovan unos od korisnika. Pri spremanju nove cijene u objekt, na kraj
// cijene trebate dodati valutu "EUR".
// Pozvati funkciju „changePrice()“ i promijeniti cijenu mobitela "Samsung Galaxy S5".

// 33.
// Napisati funkciju „avgRam() “ koja izračunava prosječnu količinu ram - a mobitela i
// ispisuje ju u GB i MB.

// 34.
// Napisati funkciju „sortById() “ koja treba poredati mobitele po ID - evima od najmanjeg
// prema najvecem, zatim ih ispisati.

// 35.
// Napraviti klasu „Smartphone“ koja se sastoji od svojstava: name, manufacturer,
// internal_memory i price. Instancirati objekte klase Smartphone za svaki mobitel iz
// zadanog objekta "jsonObj" (to učiniti dinamički, ne samo copy-paste-ati vrijednosti
// svojstava iz zadanog objekta).

// 36. Dodati svojstvo discount, postaviti njegovu vrijednost svim objektima na "0%".

// 37. Dodati metodu „setDiscount“ koja ce preko primljenog parametra povećati discount za
// 10. Metoda prima i callback na funkciju „printPrice()“ koja ispisuje cijenu sa uračunatim
// popustom.
