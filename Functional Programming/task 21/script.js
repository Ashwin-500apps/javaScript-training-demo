

// Only change code below this line
function urlSlug(title) {

  // return title.split(" ").join('-').toLowerCase() ;
  
  let newStr = title.split(" ");
   // Remove the empty elements from the array
   newStr = newStr.filter(function(item){return item;});
   // Join the array with delimeter space
   newStr = newStr.join("-");
  
  return newStr.toLowerCase();
  }
  // Only change code above this line
 console.log( urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
function getOutput() {
    document.getElementById("output").innerText = " urlSlug(\"A Mind Needs Books Like A Sword Needs A Whetstone\") : "+   urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");   
  }