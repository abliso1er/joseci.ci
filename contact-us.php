<?php

ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

require 'vendor/autoload.php';

use Wa72\HtmlPageDom\HtmlPage;

require 'core/config.php';


$name = (isset($_POST['name'])) ? @trim(stripslashes($_POST['name'])) : NULL;
$email = (isset($_POST['email'])) ? @trim(stripslashes($_POST['email'])) : NULL;
$subject = (isset($_POST['subject'])) ? @trim(stripslashes($_POST['subject'])) : NULL;
$message = (isset($_POST['message'])) ? @trim(stripslashes($_POST['message'])) : NULL;

$error = array();

/**
 * Etat vide
 */
if (empty($name)) {
    $error[] = "Veuillez saisir votre nom";
}
if (empty($email)) {
    $error[] = "Veuillez saisir votre adresse email";
}
if (empty($subject)) {
    $error[] = "Veuillez saisir l'objet de votre message";
}
if (empty($message)) {
    $error[] = "Veuillez saisir votre message";
}

/**
 * Etat malforme
 */
if (!empty($name) && !isValidPrenom($name)) {
    $error[] = "Veuillez saisir un nom valide";
}
if (!empty($email) && !isValidEmail($email)) {
    $error[] = "Veuillez saisir une adresse email valide";
}
if (!empty($subject) && strlen($subject) < 05) {
    $error[] = "L'objet doit comporter au moins 05 caractères";
}
if (!empty($message) && strlen($message) < 10) {
    $error[] = "Votre message doit comporter au moins 10 caractères";
}

/**
 * Check email
 */
if (!empty($from) && isValidEmail($from) && !verificationEmail($from)) {
    $error[] = "L'adresse email saisie n'est pas valide";
}

$tab = array();
//Conclude error checking
if (count($error) > 0) {
    $tab['status'] = FALSE;
    $tab['message'] = "<i class='icofont icofont-warning' style='font-size:96px;'></i><br/>" . show_erreur($error);
} else {

    //No error found
    $page = new HtmlPage(file_get_contents('core/tpl/email.html'));

    $content = $page->filter("a[data-name],span[data-name]");

    for ($i = 0; $i < count($content); $i++) {
        if ($content->eq($i)->getAttribute("data-name") == "welcome") {
            $content->eq($i)->setInnerHtml("Bonjour,");
        } elseif ($content->eq($i)->getAttribute("data-name") == "subject") {
            $content->eq($i)->setInnerHtml($subject);
        } elseif ($content->eq($i)->getAttribute("data-name") == "subject-detail") {
            $content->eq($i)->setInnerHtml("Message de l'internaute :: " . $name );
        } elseif ($content->eq($i)->getAttribute("data-name") == "message") {
            $content->eq($i)->setInnerHtml($name . ' vous a envoyé le message ci-après ' .
                    ' via ' . SITE_DOMAINE . ' : <br/><br/>'
                    . $message
                    . "<br/>Merci de prendre en compte ma demande et répondre à <b>$email</b>.<br/><br/>"
            );
        } elseif ($content->eq($i)->getAttribute("data-name") == "clic-here") {
            $content->eq($i)->setAttribute("href", "https://www." . SITE_DOMAINE . "/");
            $content->eq($i)->setInnerHtml("ACCEDER AU SITE");
        } elseif ($content->eq($i)->getAttribute("data-name") == "host-name") {
            $content->eq($i)->setInnerHtml(SITE_NAME);
        } elseif ($content->eq($i)->getAttribute("data-name") == "unsuscribe") {
            $content->eq($i)->setAttribute("href", "https://www." . SITE_DOMAINE . "/unsuscribe?email=" . $email);
        } elseif ($content->eq($i)->getAttribute("data-name") == "domain") {
            $content->eq($i)->setAttribute("href", "https://www." . SITE_DOMAINE . "/");
            $content->eq($i)->filter("img")->setAttribute("src", "https://www." . SITE_DOMAINE . "/img/logo-dark.png");
        }
    }
    require_once "core/lib/mail/phprear/Mail.php";
    $headers = array('From' => $name . "<" . APP_EMAIL . ">",
        'To' => APP_EMAIL,
        'Subject' => $subject,
        'MIME-Version' => '1.0',
        'X-Mailer' => ' PHP/' . phpversion(),
        'Content-type' => 'text/html; charset="UTF-8"');
    $smtp = Mail::factory('smtp', array('host' => SSL_HOST,
                'port' => SSL_PORT,
                'auth' => FALSE,
                'username' => SSL_USERNAME,
                'password' => SSL_PASSWORD));
//                        $ok = mail($email, $subject, $page->getCrawler()->html(), $additional_headers);
    $result = $smtp->send(APP_EMAIL, $headers, $page->getCrawler()->html());
    if (!PEAR::isError($result)) {
        $tab['status'] = TRUE;
        $tab['message'] = "<div class='text-center'><i class='icofont icofont-check-circled' style='font-size:96px;'></i><br/>Votre demande a été soumise avec succès!<br/>Notre service se chargera de vous répondre à l'adresse <b>$email</b>"
                . "</div>";
    } else {
        $tab['status'] = FALSE;
        $tab['message'] = "<i class='icofont icofont-warning' style='font-size:96px;'></i><br/>Une erreur inattendue est survenue lors du traitement.<br/>Merci de réessayer plus tard.";
    }
}
echo json_encode($tab);
//die;
