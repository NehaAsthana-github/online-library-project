/*console.log("This is index.js");
//constructor
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}
//Display constructor
function Display(){

}
Display.prototype.add=function(book){
    let tableBody=document.getElementById("tableBody");
    let uistring=` <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`;
  tableBody.innerHTML+=uistring;
}
Display.prototype.clear=function(){
    let libraryForm=document.getElementById("libraryForm");
    libraryForm.reset();
}
Display.prototype.validate=function(book){
    if (book.name.lenght<2||book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.show=function(type,displaymessage){
    let message=document.getElementById("message");
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${displaymessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(function(){
    message.innerHTML=''
  },3000);
}

//Add methods to display prototype

//Add submit event listener to libraryForm
let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener("submit",libraryFormSubmit);
function libraryFormSubmit(e){
    console.log("The form is submitted");
    let name= document.getElementById("bookName").value;
    let author= document.getElementById("author").value;
    let type 
    let fiction= document.getElementById("fiction");
    let programming=document.getElementById("programming");
    let cooking=document.getElementById("cooking");
    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }
    let book=new Book(name,author,type);
    console.log(book);
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show("success","Your Book has been successfully added");
    }
    else{
        display.show("danger","Sorry you can't add this book.");
    }
   
    e.preventDefault();
}
stores all the data to the localstorage
give another column as an option to delete the book
add a scroll bar to the view
*/