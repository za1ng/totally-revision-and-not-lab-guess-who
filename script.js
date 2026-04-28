const allData = {
    geography: [
        { name: "Mr Kirkham", role: "teacher" }, { name: "Mr Hance", role: "teacher" },
        { name: "Tunmininu A.", role: "student" }, { name: "Lucas B.", role: "student" },
        { name: "Isaac B.", role: "student" }, { name: "Kitty B.", role: "student" },
        { name: "Nicole B.", role: "student" }, { name: "Zachari B.", role: "student" },
        { name: "Max C.", role: "student" }, { name: "Calin C.", role: "student" },
        { name: "Avina C.", role: "student" }, { name: "Eda D.", role: "student" },
        { name: "Elisha D.", role: "student" }, { name: "Kit F.", role: "student" },
        { name: "Nicole G.", role: "student" }, { name: "Ellie H.", role: "student" },
        { name: "Nathan H.", role: "student" }, { name: "Emily L.", role: "student" },
        { name: "Rachel M.", role: "student" }, { name: "Georgia O.", role: "student" },
        { name: "Alexander O.", role: "student" }, { name: "Orodje O.", role: "student" },
        { name: "Sriya P.", role: "student" }, { name: "Archie R.", role: "student" },
        { name: "Sergi R.", role: "student" }, { name: "Vittoria R.", role: "student" },
        { name: "Cameron R.", role: "student" }, { name: "Sam R.", role: "student" },
        { name: "Ava S.", role: "student" }, { name: "Thomas S.", role: "student" },
        { name: "Ivy S.", role: "student" }, { name: "Mia S.", role: "student" },
        { name: "Zain G.", role: "student" }
    ],
    english: [
        { name: "Ms Hyland", role: "teacher" },
        { name: "Violet A.", role: "student" }, { name: "Denis A.", role: "student" },
        { name: "Tunmininu A.", role: "student" }, { name: "Nicole B.", role: "student" },
        { name: "Eoin B.", role: "student" }, { name: "Zachari B.", role: "student" },
        { name: "Max C.", role: "student" }, { name: "Calin C.", role: "student" },
        { name: "Alexandra D.", role: "student" }, { name: "Anna Maria D.", role: "student" },
        { name: "Gigi D.", role: "student" }, { name: "Eda D.", role: "student" },
        { name: "Elisha D.", role: "student" }, { name: "Joe Giddings.", role: "student" },
        { name: "Nicole G.", role: "student" }, { name: "Joseph Gainsford.", role: "student" },
        { name: "Mia H.", role: "student" }, { name: "Charles H.", role: "student" },
        { name: "Ellie H.", role: "student" }, { name: "Nathan H.", role: "student" },
        { name: "Pranay K.", role: "student" }, { name: "Angela L.", role: "student" },
        { name: "Sriya P.", role: "student" }, { name: "Shakima P.", role: "student" },
        { name: "Uriella-Grace P.", role: "student" }, { name: "Vittoria R.", role: "student" },
        { name: "Sam R.", role: "student" }, { name: "Zain G.", role: "student" }
    ],
    maths: [
        { name: "Mr Natufe", role: "teacher" }, { name: "Mr Olufodun", role: "teacher" },
        { name: "Denis A.", role: "student" }, { name: "Isaac B.", role: "student" },
        { name: "Eoin B.", role: "student" }, { name: "Max C.", role: "student" },
        { name: "Calin C.", role: "student" }, { name: "Alexandra D.", role: "student" },
        { name: "Anna Maria D.", role: "student" }, { name: "Joseph G.", role: "student" },
        { name: "Mia H.", role: "student" }, { name: "Charles H.", role: "student" },
        { name: "Nathan H.", role: "student" }, { name: "Robert J.", role: "student" },
        { name: "Pranay K.", role: "student" }, { name: "Emily L.", role: "student" },
        { name: "Samuel M.", role: "student" }, { name: "Stephanie O.", role: "student" },
        { name: "Julia O.", role: "student" }, { name: "Alexander O.", role: "student" },
        { name: "Orodje O.", role: "student" }, { name: "Sriya P.", role: "student" },
        { name: "Shakima P.", role: "student" }, { name: "Uriella-Grace P.", role: "student" },
        { name: "Vittoria R.", role: "student" }, { name: "Sam R.", role: "student" },
        { name: "Haleema S.", role: "student" }, { name: "Ivy S.", role: "student" },
        { name: "Mia S.", role: "student" }, { name: "Arlo T.", role: "student" },
        { name: "Linghao Z.", role: "student" }, { name: "Zain G.", role: "student" }
    ],
    science: [
        { name: "Mr Smith", role: "teacher" }, { name: "Mr Cole", role: "teacher" }, { name: "Ms Raj", role: "teacher" },
        { name: "Isaac B.", role: "student" }, { name: "Eoin B.", role: "student" },
        { name: "Calin C.", role: "student" }, { name: "Hiyab D.", role: "student" },
        { name: "Anna Maria D.", role: "student" }, { name: "Gigi D.", role: "student" },
        { name: "Elisha D.", role: "student" }, { name: "Joseph G.", role: "student" },
        { name: "Nicole G.", role: "student" }, { name: "Charles H.", role: "student" },
        { name: "Nathan H.", role: "student" }, { name: "Robert J.", role: "student" },
        { name: "Pranay K.", role: "student" }, { name: "Gregory L.", role: "student" },
        { name: "Emily L.", role: "student" }, { name: "Samuel M.", role: "student" },
        { name: "Stephanie O.", role: "student" }, { name: "Julia O.", role: "student" },
        { name: "Alexander O.", role: "student" }, { name: "Orodje O.", role: "student" },
        { name: "Sriya P.", role: "student" }, { name: "Uriella-Grace P.", role: "student" },
        { name: "Sergi R.", role: "student" }, { name: "Vittoria R.", role: "student" },
        { name: "Sam R.", role: "student" }, { name: "Haleema S.", role: "student" },
        { name: "Thomas S.", role: "student" }, { name: "Ivy S.", role: "student" },
        { name: "Mia S.", role: "student" }, { name: "Linghao Z.", role: "student" },
        { name: "Zain G.", role: "student" }
    ]
};

