// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {

return fixedValue+1;
  // Only change code above this line
}
function getOutput() {
  document.getElementById("output").innerText = "fixedValue = 4 \nIncremented Value = "+ incrementer(4);
}