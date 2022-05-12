import './src/style.css';

const listBlock = document.querySelector('.list-block');
const task = [
  {
    description: 'Wake up on-time',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean the room',
    completed: false,
    index: 2,
  },
  {
    description: 'Feed the pigeons',
    completed: false,
    index: 3,
  },
];

const listContainer = [];
const template = [];
for (let i = 0; i < task.length; i += 1) {
  listContainer[i] = document.createElement('div');
  listContainer[i].className = 'list-item';
  template[i] = `
    <span class="task-item"><input type="checkbox" class="task-check" id="task-check" name="task-check"><label for="task-check">${task[i].description}</label></span>
    <a href="#" class="task-option"><i class="fa fa-ellipsis-v"></i></a>
  `;

  listContainer[i].innerHTML = template[i];
  listBlock.appendChild(div[i]);
}
