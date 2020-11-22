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

// init itm
let itm = document.querySelector("#rowContent");

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
            // on affiche le nom du produit
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

            // on récupère les id des boutons 'Ajouter' + nouvel id
            let addToCartBtn = document.querySelectorAll('#cardBtn' + newId);

            // on parcours le tableau renvoyé par querySelectorAll

            addToCartBtn.forEach(element => {
                element.onclick = function () {

                    // et à chaque itération, on récupére la référence produit dans data-id
                    item = element.getAttribute('data-id');

                    // on test le tableau pour trouver le bon produit avec la bonne référence
                    addedItem = products.filter(product => product.ref == item);

                    // on ajoute le produit dans le nouveau tableau cart
                    cart.push(addedItem[0]);

                    console.log(cart)
                };
            });

            // on incrémente l'id
            newId++


        })
    }
});


//
// remplissage du panier dans la modale
// au click sur le bouton panier
//

let cartBtn = document.querySelector('#cartBtn');
cartBtn.addEventListener('click', fillModal);

function fillModal() {

    // on parcours le tableau cart pour pouvoir afficher chaque produit
    // avec son prix et sa référence dans le panier
    cart.forEach((element, index) => {

        //concaténer row content avec mon index
        document.querySelector("#rowContent .ref").innerHTML = element.ref;
        document.querySelector("#rowContent .name").innerHTML = element.name;
        document.querySelector("#rowContent .price").innerHTML = element.price;
        let cln = itm.cloneNode(true);
        cln.id = "rowContent" + index;
        document.querySelector("#clone").appendChild(cln);

    });
}


//
// Vider le panier quand on clique sur 'payer la commande'
//

let orderBtn = document.querySelector('#orderBtn');
orderBtn.onclick = function() {
    cart = [];
}