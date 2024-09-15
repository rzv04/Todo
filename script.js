console.log('Hello!');

let todoListUL = document.querySelector('ul');

let trash = document.querySelectorAll('.trash-icon');
trash.forEach((trashItem) => {
  trashItem.addEventListener('click', removeTodoItem);
});

function addTodoItem(todoText) {
  todoListUL.innerHTML += `
  <div class="todo-item-container">
  <li class="todo-item">
    <ion-icon
      name="sparkles-outline"
      class="sparkle-icon sparkle--pink"
    ></ion-icon>
    <span class="todo-text">${todoText}</span>
    <ion-icon name="trash-outline" class="trash-icon"></ion-icon>
  </li>
</div>
  `;
}

function removeTodoItem(e) {
  // todoListUL.removeChild(todoItem);
  // console.log(e.target.parentNode);
  let todoItem = e.target.parentNode.parentNode;
  todoListUL.removeChild(todoItem);
}
