let taskList = []; // Initialize an empty array to store tasks

// Add an event listener to the "Add Task" button that triggers the addTask function when clicked
document.getElementById('add-task-btn').addEventListener('click', addTask); 

// Function to add a new task
function addTask() {
    // Get the input field element by its ID
    let taskInput = document.getElementById("taskInput");
    // Trim whitespace from the input value
    let task = taskInput.value.trim();

    // Check if the input is not empty
    if (task !== '') {
        // Add the task to the taskList array
        taskList.push(task);
        // Clear the input field after adding the task
        taskInput.value = '';
        // Call renderTaskList to update the displayed list of tasks
        renderTaskList();
    }
}

// Function to render the list of tasks
function renderTaskList() {
    // Get the task list element by its ID
    let taskListElement = document.getElementById('task-list');

    // Clear the current content of the task list element
    taskListElement.innerHTML = '';

    // Iterate over each task in the taskList array
    taskList.forEach((task, index) => {
        // Create a new list item element for the task
        let taskElement = document.createElement('li');
        // Set the text content of the list item to the task
        taskElement.textContent = task;
        // Add a click event listener to the task element
        taskElement.addEventListener('click', () => {
            // Remove the task from the taskList array using its index
            taskList.splice(index, 1);
            // Call renderTaskList to update the displayed list
            renderTaskList();
        });
        // Append the new task element to the task list
        taskListElement.appendChild(taskElement);
    });
}
