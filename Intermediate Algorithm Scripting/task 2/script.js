function diffArray(arr1, arr2) {
    const newArr = [];
    newArr.push(...arr1); newArr.push(...arr2);
  let symmDiff = newArr.filter((item)=>{
    if(!arr1.includes(item) || !arr2.includes(item)){
      return item;
      }
      })
  
    return symmDiff;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  function getOutput() {
    document.getElementById("output").innerText = "diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) : "+ diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);   
  }
  