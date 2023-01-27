
function sentensify(str) {
  // Only change code below this line

const regex = /[,.-]/;
let newStr = str.split(regex);
 return newStr.join(" ");
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
function getOutput() {
    document.getElementById("output").innerText = "sentensify(\"May-the-force-be-with-you\") : "+  sentensify("May-the-force-be-with-you");   
  }