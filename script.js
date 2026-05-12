let balance = 1000;

function play(userColor){

  const colors = ["Red","Green","Blue"];

  const randomColor =
  colors[Math.floor(Math.random()*3)];

  const result =
  document.getElementById("result");

  if(userColor === randomColor){
    balance += 10;
    result.innerHTML =
    "You Win! Colour was " + randomColor;
  }else{
    balance -= 10;
    result.innerHTML =
    "You Lose! Colour was " + randomColor;
  }

  document.getElementById("balance")
  .innerHTML = balance;

}