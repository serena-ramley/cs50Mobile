const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

var list = document.getElementById('todo-list')
var itemCountSpan = document.getElementById('item-count').innerHTML
var uncheckedCountSpan = document.getElementById('unchecked-count').innerHTML

function newTodo() {
  document.getElementById("item-count").innerHTML = ++itemCountSpan
}