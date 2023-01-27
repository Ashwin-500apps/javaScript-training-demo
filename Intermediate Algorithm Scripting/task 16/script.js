function steamrollArray(arr) {
    let reqArr = [];
    // console.log(arr,arr.map((element)=>reqArr.push(element)))
    function element(arr) {
      arr.forEach(function(item) {
        if (!Array.isArray(item)) {
          reqArr.push(item);
        }
        else {
         element(item);
        }
     });
   }
   element(arr)
    return reqArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));;

  function getOutput() {
    document.getElementById("output").innerText = "steamrollArray([1, [2], [3, [[4]]]]) : "+steamrollArray([1, [2], [3, [[4]]]]);   
  }
  