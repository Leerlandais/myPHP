<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles/hangman.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman</title>
</head>
<body>
    <h1>Guess the word to save the man</h1>
    <div id="gallows">
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv brownHang thinHang" id="specHang">|</div>
        <div class="hangDiv"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv thinHang brownHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang" id="headHang">O</div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang brownHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang" id="bodyHang">/|\</div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang brownHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang" id="legsHang">/\</div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang" id = "bodyFree"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang" id="legsFree"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv thinHang"></div>
        <div class="hangDiv"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <div class="hangDiv brownHang"></div>
        <h2 id="hintDisplay"></h2>
        <h2 id="guessDisplay"></h2>
        <button id="hangStart">Start Game</button>
    </div>
    <a href="?section=home" id="home">Go Home</a>
    <footer>
        <hr>
        <h4 id="copyright">
            &copy; Lee Brennan
        </h4>
        <hr>    
       </footer>
  <script src="scripts/hangman.js"></script>    
</body>
</html>