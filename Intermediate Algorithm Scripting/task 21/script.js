function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
     let newArr =[];
     for (let elem in arr) {
    let orbitalPeroid = Math.round(2*Math.PI*Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3)/GM));
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPeroid});
  
  }
    return newArr;
  }
  
 console.log( orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
 

 function getOutput() {
  document.getElementById("output").innerText = "orbitalPeriod([{name : \"sputnik\", avgAlt : 35873.5553}]) : "+JSON.stringify( orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) );   
}
