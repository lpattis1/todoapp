const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search-input");

// add todos
const generateTemplate = (todo) => {
  const html = `
    <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filter through tasks

const filterToDos = function (search) {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(search.toLowerCase());
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(search.toLowerCase());
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

search.addEventListener("keyup", function (e) {
  const term = search.value.toLowerCase().trim();

  filterToDos(term);
});
