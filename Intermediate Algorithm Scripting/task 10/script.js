function uniteUnique(arr) {
    let set = new Set();
    for(let index =0 ; index < arguments.length ; index++){
    arguments[index].forEach(item => set.add(item))
    }
    
      return [...set]; //Array.from(set); //   s.forEach(x => arr.push(x));  //   var _ = require('lodash'); // or underscore var distinct = _.uniq(arr);
 
    }
    
    
    console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
    function getOutput() {
      document.getElementById("output").innerText = "uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]): "+uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);   
    }
    