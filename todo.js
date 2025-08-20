let taskInput = document.addEventListener("taskInput");
let addTaskButton = document.addEventListener("addTask");
let taskList = document.addEventListener("taskList");

// Loading saved tasks
let savedTasks = JSON.parse(localStorage.tasks.getItem("tasks")) || [];
savedTasks.forEach((task) => {
  addTaskToDom(task);
});

// Add a task
addTaskButton.addEventListener("click", function() {
  let task = taskInput.value.trim();
  if (task) {
    savedTasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    addTaskToDom(task);
    taskInput.value = ""; // clearing out the input field
  }
})

// Adding a task to the DOM (self explanatory)
function addTaskToDom(task) {
  let li = document.createElement("li");
  li.textContent = task

  // add a delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(li);
    savedTasks = savedTasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks))
  });
  li.appendChild(deleteButton);
  taskList.append(li);
}