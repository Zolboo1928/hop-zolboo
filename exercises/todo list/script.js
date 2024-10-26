const form = document.querySelector("form");

const ulEl = document.querySelector("ul");

const todos = [
  {
    id: 0,
    title: "Wake up",
    checked: true,
  },
];

let nextId = todos.length;

const drawTodos = () => {
  ulEl.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const todoEl = document.createElement("li");
    todoEl.innerText = todo.title;
    

    const checkEl = document.createElement("input");
    checkEl.type = "checkbox";
    if (todo.checked) {
      checkEl.checked = "checked";
    }

    const deleteEl = document.createElement("button");
    deleteEl.innerText = "delete";
    deleteEl.addEventListener("click",()=>{
        todos.splice(i,1)
    })

    todoEl.prepend(checkEl);
    todoEl.appendChild(deleteEl);

    ulEl.appendChild(todoEl);
  }
};

drawTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    id: nextId,
    title: form.title.value,
    checked: false,
  };
  todos.push(newTodo);
  nextId++;
  form.title.value = "";
  drawTodos();
});




