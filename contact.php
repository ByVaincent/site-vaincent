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
    <script src="form.js" defer></script>
    
</head>



<body>

    <main>

    <?php require "header.php" ?>


    <section class="section section-contact">

    <div class="container div-contact">

    <h2>Booking / Infos</h2>

    <p>(+33) 07 60 68 11 53</p>

    </div>

    <form action="form.php" method="post">

        <h2>Par mail:</h2>

        <div>

            <label for="first-name">Prénom:</label>
            <input type="text" id="first-name" name="firstname" required pattern="^[^<> ]+$" maxlength="30">

            <label for="name" id="label-name">Nom:</label>
            <input type="text" id="name" name="name" required pattern="^[^<> ]+$" maxlength="30">

        </div>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" maxlength="50">

        <label for="subject">Sujet:</label>
        <input type="text" id="subject" name="subject" required pattern="^[^\s<>\/\\\\]+$" maxlength="50">

        <label for="message">Votre message:</label>
        <textarea id="message" name="message" maxlength="500" required pattern="^[^\s][^<>\/\\\\]+$"></textarea>

        <input type="submit" value="Envoyer">

    </form>

        
    </section>

    <?php require "footer.php" ?>
    

</main>
</body>
</html>