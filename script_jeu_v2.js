let source = new Array;
let url = new Set;
let image1;
let image2;
let compteur = 0;
let clicOk = true;
let compteurCoups = document.getElementById('compteurCoups');
let compteurClics = 0;
let pairesTrouvees = 0;
let bravo = document.getElementById('nbCoups');
const ROWS = 4;
let column = 3;
let tableauImages = new Array(ROWS * column);
let choixMemory = localStorage.getItem("choix-memory");
let tailleMemory = localStorage.getItem("taille-memory");
let a = 'ressources/animauxAnimes/';
let b = 'ressources/alphabet-scrabble/';
let c = 'ressources/animaux/';
let d = 'ressources/animauxdomestiques/';
let y = 'ressources/chiens/';
let f = 'ressources/dinosaures/';
let g = 'ressources/dinosauresAvecNom/';
let h = 'ressources/memory-legume/';
let webp = ".webp";
let png = ".png";
let jpg = ".jpg";
let svg = ".svg";
let emailSessionStorage = sessionStorage.getItem("mail");
let passwordSessionStorage = sessionStorage.getItem("password");
let lienProfil = document.getElementById('idSessionStorage');
let lienSeConnecter = document.getElementById('connectSessionStorage');

switch(tailleMemory) {
    case '1' : column = 3;
    break;
    case '2' : column = 5;
    break;
    case '3' : column = 6;
    break;
    default: column = 3;
}


switch(choixMemory) {
    case 'a' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, a, webp);
                })
             });
    break;
    case 'b' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, b, png);
                })
             });
    break;
    case 'c' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, c, webp);
                })
             });
    break;
    case 'd' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, d, jpg);
                })
             });
    break;
    case 'e' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, y, webp);
                })
             });
    break;
    case 'f' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, f, jpg);
                })
             });
    break;
    case 'g' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, g, jpg);
                })
             });
    break;
    case 'h' : generationTableauImges(column);
               constructionPlateau(column);
               document.querySelectorAll('.btn-click-me').forEach(image => {
                image.addEventListener('click', event => {
                 clicCarte(event, h, svg);
                })
             });
    break;
    default: generationTableauImges(column);
            constructionPlateau(column);
            document.querySelectorAll('.btn-click-me').forEach(image => {
            image.addEventListener('click', event => {
            clicCarte(event, a, webp);
                })
            });
    break;

}

function generationTableauImges(c){

        let nbImages = ROWS * c / 2;

        for (let i = 0 ; i < nbImages; i++){
            let randomNumber = Math.floor(Math.random() * ROWS * c);
            while (tableauImages[randomNumber] != undefined) {
                randomNumber = Math.floor(Math.random() * ROWS * c);
            }
            tableauImages[randomNumber] = (i + 1);
            while (tableauImages[randomNumber] != undefined) {
                randomNumber = Math.floor(Math.random() * tableauImages.length);
            }
            tableauImages[randomNumber] = (i + 1);
        }
    }

function constructionPlateau(c){

    for (let i = 0 ; i < ROWS; i++){
        let grid = document.getElementById('grid');
        for (let j = 0 ; j < c ; j++){
            if (c === 5) {
                let img = document.createElement("img");
                let div = document.createElement("div");
                img.setAttribute("src", "ressources/question.svg");
                img.setAttribute("id", (i * (ROWS + 1) + j + 1));
                grid.appendChild(div);
                div.setAttribute('class', 'carte');
                div.appendChild(img);
                img.setAttribute('class', 'btn-click-me');
            } else if (c === 6) {
                let img = document.createElement("img");
                let div = document.createElement("div");
                img.setAttribute("src", "ressources/question.svg");
                img.setAttribute("id", (i * (ROWS + 2) + j + 1));
                grid.appendChild(div);
                div.setAttribute('class', 'carte');
                div.appendChild(img);
                img.setAttribute('class', 'btn-click-me');
            } else {
                let img = document.createElement("img");
                let div = document.createElement("div");
                img.setAttribute("src", "ressources/question.svg");
                img.setAttribute("id", (i * (ROWS - 1) + j + 1));
                grid.appendChild(div);
                div.setAttribute('class', 'carte');
                div.appendChild(img);
                img.setAttribute('class', 'btn-click-me');
            }
        }
    }
}

function clicCarte(e, url, extension) {
    let img = e.target;
    let id = img.getAttribute('id');

    if (clicOk == false) {
        return;
    }
    
    img.setAttribute('src', url + tableauImages[id - 1] + extension);
    source.push(tableauImages[id - 1]);

    compteur++;
    
    if (compteur == 1) {
        image1 = e.target;
    } else if (compteur == 2) {
        clicOk = false;
        image2 = e.target;
        compteur = 0;
        compteurClics++
        compteurCoups.innerText = compteurClics;
    }
    

    verification()

    if (pairesTrouvees === (tableauImages.length/2)) {
        bravo.innerHTML = 'Bravo, vous avez gagné en ' + compteurClics + ' coups !'
    }

}

function verification() {
    if (source[0] === source[1]) {
        pairesTrouvees++;
        clicOk = true;
        source = [];
    } else if (source.length > 1 && source[0] != source[1]) {
        setTimeout(retourner, 1000);
        source = [];
    } 
}

function retourner() {
    image1.setAttribute('src', 'ressources/question.svg');
    image2.setAttribute('src', 'ressources/question.svg');
    clicOk = true;
}

function restart() {

    for (i=0; i < tableauImages.length; i++) {
        let image = document.getElementById([i+1]);
        image.setAttribute('src', 'ressources/question.svg');
    }
}

window.addEventListener("keyup", (e) => {
    if (e.key === " ") {
        restart()
        window.location.reload(true);
    }
})

if (emailSessionStorage != null || passwordSessionStorage != null) {
    lienProfil.setAttribute('href', 'profil.html');
    lienSeConnecter.setAttribute('href', 'profil.html');
}