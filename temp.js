let heureMetenaint = document.getElementById("heure");
let mettreAJourHeure = () => {
  let date = new Date();
  let heures = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();
  let tempsActuel =
    heures +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (secondes < 10 ? "0" : "") +
    secondes;
  heureMetenaint.innerText = tempsActuel;
};

// Mettre à jour l'heure immédiatement
mettreAJourHeure();

// Mettre à jour l'heure toutes les secondes (1000 millisecondes)
setInterval(mettreAJourHeure, 1000);

let plusGrandTemp=(tmpD,temF)=>{
  let heureDebut = new Date();
  heureDebut.setHours(tmpD[0], tmpD[1], tmpD[2]); // Définit l'heure à 14:04:37

  // Heure d'arrêt
  let heureFin = new Date();
  heureFin.setHours(temF[0], temF[1], 0); // Définit l'heure à 18:50:00

  // Calcule la différence en millisecondes
  let differenceEnMillisecondes = heureFin - heureDebut;

  return differenceEnMillisecondes
}

let tempDefirence = (tmpD, temF) => {
  // Heure de départ
  let heureDebut = new Date();
  heureDebut.setHours(tmpD[0], tmpD[1], tmpD[2]); // Définit l'heure à 14:04:37

  // Heure d'arrêt
  let heureFin = new Date();
  heureFin.setHours(temF[0], temF[1], 0); // Définit l'heure à 18:50:00

  // Calcule la différence en millisecondes
  let differenceEnMillisecondes = heureFin - heureDebut;

  // Convertit la différence en heures, minutes et secondes
let  heuresDiff = Math.floor(differenceEnMillisecondes / 3600000);
  let minutesDiff = Math.floor((differenceEnMillisecondes % 3600000) / 60000);
let  secondesDiff = Math.floor((differenceEnMillisecondes % 60000) / 1000);

return(`${heuresDiff}:${minutesDiff}:${secondesDiff}`)
};
