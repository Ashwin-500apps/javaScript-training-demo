function whatIsInAName(collection, source) {
    //   let searchKeys =   Object.keys(source)
    //   let searchValues = Object.values(source)
    //  let reqArr = [];
    // for (const item of collection) {
    //     // console.log(Object.keys(item).hasOwnProperty(...searchKeys))
    //     if(Object.keys(item).includes(...searchKeys) && Object.values(item).includes(...searchValues)){
           
    //       reqArr.push(item);
    //       // console.log(item)
    //     }
    
    // }
    
    // console.log("***", reqArr );
    // // return reqArr;
    
    let reqArr = [];
    for(let index = 0; index< collection.length; index++){
      let flag  = true;
        for(let key in source){
          // console.log("key",key)
          if(collection[index][key] !== source[key]){
          flag = false;
          break;
          }
        }
             if(flag==true){
                reqArr.push(collection[index])
              }
      }
     
    
    return reqArr;
    }
    
   console.log( whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

    function getOutput() {
      document.getElementById("output").innerText = "whatIsInAName([{ first: \"Romeo\", last: \"Montague\" }, { first: \"Mercutio\", last: null }, { first: \"Tybalt\", last: \"Capulet\" }], { last: \"Capulet\" }) : " + JSON.stringify( whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));   
    }