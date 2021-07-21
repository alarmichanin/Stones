let name1 = "";
let name2 = "";
let Nkamushki = 10;



(function () {
  let block = document.querySelector('#buttPlay')
  let body = document.querySelector('#contentBody')

  block.addEventListener('mouseenter', function () {
    body.style.backgroundColor = 'black'

  })
  block.addEventListener('mouseleave', function () {
    body.style.backgroundColor = 'white'
  })
}());

// block of Enter btn
function func(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    document.addEventListener('keydown', func)
  }
}

document.addEventListener('keydown', func)


let showBtn1 = () => {
  const input = document.querySelector("#first")
  const btn1 = document.querySelector("#btn1")
  if (input.value != "") {
    btn1.style.visibility = "visible"
    document.removeEventListener('keydown', func)
  }
  else {
    btn1.style.visibility = "hidden"
    document.addEventListener('keydown', func)
  }
}

let showBtn2 = () => {
  const input = document.querySelector("#second").value
  const btn2 = document.querySelector("#btn2")
  if (input.value != "") {
    btn2.style.visibility = "visible"
    document.removeEventListener('keydown', func)
  }
  else {
    btn2.style.visibility = "hidden"
    document.addEventListener('keydown', func)
  }
}

let start = () => {
  let content = document.getElementById("btnPlay")
  let swap = document.getElementById("firstPlayer")

  content.innerHTML = swap.innerHTML
  content.id = swap.id
};

function restart() {
  let content = document.getElementById("win")
  let swap = document.getElementById("btnPlay")

  content.innerHTML = swap.innerHTML
  content.id = swap.id
  Nkamushki = 10;
  //content.style.backgroundColor = "white";
}

let zapolnen1 = () => {

  let content = document.getElementById("firstPlayer")
  let swap = document.getElementById("secPlayer")
  let btn1 = document.getElementById("btn1")
  searchPlace = document.getElementById("first")

  name1 = searchPlace.value
  console.log(name1)

  content.innerHTML = swap.innerHTML
  content.id = swap.id
  document.addEventListener('keydown', func)
  return name1
}

let zapolnen2 = () => {

  let content = document.getElementById("secPlayer")
  let swap = document.getElementById("game")

  name2 = document.getElementById("second").value
  console.log(name2)

  content.innerHTML = swap.innerHTML
  content.id = swap.id
  if (window.matchMedia("(max-width: 630px)").matches) {

    document.querySelector("#FP").style.height = "50% ";
    document.querySelector("#SP").style.height = "30% ";
    document.querySelector("#FP").style.width = "100%";
    document.querySelector("#SP").style.width = "100%";
    gameFunc()
  }
  else {
    document.querySelector("#FP").style.width = "70%";
    document.querySelector("#SP").style.width = "30%";
    document.querySelector("#FP").style.height = "100%";
    document.querySelector("#SP").style.height = "100%";
    gameFunc()
  }

  return name2
}

let gameFunc = () => {
  let firstPlayerBtns = document.querySelector("#playBtn1")
  let firstPlayerName = document.querySelector("#nameOfPlayer1")
  let secondPlayerName = document.querySelector("#nameOfPlayer2")
  firstPlayerBtns.style.visibility = "visible"
  firstPlayerName.innerHTML = `: ${name1} :`
  secondPlayerName.innerHTML = `: ${name2} :`
  checker(firstPlayerBtns)
}

