function updateCounters() {
  // Keeps track of the total number of todos
  var totalCount = document.getElementById('total-count');
  var totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  // Keeps track of the number of completed todos
  var completedCount = document.getElementById('completed-count');
  var completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  // Keeps track of the of uncompleted number of todos
  var todoCount = document.getElementById('todo-count');
  var uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;

  updateCounters();
}


function toggleDone() {
  var checkbox = this;

  // This checks the "checked status of the checkbox"
  if (checkbox.checked) {
    // the "completed" class is set on the parent element, the <li>
    checkbox.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.className = "todo";
  }

  updateCounters();
}


function submitTodo() {
  var inputField = document.getElementById("new-todo");
  var newTodoTitle = inputField.value;
  createTodo(newTodoTitle);

  //  This resets the value of the input field,
  //  making it ready to create new todos
  inputField.value = null;

   updateCounters();

   function createTodo(title) {
     // This creates a list item
    var listItem = document.createElement("li");
    listItem.className = "todo";

    // This creates a checkbox and adds it to the list item
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "todo-" + nextTodoId();
  checkbox.checked = false;
  // This assigns the toggleDone function on te checkbox's onchange event
  checkbox.onchange = toggleDone.bind(checkbox);
  listItem.appendChild(checkbox);

  // This creates a label that holds the title and adds it to the list item
 var space = document.createTextNode(" ");
 listItem.appendChild(space);

 // This adds the list item with the checkbox, the  whitespace and the label to the list
  var label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.innerHTML = title;
  listItem.appendChild(label);

  // This adds the list item with the checkbox, the  whitespace and the label to the list
  var list = document.getElementById("todolist");
  list.appendChild(listItem);
}

// Every todo has it's own id so we can add that to the corresponding label's
// "for" attribute to make sure that when we click the label, the checkbox
// toggles
function nextTodoId() {
  return document.getElementsByClassName("todo").length + 1;
}

 }

// function createTodo(title) {
//   // This creates a list item
//
//   var listItem = document.createElement("li");
//   listItem.className = "todo";
//
//   // This creates a checkbox and adds it to the list item
//   var checkbox = document.createElement("input");
//   checkbox.type = "cehckbox";
//   checkbox.id = "todo-" + nextTodoId();
//   cehcbox.checked = false;
//
//   // This assigns teh toggleDone function on te checkbox's onchange event
//   checkbox.onchange = toggleDone.bind(checkbox);
//   listItem.appednChild(checkbox);
//
//   // This creates a label that holds the title and adds it to the list item
//   var label = document.createElement("label");
//   label.htmlFor = checkbox.id;
//   label.innerHTML = title;
//   listItem.appednChild(label);
//
//
//   // This adds the list item with the checkbox, the  whitespace and the label to the list
//   var list = document.getElementById("todolist");
//   list.appendChild(listItem);
// }
// // Every todo has it's own id so we can add that to the corresponding label's
// // "for" attribute to make sure that when we click the label, the checkbox
// // toggles
// function nextTodoId() {
//   return document.getElementsByClassName("todo").length + 1;
// }
