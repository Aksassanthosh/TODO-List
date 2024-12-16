

  
 var Url = 'https://jsonplaceholder.typicode.com/todos';

  let completedCount = 0;

  function checkTasksCompleted() {
    return new Promise((resolve, reject) => {
      if (completedCount >= 5) resolve();
    });
  }

  async function fetchTodos() {
    const response = await fetch(Url);
    const todos = await response.json();
    const todoList = document.getElementById('todoList');

    todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.textContent = todo.title;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.disabled = todo.completed;

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) completedCount++;
        else completedCount--;

        checkTasksCompleted().then(() => {
          alert('Congrats. 5 Tasks have been Successfully Completed');
        });
      });

      listItem.appendChild(checkbox);
      todoList.appendChild(listItem);
    });
  }

  fetchTodos();