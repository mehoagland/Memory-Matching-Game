console.log("YASSSS QUEEEEEENNNNN!");

var successCounter = 0;

function refresh() {
  location.reload();
}

// create a shuffle function for boxes to assign colors
let boxes = document.querySelectorAll(".boxes");
//console.log(boxes);
var allColors = [
  "box-0",
  "box-1",
  "box-2",
  "box-3",
  "box-4",
  "box-5",
  "box-6",
  "box-7",
  "box-8",
  "box-9",
  "box-10",
  "box-11",
  "box-0",
  "box-1",
  "box-2",
  "box-3",
  "box-4",
  "box-5",
  "box-6",
  "box-7",
  "box-8",
  "box-9",
  "box-10",
  "box-11",
  "box-0",
  "box-1",
  "box-2",
  "box-3",
  "box-4",
  "box-5",
  "box-6",
  "box-7",
  "box-8",
  "box-9",
  "box-10",
  "box-11"
];

function shuffle() {
  for (let i = 0; i < allColors.length; i++) {
    var j = Math.floor(Math.random() * allColors.length);
    x = allColors[i];
    allColors[i] = allColors[j];
    allColors[j] = x;
  }
  assignColor();
}
shuffle();

// assign random colors
function assignColor() {
  boxes.forEach(function(box, i) {
    box.classList.toggle(allColors[i]);
    //console.log(allColors[i]);
  });
}

// // grab the main container
// let container = document.getElementById("board-game");

// add event listener
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", openBox, false);
}

// create an array that tracks what is currently open
let openedBoxes = [];
// create var to track # of clicks
//var counter = 0;

var disableClicks = false;
// create a function that adds class open, disabled
// using classList.toggle()
function openBox() {
  if (disableClicks) {
    return;
  }
  //console.log(this);
  if (openedBoxes.length < 3) {
    this.classList.toggle("open");
    this.classList.toggle("disabled");
    //counter++;
    openedBoxes.push(this);
    //trackClicks.push(this);
    //console.log(trackClicks);

    // var turn = [];
    // var clickCounter = 0;
    // for (let i = 0; i < trackClicks.length; i++) {
    //   console.log(trackClicks[i]);
    // }

    //console.log("counter", counter);
  }
  if (openedBoxes.length === 3) {
    if (checkMatched()) {
      successCounter++;
      if (successCounter === 12) {
        var button = $("#shuffle")[0];
        button.style.visibility = "visible";
        button.addEventListener("click", refresh);
      }

      //counter = 0;
    }
  }

  // let clickCounter = 0;
  // let cardsMatchedCounter = 0;
  // for (let i = 0; i < trackClicks.length; i++) {}

  // create a function for matched
  function checkMatched() {
    // console.log(openedBoxes[);
    if (
      openedBoxes[0].className === openedBoxes[1].className &&
      openedBoxes[1].className === openedBoxes[2].className
    ) {
      console.log("MATCH!");
      openedBoxes = [];
      return true;
      //create class called match and apply to matches cards
    } else {
      openedBoxes[0].classList.remove("disabled");
      openedBoxes[1].classList.remove("disabled");
      openedBoxes[2].classList.remove("disabled");
      disableClicks = true;
      setTimeout(notMatched, 1000);
      return false;
    }
  }
  // create a functio for unmatched
  function notMatched() {
    openedBoxes[0].classList.toggle("open");
    openedBoxes[1].classList.toggle("open");
    openedBoxes[2].classList.toggle("open");
    openedBoxes = [];
    disableClicks = false;
  }
}
//need to make a new function to restart game once all matches
//are found...make a button that appears once all matches are found
