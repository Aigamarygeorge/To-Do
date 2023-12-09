function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === '') {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    li.remove();
  };

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function() {
    var newText = prompt("Edit the task", li.textContent);
    if (newText !== null) {
      li.textContent = newText;
    }
  };

  li.appendChild(deleteButton);
  li.appendChild(editButton);
  taskList.appendChild(li);

  taskInput.value = '';
}
            
