const showButton = document.querySelector('.addBtn');
const favDialog  = document.getElementById("favDialog");
const confirmBtn = document.querySelector('#confirmBtn');
const title      = document.getElementById("title");
const author     = document.getElementById("author");
const pages      = document.getElementById("pages");
const read       = document.getElementById("read");
const content    = document.querySelector(".content");


showButton.addEventListener('click',()=>{
    favDialog.showModal();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

confirmBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let obj = new Book(title.value,author.value,pages.value,read.checked);
    addBookToLibrary(obj);
    favDialog.close();
});

let myLibrary = [
    theHobbit = {
        title : 'The Hobbit',
        author : 'J.R.R. Tolkien',
        pages: 295,
        read: false
    },

    brokenGlass = {
        title:"Broken Glass",
        author:"Alain Mabanckou",
        pages:176,
        read:false
    },

    darkmans = {
        title:"Darkmans",
        author:"Nicola Barker",
        pages:200,
        read:true
    }
];

function Book (title,author,pages,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
    addBookToHtml();
}

addBookToHtml();

function addBookToHtml() {

    content.textContent = '';
    for(let i=0;i<myLibrary.length;i++) {

        const card = document.createElement("div");
        card.classList.add("card");
        const one = document.createElement("div"); 
        const two = document.createElement("div"); 
        const three = document.createElement("div"); 
        const four = document.createElement("button"); 
        const five = document.createElement("button"); 
        one.classList.add("one");
        two.classList.add("two");
        three.classList.add("three");
        four.classList.add("four");
        five.classList.add("five");
        one.textContent = myLibrary[i].title;
        two.textContent = myLibrary[i].author;
        three.textContent = myLibrary[i].pages;
        four.textContent = myLibrary[i].read ? "Read" : "Not Read";
        five.textContent = "Remove";
        content.appendChild(card);
        card.appendChild(one);
        card.appendChild(two);
        card.appendChild(three);
        card.appendChild(four);
        card.appendChild(five);
        five.setAttribute("onclick",`remove(${i})`);
        four.setAttribute("onclick",`readToggle(${i})`);
    }
}
    
function remove(index){
    myLibrary.splice(index,1);
    addBookToHtml();
}
   

function readToggle(index){
    myLibrary[index].read = !myLibrary[index].read;
    addBookToHtml();
}
