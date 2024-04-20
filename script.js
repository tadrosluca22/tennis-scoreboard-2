

let inGameScoreP1 = 0;
let inGameScoreP2 = 0;
let gameP1 = 0;
let gameP2 = 0;
document.getElementById("ptsp2").innerHTML = inGameScoreP2;
document.getElementById("gamesp2").innerHTML = gameP2;
document.getElementById("ptsp1").innerHTML = inGameScoreP1;
document.getElementById("gamesp1").innerHTML = gameP1;


function p1wbDeuce() {
  if (inGameScoreP1 === 40 && inGameScoreP2 === 40) {
    
      inGameScoreP1 = "AD";
      inGameScoreP2 = 40;
    
  } else if(inGameScoreP1 === 40 && inGameScoreP2 === "AD") {
    inGameScoreP1 = 40;
    inGameScoreP2 = 40;
  }else if (inGameScoreP2 === 40 && inGameScoreP1 === "AD"){
    gameP1++;
    inGameScoreP1 = 0;
    inGameScoreP2 = 0;
  }
   else if (inGameScoreP1 === 0 || inGameScoreP1 === 15) {
    inGameScoreP1 += 15;
  } else if (inGameScoreP1 === 30) {
    inGameScoreP1 += 10;
  } else if (inGameScoreP1 === 40) {
    gameP1++;
    inGameScoreP1 = 0;
    inGameScoreP2 = 0;
  }
  document.getElementById("ptsp1").innerHTML = inGameScoreP1;
  document.getElementById("ptsp2").innerHTML = inGameScoreP2;
  document.getElementById("gamesp1").innerHTML = gameP1;
}

function p2wbDeuce() {
  if (inGameScoreP1 === 40 && inGameScoreP2 === 40) {
    
      inGameScoreP1 = 40;
      inGameScoreP2 = "AD";
    
  }else if(inGameScoreP2 === 40 && inGameScoreP1 === "AD") {
    inGameScoreP2 = 40;
    inGameScoreP1 = 40;
  } else if (inGameScoreP1 === 40 && inGameScoreP2 === "AD") {
    gameP2++;
    inGameScoreP2 = 0;
    inGameScoreP1 = 0;
  }
  else if (inGameScoreP2 === 0 || inGameScoreP2 === 15) {
    inGameScoreP2 += 15;
  } else if (inGameScoreP2 === 30) {
    inGameScoreP2 += 10;
  } else if (inGameScoreP2 === 40) {
    gameP2++;
    inGameScoreP2 = 0;
    inGameScoreP1 = 0;
  }
  document.getElementById("ptsp1").innerHTML = inGameScoreP1;
  document.getElementById("ptsp2").innerHTML = inGameScoreP2;
  document.getElementById("gamesp2").innerHTML = gameP2;
}

function p1wbDecpoint() {
  if (inGameScoreP1 === 0 || inGameScoreP1 === 15) {
    inGameScoreP1 += 15;
  } else if (inGameScoreP1 === 30) {
    inGameScoreP1 += 10;
  } else if (inGameScoreP1 === 40) {
    gameP1++;
    inGameScoreP1 = 0;
    inGameScoreP2 = 0;
  }
  document.getElementById("ptsp1").innerHTML = inGameScoreP1;
  document.getElementById("ptsp2").innerHTML = inGameScoreP2;
  document.getElementById("gamesp1").innerHTML = gameP1;
}

function p2wbDecPoint() {
  if (inGameScoreP2 === 0 || inGameScoreP2 === 15) {
    inGameScoreP2 += 15;
  } else if (inGameScoreP2 === 30) {
    inGameScoreP2 += 10;
  } else if (inGameScoreP2 === 40) {
    gameP2++;
    inGameScoreP2 = 0;
    inGameScoreP1 = 0;
  }
  document.getElementById("ptsp1").innerHTML = inGameScoreP1;
  document.getElementById("ptsp2").innerHTML = inGameScoreP2;
  document.getElementById("gamesp2").innerHTML = gameP2;
}

