console.log("YASSSS QUEEEEEENNNNN!");

var successCounter = 0; //starting a counter to keep track of the amount of time player gets a match 36/3=12 potential matches

function refresh() {
  //made a refresh function to attached to the replay button
  location.reload(); //targeting the location object and using its reload method to refresh page
}

// create a shuffle function for boxes to assign colors
let boxes = document.querySelectorAll(".boxes"); //finding all of the elements with box class in the html file
var allColors = [
  //creating an array of color classes to be added
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
  //creating a function that will shuffle the above color classes to pick at random
  for (let i = 0; i < allColors.length; i++) {
    //looping thru all of the items in allColors array
    var j = Math.floor(Math.random() * allColors.length); //creating j to have value of a random number bw 0 and .99 * the length of allColors array and rounded down to the nearest whole numnber, which will return a random index within the allColors array
    x = allColors[i]; //assigning the random index to be x
    allColors[i] = allColors[j]; //assign allColor index to now also be stored in allColors[j]
    allColors[j] = x; //now saying that x is also allColor[j], this is essentially fliping the current index with the randomly picked index to make a shuffled array
  }

  assignColor(); //once shuffle is done, call this function (to assign color to a box)
}
shuffle(); //calling shuffle now so that as soon as page is loaded game will already be shuffled

function assignColor() {
  //creating function to assign colors to each box
  boxes.forEach(function(box, i) {
    //looping over the boxes array
    box.classList.toggle(allColors[i]); //turning on/assigning the box that is currently being passed thru the foreach function the current allColors[i] class
  });
}

for (var i = 0; i < boxes.length; i++) {
  //going over each of the boxes in grid
  boxes[i].addEventListener("click", openBox, false); //and giving them an eventListener that passes it openBox function
}

let openedBoxes = []; //created empty array to collect all the clicks

var disableClicks = false; //creating a global variable to track the state of click
function openBox() {
  //created a function openBox
  if (disableClicks) {
    //first condition saying that if global var evaluates to true, then cut out and do nothing, if false(which it is above) then do the rest of the logic below
    return;
  }
  if (openedBoxes.length < 3) {
    //if the array length is less than 3 (rememeber, starts at 0)
    this.classList.toggle("open"); //then once clicked, reveal the color of clicked box
    this.classList.toggle("disabled"); //and disable the ability to click on anything

    openedBoxes.push(this); //and push every click to the array

    //console.log("counter", counter);
  }
  if (openedBoxes.length === 3) {
    //if the length of array is 3
    if (checkMatched()) {
      //if this function evaluated to true
      if (successCounter === 12) {
        //then check the counter for number of matches made and if equals number then
        var button = $("#shuffle")[0]; //find button
        button.style.visibility = "visible"; //turn it on
        button.addEventListener("click", refresh); //add an event listener to it adn calls above refresh function (which refreshes the browser)
      }
    }
  }

  function checkMatched() {
    //checking if clicks are matched which is called above
    if (
      openedBoxes[0].className === openedBoxes[1].className &&
      openedBoxes[1].className === openedBoxes[2].className
    ) {
      //if al the clicks in the array classname match then
      console.log("MATCH!"); //print this out to console
      openedBoxes = []; //and clear the array so the next set of clicks can go in it
      return true;
    } else {
      //if nothing matches then remove the disabled clicking class so boxes can be clicked again
      openedBoxes[0].classList.remove("disabled"); //turn over box
      openedBoxes[1].classList.remove("disabled"); //turn over box
      openedBoxes[2].classList.remove("disabled"); //turn over box

      disableClicks = true; //and set the global variable to true, so that until the not matched function has run and time out is done, u can not click anything
      setTimeout(notMatched, 1000);
      return false;
    }
  }

  function notMatched() {
    //if shit is not matched then toggle or turn off all of the open classes (make squares go back to grey)
    openedBoxes[0].classList.toggle("open");
    openedBoxes[1].classList.toggle("open");
    openedBoxes[2].classList.toggle("open");

    openedBoxes = []; //clear out the array for next set of clicks
    disableClicks = false; //and turn the global var to false, so boxes can be clicked
  }
}