let checker = (player) => {
  let playGround1 = document.querySelector("#FP")
  let playGround2 = document.querySelector("#SP")
  let firstPlayerName = document.querySelector("#nameOfPlayer1")
  let secondPlayerName = document.querySelector("#nameOfPlayer2")
  let firstPlayerBtns = document.querySelector("#playBtn1")
  let secondPlayerBtns = document.querySelector("#playBtn2")
  let game = document.querySelector("#game")
  let groupOfBtns = game.querySelectorAll("#player1,#player2")


  window.addEventListener("resize",() =>
  {
    if (player.id == "playBtn1") {
      if (window.matchMedia("(max-width: 630px)").matches) {
        playGround1.style.height = "50% ";
        playGround2.style.height = "30% ";
        playGround1.style.width = "100%";
        playGround2.style.width = "100%";
      }
      else 
      {
        playGround1.style.width = "70%";
        playGround2.style.width = "30%";
        playGround1.style.height = "100%";
        playGround2.style.height = "100%";
      }
    }
    else
    {
      if (window.matchMedia("(max-width: 630px)").matches) {
        playGround1.style.height = "30% ";
        playGround2.style.height = "50% ";
        playGround1.style.width = "100%";
        playGround2.style.width = "100%";
      }
      else {
        playGround1.style.width = "30%";
        playGround2.style.width = "70%";
        playGround1.style.height = "100%";
        playGround2.style.height = "100%";
      }
      
    }
  })
  groupOfBtns.forEach(btn => btn.addEventListener("click", (e) => {
    if (player.id == "playBtn1") {
      if (window.matchMedia("(max-width: 630px)").matches) {
        playGround1.style.height = "30% ";
        playGround2.style.height = "50% ";
        playGround1.style.width = "100%";
        playGround2.style.width = "100%";
      }
      else {
        playGround1.style.width = "30%";
        playGround2.style.width = "70%";
        playGround1.style.height = "100%";
        playGround2.style.height = "100%";
      }
      firstPlayerName.style.color = "black"
      secondPlayerName.style.color = "white"
      firstPlayerBtns.style.visibility = "hidden"
      playGround1.style.backgroundColor = "white"
      secondPlayerBtns.style.visibility = "visible"
      playGround2.style.backgroundColor = "black"
      //
      if (e.target == groupOfBtns[0]) {
        if (Nkamushki >= 1) {
          Nkamushki--;
          let stone = document.querySelector("#stone")
          stone.remove()
          console.log(Nkamushki);
        } else
          Nkamushki = 0;
      }
      else if (e.target == groupOfBtns[1]) {
        if (Nkamushki >= 2) {
          Nkamushki -= 2;
          for (let i = 0; i < 2; i++) {
            let stone = document.querySelector("#stone")
            stone.remove()
          }
          console.log(Nkamushki);
        } else
          Nkamushki = 0;
      }
      else if (e.target == groupOfBtns[2]) {
        if (Nkamushki >= 3) {
          Nkamushki -= 3;
          for (let i = 0; i < 3; i++) {
            let stone = document.querySelector("#stone")
            stone.remove()
          }
          console.log(Nkamushki);
        }
        else
          Nkamushki = 0;
      }

      if (Nkamushki == 0) {
        let content = document.getElementById("game")
        let swap = document.getElementById("win")
        let winText = swap.querySelector("#winText")

        swap.querySelector("#winText").innerHTML = `Player ${name1} Win`

        content.innerHTML = swap.innerHTML
        content.id = swap.id

        console.log("Player 1 WIN!");
      }
      player = secondPlayerBtns
    } else {
      if (window.matchMedia("(max-width: 630px)").matches) {
        playGround1.style.height = "50% ";
        playGround2.style.height = "30% ";
        playGround1.style.width = "100%";
        playGround2.style.width = "100%";
      }
      else {
        playGround1.style.width = "70%";
        playGround2.style.width = "30%";
        playGround1.style.height = "100%";
        playGround2.style.height = "100%";
      }
      firstPlayerName.style.color = "white"
      secondPlayerName.style.color = "black"
      firstPlayerBtns.style.visibility = "visible"
      playGround1.style.backgroundColor = "black"
      secondPlayerBtns.style.visibility = "hidden"
      playGround2.style.backgroundColor = "white"
      if (e.target == groupOfBtns[3]) {

        if (Nkamushki >= 1) {
          Nkamushki -= 1;
          let stone = document.querySelector("#stone")
          stone.remove()
          console.log(Nkamushki);
        }
        else
          Nkamushki = 0;
      }
      else if (e.target == groupOfBtns[4]) {

        if (Nkamushki >= 2) {
          Nkamushki -= 2;
          for (let i = 0; i < 2; i++) {
            let stone = document.querySelector("#stone")
            stone.remove()
          }

          console.log(Nkamushki);
        }
        else
          Nkamushki = 0;
      }
      else if (e.target == groupOfBtns[5]) {

        if (Nkamushki >= 3) {
          Nkamushki -= 3;
          for (let i = 0; i < 3; i++) {
            let stone = document.querySelector("#stone")
            stone.remove()
          }
          console.log(Nkamushki);
        }
        else
          Nkamushki = 0;
      }

      if (Nkamushki == 0) {
        let content = document.getElementById("game")
        let swap = document.getElementById("win")
        let winText = swap.querySelector("#winText")

        swap.querySelector("#winText").innerHTML = `Player ${name2} Win`

        content.innerHTML = swap.innerHTML
        content.id = swap.id

        console.log("Player 2 WIN!");
      }

      player = firstPlayerBtns;
    }
  }))
}