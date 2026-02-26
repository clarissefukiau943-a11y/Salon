document.getElementById("formulaire").addEventListener("submit", function(e){
e.preventDefault();

const { jsPDF } = window.jspdf;
const doc = new jsPDF();

let numeroFacture = "FAC-" + Math.floor(Math.random()*100000);

let nom = document.getElementById("nom").value;
let tel = document.getElementById("telephone").value;
let service = document.getElementById("service").value;
let date = document.getElementById("date").value;
let heure = document.getElementById("heure").value;
let paiement = document.getElementById("paiement").value;
let numero = document.getElementById("numero").value;

doc.setFontSize(18);
doc.text("SALON ELEGANCE - FACTURE", 20, 20);

doc.setFontSize(12);
doc.text("Numero: " + numeroFacture, 20, 30);
doc.text("Client: " + nom, 20, 40);
doc.text("Telephone: " + tel, 20, 50);
doc.text("Service: " + service, 20, 60);
doc.text("Date: " + date + " " + heure, 20, 70);
doc.text("Paiement: " + paiement, 20, 80);
doc.text("Numero Mobile: " + numero, 20, 90);

doc.text("Merci pour votre confiance !", 20, 110);

doc.save(numeroFacture + ".pdf");

alert("Paiement réussi ! Facture générée.");
});