<?php 

$prenom = valid_name($_POST["firstname"]);
$nom = valid_name($_POST["name"]);
$email = valid_email($_POST["email"]);
$sujet = valid_sujet($_POST["subject"]);
$message = valid_message($_POST["message"]);


function valid_name($donnees){
   
   if (preg_match('/^[^<> ]+$/', $donnees) && strlen($donnees) < 30){
    return $donnees;
   } else {
    header("Location: contact.php");
   }
}

function valid_email($donnees){
    if (preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/', $donnees)  && strlen($donnees) < 50){
     return $donnees;
    } else {
        header("Location: contact.php");
    }
 }

function valid_sujet($donnees){
   
    if (preg_match('/^[^\s<>\/\\\\]+$/', $donnees)  && strlen($donnees) < 50){
     return $donnees;
    } else {
        header("Location: contact.php");
    }
 }

 function valid_message($donnees){
   
    if (preg_match('/^[^\s][^<>\/\\\\]+$/', $donnees)  && strlen($donnees) < 500){
     return $donnees;
    } else {
        header("Location: contact.php");
    }
 }

$message = str_replace("\n.", "\n..", $message);

if (mail(
    "vjacquelinpro@gmail.com",
    $sujet,
    $message,
    "From:".$email
)){
    header("Location:mail-ok.php");
} else {
    header("Location: mail-error.php");
}


?>