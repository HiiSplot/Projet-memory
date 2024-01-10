let nom = document.getElementById('nom');
let email = document.getElementById('email');
let mdp = document.getElementById('mdp');
let confirmation = document.getElementById('confirmation');
let p = document.getElementById('alert-text')
const img = document.getElementById('error');
const creerCompte = document.getElementById('creerCompte');
let pseudo = document.getElementById('pseudoError');
let alertePseudo = document.getElementById('alerte-pseudo');
let emailError = document.getElementById('emailError');
let alerteEmail = document.getElementById('alerte-email');
let truePseudo;
let trueEmail;
let trueMdp;
let trueConfirm;
let emailSessionStorage = sessionStorage.getItem("mail");
let passwordSessionStorage = sessionStorage.getItem("password");
let lienProfil = document.getElementById('idSessionStorage');
let lienSeConnecter = document.getElementById('connectSessionStorage');

let donnees = {
    "joueurs" : [
        {"pseudo": "Laulau", "mail" : "bensimon.laura@orange.fr", "password" : "r4t0un3tt3!"},
    ]
}

function testPseudo() {
    nom = document.getElementById('nom').value;

    if (nom.length > 0 && nom.length < 3) {
        alertePseudo.innerHTML = '<img src="ressources\\error.svg" alt="error">';
        pseudo.style.visibility = 'visible';
        truePseudo = false;
    } else if (nom.length >= 3) {
        alertePseudo.innerHTML = '<img src="ressources\\check.svg" alt="check">';
        pseudo.style.visibility = 'hidden';
        truePseudo = true;
    }  else {
        alertePseudo.innerHTML = '';
        pseudo.style.visibility = 'hidden';
        truePseudo = false;
    }
}

nom.addEventListener('keyup', testPseudo);

function testEmail() {
    email = document.getElementById('email').value;
    const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    
    if (emailReg.test(email)) {
        alerteEmail.innerHTML = '<img src="ressources\\check.svg" alt="check">';
        emailError.style.visibility = 'hidden';
        trueEmail = true;
    } else if (email < 1) {
        alerteEmail.innerHTML = '';
        emailError.style.visibility = 'hidden';
        trueEmail = false;
    } else {
        alerteEmail.innerHTML = '<img src="ressources\\error.svg" alt="error">';
        emailError.style.visibility = 'visible';
        trueEmail = false;
    }
}

email.addEventListener('keyup', testEmail);

function testMdp() {
    mdp = document.getElementById('mdp').value;
    let faible = document.getElementById('faible');
    let moyen = document.getElementById('moyen');
    let fort = document.getElementById('fort');
    let regMoyen1 = /[0-9]/;
    let regMoyen2 = /[#?!@$%^&*-]/;
    let regFort = (/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/);

    if (mdp.length > 0) {
        faible.style.visibility = 'visible';
        trueMdp = false;
    } else {
        faible.style.visibility = 'hidden';
        trueMdp = false;
    }
/* --------------------------------------------------------------------- */
    if (mdp.length >=6 && (regMoyen1.test(mdp) || regMoyen2.test(mdp))) {
        moyen.style.visibility = 'visible';
        trueMdp = false;
    } else {
        moyen.style.visibility = 'hidden';
        trueMdp = false;
    }
/* --------------------------------------------------------------------- */
    if (mdp.length >=9 && regFort.test(mdp)) {
        fort.style.visibility = 'visible';
        trueMdp = true;
    } else {
        fort.style.visibility = 'hidden';
        trueMdp = false;
    }
}

mdp.addEventListener('keyup', testMdp);

function confirmMdp() {
    mdp = document.getElementById('mdp').value;
    confirmation = document.getElementById('confirmation').value;
    let alerteMdp = document.getElementById('alerte-mdp');
    let confirmError = document.getElementById('confirmError');

    if (mdp.length === confirmation.length && mdp === confirmation) {
        alerteMdp.innerHTML = '<img src="ressources\\check.svg" alt="check">';
        trueConfirm = true;
    } else if (mdp.length === confirmation.length && mdp != confirmation) {
        alerteMdp.innerHTML = '<img src="ressources\\error.svg" alt="error">';
        confirmError.style.visibility = 'visible';
        trueConfirm = false;
    } else {
        alerteMdp.innerHTML = '';
        confirmError.style.visibility = 'hidden';
        trueConfirm = false;
    }
}

confirmation.addEventListener('keyup', confirmMdp);

function infosStorage() {

    let infos = document.getElementById('infosManquantes');
    nom = document.getElementById('nom').value;
    email = document.getElementById('email').value;
    let emailDonnees;
    let pseudoDonnees;

    for (i = 0; i < donnees.joueurs.length; i ++) {

        emailDonnees = donnees.joueurs[i].mail;
        pseudoDonnees = donnees.joueurs[i].pseudo;

        if (email === emailDonnees) {
            alerteEmail.innerHTML = '<img src="ressources\\error.svg" alt="error">';
            emailError.style.visibility = 'visible';
            emailError.innerHTML = "Adresse mail déjà utilisée, <a href='se_connecter.html' id='lien-rouge'>se connecter ? </a>";
        } else if (nom === pseudoDonnees) {
            alertePseudo.innerHTML = '<img src="ressources\\error.svg" alt="error">';
            pseudo.style.visibility = 'visible';
            pseudo.innerText = "Nom d'utilisateur déjà utilisé";
        }
    }

    if (email != emailDonnees && nom != pseudoDonnees && truePseudo && trueEmail && trueMdp && trueConfirm) {
        localStorage.setItem('pseudo', nom);
        localStorage.setItem('mail', email);
        localStorage.setItem('password', mdp);
        sessionStorage.setItem('mail', email);
        sessionStorage.setItem('password', mdp);
        let nouveauJoueur = {"pseudo" : nom, "mail" : email};
        donnees.joueurs.push(nouveauJoueur);
        document.location.href="se_connecter.html";
    } else if (!truePseudo && !trueEmail && !trueMdp && !trueConfirm) {
        infos.innerHTML = '<p id="colorInfos">Certains champs sont incorrects</p>'
        let colorInfos = document.getElementById('colorInfos');
        colorInfos.style.color = 'red';
    }

}

creerCompte.addEventListener('click', infosStorage);

if (emailSessionStorage != null || passwordSessionStorage != null) {
    lienProfil.setAttribute('href', 'profil.html');
    lienSeConnecter.setAttribute('href', 'profil.html');
}
