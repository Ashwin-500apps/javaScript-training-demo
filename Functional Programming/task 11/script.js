
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let newArray = [];
// for(let index = beginSlice; index<endSlice;index++){
// newArray.push(anim[index]);
// }
newArray = anim.slice(beginSlice,endSlice)
return newArray;
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));;
function getOutput() {
    document.getElementById("output").innerText = "Sliced Array : "+  sliceArray(inputAnim, 1, 3);   
  }