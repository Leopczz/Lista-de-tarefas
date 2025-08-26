document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    // Criar elementos da tarefa
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = taskText;

    // Descrição (inicialmente escondida)
    const description = document.createElement('textarea');
    description.placeholder = "Descreva como foi a execução...";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-btn';

    // Quando marcar/desmarcar a tarefa
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        li.classList.add('completed');
        description.style.display = 'block';
        description.focus();
      } else {
        li.classList.remove('completed');
        description.style.display = 'none';
        description.value = '';
      }
    });

    // Apagar tarefa
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // Montar estrutura
    const topLine = document.createElement('div');
    topLine.style.display = 'flex';
    topLine.style.alignItems = 'center';
    topLine.style.width = '100%';

    topLine.appendChild(checkbox);
    topLine.appendChild(label);
    topLine.appendChild(deleteBtn);

    li.appendChild(topLine);
    li.appendChild(description);

    taskList.appendChild(li);

    taskInput.value = '';
  });
});
