function alphabeticalOrder(arr) {
  // Only change code below this line
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
  return arr.sort(compareNumeric)
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

function getOutput() {
    document.getElementById("output").innerText = "alphabeticalOrder : "+  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);   
  }