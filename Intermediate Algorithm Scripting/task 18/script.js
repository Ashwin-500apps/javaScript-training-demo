function truthCheck(collection, pre) {
    //   let flag = true;
    //   for(let obj of collection){
    // if(!obj.pre){
    // flag = false;
    // }
    //   }
    //   console.log(flag)
    //   return pre;
     let flag =  collection.every(obj => obj[pre])
    return flag;
    }
    
   console.log( truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

   function getOutput() {
    document.getElementById("output").innerText = "truthCheck([{name: \"Quincy\", role: \"Founder\", isBot: false}, {name: \"Naomi\", role: \"\", isBot: false}, {name: \"Camperbot\", role: \"Bot\", isBot: true}], \"isBot\") : "+truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");   
  }
  