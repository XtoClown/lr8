window.onload = function(){
    document.getElementById("botName").innerHTML = "Computer";
    let userName = prompt("Pls enter your name");
    if(userName == null){
        alert("Pls enter your name to continue");
        location.reload();
    }
    document.getElementById("userName").innerHTML = userName; 
}
let userScore = 0;
let computerScore = 0;
function roll(trigger){
    if(userScore < 3 && computerScore < 3){
        document.getElementById("diceOneUser").style.opacity = "0";
        document.getElementById("diceTwoUser").style.opacity = "0";
        document.getElementById("diceThreeUser").style.opacity = "0";
        document.getElementById("diceFourUser").style.opacity = "0";
        document.getElementById("diceFiveUser").style.opacity = "0";
        document.getElementById("diceSixUser").style.opacity = "0";
        document.getElementById("diceSevenUser").style.opacity = "0";
        document.getElementById("diceEightUser").style.opacity = "0";
        document.getElementById("diceNineUser").style.opacity = "0";
        document.getElementById("diceOneBot").style.opacity = "0";
        document.getElementById("diceTwoBot").style.opacity = "0";
        document.getElementById("diceThreeBot").style.opacity = "0";
        document.getElementById("diceFourBot").style.opacity = "0";
        document.getElementById("diceFiveBot").style.opacity = "0";
        document.getElementById("diceSixBot").style.opacity = "0";
        document.getElementById("diceSevenBot").style.opacity = "0";
        document.getElementById("diceEightBot").style.opacity = "0";
        document.getElementById("diceNineBot").style.opacity = "0";
        let userRollScore = 0;
        let computerRollScore = 0;
        while(trigger == 1){
            userRollScore = Math.floor(Math.random()*9);
            computerRollScore = Math.floor(Math.random()*9);
            rollResult(userRollScore, computerRollScore);
            trigger = 0;
        }
        if(userRollScore > computerRollScore){
            userScore++;
            document.getElementById("userPoint").innerHTML = userScore;
        }
        if(userRollScore < computerRollScore){
            computerScore++;
            document.getElementById("botPoint").innerHTML = computerScore;
        }
        if(userScore == 3){
            winner(1);
        }
        if(computerScore == 3){
            winner(2);
        }
    }
}
function rollResult(userRollScore, computerRollScore){
    if(userRollScore == 0){
        document.getElementById("diceFiveUser").style.opacity = "1";
    }
    if(computerRollScore == 0){
        document.getElementById("diceFiveBot").style.opacity = "1";
    }
    if(userRollScore == 1){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 1){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
        }
    }
    if(userRollScore == 2){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 2){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
        }
    }
    if(userRollScore == 3){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 3){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
        }
    }
    if(userRollScore == 4){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 4){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
        }
    }
    if(userRollScore == 5){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 5){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
        }
    }
    if(userRollScore == 6){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 6){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
        }
    }
    if(userRollScore == 7){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
            document.getElementById("diceNineUser").style.opacity = "1";
        }
        else{
            document.getElementById("diceOneUser").style.opacity = "1";
            document.getElementById("diceTwoUser").style.opacity = "1";
            document.getElementById("diceThreeUser").style.opacity = "1";
            document.getElementById("diceSixUser").style.opacity = "1";
            document.getElementById("diceFiveUser").style.opacity = "1";
            document.getElementById("diceFourUser").style.opacity = "1";
            document.getElementById("diceSevenUser").style.opacity = "1";
            document.getElementById("diceEightUser").style.opacity = "1";
        }
    }
    if(computerRollScore == 7){
        let rollDisp = Math.floor(Math.random()*2);
        if(rollDisp == 0){
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
            document.getElementById("diceNineBot").style.opacity = "1";
        }
        else{
            document.getElementById("diceOneBot").style.opacity = "1";
            document.getElementById("diceTwoBot").style.opacity = "1";
            document.getElementById("diceThreeBot").style.opacity = "1";
            document.getElementById("diceSixBot").style.opacity = "1";
            document.getElementById("diceFiveBot").style.opacity = "1";
            document.getElementById("diceFourBot").style.opacity = "1";
            document.getElementById("diceSevenBot").style.opacity = "1";
            document.getElementById("diceEightBot").style.opacity = "1";
        }
    }
    if(userRollScore == 8){
        document.getElementById("diceOneUser").style.opacity = "1";
        document.getElementById("diceTwoUser").style.opacity = "1";
        document.getElementById("diceThreeUser").style.opacity = "1";
        document.getElementById("diceFourUser").style.opacity = "1";
        document.getElementById("diceFiveUser").style.opacity = "1";
        document.getElementById("diceSixUser").style.opacity = "1";
        document.getElementById("diceSevenUser").style.opacity = "1";
        document.getElementById("diceEightUser").style.opacity = "1";
        document.getElementById("diceNineUser").style.opacity = "1";
    }
    if(computerRollScore == 8){
        document.getElementById("diceOneBot").style.opacity = "1";
        document.getElementById("diceTwoBot").style.opacity = "1";
        document.getElementById("diceThreeBot").style.opacity = "1";
        document.getElementById("diceFourBot").style.opacity = "1";
        document.getElementById("diceFiveBot").style.opacity = "1";
        document.getElementById("diceSixBot").style.opacity = "1";
        document.getElementById("diceSevenBot").style.opacity = "1";
        document.getElementById("diceEightBot").style.opacity = "1";
        document.getElementById("diceNineBot").style.opacity = "1";
    }
}

function winner(win){
    if(win == 1){
        document.getElementById("userName").style.border = "0.5rem solid #53cf63";
        document.getElementById("userName").style.background = "linear-gradient(#5b9c6b, #549c63)";
        document.getElementById("userName").style.color = "#0d6321";
        document.getElementById("userPoint").style.color = "#0d6321";
        document.getElementById("userPointBox").style.color = "#0d6321";
        document.getElementById("userPointBox").style.border = "0.5rem solid #53cf63";
        document.getElementById("userPointBox").style.background = "linear-gradient(#5b9c6b, #549c63)";
        document.getElementById("userPoint").innerHTML = "Winner!";
        setTimeout(()=>{
            location.reload();
        },1500);
    }
    if(win == 2){
        document.getElementById("botName").style.border = "0.5rem solid #53cf63";
        document.getElementById("botName").style.background = "linear-gradient(#5b9c6b, #549c63)";
        document.getElementById("botName").style.color = "#0d6321";
        document.getElementById("botPoint").style.color = "#0d6321";
        document.getElementById("botPointBox").style.color = "#0d6321";
        document.getElementById("botPointBox").style.border = "0.5rem solid #53cf63";
        document.getElementById("botPointBox").style.background = "linear-gradient(#5b9c6b, #549c63)";
        document.getElementById("botPoint").innerHTML = "Winner!";
        setTimeout(()=>{
            location.reload();
        },1500);
    }
}
