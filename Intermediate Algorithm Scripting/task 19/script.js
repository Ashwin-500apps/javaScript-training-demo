
function addTogether(){

    let [arg1, arg2] = arguments;
    function isNum(num) {
    return Number.isInteger(num);
    }
    if (!isNum(arg1) || (arguments.length===2 && !isNum(arg2))) {
    return undefined}
    else if (isNum(arg1) && isNum(arg2)){
    return arg1+arg2
    }
    else if (!arg2){
    return function(newArg){
    if(isNum(newArg)){
    return arg1+newArg
    }
    }
    }
    }
    console.log(addTogether(2,3));

    function getOutput() {
        document.getElementById("output").innerText = "addTogether(2,3) : "+addTogether(2,3);   
      }
      