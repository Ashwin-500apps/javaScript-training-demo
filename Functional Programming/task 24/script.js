
function add(x) {
  // Only change code below this line
//  return  y => z => x+y+z;
  return function(y) {
    return function(z) {
    return x + y + z;
  }
  
}

  // Only change code above this line
}

console.log(add(10)(20)(30));;
function getOutput() {
    document.getElementById("output").innerText = "add(10)(20)(30) : "+  add(10)(20)(30);   
  }