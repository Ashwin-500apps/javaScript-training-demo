
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
for(let index =0; index<this.length ; index++){
  if(Boolean(callback(this[index],index,this))===true){
    newArray.push(this[index]);
  }
  // Only change code above this line
 
} return newArray;
}
function getOutput() {
    document.getElementById("output").innerText = "[23, 65, 98, 5, 13].myFilter(item => item % 2) \nResult = "+  [23, 65, 98, 5, 13].myFilter(item => item % 2) ;   
  }

  