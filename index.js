const container = document.querySelector(".container");
const form = document.querySelector(".form");
const body = document.querySelector("body");
const btnForm = document.querySelector(".btn-form");
const listOfBooks = [];

window.onload = () => {
  listBooksFromArray();
};

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToList(book) {
  listOfBooks.push(book);
}

function displayForm() {
  form.style.display = "block";
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  body.addEventListener("mousedown", (event) => {
    if (!form.contains(event.target)) {
      form.style.display = "none";
    }
  });
}

function listBooksFromArray() {
  container.textContent = "";
  let index = 0;
  listOfBooks.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("index", index);
    container.appendChild(div);
    const h2 = document.createElement("h2");
    h2.classList.add("title");
    const h4 = document.createElement("h4");
    h4.classList.add("author");
    const h5 = document.createElement("h5");
    h5.classList.add("pages");
    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn");
    readBtn.textContent = "Read";
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.textContent = "Remove";
    h2.textContent = element.title;
    h4.textContent = element.author;
    h5.textContent = element.pages;
    delBtn.addEventListener("click", (e) => {
      const currentIndex = div.getAttribute("index");
      listOfBooks.splice(currentIndex, 1);
      div.remove();
      index--;
      listBooksFromArray();
    });

    readBtn.addEventListener("click", (e) => {
      div.classList.toggle("active");
    });
    div.appendChild(h2);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(delBtn);
    div.appendChild(readBtn);
    index++;
  });
}

function submitForm() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const book = new Book(title, author, pages);
  addBookToList(book);
}

btnForm.addEventListener("click", (event) => {
  event.preventDefault();
  submitForm();
  title.value = "";
  author.value = "";
  pages.value = "";
  form.style.display = "none";
  listBooksFromArray();
});

const Valhala_book = new Book("Valhala", "Thors", 250);
const Vinland_book = new Book("Vinland", "Thorfin", 150);
const Greenland_book = new Book("Greenland", "Thorkiel", 200);

addBookToList(Valhala_book);
addBookToList(Vinland_book);
addBookToList(Greenland_book);

console.log(listOfBooks);
