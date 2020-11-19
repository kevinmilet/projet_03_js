// Récupération des données pour les afficher dans les cartes
// en fonction des catégories

// Stockage de l'adresse du fichier json dans une constante
const productCatalog = 'assets/json/alafut_products_catalog.json';

// Initialisation des variables pour les fonctions de récupération de produits


// initialisation variables pour les tableaux
let products = [];
let productsStarters = [];
let productsDishes = [];
let productsDesserts = [];
let productsDrinks = [];


// initialisation de la variable qui incrémentera les ids de cartes
let newId = 0;

// initialisation des boutons
const startersBtn = document.querySelector('#startersBtn');
const dishesBtn = document.querySelector('#dishesBtn');
const dessertsBtn = document.querySelector('#dessertsBtn');
const drinksBtn = document.querySelector('#drinksBtn');


// on récupère le fichier json
fetch(productCatalog)
    .then(response => response.json())
    .then(response => {
        products = response;
        // appendDom(products)
    });


// fonction de remplissage de la page avec le contenu
// dans les card
// function appendDom(products) {
//     // on boucle sur le tableau récupéré grace au fetch()
//     products.forEach((element) => {

//         // on récupère l'id la card
//         // et on la stocke dans une variable
//         let colCard = document.getElementById('colCard');

//         // on clone la card
//         let colCardClone = colCard.cloneNode(true);

//         // on incrémente les ids des éléments html de la card
//         // et on ajoute le contenu
//         colCardClone.id = 'colCardClone' + newId;
//         document.querySelector('.row').appendChild(colCardClone);

//         colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
//         colCardClone.querySelector('#cardImg' + newId).src = `assets/img/${element.img}`;

//         colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
//         colCardClone.querySelector('#cardTitle' + newId).innerHTML = element.name;

//         colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
//         colCardClone.querySelector('#cardPrice' + newId).innerHTML = element.price + ' €';

//         colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
//         colCardClone.querySelector('#cardContent' + newId).innerHTML = element.infos;

//         // on incrémente l'id
//         newId++
//     });
// };


// afficher seulement les entrées
startersBtn.onclick = function () {

    let productsStarters = [];
    let productsDishes = [];
    let productsDesserts = [];
    let productsDrink = [];


    // on filtre le tableau entier pour ne garder que la catégorie 'starters'
    productsStarters = products.filter(element => element.category == 'starters');
    
    // on boucle sur le nouveau tableau pour afficher le contenu
    productsStarters.forEach((element) => {

        // on récupère l'id la card
        // et on la stocke dans une variable
        let colCard = document.querySelector('#colCard');

        // on clone la card
        let colCardClone = colCard.cloneNode(true);

        // on incrémente les ids des éléments html de la card
        // et on ajoute le contenu
        colCardClone.id = 'colCardClone' + newId;
        document.querySelector('.row').appendChild(colCardClone);

        colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
        colCardClone.querySelector('#cardImg' + newId).src = `assets/img/${element.img}`;

        colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
        colCardClone.querySelector('#cardTitle' + newId).innerHTML = element.name;

        colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
        colCardClone.querySelector('#cardPrice' + newId).innerHTML = element.price + ' €';

        colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
        colCardClone.querySelector('#cardContent' + newId).innerHTML = element.infos;

        // on incrémente l'id
        newId++
    });
};


// afficher seulement les plats
dishesBtn.onclick = function () {

    let productsDishes = [];

    // on filtre le tableau entier pour ne garder que la catégorie 'starters'
    productsDishes = products.filter(element => element.category == 'dishes');
    
    // on boucle sur le nouveau tableau pour afficher le contenu
    productsDishes.forEach((element) => {

        // on récupère l'id la card
        // et on la stocke dans une variable
        let colCard = document.querySelector('#colCard');

        // on clone la card
        let colCardClone = colCard.cloneNode(true);

        // on incrémente les ids des éléments html de la card
        // et on ajoute le contenu
        colCardClone.id = 'colCardClone' + newId;
        document.querySelector('.row').appendChild(colCardClone);

        colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
        colCardClone.querySelector('#cardImg' + newId).src = `assets/img/${element.img}`;

        colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
        colCardClone.querySelector('#cardTitle' + newId).innerHTML = element.name;

        colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
        colCardClone.querySelector('#cardPrice' + newId).innerHTML = element.price + ' €';

        colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
        colCardClone.querySelector('#cardContent' + newId).innerHTML = element.infos;

        // on incrémente l'id
        newId++
    });
};


// afficher seulement les desserts
dessertsBtn.onclick = function () {

    let productsDesserts = [];

    // on filtre le tableau entier pour ne garder que la catégorie 'starters'
    productsDesserts = products.filter(element => element.category == 'desserts');
    
    // on boucle sur le nouveau tableau pour afficher le contenu
    productsDesserts.forEach((element) => {

        // on récupère l'id la card
        // et on la stocke dans une variable
        let colCard = document.querySelector('#colCard');

        // on clone la card
        let colCardClone = colCard.cloneNode(true);

        // on incrémente les ids des éléments html de la card
        // et on ajoute le contenu
        colCardClone.id = 'colCardClone' + newId;
        document.querySelector('.row').appendChild(colCardClone);

        colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
        colCardClone.querySelector('#cardImg' + newId).src = `assets/img/${element.img}`;

        colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
        colCardClone.querySelector('#cardTitle' + newId).innerHTML = element.name;

        colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
        colCardClone.querySelector('#cardPrice' + newId).innerHTML = element.price + ' €';

        colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
        colCardClone.querySelector('#cardContent' + newId).innerHTML = element.infos;

        // on incrémente l'id
        newId++
    });
};


// afficher seulement les boissons
drinksBtn.onclick = function () {

    let productsDrinks = [];

    // on filtre le tableau entier pour ne garder que la catégorie 'starters'
    productsDrinks = products.filter(element => element.category == 'drinks');
    
    // on boucle sur le nouveau tableau pour afficher le contenu
    productsDrinks.forEach((element) => {

        // on récupère l'id la card
        // et on la stocke dans une variable
        let colCard = document.querySelector('#colCard');

        // on clone la card
        let colCardClone = colCard.cloneNode(true);

        // on incrémente les ids des éléments html de la card
        // et on ajoute le contenu
        colCardClone.id = 'colCardClone' + newId;
        document.querySelector('.row').appendChild(colCardClone);

        colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
        colCardClone.querySelector('#cardImg' + newId).src = `assets/img/${element.img}`;

        colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
        colCardClone.querySelector('#cardTitle' + newId).innerHTML = element.name;

        colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
        colCardClone.querySelector('#cardPrice' + newId).innerHTML = element.price + ' €';

        colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
        colCardClone.querySelector('#cardContent' + newId).innerHTML = element.infos;

        // on incrémente l'id
        newId++
    });
};