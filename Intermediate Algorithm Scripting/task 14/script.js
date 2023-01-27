function smallestCommons(arr) {

  let min = Math.min(arr[0],arr[1]);
 
  let max = Math.max(arr[0],arr[1]);
 
  let temp = 1;
 
  for(let i=min ; i<=max ; i++){
 
   let num1 = temp;
 
   let num2 = i;
 
   let lcm;
 
 for (lcm = num1; lcm < num1*num2; lcm++){
     if (lcm % num1 == 0 && lcm % num2 == 0) {
 
       break;
 
     }
 }
 
   temp = lcm;
 
  
 
  }
 return temp;
 };
 console.log(smallestCommons([12,14]));

 function getOutput() {
  document.getElementById("output").innerText = "smallestCommons([12,14]) : "+smallestCommons([12,14]);   
}
