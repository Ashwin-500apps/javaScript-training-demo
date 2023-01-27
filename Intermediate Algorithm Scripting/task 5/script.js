function spinalCase(str) {
    let reqStr = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
    return reqStr ;
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  function getOutput() {
    document.getElementById("output").innerText = "spinalCase('This Is Spinal Tap') : "+spinalCase('This Is Spinal Tap');   
  }
  