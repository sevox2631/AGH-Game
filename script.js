// przypisanie zmiennym globalnym elementu od id kart
let cardImage1 = document.getElementById('card1');
let cardImage2 = document.getElementById('card2');
let cardImage3 = document.getElementById('card3');
let cardImage4 = document.getElementById('card4');
let cardImage5 = document.getElementById('card5');
let cardImage6 = document.getElementById('card6');
let cardImage7 = document.getElementById('card7');
let cardImage8 = document.getElementById('card8');
let cardImage9 = document.getElementById('card9');
let cardImage10 = document.getElementById('card10');
let cardImage11 = document.getElementById('card11');
let cardImage12 = document.getElementById('card12');
let cardImage13 = document.getElementById('card13');
let cardImage14 = document.getElementById('card14');
let cardImage15 = document.getElementById('card15');
let cardImage16 = document.getElementById('card16');



let tabImg = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5, cardImage6, cardImage7, cardImage8];
// ściezki kart
let niebieska = "img/niebieska.png";
let czerwona = "img/czerwona.png";
let zielona = "img/zielona.png";
let czarna = "img/czarna.png";
let zolta = "img/zolta.png";
let rozowa = "img/rozowa.png";
let fioletowa = "img/fioletowa.png";
let szara = "img/szara.png";

let odCard1 = niebieska;
let odCard2 = niebieska;
let odCard3 = niebieska;
let odCard4 = niebieska;
let odCard5 = niebieska;
let odCard6 = niebieska;
let odCard7 = niebieska;
let odCard8 = niebieska;
let odCard9 = niebieska;
let odCard10 = niebieska;
let odCard11 = niebieska;
let odCard12 = niebieska;
let odCard13 = niebieska;
let odCard14 = niebieska;
let odCard15 = niebieska;
let odCard16 = niebieska;

let numClosedCards = 16;

let tabClosCard = [odCard1, odCard2, odCard3, odCard4, odCard5, odCard6, odCard7, odCard8,
odCard9, odCard10, odCard11, odCard12, odCard13, odCard14, odCard15, odCard16];
let tabKol = [niebieska, czerwona, zielona, czarna, zolta, rozowa, fioletowa, szara,
              niebieska, czerwona, zielona, czarna, zolta, rozowa, fioletowa, szara];



const playCard = () => {
  counter = clickCounter++;
}

let licznik = 0;
const randomCardGenerator = () => {
    do{
      const paraCard = Math.floor(Math.random()*numClosedCards); // generuje liczbe od 0 do 15

      tabClosCard[licznik] = tabKol[paraCard]; // przypisuje odkrytej Karcie odCard1 kolor tabKol[losowa liczba]
      licznik++;
    }while(licznik < numClosedCards);
}


// Funkcje przy kliknięciu
card1.onclick = () => {
  cardImage1.src = tabClosCard[0];
  playDoor();
}
card2.onclick = () => {
  cardImage2.src = tabClosCard[1];
  playDoor();
}
card3.onclick = () => {
  cardImage3.src = tabClosCard[2];
  playDoor();
}
card4.onclick = () => {
  cardImage4.src = tabClosCard[3];
  playDoor();
}
card5.onclick = () => {
  cardImage5.src = tabClosCard[4];
  playDoor();
}
card6.onclick = () => {
  cardImage6.src = tabClosCard[5];
  playDoor();
}
card7.onclick = () => {
  cardImage7.src = tabClosCard[6];
  playDoor();
}
card8.onclick = () => {
  cardImage8.src = tabClosCard[7];
  playDoor();
}
card9.onclick = () => {
  cardImage9.src = tabClosCard[8];
  playDoor();
}
card10.onclick = () => {
  cardImage10.src = tabClosCard[9];
  playDoor();
}
card11.onclick = () => {
  cardImage11.src = tabClosCard[10];
  playDoor();
}
card12.onclick = () => {
  cardImage12.src = tabClosCard[11];
  playDoor();
}
card13.onclick = () => {
  cardImage13.src = tabClosCard[12];
  playDoor();
}
card14.onclick = () => {
  cardImage14.src = tabClosCard[13];
  playDoor();
}
card15.onclick = () => {
  cardImage15.src = tabClosCard[14];
  playDoor();
}
card16.onclick = () => {
  cardImage16.src = tabClosCard[15];
  playDoor();
}
randomCardGenerator();
