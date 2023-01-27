function pairElement(str) {
    let base1 = "AT";
    let base2 = "CG";
    let reqArr = [];
    for (let index = 0; index < str.length; index++) {
        let arr = [];arr.push(str[index]);
        if(base1.includes(str[index])){
            let baseindex = base1.indexOf(str[index]);
            // arr.push(base1[base1.length - baseindex])
            let pushIndex = (baseindex == 1 ? 0 : 1);
            arr.push(base1[pushIndex])

        }else{
            let baseindex = base2.indexOf(str[index]);
            let pushIndex = (baseindex == 1 ? 0 : 1);
            arr.push(base2[pushIndex])
        };
        reqArr.push(arr) 
    };
    // console.log(reqArr);
    // let pushArr=[...str];for (let item of pushArr) {
  // let arr = [];arr.push(item);reqArr.push(arr)      
    // }console.log(reqArr)
   // console.log( reqArr.push(pushArr),reqArr)
    return reqArr;
  }
  
 console.log( pairElement("ATCGA") );
  console.log(  pairElement("GCG") );
  function getOutput() {
    document.getElementById("output").innerText = "pairElement(\"ATCGA\") : "+JSON.stringify( pairElement("ATCGA") )+"\npairElement(\"GCG\") :"+ JSON.stringify( pairElement("GCG") );   
  }
  