
// Attente du chargement complet de la page avant de l'afficher

window.onload = () => {
    const bodyElement = document.querySelector("body")

    bodyElement.classList.toggle("affichage-off")

}


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
    })
    





    //Gestion de la couleur du lien de navigation

    const lienDeNavigation = document.querySelectorAll(".header-nav ul li a");

    const URLEnCours = window.location.href;

    lienDeNavigation.forEach(lien => {

        if(lien.href === URLEnCours) {

            lien.classList.add('active');
        }
    })