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

function AjaxZahtev(){
  var options = {}
  options.ime = document.getElementById("ime").value
  options.prezime  = document.getElementById("prezime").value
  options.telefon = document.getElementById("telefon").value
  options.email = document.getElementById("email").value
  options.datum = document.getElementById("datum").value
  options.slika = document.getElementById("slika").value
  AjaxZahtev(options, ProcesirajOdgovor)
}

function ProcesirajOdgovor(odgovor){
  document.getElementById("odgovor").innerHTML = "<h1>Odgovor servera</h1><pre>"+odgovor+"</pre>"
}