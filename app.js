let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highestScore = 0;

let colors = ["pink", "brown", "violet", "blue"];

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    if (started == false) {
        started = true;
        console.log("game started");
        levelUp();
    }
});


function userClick() {
    let btn = this;
    console.log(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    btnFlash(btn);
    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        idx++;
        if (userSeq.length == gameSeq.length) {
            userSeq = [];
            setTimeout(levelUp,1000);
        }
    } else {
        highestScore = Math.max(level, highestScore);
        console.log(highestScore);
        if (highestScore > level) {
            h2.innerHTML = `Game Over your score is ${level} Highest Score is ${highestScore}. press key to start.`;
        } else {
            h2.innerHTML = `Game Over congragulations you are having highest Score ${level} . press key to start.`;
        }
        document.querySelector("body").style.backgroundColor = "red";
        setInterval(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
    }
}

function btnFlash(btn) {
    btn.classList.add("white");
    setInterval(() => {
        btn.classList.remove("white");
    }, 1000);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random()*4);
    let color = colors[idx];
    let btn = document.querySelector(`.${color}`);
    gameSeq.push(color);
    console.log(gameSeq);
    btnFlash(btn);
}  

let btns = document.querySelectorAll(".box");
for (btn of btns) {
    btn.addEventListener("click", userClick);
}

function reset() {
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;
}
