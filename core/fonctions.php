<?php

function show_erreur($erreur = array()) {
    $p = null;
    if (sizeof($erreur) > 0) {
        if (sizeof($erreur) > 1) {
            $mid = 0;
            if (sizeof($erreur) % 2 == 0)
                $mid = sizeof($erreur) / 2;
            else
                $mid = (sizeof($erreur) + 1) / 2;
            $p = '<ul class="error-sidebar">';
            for ($i = 0; $i < $mid; $i++)
                $p .= "<li>" . ($i + 1) . '. ' . $erreur[$i] . "</li>";
            $p .= '</ul><ul class="error-sidebar">';
            for ($i = $mid; $i < sizeof($erreur); $i++)
                $p .= "<li>" . ($i + 1) . '. ' . $erreur[$i] . "</li>";
            $p .= '</ul>';
        } else {
            $p = '<ul class="error-sidebar">';
            for ($i = 0; $i < sizeof($erreur); $i++)
                $p .= "<li>" . ($i + 1) . '. ' . $erreur[$i] . "</li>";
            $p .= "</ul>";
        }
    }
    return $p;
}

function isValidEmail($email) { #^[a-z])([a-z0-9])+(\.|-)?([a-z0-9]+)
    // Vérifie le format de l’adresse électronique a-z0-9+@+a-z0-9+.+a-z Exemple: exemple@exemple.ci{
    //Cela est possible avec les expressions régulières ereg() et preg_match()([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$
    if (preg_match('#^([a-zA-Z0-9]{1,})+([_\.\-]*+([a-zA-Z0-9]{1,}))*+@+(([a-zA-Z0-9-]{2,})+\.)+([a-zA-Z0-9]{2,4})+$#', $email) OR //Exemple: exemple@exemple.ci
            preg_match('#^([a-zA-Z0-9]{1,})+([_\.\-]*+([a-zA-Z0-9]{1,}))*+@+(([a-zA-Z0-9-]{1,})+\.)+(([a-zA-Z0-9]{2,4})+\.)+([a-zA-Z0-9]{2,4})+$#', $email)) {//Exemple: exemple@exemple.co.uk
        return TRUE; #verificationEmail($email);
    } else {
        return false;
    }
}

//Pour vérifier les caractères alphabétiques 
function isValidPrenom($champ) {
    if (preg_match("#^[A-Za-zËÊÈÉÔÖÓÒÜÛÚÙµÎÏÍÌÂÄÁÀéèêëàâäûüúôöçîï '-]+$#", $champ)) {
        return true;
    } else {
        return false;
    }
}

function verificationEmail($votreEmail) {
    // 1- Couper l'adresse email en deux, au niveau du premier arobase (séparateur)
    // Avec la fonction list, on donne un nom de variable aux 
    // deux morceaux qui vont nous être retournés par la fonction explode()
//    if (verificationEmail('vous@hotmail.fr')) 
//    {
//        echo 'Le domaine existe';
//    } 
//    else 
//    {
//        echo 'Le domaine n\'existe pas';
//    }

    list($identifiant, $leDomaine) = explode('@', $votreEmail, 2); //Séparateur, chaine à "exploser", max 2 morceaux (on s'arrête ainsi au premier arobase)
    // Vérifier l'existence de ce domaine DNS
    return checkdnsrr($leDomaine, "MX"); //MX = mail Exchange. Il existe d'autres paramètres, voir la doc 
}
