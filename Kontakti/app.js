function AjaxZahtev(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.metod, options.putanja, true);
  req.addEventListener("load", function() {
    if (req.status < 400) {
      callback(req.responseText);
    }
    else {
    callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  req.send(options.ime || null);
}

function AjaxZahtev(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.metod, options.putanja, true);
  req.addEventListener("load", function() {
    if (req.status < 400) {
      callback(req.responseText);
    }
    else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  req.send(options.sadrzaj || null);
}


function ProcesirajOdgovor(odgovor){
  document.getElementById("odgovor").innerHTML = "<h1>Odgovor servera</h1><pre>"+odgovor+"</pre>"
}

function Kontakt() {
  var options = {}
  options.metod = "POST"
  options.putanja = "Novi kontakt"
  ime = document.getElementById("ime").value
  prezime  = document.getElementById("prezime").value
  broj = document.getElementById("broj").value
  email = document.getElementById("email").value
  datum = document.getElementById("datum").value
  slika = document.getElementById("slika").value
  var kontakt = {"ime":ime, "prezime":prezime, "broj":broj, "email": email, "datum":datum, "slika":slika}
  options.sadrzaj = JSON.stringify(kontakt)
  AjaxZahtev(options, ProcesirajOdgovor)
}