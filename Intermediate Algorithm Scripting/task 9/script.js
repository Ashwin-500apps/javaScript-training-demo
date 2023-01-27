function fearNotLetter(str) {
    let arr = str.split("");
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let firstIndex = abc.indexOf(arr[0]);
    let lastIndex = abc.indexOf(arr[arr.length-1]);
    let subString = abc.substring(firstIndex,lastIndex+1);
  
   //  console.log(subString);
    /*for(let index = 0; index < subString.length ; index++){console.log("str : "+str[index], index)
      if(!subString.includes(str[index])){
   console.log(subString[index], index)
       }
    }*/
   //  if(subString.includes(...arr)){
   // console.log(subString)
   //     }
   //  if(arr.includes(...subString)){
   //  console.log(subString)
   //     }
   
   for(let index = 0 ; index < subString.length ; index++){
   if(!arr.includes(subString[index])){
    return subString[index] ;
      }
   }
     return undefined;
   }
   
   console.log(fearNotLetter("abce"));
   console.log(fearNotLetter("abcdefghjklmno"));
   console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))

   function getOutput() {
    document.getElementById("output").innerText = "fearNotLetter(\"abce\") : "+fearNotLetter("abce")
    +"\nfearNotLetter(\"abcdefghjklmno\") : "+ fearNotLetter("abcdefghjklmno") 
    +"\nfearNotLetter(\"abcdefghijklmnopqrstuvwxyz\") : "+ fearNotLetter("abcdefghijklmnopqrstuvwxyz")
    ;   
  }
  