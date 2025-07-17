function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const targetList = ev.target.closest(".column").querySelector(".task-list");

  if (draggedElement && targetList) {
    targetList.appendChild(draggedElement);
  }
}

function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("todo");
  const taskId = "task-" + Date.now();

  const li = document.createElement("li");
  li.className = "task";
  li.id = taskId;
  li.draggable = true;
  li.ondragstart = drag;

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "✕";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
