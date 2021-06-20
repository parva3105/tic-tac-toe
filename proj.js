//Restart
var restart = document.querySelector('#b');


//Grabs sqaures
var squares= document.querySelectorAll("td");


//Clears squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
       squares[i].textContent = '';
        }
    }


restart.addEventListener('click', clearBoard);


//check sqare marker
    function changeMarker(){
        if(this.textContent === ''){
            this.textContent = 'X';
        }else if (this.textContent=== 'X'){
            this.textContent = 'O';
        }else {
            this.textContent = '';
        }
    }


    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click',changeMarker)
    }

//for loops to add event listners