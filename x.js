/*
<i class="fas fa-bell"></i>
<i class="fas fa-apple-alt"></i>
<i class="fas fa-address-card"></i>
<i class="fas fa-archway"></i>
<i class="fas fa-atlas"></i>
*/


const cards1 = ['fa-bell','fa-apple-alt','fa-address-card','fa-archway','fa-atlas'];
const cards2 = ['fa-bell','fa-apple-alt','fa-address-card','fa-archway','fa-atlas'];




/* function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
 */


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
function oszt(pakli) {
    document.querySelector('.board').innerHTML +="<div class=\"set\">";
    pakli.forEach(element => {
        document.querySelector('.set').innerHTML += "<div class=\"card\"><i class=\"fas " +element+ "\"></i></div>";
    });
    document.querySelector('.board').innerHTML +="</div>";

}
//masodik sor kartya kiirasa
function oszt2(pakli) {
    document.querySelector('.board').innerHTML +="<div class=\"set2\">";
    pakli.forEach(element => {
        document.querySelector('.set2').innerHTML += "<div class=\"card\"><i class=\"fas " +element+ "\"></i></div>";
    });
    document.querySelector('.board').innerHTML +="</div>";

}
oszt(cards1);
oszt2(cards2);



// jatek

// ha ket ugyanolyan 
  function myFunction(){

    document.querySelector(".fas").innerHTML = "Hello World";

    

  }

 // figyeli a klikkelest 
  document.body.addEventListener('click', function (event) {
    if (event.target.className === 'card') {
        myFunction()
    }
}, false);