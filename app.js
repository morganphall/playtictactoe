document.addEventListener("DOMContentLoaded", function (event) {

    let boxes = document.body.querySelectorAll('div.row > div');
    let currentPlayer = '';

    let checkWinner = function (box) {

        for (i = 0; i < box.classList.length; i++) {
            let checkWin = document.body.querySelectorAll('.' + box.classList[i]);
            if (checkWin[0].innerText === checkWin[1].innerText && checkWin[1].innerText === checkWin[2].innerText) {
                setTimeout(() => {
                    alert(currentPlayer + ' is the winner!');
                    boxes.forEach((box) => {
                        box.innerText = ''
                    })
                }, 200);
            }
        }
    }

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            if (currentPlayer === 'x') {
                currentPlayer = 'o';
            } else {
                currentPlayer = 'x';
            }
            box.innerText = currentPlayer;
            checkWinner(box);
        })
    })
});