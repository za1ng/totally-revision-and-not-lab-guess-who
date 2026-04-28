const allData = {
    "Geography (11B1)": [
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
    "English (11B1)": [
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
    "Maths (11B1)": [
        { name: "Eugene Natufe", role: "teacher" }, { name: "Mr Olufodun", role: "teacher" },
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
    "Science (11B1)": [
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

const classSelect = document.getElementById('class-select');
const teacherToggle = document.getElementById('teacher-toggle');
const resetBtn = document.getElementById('reset-btn');
const board = document.getElementById('game-board');

// Populate class list
Object.keys(allData).forEach(cls => {
    const opt = document.createElement('option');
    opt.value = cls;
    opt.textContent = cls;
    classSelect.appendChild(opt);
});

function drawBoard() {
    board.innerHTML = '';
    const selected = classSelect.value;
    const teachersOn = teacherToggle.checked;

    allData[selected].forEach(person => {
        if (!teachersOn && person.role === 'teacher') return;

        const card = document.createElement('div');
        card.className = 'card';
        if (person.role === 'teacher') card.classList.add('teacher-card');
        card.textContent = person.name;

        card.onclick = () => card.classList.toggle('flipped');
        board.appendChild(card);
    });
}

classSelect.onchange = drawBoard;
teacherToggle.onchange = drawBoard;
resetBtn.onclick = drawBoard;

drawBoard();
