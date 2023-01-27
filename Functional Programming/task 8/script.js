
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
     for(let index = 0; index < this.length;index++){
          newArray.push(callback(this[index], index, this));
     }
    // Only change code above this line
    return newArray;
  };
  // console.log([23, 65, 98, 5, 13].myMap(item => item * 2));
function getOutput() {
    document.getElementById("output").innerText = "[23, 65, 98, 5, 13].myMap(item => item * 2) \nResult = "+[23, 65, 98, 5, 13].myMap(item => item * 2);   
  }