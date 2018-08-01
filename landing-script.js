var form = document.querySelector(".form");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var nameInputDOMElement = document.querySelector(".name");
  console.log(nameInputDOMElement.value);
});