function checkWinner() {
  let gamesPOne = document.getElementById("gamesp1").innerHTML;
  let gamesPTwo = document.getElementById("gamesp2").innerHTML;
  let pointsPTwo = document.getElementById("ptsp2").innerHTML;
  let pointsPOne = document.getElementById("ptsp1").innerHTML;
  let setsPOne = document.getElementById("setsp1").innerHTML;
  let setsPTwo = document.getElementById("setsp2").innerHTML;
  let nameP1 = document.getElementById("p1").value;
  let nameP2 = document.getElementById("p2").value;
  let gamesInSet = document.getElementById("multipleChoice1").value;
  let sets = document.getElementById("multipleChoice2").value;
  console.log(pointsPOne+"/"+pointsPTwo+"          "+gamesPOne+"/"+gamesPTwo)
    if(gamesPTwo == gamesInSet && gamesPOne <= gamesInSet-2){
    addSetP2()
    resetgames()
  } else if(gamesPTwo == gamesInSet+1 && gamesPOne <= gamesInSet-1){
    addSetP2()
    resetgames()
  } else if (gamesPOne == gamesInSet && gamesPTwo <= gamesInSet-2){
    addSetP1()
    resetgames()
  } else if (gamesPOne == gamesInSet && gamesPTwo <= gamesInSet-2){
    addSetP1()
    resetgames()
  }
}
function checkSetsP1() {
  let setsPOne = document.getElementById("setsp1").innerHTML;
  let sets = document.getElementById("multipleChoice2").value;
  let nameP1 = document.getElementById("p1").value;

  if (setsPOne == sets) {
    alert(nameP1 + " wins!");
    console.log(nameP1 + " wins!");
  }
}
function checkSetsP2() {
  let setsPTwo = document.getElementById("setsp2").innerHTML;
  let sets = document.getElementById("multipleChoice2").value;
  let nameP2 = document.getElementById("p2").value;

  if (setsPTwo == sets) {
    alert(nameP2 + " wins!");
    console.log(nameP2 + " wins!");
  }
}

  function reset() {
    inGameScoreP1 = 0;
    inGameScoreP2 = 0;
    gameP1 = 0;
    gameP2 = 0;
    setsP1 = 0;
    setsP2 = 0;
    document.getElementById("ptsp1").innerHTML = inGameScoreP1;
    document.getElementById("gamesp1").innerHTML = gameP1;
    document.getElementById("setsp1").innerHTML = setsP1
    document.getElementById("setsp2").innerHTML = setsP2
    document.getElementById("ptsp2").innerHTML = inGameScoreP2;
    document.getElementById("gamesp2").innerHTML = gameP2;
  }
  function resetgames() {
    inGameScoreP1 = 0;
    inGameScoreP2 = 0;
    gameP1 = 0;
    gameP2 = 0;
    document.getElementById("ptsp1").innerHTML = inGameScoreP1;
    document.getElementById("gamesp1").innerHTML = gameP1;
    document.getElementById("ptsp2").innerHTML = inGameScoreP2;
    document.getElementById("gamesp2").innerHTML = gameP2;
  }
const nameP1 = document.getElementById("p1").value;
const nameP2 = document.getElementById("p2").value;




function p1wb(){
  let DecOrAD = document.getElementById("multipleChoice").value;
  if (DecOrAD == "AD"){
    p1wbDeuce()
   }
  else if(DecOrAD == "Deciding Point"){
    p1wbDecpoint()
  }
}

function p2wb(){
  let DecOrAD = document.getElementById("multipleChoice").value;
  if(DecOrAD == "AD"){
    p2wbDeuce()
  } else if(DecOrAD == "Deciding Point"){
    p2wbDecPoint()
  }
} 
function addSetP1(){
  let sets = document.getElementById("multipleChoice2").value;
  let p1s = document.getElementById("setsp1").innerHTML;
  let p2s = document.getElementById("setsp2").innerHTML;
  let gamesPOne = document.getElementById("gamesp1").innerHTML;
  let gamesPTwo = document.getElementById("gamesp2").innerHTML;
  let pointsPTwo = document.getElementById("ptsp2").innerHTML;
  let pointsPOne = document.getElementById("ptsp1").innerHTML;
  let gamesInSet = document.getElementById("multipleChoice1").value;
  if(gamesPOne == gamesInSet && gamesPTwo <= gamesInSet-2){
    p1s ++
    p1s.innerHTML = p1s
  } else if (gamesPOne == gamesInSet+1 && gamesPTwo <= gamesInSet-1){
    p1s ++
    p1s.innerHTML = p1s
  }
}

function addSetP1() {
  let setsP1 = document.getElementById("setsp1").innerHTML;
  setsP1++;
  document.getElementById("setsp1").innerHTML = setsP1;
}

function addSetP2() {
  let setsP2 = document.getElementById("setsp2").innerHTML;
  setsP2++;
  document.getElementById("setsp2").innerHTML = setsP2;
}
function settingschoice(){
  let sets = document.getElementById("multipleChoice2").value;
  let DecOrAD = document.getElementById("multipleChoice").value;
  let gamesInSet = document.getElementById("multipleChoice1").value;
  console.log("Sets: " + sets);
  console.log("If 40-40: " + DecOrAD);
  console.log("Games in set: " + gamesInSet)
}