let myCharacterChosen = false;

function initGame() {
    // If a character is already chosen, we don't want to refresh the board 
    // unless the player hits the Reset button.
    if (myCharacterChosen) return;

    const classKey = document.getElementById('class-select').value;
    const board = document.getElementById('game-board');
    board.innerHTML = ''; 

    const listToDisplay = allData[classKey] || [];

    listToDisplay.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
        if (person.role === 'teacher') card.classList.add('teacher-card');

        // Added the icon-box div as a placeholder for the future image
        card.innerHTML = `
            <div class="icon-box">?</div>
            <p>${person.name}</p>
        `;

        card.onclick = function() {
            if (!myCharacterChosen) {
                // PHASE 1: User selects their own character
                selectMyCharacter(this);
            } else {
                // PHASE 2: User flips cards to eliminate people based on guesses
                // Prevent the user from flipping their own locked card
                if (!this.classList.contains('my-choice')) {
                    this.classList.toggle('flipped');
                }
            }
        };
        board.appendChild(card);
    });
}

function selectMyCharacter(element) {
    myCharacterChosen = true;
    element.classList.add('my-choice');
    
    // Disable selection menus so choices can't be changed mid-game
    document.getElementById('class-select').disabled = true;
    
    // Update the status message
    document.getElementById('status-bar').innerText = "CHARACTER LOCKED. FLIP OTHER CARDS TO GUESS.";
    document.getElementById('status-bar').style.color = "#ffc107";
}

function resetBoard() {
    // Reset all game states
    myCharacterChosen = false;
    document.getElementById('class-select').disabled = false;
    
    // Reset status message
    document.getElementById('status-bar').innerText = "CHOOSE YOUR CHARACTER TO START";
    document.getElementById('status-bar').style.color = "white";
    
    // Rebuild the board for the current class
    initGame();
}

// Initial call to load the first class when the page opens
initGame();
