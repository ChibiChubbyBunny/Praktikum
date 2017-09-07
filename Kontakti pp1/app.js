window.onload = function() {
  
  var dugmeSacuvaj = document.querySelector("#forma");
  dugmeSacuvaj.addEventListener("submit", Sacuvaj);
}

function AjaxZahtev(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.metod, options.putanja, true);
  req.addEventListener("load", function() {
    if (req.status < 400) {
      console.log(req);
      callback(req.responseText);
    }
    else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.addEventListener("error", function() {
    callback(new Error("Network error"));
  });
  req.send(options.sadrzaj);

}

function Sacuvaj(e){
  e.preventDefault();

  var ime = document.querySelector("#ime").value;
  var prezime = document.querySelector("#prezime").value;
  var broj = document.querySelector("#broj").value;
  var email = document.querySelector("#email").value;
  var datum = document.querySelector("#datum").value;

  var options = {}
  options.metod = "post";
  options.putanja  = "noviKontakt";
  var poruka = {"ime":ime, "prezime":prezime, "broj":broj, "email":email, "datum":datum}
  options.sadrzaj = JSON.stringify(poruka); 
  AjaxZahtev(options, PrikaziOdgovorNaPoruku)
}

function PrikaziOdgovorNaPoruku(odgovor){
  var odgovor2 = JSON.parse(odgovor);

  