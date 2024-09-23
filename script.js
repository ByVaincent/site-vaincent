
//  Affichage / masquage menu mobile


const hamburgerMenuElement = document.querySelector(".menu-mobile-hamburger")
const menuMobileElement = document.querySelector(".menu-mobile")
const barBurgerElement = document.querySelectorAll(".bar")

hamburgerMenuElement.addEventListener("click", function() {
    menuMobileElement.classList.toggle("affichage-menu-mobile")

    for(let i = 0; i < barBurgerElement.length; i++){
        
        const barElement = barBurgerElement[i]
        barElement.classList.toggle("burger-in-use")
    }

});

//Gestion de la couleur du lien de navigation

const lienDeNavigation = document.querySelectorAll(".header-nav ul li a");
const lienDeNavigationMobile = document.querySelectorAll(".container-menu-mobile ul li a");

const URLEnCours = window.location.href;

lienDeNavigation.forEach(lien => {

    if(lien.href === URLEnCours) {

        lien.classList.add('active');
    }
})
    //Version mobile
lienDeNavigationMobile.forEach(lien =>{

    if (lien.href === URLEnCours){

        lien.classList.add('active');
    }
})


// Traitement et affichage de l'agenda des concerts

const urlDatesConcerts = 'concerts.json'

fetch (urlDatesConcerts)
    .then (reponse => {
        if (!reponse.ok){
            throw new Erreur ('Le fichier concerts.json n\'a pas pu être trouvé: ', reponse.statusText );
        }
        return reponse.json()
    })

    .then (datesConcerts => {
        //Récupération des éléments du DOM

        const tableDates = document.getElementById('tableau-concerts')
        const pasdeDatesPrevues = document.getElementById('pas-de-dates-prevues')

        //Affichage ou non des dates s'il y en a 
        if(datesConcerts.length !== 0) {

            tableDates.classList.toggle("affichage-off")
            pasdeDatesPrevues.classList.toggle("affichage-off")

            // Affichage des dates dans un th    
            for (let i = 0; i < datesConcerts.length; i++){

                //Création d'une ligne de tableau avec un id
                const creationLigneTableau = tableDates.appendChild(document.createElement('tr'))

                //Chaque objet du tableau Json
                const concerts = datesConcerts[i]

                const idTr = `tr${i}`

                creationLigneTableau.setAttribute("id", idTr)

                //Création de la première colonne th avec un id propre
                const creationTh = creationLigneTableau.appendChild(document.createElement('th'))

                creationTh.setAttribute('scope', 'row')

                const idTh = `th${i}`

                creationTh.setAttribute('id', idTh)
                
                const thCible = document.getElementById(idTh)

                //Remplissage de chaque th
                thCible.innerText = concerts["date"]
                
                // Conversion de rowDates en tableau indexé
                const concertsIndexe = Object.values(concerts)

            //Affichage des 3 autres colonnes du tableau avec des td
                for (let index = 1; index < concertsIndexe.length; index++) {
                      
                    const lignesTableauCible = document.getElementById(idTr)

                    const creationTd = lignesTableauCible.appendChild(document.createElement("td"))


                    creationTd.innerText = concertsIndexe[index]

                }    
                
            }
        }
       
    })

    .catch(error => {
        console.error('Il y a eu une erreur dans la récupération du fichier de concert: ', error)
    });
    

// Traitement de l'affichage des articles dans la page au jour le jour

const urlArticles = "articles-blog.json";

