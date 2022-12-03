<?php

require_once "Mail.php";
$from = APP_NAME . '<' . APP_EMAIL . '>';
$to = "philippe.abli@gmail.com";
$copie = ["abliso1er@gmail.com", "abli.jeanphilippe@gmail.com"];

$message = <<<OK
<html>
    <head>
        <meta charset="UTF-8"/>
    </head>
    <body>
        <h2>Test mail</h2>
        <p>
        Si vous êtes invité à entrer des paramètres de serveur lors de la configuration de 
            votre compte de courrier Outlook.com (par exemple, hotmail.com, live.com, msn.com, etc.), 
                utilisez ces paramètres. Si vous utilisez un compte Office 365 pour les entreprises, 
                    vous trouverez les paramètres de comptes POP et IMAP ici.
        </p>
    </body>
</html>
   
OK;

$headers = array('From' => $from,
    'To' => $to,
    'Cc' => implode(',', $copie),
    'Subject' => "NOTIFIACTION",
    'MIME-Version' => '1.0',
    'X-Mailer' => ' PHP/' . phpversion(),
    'Content-type' => 'text/html; charset="utf-8"');
$smtp = Mail::factory('smtp', array('host' => SSL_HOST,
            'port' => SSL_PORT,
            'auth' => true,
            'username' => SSL_USERNAME,
            'password' => SSL_PASSWORD));

$result = $smtp->send($to, $headers, $message);

if (PEAR::isError($result)) {
    echo("<p>" . $result->getMessage() . "</p>");
} else {
    echo("<p>Message successfully sent!</p>");
}
die();