function convertHTML(str) {
    return str.replace(/&/g, "&amp;")
                   .replace(/>/g, "&gt;")
                   .replace(/</g, "&lt;")
                   .replace(/"/g, "&quot;")
                   .replace(/'/g,"&apos;");
  
  }
  
  console.log(convertHTML("Dolce & Gabbana"))
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML('Stuff in "quotation marks"') );
  console.log(convertHTML("Schindler's List"));

  function getOutput() {
    document.getElementById("output").innerText = "convertHTML(\"Dolce & Gabbana\"): "+convertHTML("Dolce & Gabbana")
    +"\nconvertHTML(\"Hamburgers < Pizza < Tacos\") : "+convertHTML("Hamburgers < Pizza < Tacos")
    +"\nconvertHTML('Stuff in \"quotation marks\"') : "+convertHTML('Stuff in "quotation marks"')
    +"\nconvertHTML(\"Schindler's List\") : "+convertHTML("Schindler's List")
    ;   
  }
  
