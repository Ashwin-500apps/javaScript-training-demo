function sumFibs(num) {
    let a = 0, b = 1, c = 1;
    let sum = 0;
     for(let i = 1; i <= num; i++)
         {
           
             a = b;
             b = c;
             c = a + b;
             // console.log(a+"*");
             if(a%2==1 && a <= num) {sum += a}; if(a>num){break;}
         }
   
 // console.log(num, sum );
 return sum;
 }
 
console.log(sumFibs(20));;
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75025));

function getOutput() {
    document.getElementById("output").innerText = "sumFibs(20) : "+sumFibs(20)+"\nsumFibs(1000) : "+sumFibs(1000)+"\nsumFibs(4000000) : "+sumFibs(4000000)
    +"\nsumFibs(75025) : "+sumFibs(75025);   
  }
  