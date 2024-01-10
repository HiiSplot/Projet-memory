let emailSessionStorage = sessionStorage.getItem("mail");
let emailLocalStorage = localStorage.getItem("mail");
let mailInput = document.getElementById('email')

let passwordSessionStorage = sessionStorage.getItem("password");
let passwordLocalStorage = localStorage.getItem("mail");
let passwordInput = document.getElementById('mdp')

let errorEmail = document.getElementById('error-email');
let errorMdp = document.getElementById('error-mdp');

let lienProfil = document.getElementById('idSessionStorage');
let lienSeConnecter = document.getElementById('connectSessionStorage');

const btn = document.getElementById('connexion');

if (emailSessionStorage != null) {
    mailInput.setAttribute('value', emailSessionStorage);
} else if (emailLocalStorage != null) {
    mailInput.setAttribute('value', emailLocalStorage);
}


if (passwordSessionStorage != null) {
    passwordInput.setAttribute('value', passwordSessionStorage);
} else if (passwordLocalStorage != null) {
    passwordInput.setAttribute('value', passwordLocalStorage);
}

btn.addEventListener('click', allerProfil);

function allerProfil () {
    localStorage.setItem('mail', mailInput.value);
}

btn.addEventListener('click', verificationEmail)

function verificationEmail() {
    mailInputValue = document.getElementById('email').value;
    mdpInputValue = document.getElementById('mdp').value;
    if (mailInputValue != emailSessionStorage 
        || mailInputValue != emailLocalStorage) {
        errorEmail.style.visibility = 'visible';
    } else if (mdpInputValue != passwordSessionStorage 
        || mailInputValue != passwordLocalStorage){
        errorMdp.style.visibility = 'visible';
    } else {
        document.location.href="profil.html";
    }
}

if (emailSessionStorage != null || passwordSessionStorage != null) {
    lienProfil.setAttribute('href', 'profil.html');
    lienSeConnecter.setAttribute('href', 'profil.html');
}
