<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles/anotherSimon.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trying something</title>
</head>
<body>
    <h1>Turns out I restarted Simon (again)</h1>
    <main>
        <div id="mainDiv">
            <div class="innerDivs" id="divRed">Red</div>
            <div class="innerDivs midDivs" id="divYel">Yellow</div>
            <div class="innerDivs midDivs" id="divStart">Press to Start</div>
            <div class="innerDivs midDivs" id="divGre">Green</div>
            <div class="innerDivs" id="divBlu">Blue</div>
        </div>
        <div><label for="scoreSim">Level :</label><input type="text" id = "scoreSim" value = "1" readonly></div>
        <h3 id = "simHint"></h3>
    </main>
        
    <?php
include("inc/footer.php");
?>
    <script src="scripts/anotherSimon.js"></script>
</body>
</html>