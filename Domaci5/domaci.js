//prvi zadatak
function max(a, b) {
	if (a>b) {
		return a;
	}
	return b;
}
console.log(max(12, 5));

//drugi zadatak
function maxOfThree(a,b,c){
	if (a>b && a>c) {
		return a;
	} 
	if(b>a && b>c){
		return b;
	}
	return c;
}
console.log(maxOfThree(8, 25, 4));


//treci zadatak
function samoglasnik(s){
	if (s =="a" || s=="e" || s=="i" || s=="o" || s=="u"){
		return true;
	}
	return false;
}
console.log(samoglasnik("a"));


//cetvrti zadatak
function translate(tekst) {
	
	var tekst = "";
	for (var i=0; i<tekst.length; i++) {
		tekst += tekst.charAt(i);
		if (suglasnik(tekst.charAt(i)) ) {
			tekst += "o" + tekst.charAt(i);
		}
		return tekst;
	}
}
console.log(translate("ovo je tesko"));

// peti
function suma(niz) {
	var suma = 0;
	for(var i = 0; i<niz.length; i++) {
		suma += niz[i];
	}
	return suma;
}

function proizvod(niz) {
	var proizvod = 1;
	for(var i = 0; i<niz.length; i++) {
		proizvod *= niz[i];
	}
	return proizvod;
}
console.log(suma([1,2,3,4]));
console.log(proizvod([1,2,3,4]));

// sesti
function reverse(tekst) {
	var obrnutiTekst = "";
	for(var i = tekst.length - 1; i >= 0; i--) {
		obrnutiTekst += tekst.charAt(i);
	}
	return obrnutiTekst;
}
console.log(reverse("moj primer"));

// sedmi
function prevedi(tekst) {
	var obj = {"happy":"srecna", "new":"nova", "year":"godina"};
	var prevod = "";
	var reci = tekst.split(" ");
	for(var i = 0; i < reci.length; i++) {
		prevod += obj[reci[i]] + " ";
	}
	return prevod;
}
console.log(prevedi("happy new year"));

// osmi
function najduzaRec(niz) {
	var najduza = 0;
	for(var i = 0; i<niz.length; i++) {
		if(niz[i].length > niz[najduza].length)
			najduza = i;
		}
	return niz[najduza];
}
console.log(najduzaRec(["ovo", "je", "najduza", "rec"]));

// deveti
function filtrirajReci(niz, i) {
	var reci = [];
	for(var r = 0; r<niz.length; r++) {
		if(niz[r].length > i)
reci.push(niz[r]);
}
return reci;
}
console.log(filtrirajReci(["ovo", "je", "primer", "za", "filtriranje", "reci"], 4))

// deseti
function frekSlova(string) {
	var lista = {};
	for(var i = 0; i < string.length; i++) {
		if(typeof lista[string.charAt(i)] != 'undefined') 
			lista[string.charAt(i)]++;
		else
			lista[string.charAt(i)] = 1;
	}
	return lista;
}
console.log(frekSlova("abbabcbdbabdbdbabababcbcbab"));