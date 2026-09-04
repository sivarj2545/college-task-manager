function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    document.getElementById("taskList").appendChild(task);

    input.value = "";
}