fetch (urlArticles)
    .then (reponse => {
        if (!reponse.ok){
            throw new Erreur ('Le fichier articles-blog.json n\'a pas pu être trouvé: ', reponse.statusText );
        }
        return reponse.json()
    })

    .then (articlesBlog => {

        nbreArticlesAffiches = 4;

        for(let i = 0; i < nbreArticlesAffiches; i++ ){

        const article = articlesBlog[i];

        //Création des element    
        const articleElement = document.createElement('article');
        articleElement.classList = 'blog';
        const divArticleElement = document.createElement('div');
        const imageElement = document.createElement('img');
        const titreElement = document.createElement('h2');
        const paragrapheElement = document.createElement('p');
        const dateElement = document.createElement('p');
        const hrElement = document.createElement('hr');

        const sectionArticleInsertion = document.querySelector('.au-jour-le-jour');

        //Insertion des balises et de leur contenu

        sectionArticleInsertion.appendChild(articleElement);

        articleElement.appendChild(imageElement);
        imageElement.src = article["src"];
        imageElement.alt = article["alt"];

        articleElement.appendChild(divArticleElement);

        divArticleElement.appendChild(titreElement);
        titreElement.innerHTML = article["titre"];

        divArticleElement.appendChild(paragrapheElement);
        paragrapheElement.innerHTML = article["paragraphe"];

        divArticleElement.appendChild(dateElement);
        dateElement.innerHTML = article["date"];

        if (i !== nbreArticlesAffiches - 1){

            sectionArticleInsertion.appendChild(hrElement);
        }

        // Ajour de la class reverse-blog pour affichage grand ecran
        
        if (i % 2 === 1){
            articleElement.classList.add("reverse-blog");
        }

        console.log(i%2)


        



        }
           

    })

    .catch(error => {
        console.error('Il y a eu une erreur dans la récupération du fichier d: ', error)
    });



// Gestion affichage photos et vidéos de la page média

const photosTitleElement = document.getElementById("photos-title");
const videosTitleElement = document.getElementById("videos-title");
const sectionMediasElement = document.querySelector(".medias");

photosTitleElement.addEventListener('click', () => {
    const photosGridElement = document.querySelector(".photos-grid");
    photosGridElement.classList.toggle("full-height");
    photosTitleElement.classList.toggle("active");
})

videosTitleElement.addEventListener('click', () => {
    const videosGridElement = document.querySelector('.videos-grid');
    videosGridElement.classList.toggle("full-height");
    videosTitleElement.classList.toggle("active");
})

//Affichage des médias par rapport à un fichier json
// photos 2 clefs: url et alt, vidéos une clef:url

const urlMedias = "medias.json";

fetch (urlMedias)
    .then (reponse => {
        if (!reponse.ok){
            throw new Erreur ('Le fichier media.json n\'a pas pu être trouvé:', reponse.statusText);    
        }
        return reponse.json();
    })

    .then (medias => {
        const photos = medias["photos"];
        
        photos.forEach(function(photo){
            const urlPhoto = photo["url"];
            const altPhoto = photo["alt"];
            
            const divPhotosElement = document.querySelector(".photos-grid");
            const divElement = document.createElement('div');
            divElement.classList.add("photos");
            divElement.innerHTML = `<a href="${urlPhoto}" target="_blank"><img src="${urlPhoto}" alt="${altPhoto}"></a>`
            divPhotosElement.appendChild(divElement);
        
        })

        const videos =medias["videos"];

        videos.forEach(function(video){
            const urlVideo = video["url"];

            const divVideosElement = document.querySelector(".videos-grid");
            const divElement = document.createElement("div");
            divElement.classList.add("videos");
            divElement.innerHTML = `<iframe width="560" height="315" src="${urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            divVideosElement.appendChild(divElement);
        })

    })
    
    .catch(error => {
        console.error('Il y a eu une erreur dans la récupération du fichier de médias: ', error)
    });

//Correction background section footer sur la page médias

const idPageMedia = document.getElementById("page-media");

if (idPageMedia !== null) {
    const sectionFooterElement = document.querySelector(".section-footer");
    const sectionFooter2Element = document.querySelector(".section-footer-2");

    sectionFooterElement.classList.add("background-desactive");
    sectionFooter2Element.classList.add("background-desactive");
}

console.log(idPageMedia)
// Affichage des médias à partir d'un fichier json