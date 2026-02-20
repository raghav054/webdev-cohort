// alert('Linked')

const addBtn = document.getElementById("add-btn")
const todoInput = document.getElementById("todo-input")
const todoItemContainer = document.getElementById("todo-item-container");
const delAllBtn = document.getElementById("del-All-btn");


// (1) we want to gether value of input while clicking on add btn
// (2) i want to make li tag for which i got the value from the input
// (3) i have to link li tag with my html 
// (4) after adding value in conatainer remove value from inpit 
// (5) add btn under li tag with inner text 'X' add attach whole li under ul tag
// (6) delbtn ke click pe li tag ko remove ker na hai

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    // console.log('userEntered :)', value);
    const li = document.createElement('li')   //  <li></li>
    li.innerText  = value;  //  <li>value</li>
    
    // console.log(li);

    const delBtn = document.createElement('button')
    delBtn.innerText = 'X'
    li.append(delBtn);

    todoItemContainer.append(li);                 //<ul> <li>    <button>X</button></li> </ul>
    todoInput.value = '';

    delBtn.addEventListener('click', () => {
        li.remove();
    })
    
    delAllBtn.addEventListener('click', () => {
        todoItemContainer.innerHTML = '';
    })

    
})