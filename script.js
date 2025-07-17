let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  ["todo", "inprogress", "done"].forEach(status => {
    const ul = document.getElementById(`${status}-list`);
    ul.innerHTML = "";
    tasks.filter(t => t.status === status).forEach(task => {
      const li = document.createElement("li");
      li.textContent = `${task.title} (${task.priority}) - Due: ${task.deadline}`;
      ul.appendChild(li);
    });
  });
}

document.getElementById("task-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("task-title").value;
  const deadline = document.getElementById("task-deadline").value;
  const priority = document.getElementById("task-priority").value;
  tasks.push({ title, deadline, priority, status: "todo" });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  e.target.reset();
});

renderTasks();
