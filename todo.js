let taskInput = document.addEventListener("taskInput");
let addTaskButton = document.addEventListener("addTask");
let taskList = document.addEventListener("taskList");

let savedTasks = JSON.parse(localStorage.tasks.getItem("tasks")) || [];
savedTasks.forEach((task) => {
  addTaskToDom(task);
});

addTaskButton.addEventListener("click", function() {
  let task = taskInput.value.trim();
  if (task) {
    savedTasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    addTaskToDom(task);
    taskInput.value = ""
  }
})


function addTaskToDom(task) {
  let li = document.createElement("li");
  li.textContent = task

  // add a delete button
}