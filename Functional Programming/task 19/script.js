function splitify(str) {
  // Only change code below this line
  // const re = /\s*(?:-|$)\s*/;
  // const regex = /\s|,|-|\s/;
  const regex = /[,-.\s]/;

   return str.split(regex);
  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));

function getOutput() {
    document.getElementById("output").innerText = "splitify(\"Hello World,I-am code\") : "+  splitify("Hello World,I-am code");   
  }