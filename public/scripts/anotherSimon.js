
const simHint = document.getElementById("simHint");
const butStart = document.getElementById("divStart");
const butRed = document.getElementById("divRed");
const butYel = document.getElementById("divYel");
const butGre = document.getElementById("divGre");
const butBlu = document.getElementById("divBlu");
const showScore = document.getElementById("scoreSim");
butStart.textContent ="Press to Start";
var simonPicks = 3;
var simonPings = [];
var playerPings = [];
var currentLevel = 1;

butStart.onclick = startSimon;

function startSimon () {
    simHint.textContent = "Game on";
    playerPings = [];
    console.log("this", playerPings),

    butStart.disabled = true;
    butStart.style.opacity = "0.5";
    butStart.textContent = "Follow the pattern";
    simonPings = [];
    console.log("hi");
    for (let i = 0; i < simonPicks; i++) {
        let pingPicked = Math.floor(Math.random () * 4 + 1);
        simonPings.push(pingPicked);
    }
    console.log (simonPings);
    pingPicker();
}

async function pingPicker () {
  //  simHint.textContent = simonPings;
    console.log(simonPings);
    for (let i = 0; i < simonPings.length; i++) {
        if (simonPings[i] === 1) {
            await pingColours(butRed, "red");
            await resetColours();
            
        }else if (simonPings[i] === 2) {
            await pingColours(butYel, "yellow");
            await resetColours();
            
        }else if (simonPings[i] === 3) {
            await pingColours(butGre, "green");
            await resetColours();
            
        }else if (simonPings[i] === 4) {
            await pingColours(butBlu, "blue");
            await resetColours();
            
        }
        else {
            simHint.textContent = "something went wrong : func pingPick";
        }
    }
    playerTurn();
}


async function pingColours(element, colour) {
    return new Promise((resolve) => {
        setTimeout(() => {
            element.style.backgroundColor = colour;
            element.style.boxShadow = "inset 4px 4px 4px black";
            console.log("changing colour to " + colour);
            resolve();
        }, 500);
    });
}

async function resetColours() {
    const allButs = [butRed, butYel, butGre, butBlu];
    return new Promise((resolve) => {
        setTimeout(() => {
            allButs.forEach((button) => {
                button.style.backgroundColor = "";
                button.style.boxShadow = "";
            });
            resolve();
        }, 500);
    });
}

function playerTurn () {
    playerPings = [];
    butStart.textContent = "Your turn";
    butStart.disabled = false;
        butRed.addEventListener("mousedown", addRed);
        function addRed () {
        butRed.style.backgroundColor = "red";
        butRed.style.boxShadow = "inset 4px 4px 4px black";
        playerPings.push(1);
        console.log(playerPings);
  //          simHint.textContent = playerPings;
            butStart.textContent = "Click Me When Done";
            butRed.addEventListener("mouseup", remRed);
}
        function remRed () {
                butRed.style.backgroundColor = "";
                butRed.style.boxShadow = "";
            }
            butYel.addEventListener("mousedown", addYel);
            function addYel () {
            butYel.style.backgroundColor = "yellow";
            butYel.style.boxShadow = "inset 4px 4px 4px black";            
            playerPings.push(2);
            console.log(playerPings);
     //       simHint.textContent = playerPings;
            butStart.textContent = "Click Me When Done";
            butYel.addEventListener("mouseup", remYel);
            }
        function remYel () {
            butYel.style.backgroundColor = "";
            butYel.style.boxShadow = "";
        }
    
            butGre.addEventListener("mousedown", addGre);
            function addGre () {
            butGre.style.backgroundColor = "green";
            butGre.style.boxShadow = "inset 4px 4px 4px black";            
            playerPings.push(3);
            console.log(playerPings);
     //       simHint.textContent = playerPings;
            butStart.textContent = "Click Me When Done";
            butGre.addEventListener("mouseup", remGre);
    }
        function remGre () {
            butGre.style.backgroundColor = "";
            butGre.style.boxShadow = "";
        }

            butBlu.addEventListener("mousedown", addBlu);
            function addBlu () {
            butBlu.style.backgroundColor = "blue";
            butBlu.style.boxShadow = "inset 4px 4px 4px black";            
            playerPings.push(4);
            console.log(playerPings);
     //       simHint.textContent = playerPings;
            butStart.textContent = "Click Me When Done";
            butBlu.addEventListener("mouseup", remBlu);
            }
            function remBlu () {
            butBlu.style.backgroundColor = "";
            butBlu.style.boxShadow = "";
            }

            butStart.onclick = clearListeners;
            function clearListeners () {
                butRed.removeEventListener("mousedown", addRed);
                butYel.removeEventListener("mousedown", addYel);
                butGre.removeEventListener("mousedown", addGre);
                butBlu.removeEventListener("mousedown", addBlu);
                butRed.removeEventListener("mouseup", remRed);
                butYel.removeEventListener("mouseup", remYel);
                butGre.removeEventListener("mouseup", remGre);
                butBlu.removeEventListener("mouseup", remBlu);
                comparePings();
            }
}


function comparePings () {
    butStart.textContent = "Let's check";
    simHint.textContent = "Me : " + simonPings + " . You : " + playerPings + "."; 
    butRed.style.backgroundColor = "";
    butYel.style.backgroundColor = "";
    butGre.style.backgroundColor = "";
    butBlu.style.backgroundColor = "";


    let correctSeq = true;
        for (let i = 0; i < simonPings.length; i++) {
                if (simonPings[i] !== playerPings[i]){
                    correctSeq = false;
                    break;
                }
        }
    if (correctSeq === true && simonPings.length === playerPings.length) {
        butStart.textContent = "Correct, click for next level";
        currentLevel++;
        showScore.value = currentLevel;
        simonPicks++;
        playerPings = [];
        simonPings =  [];
        console.log (simonPings, playerPings);
        butStart.style.opacity = "1";
        butStart.onclick = startSimon;
    }else {
        butStart.textContent = "You Lose. Click to start again";
        simonPicks = 3;
        currentLevel = 1;
        showScore.value = currentLevel;
        butStart.style.opacity = "1";
        butStart.onclick = startSimon;
    }
}

