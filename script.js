const numeroWhatsApp = "221772649525";

const maillots = [
    { nom: "Angleterre", image: "Angleterre.jpeg", prix: 5000 },
    { nom: "Arsenal", image: "Arsenal.jpeg", prix: 5000 },
    { nom: "Aston Villa", image: "Aston Villa.jpeg", prix: 5000 },
    { nom: "Auxerre", image: "Auxerre.jpeg", prix: 5000 },
    { nom: "Bastia", image: "Bachtia.jpeg", prix: 5000 },
    { nom: "Barça", image: "Barça.jpeg", prix: 5000 },
    { nom: "Bayern", image: "Bayern.jpeg", prix: 5000 },
    { nom: "Benfica 2", image: "Benfica (2).jpeg", prix: 5000 },
    { nom: "Benfica", image: "Benfica.jpeg", prix: 5000 },
    { nom: "Clermont", image: "Clermont.jpeg", prix: 5000 },
    { nom: "Inter Miami", image: "Inter Miami.jpeg", prix: 5000 },
    { nom: "LASK", image: "Lask.jpeg", prix: 5000 },
    { nom: "Lille", image: "Lile.jpeg", prix: 5000 },
    { nom: "Liverpool", image: "Liverpool.jpeg", prix: 5000 },
    { nom: "Man City", image: "Man.City.jpeg", prix: 5000 },
    { nom: "Man U 2", image: "Man.U (2).jpeg", prix: 5000 },
    { nom: "Man U", image: "Man.U.jpeg", prix: 5000 },
    { nom: "Metz 2", image: "Metz (2).jpeg", prix: 5000 },
    { nom: "Metz", image: "Metz.jpeg", prix: 5000 },
    { nom: "Milan AC", image: "Milan AC.jpeg", prix: 5000 },
    { nom: "OGC Nice", image: "OGC Nice.jpeg", prix: 5000 },
    { nom: "Paris", image: "Paris.jpeg", prix: 5000 },
    { nom: "Parme", image: "Parm.jpeg", prix: 5000 },
    { nom: "PSG", image: "PSG.jpeg", prix: 5000 },
    { nom: "Real Madrid", image: "Real.jpeg", prix: 5000 },
    { nom: "Strasbourg", image: "Strasbourg.jpeg", prix: 5000 }
];

const grille = document.getElementById("maillots");

maillots.forEach((maillot) => {
    const carte = document.createElement("article");
    carte.className = "maillot";

    const image = document.createElement("img");
    image.src = maillot.image;
    image.alt = maillot.nom;

    image.onerror = function () {
        this.alt = "Image introuvable : " + maillot.image;
        this.style.height = "150px";
    };

    const titre = document.createElement("h3");
    titre.textContent = maillot.nom;

    const prix = document.createElement("p");
    prix.className = "prix";
    prix.textContent = maillot.prix.toLocaleString("fr-FR") + " FCFA";
    const choixTaille = document.createElement("select");
choixTaille.className = "choix-taille";

const tailles = ["Choisir une taille", "L", "XL", "XXL"];

tailles.forEach(function (taille) {
    const option = document.createElement("option");
    option.value = taille;
    option.textContent = taille;
    choixTaille.appendChild(option);
});

    const bouton = document.createElement("a");
    bouton.className = "bouton-commande";
    bouton.textContent = "Commander sur WhatsApp";

    const message = "Bonjour, je souhaite commander le maillot " +
    maillot.nom + " en taille " +
    choixTaille.options[choixTaille.selectedIndex].value +
    " à " + maillot.prix + " FCFA.";

    bouton.href = "https://wa.me/" + numeroWhatsApp +
        "?text=" + encodeURIComponent(message);
    bouton.target = "_blank";
    bouton.rel = "noopener noreferrer";

    carte.append(image, titre, prix, choixTaille, bouton);
    grille.appendChild(carte);
});
const champRecherche = document.getElementById("rechercheMaillot");

champRecherche.addEventListener("input", function () {
    const recherche = champRecherche.value.toLowerCase().trim();

    const cartes = document.querySelectorAll(".maillot");

    cartes.forEach(function (carte) {
        const nom = carte.querySelector("h3").textContent.toLowerCase();

        if (nom.includes(recherche)) {
            carte.style.display = "";
        } else {
            carte.style.display = "none";
        }
    });
});