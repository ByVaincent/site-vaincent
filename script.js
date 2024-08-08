
// Affichage du header

document.addEventListener("DOMContentLoaded", function(){
    fetch('header.html')
        .then (response => response.text())
        .then (data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du header: ', error));
})


// Chargement de la base des pages html

document.addEventListener('DOMContentLoaded', function () {
    fetch('head.html')
        .then (response => response.text())
        .then (data => {
            document.getElementById('head-placeholder').innerHTML = data;
        })
        .catch (error => console.error('Erreur lors du chargement du doctype.html: ', error) )
})



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
    

