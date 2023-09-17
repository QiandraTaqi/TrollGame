class Start {
    constructor() {
        this.playerName = "Player"
        this.botName = "Bot"
        this.playerOption;
        this.botOption;
        this.winner = ""
        this.playerScore = 0; // Initialize player's score
        this.botScore = 0; // Initialize bot's score
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
            const playerOption = this.getPlayerOption;
        
        if (this.playerScore <= 4) {
            if (playerOption === "🖐") {
                return "✊";
            } else if (playerOption === "✌") {
                return "🖐";
            } else if (playerOption === "✊") {
                return "✌";
            }
        }

        else (this.playerScore == 4)
            if (playerOption === "🖐") {
                return "✌";
            } else if (playerOption === "✌") {
                return "✊";
            } else if (playerOption === "✊") {
                return "🖐";
            }


        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return this.winner = this.playerName
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName;
        } else {
            return this.winner = "Draw"
        }
    }

    matchResult() {
        if (this.winner != "Draw") {
            if (this.winner === this.playerName) {
                this.playerScore++; // Increment player's score
            } else {
                this.botScore++; // Increment bot's score
            }
            return `${this.winner} Win!`;
        } else {
            return ` ${this.winner}, No one wins`;
        }
    }

    getPlayerScore() {
        return this.playerScore;
    }

    getBotScore() {
        return this.botScore;
    }
}

// Inisialisasi satu instans Start
const start = new Start();

function pickOption(params) {
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");
    const playerScoreElement = document.getElementById("playerScore");
    const botScoreElement = document.getElementById("botScore");

    inGame.textContent = "...";
    result.textContent = "...";

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
        result.textContent = start.matchResult();
        playerScoreElement.textContent = start.getPlayerScore();
        botScoreElement.textContent = start.getBotScore();
        updateScoreDisplay();
    }, 600);
}

function resetScore() {
    // Reset skor ke 0
    start.playerScore = 0;
    start.botScore = 0;
    alert ("WAITT! You want to reset the score? pro didnt reset score")

    const playerScoreElement = document.getElementById("playerScore");
    const botScoreElement = document.getElementById("botScore");
    playerScoreElement.textContent = start.getPlayerScore();
    botScoreElement.textContent = start.getBotScore();
}

// if (start.getPlayerScore() = 5) {
//     gameOverMessage = "You Win!";
//     endGame();
// } if (start.getBotScore() = 5) {
//     gameOverMessage = "How could you lose from a computer?";
//     endGame();
// }

// function endGame() {
// const gameOverElement = document.getElementById("gameOver");
// gameOverElement.textContent = gameOverMessage;
// }

function updateScoreDisplay() {
    const playerScoreElement = document.getElementById("playerScore");
    const botScoreElement = document.getElementById("botScore");
    playerScoreElement.textContent = start.getPlayerScore();
    botScoreElement.textContent = start.getBotScore();

    if (botScoreElement.textContent == 10 ) {
        window.location.href = "losescreen.html"; 
    }

    if (playerScoreElement.textContent == 12) {
        window.location.href = "winscreen.html"
    }
    
    if (playerScoreElement.textContent == 4) {
        alert("Wow! you got a strike!")
    }

    if (botScoreElement.textContent == 4) {
        alert("Nevermind, cant get a win again by the way. Enjoy!")
    }

}
