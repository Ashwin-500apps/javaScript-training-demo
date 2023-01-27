function sumPrimes(num) {
    let sum = 0;    
    for(let number =1 ;  number <= num ; number++){
  let count =0 ;
  for(let index = 1 ; index<= number; index++){
  if( number % index == 0){
    count++;
    }
  }
  if(count==2){
    sum += number;
  }
  } 
    return sum;
  }
  

console.log(sumPrimes(977) );

function getOutput() {
  document.getElementById("output").innerText = "sumPrimes(977) : "+sumPrimes(977) ;   
}
