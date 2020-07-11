//creating columns inside <div id="table">

function createColumns(parent) {
    for (let i = 64; i <= 90; i++) {
        const column = document.createElement('div');
        parent.appendChild(column);
        column.className = 'column';

        if (i === 64) {
            column.id = 'numbers';
        } else {
            column.id = `${String.fromCharCode(i)}`;
        };
    };
};

const table = document.getElementById('table');
createColumns(table);

//creating cells(50) in each column and adding row numbers and column letters

function createCells(parent) {
    for (let i = 0; i <= 50; i++) {
        const cell = document.createElement('div');
        parent.appendChild(cell);
        cell.className = `box ${i.toString()}`;
        cell.setAttribute('data-row', `${i.toString()}`);
        
        if (parent.id === 'numbers' && i > 0) {            
            cell.innerHTML = `${i.toString()}`;                
        } else if (parent.id !== 'numbers' && i === 0) {
            cell.innerHTML = parent.id;
        }; 
    };
};

const columns = document.getElementsByClassName('column');
[...columns].forEach(column => createCells(column));


//create and toggle css class function

function selectHandler(event) {
    const selectedBox = event.currentTarget;
         
    if (selectedBox.getAttribute('data-row') === '0') {
        selectedBox.parentNode.classList.add('parentBoxColor');
        selectedBox.style.backgroundColor = 'rgb(250, 249, 138)';
        
    } else if (selectedBox.parentNode.id === 'numbers') {
        const selectedBoxRow = selectedBox.classList[1];
        const selectedRowCells = document.getElementsByClassName(selectedBoxRow);
        
        Array.from(selectedRowCells).forEach(cell => cell.classList.add('parentBoxColor'));
    } else {
        selectedBox.setAttribute('contentEditable', true);
        input.value = selectedBox.innerHTML;

        selectedBox.classList.add('box-border');
           
        const selectedBoxColumnHeader = selectedBox.parentNode.firstElementChild;
        //selectedBoxColumnHeader.classList.add('parentBoxColor');
        selectedBoxColumnHeader.style.backgroundColor = 'rgb(250, 249, 138)';
        
        const rowHeaders = document.getElementById('numbers').children;
        const selectedBoxRowHeader = rowHeaders[parseInt(selectedBox.getAttribute('data-row'))];
        selectedBoxRowHeader.classList.add('parentBoxColor');   
    }
 }; 

function deselectHandler(event) {
    const selectedBox = event.currentTarget;
    const columns = event.path[2].children;
    const tableColumns = document.getElementById('table').children;
    const columnCount = tableColumns.length;

    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        tableColumns[columnIndex].classList.remove('parentBoxColor');        
        
        const columnCells = tableColumns[columnIndex].children;
        const cellCount = columnCells.length;
        
        for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
                columnCells[cellIndex].classList.remove('parentBoxColor');
                columnCells[cellIndex].classList.remove('box-border');
                
                
                if (columnCells[cellIndex].style.backgroundColor === 'rgb(250, 249, 138)') {
                    columnCells[cellIndex].style.backgroundColor = 'rgb(221, 243, 245)';
                } 
        }
    }; 
};

const boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(box => {
    box.addEventListener('click', deselectHandler);
    box.addEventListener('click', selectHandler);
    box.addEventListener('input', selectedBoxInputHandler);
});

//[...boxes].forEach(box => box.addEventListener('click', deselectHandler));
//[...boxes].forEach(box => box.addEventListener('click', selectHandler));

//////////////////////////////////////////////////////////////

//create functions to connect selected box with type input

const input = document.getElementById('fxInput');
const selectedBox = document.getElementsByClassName('box box-border');

function inputHandler(event) {
    if(selectedBox[0]) {
        selectedBox[0].innerHTML = input.value;
    };
};

function selectedBoxInputHandler(event) {
    if(selectedBox[0]) {
        input.value = selectedBox[0].innerHTML;
    };
};

input.addEventListener('input', inputHandler); 

///////////////////////////////////////////////////////////////















