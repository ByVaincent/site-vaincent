<!DOCTYPE html>
<html lang="fr">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vaincent: Ténor Opéra - Pop</title>

    <link rel="stylesheet" href="style.css">

    <!-- Fonts -->
    <?php require "font.php" ?>
    
    <script src="script.js" defer></script>
    
</head>



<body>

    <main>

    <?php require "header.php" ?>


    <section class="accueil-section-1">

        <div class="container-accueil-1">
            
        

            <article class="accueil-texte">

                <!-- Affichage ordinateur -->
                <figure>
                    <img src="img/logo-vaincent-ecriture.png" alt="Logo de Vaincent" id="logo-page-accueil">
                </figure>
                <h1><span class="tenor-h1">Ténor </span> <span class="hopper-font" id="opera"> Opéra</span> Pop</h1>

                <p>Vainqueur du concours Georges Enesco 2023 (catégorie grands amateurs)</p>
                <p>Vainqueur du concours Les Cordes Aux Voix 2022</p>
                <p>Vainqueur du concours international Le Tremplin Des Étoiles 2022</p>
                    
            </article>
            
            <!-- Affichage tablette -->
            <article class="accueil-texte-responsive">

                <figure>
                    <img src="img/logo-vaincent-v.svg" alt=" de Vaincent" id="logo-page-accueil-responsive">
                </figure>


                <h1><span class="tenor-h1">Ténor </span> <span class="hopper-font" id="opera">Opéra </span>Pop</h1>

                <p>Vainqueur du concours Georges Enesco 2023 (catégorie grands amateurs)</p>
                <p>Vainqueur du concours Les Cordes Aux Voix 2022</p>
                <p>Vainqueur du concours internationnal Le Tremplin Des Étoiles 2022</p>
                    
            </article>

            <article class="accueil-texte-responsive-mobile">

                <figure>
                    <img src="img/logo-vaincent-v.svg" alt=" de Vaincent" id="logo-page-accueil-responsive">
                </figure>

                    
            </article>

            <figure class="photo-accueil">

                <img id="accueil-photo-vaincent" src="img/page-accueil-vaincent.png" alt="Photo de Vaincent">

            </figure> 
            
        </div>   
        
        <div class="accueil-texte-responsive-mobile-texte">

            <h1><span class="tenor-h1">Ténor </span> <span class="hopper-font" id="opera">  Opéra</span> Pop</h1>

            <p>Vainqueur du concours Georges Enesco 2023 (catégorie grands amateurs)</p>
            <p>Vainqueur du concours Les Cordes Aux Voix 2022</p>
            <p>Vainqueur du concours internationnal Le Tremplin Des Étoiles 2022</p>

        </div>

    </section>

    <section class="accueil-video">

        <div class="container column-reverse">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/tq9Z7S9kpu8?si=tFQzkzFCXOzYGjcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <article>

                <h2>Vaincent en concert</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam modi temporibus, cum ex enim non explicabo deleniti illo deserunt aut, voluptate, excepturi quos dignissimos saepe nesciunt repellat beatae. Est, dolor.</p>


            </article>
        </div>

    </section>
    
    <?php require "table-concerts.php" ?>

    <?php require "footer.php" ?>
    

</main>
</body>
</html>