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


    <section class="section section-contact">

    <div class="container div-contact">

    <h2>Booking / Infos</h2>

    <p>(+33) 07 60 68 11 53</p>

    </div>

    <form action="form.js" method="post">

        <h2>Par mail:</h2>

        <div>

            <label for="first-name">Nom:</label>
            <input type="text" id="first-name" name="firstname">

            <label for="name" id="label-name">Prénom:</label>
            <input type="text" id="name" name="name">

        </div>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">

        <label for="subject">Sujet:</label>
        <input type="text" id="subject" name="subject">

        <label for="message">Votre message:</label>
        <textarea id="message" name="message"></textarea>

        <input type="submit" value="Envoyer">

    </form>

        
    </section>

    <?php require "footer.php" ?>
    

</main>
</body>
</html>