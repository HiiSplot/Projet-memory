let emailStorage = localStorage.getItem("mail");
let mailInput = document.getElementById('mail');
let pseudoStorage = localStorage.getItem("pseudo");
let pseudoInput = document.getElementById('pseudo');
let choixMemory = document.getElementById('choice');
let tailleMemory = document.getElementById('taille');
let imgMemory = document.getElementById('img-memory');
const btnEnregistrer = document.getElementById('enregistrer');
const btnDeconnexion = document.getElementById('deconnexion');
let emailSessionStorage = sessionStorage.getItem("mail");
let passwordSessionStorage = sessionStorage.getItem("password");
let lienProfil = document.getElementById('idSessionStorage');
let lienSeConnecter = document.getElementById('connectSessionStorage');

let infosProfil = {
    "choixUtilisateur" : [
       
    ]
}


if (emailStorage != null) {
    mailInput.setAttribute('value', emailStorage);
}

if (pseudoInput != null) {
    pseudoInput.setAttribute('value', pseudoStorage);
}



choixMemory.addEventListener('change', () => {
    let choixMemoryValue = document.getElementById('choice').value;
    switch(choixMemoryValue) {
        case 'a' : imgMemory.setAttribute('src', 'ressources/animauxAnimes/memory_detail_animaux_animes.png');
        break;
        case 'b' : imgMemory.setAttribute('src', 'ressources/alphabet-scrabble/memory_detail_scrabble.png');
        break;
        case 'c' : imgMemory.setAttribute('src', 'ressources/animaux/memory_detail_animaux.png');
        break;
        case 'd' : imgMemory.setAttribute('src', 'ressources/animauxdomestiques/memory_detail_animaux_domestiques.png');
        break;
        case 'e' : imgMemory.setAttribute('src', 'ressources/chiens/memory_details_chiens.png');
        break;
        case 'f' : imgMemory.setAttribute('src', 'ressources/dinosaures/memory_detail_dinosaures.png');
        break;
        case 'g' : imgMemory.setAttribute('src', 'ressources/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png');
        break;
        case 'h' : imgMemory.setAttribute('src', 'ressources/memory-legume/memory_detail.png');
        break;
    };
})

tailleMemory.addEventListener('click', () => {
    tailleMemory = document.getElementById('taille').value;
    console.log(tailleMemory);
})

btnEnregistrer.addEventListener('click', () => {
    choixMemory = document.getElementById('choice').value;
    localStorage.setItem('choix-memory', choixMemory);
    localStorage.setItem('taille-memory', tailleMemory);
    let nouveauProfil = {"choix-memory" : choixMemory, "taille-memory" : tailleMemory};
    infosProfil.choixUtilisateur.push(nouveauProfil);
    document.location.href="jouer.html";
})

btnDeconnexion.addEventListener('click', () => {
    document.location.href="index.html";
    sessionStorage.clear()
})

if (emailSessionStorage != null || passwordSessionStorage != null) {
    lienProfil.setAttribute('href', 'profil.html');
    lienSeConnecter.setAttribute('href', 'profil.html');
}


console.log(lienSeConnecter);