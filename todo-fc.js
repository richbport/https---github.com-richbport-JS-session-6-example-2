let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Load saved tasks
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach((task) => {
  addTaskToDOM(task);
});

// Add new task
addTaskButton.addEventListener("click", function () {
  let task = taskInput.value.trim();
  if (task) {
    savedTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    addTaskToDOM(task);
    taskInput.value = ""; // Clear input field
  }
});

// Function to add a task to the DOM
function addTaskToDOM(task) {
  let li = document.createElement("li");
  li.textContent = task;

  // Add a delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    savedTasks = savedTasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);
}
