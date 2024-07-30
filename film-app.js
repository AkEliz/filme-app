"use strict";

let countOfFilms;

init();

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genrer: [],
  status: null,
  privat: false
};

function init() {
  countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

  while (countOfFilms == "" || countOfFilms == null || isNaN(countOfFilms)) {
    countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");
  }
}

function userFavoritGeners(){
    let favoritGeners1 = +prompt("Ձեր ամենա սիրելի ժանրը");
    let favoritGeners2 = +prompt("Ձեր սիրելի ժանրը");
    let favoritGeners3 = +prompt("Ձեր նախընտրելի ժանրը");
    const favoritGeners = [favoritGeners1,favoritGeners2,favoritGeners3]

    while (favoritGeners == ""){
        console.log(favoritGeners)
    }
}

function rememberAndCreateUserFilms() {
  for (let i = 0; i < 2; i++) {
    const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);

    if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
        DB.movies[filmName] = filmRate;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
}

function detectUserPersonalLevel() {
    if (DB.count < 10) {
      DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
    } else if (DB.count >= 10 && DB.count < 30) {
      DB.status = "Դուք դասական ֆիլմ դիտող եք";
    } else if (DB.count >= 30) {
      DB.status = "Դուք կինոման եք !"
    } else {
      console.log("Տեղի է ունեցել խնդիր․");
    }
  }
  
  function checkDBPrivatStatus(state) {
    state ? console.log("Sorry but DB is not visible") : console.log(DB);
  }

  // rememberAndCreateUserFilms();
// detectUserPersonalLevel();
checkDBPrivatStatus(DB.privat);
console.log(userFavoritGeners())

