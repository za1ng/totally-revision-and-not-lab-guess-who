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

let isLocked = false;

function initGame() {
    if (isLocked) return;

    const classKey = document.getElementById('class-select').value;
    const includeTeachers = document.getElementById('teacher-toggle').checked;
    const board = document.getElementById('game-board');
    
    board.innerHTML = ''; 
    let listToDisplay = allData[classKey];
    
    if (!includeTeachers) {
        listToDisplay = listToDisplay.filter(p => p.role === 'student');
    }

    listToDisplay.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
        if (person.role === 'teacher') card.classList.add('teacher-card');
        card.innerText = person.name;
        card.onclick = function() {
            this.classList.toggle('flipped');
        };
        board.appendChild(card);
    });
}

function lockSelection() {
    isLocked = true;
    document.getElementById('class-select').disabled = true;
    document.getElementById('teacher-toggle').disabled = true;
    document.getElementById('lock-status').innerText = "BOARD LOCKED - START GUESSING";
}

function resetBoard() {
    isLocked = false;
    document.getElementById('class-select').disabled = false;
    document.getElementById('teacher-toggle').disabled = false;
    document.getElementById('lock-status').innerText = "STATUS: SELECTING...";
    initGame();
}

// Initial Run
initGame();
