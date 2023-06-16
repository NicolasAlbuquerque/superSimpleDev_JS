const todoList = ['Make Dinner', 'Wash Dishes']// creating the array 

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]

        const html = `<p> ${todo}</p>`
        todoListHTML += html;
    }

console.log(todoListHTML)

document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
function addTodo() {

    const inputElement = document.querySelector('.js-name-input') // saving the element in a variable
    const name = inputElement.value // using the properties value to take the input value 
    console.log(name) //checking if works

    todoList.push(name) //adding  values to my list
    console.log(todoList) // check the list 
    inputElement.value = ''  // to clear the input area.

    renderTodoList();
}