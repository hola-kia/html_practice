//create columns inside <div id="table">

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

//create cells(50) in each column and adding row numbers and column letters

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


//selected cell functions

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
        //make selected box content editable and connect to fx input
        selectedBox.setAttribute('contentEditable', true);
        input.value = selectedBox.innerHTML;

        //apply selected cell css style on cell and respective row/column headers
        selectedBox.classList.add('box-border');
           
        const selectedBoxColumnHeader = selectedBox.parentNode.firstElementChild;
        selectedBoxColumnHeader.style.backgroundColor = 'rgb(250, 249, 138)';
        
        const rowHeaders = document.getElementById('numbers').children;
        const selectedBoxRowHeader = rowHeaders[parseInt(selectedBox.getAttribute('data-row'))];
        selectedBoxRowHeader.classList.add('parentBoxColor');   

        //highlighting applied text-align styles on each cell
        [...textAlignIcons].forEach(icon => icon.classList.remove('icon-clicked'));
        if (selectedBox.style.textAlign !== "") {
            if (selectedBox.style.textAlign === 'left') {
                leftAlign.classList.add('icon-clicked');
            } else if (selectedBox.style.textAlign === 'center') {
                centerAlign.classList.add('icon-clicked');
            } else if (selectedBox.style.textAlign === 'right') {
                rightAlign.classList.add('icon-clicked');
            };
        }

        [...verticalAlignIcons].forEach(icon => icon.classList.remove('icon-clicked'));
        if (selectedBox.style.display === 'table-cell') {
            if (selectedBox.style.verticalAlign === 'top') {
                verticalUp.classList.add('icon-clicked');
            } else if (selectedBox.style.verticalAlign === 'middle') {
                verticalCenter.classList.add('icon-clicked');
            } else if (selectedBox.style.verticalAlign === 'bottom') {
                verticalDown.classList.add('icon-clicked');
            };
        }
        
        //display applied font styles
        let currentFontSizeValue = this.style.fontSize;
        let currentFontWeightValue = this.style.fontWeight;
        let currentFontColorValue = this.style.color;
        
        if (currentFontSizeValue === "") {
            fontSizeInput.value = '14';
        } else {
        fontSizeInput.value = currentFontSizeValue.slice(0, currentFontSizeValue.length - 2);
        };
        
        if (currentFontWeightValue === "") {
            fontWeightInput.value = '400';
        } else {
        fontWeightInput.value = currentFontWeightValue;
        };
        
        if (currentFontColorValue === "") {
            fontColorInput.value = '#000000';
        } else {
            //fontColorInput.value = currentFontColorValue;
        }  
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

//create text-align click-event handler function
const leftAlign = document.getElementById('left-align');
const centerAlign = document.getElementById('center-align');
const rightAlign = document.getElementById('right-align');

function textAlignHandler(event) {
    const selectedCell = document.querySelector(".box-border");
    const clickedIcon = event.target;
    
    [...textAlignIcons].forEach(icon => icon.classList.remove('icon-clicked'));

    if (selectedCell) {
        if (clickedIcon.id === leftAlign.id) {
            selectedCell.style.textAlign = 'left';
            clickedIcon.classList.add('icon-clicked');
        } else if (clickedIcon.id === centerAlign.id) {
            selectedCell.style.textAlign = 'center';
            clickedIcon.classList.add('icon-clicked');
        } else if (clickedIcon.id === rightAlign.id) {
            selectedCell.style.textAlign = 'right';
            clickedIcon.classList.add('icon-clicked');
        };
    }; 
};

const textAlignIcons = document.getElementById('text-align').children;
[...textAlignIcons].forEach(icon => icon.addEventListener('click', textAlignHandler));


//create vertial-align click-event handler function
const verticalUp = document.getElementById('vertical-up');
const verticalCenter = document.getElementById('vertical-center');
const verticalDown = document.getElementById('vertical-down');

function verticalAlignHandler(event) {
    const selectedCell = document.querySelector(".box-border");
    const clickedIcon = event.target;

    [...verticalAlignIcons].forEach(icon => icon.classList.remove('icon-clicked'));

    if(selectedCell) {
        if (clickedIcon.id === verticalUp.id) {
            selectedCell.style.display = 'table-cell';
            selectedCell.style.verticalAlign = 'top';
            clickedIcon.classList.add('icon-clicked');
        } else if (clickedIcon.id === verticalCenter.id) {
            selectedCell.style.display = 'table-cell';
            selectedCell.style.verticalAlign = 'middle';
            clickedIcon.classList.add('icon-clicked');
        } else if (clickedIcon.id === verticalDown.id) {
            selectedCell.style.display = 'table-cell';
            selectedCell.style.verticalAlign = 'bottom';
            clickedIcon.classList.add('icon-clicked');
        };
    }
}

const verticalAlignIcons = document.getElementById('vertical-align').children;
[...verticalAlignIcons].forEach(icon => icon.addEventListener('click', verticalAlignHandler));

//////////////////////////////////////////////////////////////////


const fontSizeInput = document.getElementById('font-size');
const fontWeightInput = document.getElementById('font-weight');
const fontColorInput = document.getElementById('font-color');
//const cellColorInput = document.getElementById('background-color');

function handleUpdate() {
    const selectedCell = document.querySelector('.box-border');
    const suffix = this.dataset.sizing || '';
    
    selectedCell.style.fontSize = this.value + suffix;
    selectedCell.style.fontWeight = this.value;
    selectedCell.style.color = this.value;
};

fontSizeInput.addEventListener('change', handleUpdate);
fontWeightInput.addEventListener('change', handleUpdate);
fontColorInput.addEventListener('change', handleUpdate);


/*
        let rgb = currentFontColorValue.slice(4, currentFontColorValue.length - 2);
        let numbersArrayFromRgb = rgb.match(/\d+/g);

        const r = numbersArrayFromRgb[0];
        const g = numbersArrayFromRgb[1];
        const b = numbersArrayFromRgb[2];
//////////////////////////////////////////
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  var fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  };
*/

