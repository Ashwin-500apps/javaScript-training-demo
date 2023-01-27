function dropElements(arr, func) {
    /* let reqArr = [];
     reqArr =arr.map(element=>{if(func(element)){
       let index = arr.indexOf(element);
       return element;
     }});
   
       // console.log(element)
       // console.log(func(element))
       console.log(reqArr.filter(item=> item!==undefined))
     // console.log(arr.forEach(element=>{
     //    return func(element)
     // }))
     return reqArr.filter(item=> item!==undefined);
     */
     let reqArr = [];
     for(let index =0 ;  index< arr.length; index++){
       if(func(arr[index])){
          reqArr = arr.slice(index) ;
       break;
       }
     }
     return reqArr;
   }
   
   console.log(dropElements([1, 2, 3, 7 ,4], function(n) {return n > 3; }));

   function getOutput() {
    document.getElementById("output").innerText = "dropElements([1, 2, 3, 7 ,4], function(n) {return n > 3; }) : "+dropElements([1, 2, 3, 7 ,4], function(n) {return n > 3; });   
  }
  