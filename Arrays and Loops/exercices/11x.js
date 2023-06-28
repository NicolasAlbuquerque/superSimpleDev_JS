const todoList = JSON.parse(localStorage.getItem('todoList'))|| [
    {
    name: 'Make Dinner',
    dueDate: '2023-06-19'
    } ,
    
    {
        name:'Wash Dishes',
        dueDate:'2023-06-19'
    }
] // creating an array 

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i]
       // const dueDate = todoObject.dueDate
        const { name, dueDate }= todoObject
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button 
            onclick='
            todoList.splice(${i},1);
            renderTodoList();'
            class='todo-delete-button'
            >Delete</button>
        `;  
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

    const dateInputElement =  document.querySelector('.js-dueDate-input')// saving the element in a variable
    const dueDate = dateInputElement.value;// using the properties value to take the input value 

    todoList.push({
        //name:name,
        //dueDate:dueDate
        name, //shortHand property Sintax we que use tha same name in the variable and the property
        dueDate
    }) //adding  values to my list
    console.log(todoList) // check the list 
    inputElement.value = ''  // to clear the input area.

    renderTodoList();
    SaveToStorage();
}



//localStorage

function SaveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}