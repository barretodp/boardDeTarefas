let completedTasks = 0;

function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskLabel = document.getElementById("taskLabel").value;
    if (taskName === "") return;

    const taskList = document.getElementById("taskList");

    // Cria um novo item de tarefa
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    const taskText = document.createElement("span");
    taskText.innerText = taskName;

    const taskMeta = document.createElement("div");
    taskMeta.classList.add("task-meta");

    const label = document.createElement("span");
    label.classList.add("task-label");
    label.innerText = taskLabel;

    const taskDate = document.createElement("span");
    taskDate.classList.add("task-date");
    taskDate.innerText = `Criado em: ${new Date().toLocaleDateString()}`;

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerText = "Concluir";
    completeButton.onclick = () => completeTask(taskItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "−";
    deleteButton.onclick = () => deleteTask(taskItem);

    taskInfo.appendChild(taskText);
    taskMeta.appendChild(label);
    taskMeta.appendChild(taskDate);
    taskInfo.appendChild(taskMeta);

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskInfo);
    taskItem.appendChild(taskActions);
    
    // Adiciona a nova tarefa na lista
    taskList.appendChild(taskItem);

    // Limpa os campos de entrada
    document.getElementById("taskName").value = "";
    document.getElementById("taskLabel").value = "";
    document.getElementById("taskName").focus();

    // Move todas as tarefas concluídas para o fim da lista
    moveCompletedTasksToEnd(taskList);

    updateFooter();
}

function completeTask(taskItem) {
    taskItem.classList.add("completed");

    const taskInfo = taskItem.querySelector(".task-info");
    const taskText = taskInfo.querySelector("span");
    taskText.innerHTML = `<img src="img-check.svg" alt="Concluído" width="16" height="16"> <s>${taskText.innerText}</s>`;

    const completeButton = taskItem.querySelector(".complete-button");
    if (completeButton) {
        const undoButton = document.createElement("button");
        undoButton.classList.add("undo-button");
        undoButton.innerText = "Desfazer";
        undoButton.onclick = () => undoTask(taskItem);
        taskItem.querySelector(".task-actions").insertBefore(undoButton, taskItem.querySelector(".delete-button"));
        completeButton.remove();
    }

    updateFooter();

    // Move completed task to the end of the list
    const taskList = document.getElementById("taskList");
    taskList.appendChild(taskItem);
}

function undoTask(taskItem) {
    taskItem.classList.remove("completed");
    const taskInfo = taskItem.querySelector(".task-info");
    const taskText = taskInfo.querySelector("span");
    taskText.innerHTML = taskText.innerText.replace(/<img[^>]*>/, '');

    const undoButton = taskItem.querySelector(".undo-button");
    if (undoButton) undoButton.remove();

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerText = "Concluir";
    completeButton.onclick = () => completeTask(taskItem);
    taskItem.querySelector(".task-actions").insertBefore(completeButton, taskItem.querySelector(".delete-button"));

    updateFooter();
    
    // Move completed task to the end of the list
    const taskList = document.getElementById("taskList");
    moveCompletedTasksToEnd(taskList);
}

function deleteTask(taskItem) {
    taskItem.remove();
    updateFooter();
}

function moveCompletedTasksToEnd(taskList) {
    const completedItems = Array.from(taskList.querySelectorAll('.task-item.completed'));
    completedItems.forEach(item => taskList.appendChild(item));
}

function updateFooter() {
    const taskList = document.getElementById("taskList");
    completedTasks = taskList.querySelectorAll('.task-item.completed').length;
    document.getElementById("footer").innerText = `${completedTasks} tarefa(s) concluída(s)`;
}
