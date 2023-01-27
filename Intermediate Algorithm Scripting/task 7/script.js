function myReplace(str, before, after) {
    // console.log(str.indexOf(before),before.length,str.replace)
  //  console.log( str.replace(before, after))
   if(before[0] == before[0].toUpperCase()){
  after = after[0].toUpperCase()+after.slice(1);
  return str.replace(before, after);
   }
  
   after = after[0].toLowerCase()+after.slice(1);
    return str.replace(before, after);
  }
  
 console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));;
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

  function getOutput() {
    document.getElementById("output").innerText = " myReplace(\"A quick brown fox jumped over the lazy dog\", \"jumped\", \"leaped\") : "+ myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")+"\nmyReplace(\"He is Sleeping on the couch\", \"Sleeping\", \"sitting\") : "+myReplace("He is Sleeping on the couch", "Sleeping", "sitting");   
  }
  