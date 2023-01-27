function translatePigLatin(str) {
    let vowels= ['a','e','i','o','u']; let index=0;
    
     if(vowels.indexOf(str[index])!== -1){  
         return str+"way";
     }
     for(index=1;index<str.length;index++){
         if(vowels.indexOf(str[index]) !==-1){
             break;
        }
     }
    return str.slice(index,str.length)+str.slice(0, index)+'ay';
    }
    console.log(translatePigLatin("consonant"),
    translatePigLatin("algorithm"), 
    translatePigLatin("paragraphs"));

    
    function getOutput() {
        document.getElementById("output").innerText = "translatePigLatin(\"consonant\") : "+translatePigLatin("consonant") +"\ntranslatePigLatin(\"algorithm\") : "
        + translatePigLatin("algorithm") +"\ntranslatePigLatin(\"paragraphs\"):  "+translatePigLatin("paragraphs");   
      }
      