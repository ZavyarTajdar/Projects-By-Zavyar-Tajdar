let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset")
let hide = document.querySelector(".hide");
let game = document.querySelector('.game')
let turnO = true; //playerX , playerO

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Was Clicked")
        if (turnO === true) {
            box.innerText = "𝗑";
            turnO = false;
        } else {
            box.innerText = "𝗈";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    hide.classList.remove("hide")
    hide.innerText = `Congratulation Winner is ${winner}`
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"; // Disable all boxes when a winner is found
    });

}

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val)
                console.log("Winner", pos1Val);
            }
        }
    }
    let isdraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isdraw = false;
            break;
        }
    }
    if (isdraw) {
        alert("Match Draw");
    }
}

resetbtn.addEventListener("click", () => {
    window.location.reload();
})
