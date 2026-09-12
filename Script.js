// Step 1: Allows access the HTML elements:
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");
const formError = document.querySelector("#form-error");

// Step 2: Store tasks:
// Each task is an object: { id, name, priority, completed }.
const tasks = [];
let nextId = 1;

// Step 3: Is the respond to form submission. 
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();
    const taskPriority = priorityInput.value;

    if (taskName === "") {
        formError.hidden = false;
        return;
    }

    formError.hidden = true;

    // --- Step 4:Adds the task.
    const task = {
        id: nextId++,
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";
    taskInput.focus();

    renderTasks();
});

// this handles clicks inside the task list (complete / delete buttons).
taskList.addEventListener("click", function (event) {
    const target = event.target;
    const taskId = Number(target.dataset.id);

    if (target.classList.contains("complete-btn")) {
        toggleComplete(taskId);
    }

    if (target.classList.contains("delete-btn")) {
        deleteTask(taskId);
    }
});

function toggleComplete(id) {
    const task = tasks.find(function (t) {
        return t.id === id;
    });
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(function (t) {
        return t.id === id;
    });
    if (index !== -1) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

function renderTasks() {
    // Clear the current display
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.appendChild(emptyMessage);
        return;
    }

    tasks.forEach(function (task) {
        const taskEl = document.createElement("div");
        taskEl.className = "task priority-" + task.priority + (task.completed ? " completed" : "");

        const nameEl = document.createElement("span");
        nameEl.className = "task-name";
        nameEl.textContent = task.name;

        const tagEl = document.createElement("span");
        tagEl.className = "task-priority-tag";
        tagEl.textContent = task.priority;

        const actionsEl = document.createElement("div");
        actionsEl.className = "task-actions";

        const completeBtn = document.createElement("button");
        completeBtn.type = "button";
        completeBtn.className = "complete-btn";
        completeBtn.textContent = task.completed ? "Undo" : "Complete";
        completeBtn.dataset.id = task.id;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.dataset.id = task.id;

        actionsEl.appendChild(completeBtn);
        actionsEl.appendChild(deleteBtn);

        taskEl.appendChild(nameEl);
        taskEl.appendChild(tagEl);
        taskEl.appendChild(actionsEl);

        taskList.appendChild(taskEl);
    });
}