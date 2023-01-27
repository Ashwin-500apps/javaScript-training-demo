function destroyer(arr) {
    let reqArgs = Array.from(arguments).splice(1);
    let array = arguments[0];
    
    // for(let item of reqArgs){
    //   if(array.includes(item)){
    //     let reqIndex = array.indexOf(item)
    // array.splice(reqIndex,1);
    //   }
    // }
    
    let filteredArray = array.filter(elem => !reqArgs.includes(elem))
      return filteredArray;
    }
    
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

    function getOutput() {
      document.getElementById("output").innerText = "destroyer([1, 2, 3, 1, 2, 3], 2, 3) : "+destroyer([1, 2, 3, 1, 2, 3], 2, 3);   
    }