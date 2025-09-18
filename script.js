// Function to add a new task

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    li.appendChild(checkbox);

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'deleteBtn';
    deleteBtn.onclick = function() {
        if (li.parentElement.id === 'taskList') {
            taskList.removeChild(li);
        } else {
            document.getElementById('completedList').removeChild(li);
        }
        updateTaskCount();
    };
    li.appendChild(deleteBtn);

    // Checkbox event
    checkbox.onchange = function() {
        if (checkbox.checked) {
            moveToCompleted(li);
        } else {
            moveToActive(li);
        }
        updateTaskCount();
    };

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
    updateTaskCount();
}

function moveToCompleted(li) {
    li.classList.add('completed');
    document.getElementById('completedList').appendChild(li);
}

function moveToActive(li) {
    li.classList.remove('completed');
    document.getElementById('taskList').appendChild(li);
}

// Function to update the task counter

function updateTaskCount() {
    const totalTasks = document.getElementById('taskList').children.length;
    document.getElementById('taskCount').textContent = totalTasks;
}

// Function to clear all completed tasks

function clearCompleted() {
    const completedList = document.getElementById('completedList');
    while (completedList.firstChild) {
        completedList.removeChild(completedList.firstChild);
    }
    updateTaskCount();
}
