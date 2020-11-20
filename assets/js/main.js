let panier = [{
        "ref": "s001",
        "category": "starters",
        "name": "Salade d'été",
        "infos": "Salade de roquette, tomates cerises, mozzarella et jambon cru",
        "price": "17.99",
        "img": "Salade1.jpeg"
    },
    {
        "ref": "s002",
        "category": "starters",
        "name": "Salade fraicheur",
        "infos": "Salade de cresson à la mimolette",
        "price": "17.99",
        "img": "Salade2.jpeg"
    },
    {
        "ref": "s003",
        "category": "starters",
        "name": "Salade César",
        "infos": "Salade de légumes de printemps, oeuf mollet et parmesan",
        "price": "18.99",
        "img": "Salade3.jpg"
    }
];
//console.log(panier);
//déclarer le bouton

//let btn1 = document.getElementById("modalbtn");

//créer un écouteur d'événements

//btn1.addEventListener("click", function (event) {


//document.querySelector('.modal-body').innerHTML="coucou";


//});


panier.forEach((element, index) => {
    let itm = document.querySelector("#rowcontent");
    //concaténer row content avec mon index

    document.querySelector("#rowcontent .ref").innerHTML = element.ref;
    document.querySelector("#rowcontent .name").innerHTML = element.name;
    document.querySelector("#rowcontent .price").innerHTML = element.price;
    let cln = itm.cloneNode(true);
    cln.id = "rowcontent" + index;
    console.log(cln);
    document.querySelector("#clone").appendChild(cln);

});

//document.getElementById("rowcontent").appendChild(cln);