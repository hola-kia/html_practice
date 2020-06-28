const boxes = document.getElementsByClassName('box');

////////////////////////////////////////////////////////////////////

function select(e) {
    const selectedBoxId = e.path[0].id;
    const x = document.getElementById('numbers').children;
    if (e.path[0].id === '0') {
        e.path[1].classList.add('parentBoxColor');
    } else if (e.path[1].id === 'numbers') {
        return;
    } else {
        this.classList.add('box-border');

        let selectedBoxColumn = this.parentNode.firstElementChild;
        selectedBoxColumn.classList.add('parentBoxColor');

        if (selectedBoxId == x[selectedBoxId].innerHTML) {
            x[selectedBoxId].classList.add('parentBoxColor');
        }
    }
}

function deselect(e) {
    const cols = e.path[2].children;
    for (let i = 0; i < cols.length; i++) {
        if (cols[i].classList.value === 'box parentBoxColor') {
            console.log(cols[i]);
            cols[i].classList.remove('parentBoxColor');
        }

        let x = cols[i].children;

        for (let j = 0; j < x.length; j++) {
            if (x[j].classList.value == 'box parentBoxColor' || x[j].classList.value == 'box box-border') {
                x[j].classList.remove('parentBoxColor');
                x[j].classList.remove('box-border');
            }
        }
    }
}

[...boxes].forEach(box => box.addEventListener('click', deselect));
[...boxes].forEach(box => box.addEventListener('click', select));

//////////////////////////////////////////////////////////////

//create function to connect box with type input

const input = document.getElementById('fxInput');
const selectedBox = document.getElementsByClassName('box box-border');

function type() {
    selectedBox[0].innerHTML = input.value;
}

input.addEventListener('keyup', type);
