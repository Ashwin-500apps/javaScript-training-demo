
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
let newArray = [];
newArray=arr.slice();
return newArray.sort((a,b)=> a-b);

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
function getOutput() {
    document.getElementById("output").innerText = "nonMutatingSort(globalArray) : "+  nonMutatingSort(globalArray);   
  }