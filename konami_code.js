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
  if(key === codes[0] && (index === 0 || index === 1)) {
    index++
  }
  else if(key === codes[2] && (index === 2 || index === 3)) {
    index++
  }
  else if(key === codes[4] && (index === 4 || index === 6)) {
    index++
  }
  else if(key === codes[5] && (index === 5 || index === 7)) {
    index++
  }
  else if(key === codes[8] && index === 8) {
    index++
  }
  else if(key === codes[9] && index === 9) {
    index++
  }
  else {
    index = 0
  }
  //if(index != 0) {
  //  alert("Correct!")
  //}
  if(index === codes.length) {
    index = 0
    alert("Hurray!")
  }
}

function init() {
  // your code here
  //document.onkeydown = onKeyDownHandler
  var main = document.querySelector("body")
  main.addEventListener("keydown", onKeyDownHandler, false)
  //alert("yalaaahwiiii")

}
