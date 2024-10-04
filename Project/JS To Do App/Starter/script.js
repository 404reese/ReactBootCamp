let taskList = []; // Array for task list

// Event listener for the "Add Task" button
document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {


    if (task !== '') {

        renderTaskList();
    }
}

function renderTaskList() {

    taskList.forEach((task, index) => {

        taskElement.addEventListener('click', () => {

        });

    taskListElement.appendChild(taskElement); 
    });
}