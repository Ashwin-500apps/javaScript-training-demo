// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList,bookName) {

// let newA = [...bookList];

let value = bookList.slice(0);
value.push(bookName);
return  value;

// Change code above this line

}


// Change code below this line

function remove(bookList,bookName) {

let value = bookList.slice(0);

// let value = [...bookList];

const book_index = value.indexOf(bookName);

if (book_index >= 0) {


value.splice(book_index, 1);

return value;


// Change code above this line

}

}

function getOutput() {
    document.getElementById("output").innerHTML = "bookList:"+bookList;
    document.getElementById("output1").innerHTML = "Adding: A Brief History of Time =>"+add(bookList, "A Brief History of Time");
    document.getElementById("output2").innerHTML ="Removing : On The Electrodynamics of Moving Bodies => "+remove(bookList, "On The Electrodynamics of Moving Bodies");
    document.getElementById("output3").innerHTML ="Adding :A Brief History of Time,<br> Removing : On The Electrodynamics of Moving Bodies<br> "+remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
}

