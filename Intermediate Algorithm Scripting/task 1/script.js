function sumAll(arr) {
    let first ;
    let second ; 
  if(arr[0] > arr[1] ){
    first = arr[1];
    second = arr[0];
  }else{
    first = arr[0];
    second = arr[1];
  }
  
  function sumNatural(n)
  {
      return (n * (n + 1)) / 2;
  }
  
    return sumNatural(second) - sumNatural(first-1);
  }
  
  console.log(sumAll([1, 4]));
  function getOutput() {
    document.getElementById("output").innerText = "sumAll([1, 4]) : "+sumAll([1, 4]);   
  }
  