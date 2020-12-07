/*
<i class="fas fa-bell"></i>
<i class="fas fa-apple-alt"></i>
<i class="fas fa-address-card"></i>
<i class="fas fa-archway"></i>
<i class="fas fa-atlas"></i>
*/


const cards1 = ['fa-bell', 'fa-apple-alt', 'fa-address-card', 'fa-archway', 'fa-atlas'];
const cards2 = ['fa-bell', 'fa-apple-alt', 'fa-address-card', 'fa-archway', 'fa-atlas'];


// kartyak megkeverese
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(cards1);
shuffle(cards2);


// paklik osszeadasa
const cards = cards1.concat(cards2);
//console.log(cards);


//elso sor kartya kiirasa
function oszt1(pakli) {
    document.querySelector('.board').innerHTML += "<div class=\"set\">";
    pakli.forEach(element => {
        document.querySelector('.set').innerHTML += "<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><div class=\"card invisible\"><i class=\"fas " + element + "\"></i></div></div><div class=\"flip-card-back\"><div class=\"card\"><i class=\"fas " + element + "\"></i></div></div></div></div>";
    });
    document.querySelector('.board').innerHTML += "</div>";

}
//masodik sor kartya kiirasa
function oszt2(pakli) {
    document.querySelector('.board').innerHTML += "<div class=\"set2\">";
    pakli.forEach(element => {
        document.querySelector('.set2').innerHTML += "<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><div class=\"card invisible\"><i class=\"fas " + element + "\"></i></div></div><div class=\"flip-card-back\"><div class=\"card\"><i class=\"fas " + element + "\"></i></div></div></div></div>";
    });
    document.querySelector('.board').innerHTML += "</div>";

}
oszt1(cards1);
oszt2(cards2);
//startTimer();


// ha ket ugyanolyan kartya van a .card-on belul kattintva
let arr = [];
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}

function ifDuplicated() {
    if (hasDuplicates(arr)) {
        console.log("Pair found");

        clearInterval(counterId);
        document.querySelector('.time').innerHTML += " - Pair found - pages refreshin 5 seconds";
        reload();
        

    } else {
        console.log(last(arr));
        
        if (last(arr) !== arr[0]) {
            console.log('NEM EGYEZIK');

            document.querySelectorAll('.flip-card-inner').forEach(item => {
                item.addEventListener( 'mouseleave', function() {
                item.classList.remove('flip-card-inner2');
            })
        }) 




        }   
    }
}

// last n elementf of array
var last = function last(array, n) {
    if (array == null) return void 0;
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  };
console.log(last(arr));


// az ikonra klikkelest figyeli
window.onclick = function (e) {
    let x = e.srcElement.className;
    if (x.startsWith("fas")) {
        arr.push(x);
    }
    console.log(arr);
    hasDuplicates(arr);
    ifDuplicated();
}


// oldalt ujratolti
function reload() {
    setTimeout(function () {
        location.reload();
    }, 5000);
}


// idomero
let min = 0;
let second = 00;
let noZero = 0;
let counterId = setInterval(function () { countUp(); }, 1000);

function countUp() {
    second++;
    if (second == 59) {
        second = 00;
        min = min + 1;
    }
    if (second == 10) {
        noZero = '';
    } else
        if (second == 00) {
            noZero = 0;
        }
    document.querySelector('.time').innerHTML = min + ':' + noZero + second;
}


// megfordul a a lap klikkelesre
    document.querySelectorAll('.flip-card-inner').forEach(item => {
        item.addEventListener('click', event => {
            item.classList.toggle('flip-card-inner2');
            item.classList.toggle('i');
        })
      })
    


       