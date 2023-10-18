
const valueTodo = document.querySelector(".form-control");
const addTodo = document.querySelector("#addButton");
const clearTodo = document.querySelector("#clearButton");
const todoList = document.querySelector("#todoList");

function addTask() {
    const value = valueTodo.value;
    valueTodo.value = "";

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "20px";
    li.style.backgroundColor = "rgb(236, 236, 236)";
    li.style.marginTop = "10px";

    const todoText = document.createElement("p");
    todoText.textContent = value;
    todoText.style.margin = 0;
    todoText.style.fontWeight = 600;

    const buttons = document.createElement("div");
    buttons.style.display = "flex";
    buttons.style.gap = "10px";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");

    const complateBtn = document.createElement("button");
    complateBtn.textContent = "Complate";
    complateBtn.classList.add("btn");
    complateBtn.classList.add("btn-success");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");

    let isComplate = false;
    complateBtn.addEventListener("click", function () {
        isComplate = !isComplate;
        if (isComplate) {
            todoText.style.textDecoration = "line-through";
            todoText.style.opacity = "0.5";
            complateBtn.textContent = "Uncomplate";
            complateBtn.classList.add("btn-warning");
            complateBtn.classList.remove("btn-success");
        } else {
            complateBtn.textContent = "Complate";
            todoText.style.textDecoration = "none";
            todoText.style.opacity = "1";
            complateBtn.classList.add("btn-success");

            complateBtn.classList.remove("btn-warning");
        }
    });

    editBtn.addEventListener("click", function () {

        const inputEdit = document.createElement("input");
        inputEdit.value = todoText.textContent;
        inputEdit.style.background = 'rgb(236, 236, 236)';
        li.prepend(inputEdit);
        inputEdit.style.border = 'none';
        todoText.style.display = "none";
        editBtn.style.display = "none";
        complateBtn.style.display = "none";
        deleteBtn.style.display = "none";

        const okBtn = document.createElement('button');
        okBtn.textContent = "Ok";
        okBtn.classList.add("btn");
        okBtn.classList.add("btn-success");
        buttons.prepend(okBtn);
        okBtn.addEventListener('click', function () {
            todoText.textContent = inputEdit.value;
            todoText.style.display = "block";
            editBtn.style.display = "block";
            complateBtn.style.display = "block";
            deleteBtn.style.display = "block";
            inputEdit.style.display = "none";
            canselBtn.style.display = "none";
            okBtn.style.display = "none";
        });

        const canselBtn = document.createElement('button');
        canselBtn.textContent = "Cancel";
        canselBtn.classList.add("btn");
        canselBtn.classList.add("btn-danger");
        buttons.prepend(canselBtn);

        canselBtn.addEventListener('click', function () {
            inputEdit.style.display = "none";
            todoText.style.display = "block";
            editBtn.style.display = "block";
            complateBtn.style.display = "block";
            deleteBtn.style.display = "block";
            canselBtn.style.display = "none";
            okBtn.style.display = "none";
        });
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    buttons.append(editBtn);
    buttons.append(complateBtn);
    buttons.append(deleteBtn);

    li.append(todoText);
    li.append(buttons);

    todoList.prepend(li);
   
}
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") addTask();
});

addTodo.addEventListener("click", addTask);

clearTodo.addEventListener("click", function () {
    todoList.innerHTML = "";
});

