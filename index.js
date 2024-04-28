const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
window.addEventListener('load', loadTasks);
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = taskText;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        saveTasks();
    }
});
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});
function saveTasks() {
    const tasks = Array.from(taskList.getElementsByTagName('li')).map(li => li.innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = task;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskList.appendChild(taskItem);
    });
}