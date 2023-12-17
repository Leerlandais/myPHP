<?php

if(isset($_GET['section'])){
    switch($_GET['section']){
        case 'home':
            include('../templates/startpage.php');
            break;
        case 'snake':
            include('../templates/newsnake.php');
            break;
        case 'simon':
            include('../templates/anotherSimon.php');
            break;
        case 'hangman':
            include('../templates/hangman.php');
            break;
        case 'mines':
            include('../templates/newermine.php');
            break;
        case 'git':
            include('../templates/indexGit.php');
            break;
        default:
            include('../templates/page404.php');
    }
}else{
    include('../templates/startpage.php');
}