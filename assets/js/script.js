//
// FONCTION DE TRI DES CATEGORIES
//
// Récupération des données pour les afficher dans les cartes
// en fonction des catégories

// Stockage de l'adresse du fichier json dans une constante
const productCatalog = 'assets/json/alafut_products_catalog.json';

// Initialisation des variables pour les fonctions de récupération de produits

// initialisation variables pour les tableaux
let products = [];
let productsCat = [];
let addToCartBtn = [];
let cart = [];
let addedItem = 0;


// initialisation de la variable qui incrémentera les ids de cartes
let newId = 0;

// initialisation des boutons

let categories = document.querySelectorAll('#categoriesBtn a');

// on récupère le fichier json
fetch(productCatalog)
    .then(response => response.json())
    .then(response => {
        products = response;
    });

categories.forEach(elements => {

    elements.onclick = function () {

        document.querySelector('.row').innerHTML = '';

        // on filtre le tableau entier pour ne garder que la catégorie 'starters'
        productsCat = products.filter(property => property.category == elements.id);

        // on boucle sur le nouveau tableau pour afficher le contenu
        productsCat.forEach(item => {

            // on récupère l'id la card
            // et on la stocke dans une variable
            let colCard = document.querySelector('#colCard');

            // on clone la card
            let colCardClone = colCard.cloneNode(true);

            // on incrémente les ids des éléments html de la card
            // et on ajoute le contenu
            colCardClone.id = 'colCardClone' + newId;
            document.querySelector('.row').appendChild(colCardClone);
            // on affiche l'image du produit
            colCardClone.querySelector('#cardImg').id = 'cardImg' + newId;
            colCardClone.querySelector('#cardImg' + newId).src = `assets/img/${item.img}`;
            // on afiiche le nom du produit
            colCardClone.querySelector('#cardTitle').id = 'cardTitle' + newId;
            colCardClone.querySelector('#cardTitle' + newId).innerHTML = item.name;
            // on affiche le prix du produit
            colCardClone.querySelector('#cardPrice').id = 'cardPrice' + newId;
            colCardClone.querySelector('#cardPrice' + newId).innerHTML = item.price + ' €';
            // on affiche le descrition du produit
            colCardClone.querySelector('#cardContent').id = 'cardContent' + newId;
            colCardClone.querySelector('#cardContent' + newId).innerHTML = item.infos;
            // on ajoute la référence sur le bouton grâce au data-id
            colCardClone.querySelector('#cardBtn').id = 'cardBtn' + newId;
            colCardClone.querySelector('#cardBtn' + newId).setAttribute('data-id', item.ref);

            //
            // Ajout au tableau panier
            //

            let addToCartBtn = document.querySelectorAll('#cardBtn' + newId);

            console.log(addToCartBtn)

            addToCartBtn.forEach(element => {
                element.onclick = function () {

                    addedItem = element.getAttribute('data-id');

                    console.log(addedItem);

                    cart.push(addedItem, item.name, item.price);

                    console.log(cart);
                };
            });

            // on incrémente l'id
            newId++


        })
    }
});
