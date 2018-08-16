const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0

function onKeyDownHandler(e) {
  const key = e.key
  alert(key)
  if (key === alphabet[index]) {
    index++;
    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } 
  else {
    index = 0;
  }
  //if(index != 0) {
  //  alert("Correct!")
  //}
}

function init() {
  // your code here
  //document.onkeydown = onKeyDownHandler
  var main = document.querySelector("body")
  main.addEventListener("keydown", onKeyDownHandler, false)
  //alert("yalaaahwiiii")

}
