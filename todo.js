let taskInput = document.addEventListener("taskInput")
let addTask = document.addEventListener("addTask")
let taskList = document.addEventListener("taskList")

let savedTasks = JSON.parse(localStorage.tasks.getItem("tasks")) || [];