const squareList = arr => {
  // Only change code below this line
  let newArr = arr.map((item)=>{
    if(Math.sign(item)==1)  {
    return item*item;
    }
  }
    ).filter((item)=>Number.isInteger(item))
  return newArr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

function getOutput() {
    document.getElementById("output").innerText = "squaredIntegers : "+  squaredIntegers;   
  }