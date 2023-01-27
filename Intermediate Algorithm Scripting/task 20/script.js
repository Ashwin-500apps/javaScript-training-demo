/*
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
/* // this.getFirstName = function(){
    return firstAndLast.split(" ")[0];
  }
  this.getLastName = function(){
    return firstAndLast.split(" ")[1];
  }
  this.getFullName = function() {
    return  firstAndLast ;
  };
  this.setFirstName = function(name){
    return name+firstAndLast.split(" ")[1];
  }
  this.setLastName = function(name){
    return firstAndLast.split(" ")[0]+name;
  }
  this.setFullName = function(name){
    return name;
  }
  // return firstAndLast;
  */
 /* this.getFirstName = function(){
    return FirstName =  firstAndLast.split(" ")[0] ;
  }
  this.getLastName = function(){
     return LastName = firstAndLast.split(" ")[1] ;
  }
  this.getFullName = function() {
    return FullName =   firstAndLast ;
  };
  this.setFirstName = function(name){
     return FirstName =  name+firstAndLast.split(" ")[1];
  }
  this.setLastName = function(name){
     return LasttName =   firstAndLast.split(" ")[0]+name ;
  }
  this.setFullName = function(name){
    return FullName =   name ;
  }
  // return firstAndLast;
};*/


const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let reqName = firstAndLast;this.getFirstName = function(){
      return reqName =  reqName.split(" ")[0] ;
    };
    this.getLastName = function(){
       return reqName = reqName.split(" ")[1] ;
    }
    this.getFullName = function() {
      return reqName  ;
    };
    this.setFirstName = function(newName){
        reqName =  newName+" "+reqName.split(" ")[1];
    }
    this.setLastName = function(newName){
        reqName =   reqName.split(" ")[0]+" "+newName ;
    }
    this.setFullName = function(newName){
        reqName = newName ;
    }
    // return firstAndLast;
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
  bob.setFullName("James Bond")
  bob.getFirstName()
  console.log(Object.keys(bob).length)

  console.log( bob.getFullName(),"\n",bob.setFullName("James Bond"),"\n",bob.getFirstName());

  function getOutput() {
    document.getElementById("output").innerText = "bob.getFullName() : "+bob.getFullName()+
    "\nbob.setFullName(\"James Bond\") : "+ bob.setFullName("James Bond")
    +"\nbob.getFirstName() : "+ bob.getFirstName();   
  }
  