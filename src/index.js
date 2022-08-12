import '../styles/style.css';

const todos = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 0,
  },

  {
    description: 'Complete To Do list project',
    completed: true,
    index: 1,
  },

];

const todoDisplay = document.querySelector('.todos-display');
const showtodo = () => {
  let li = '';

  todos.forEach((todo, index) => {
    li += `
            <label for="checkbox">
            <input type="checkbox" ${index}>
            <p class="my-todo" contenteditable="true">${todo.description}</p>
            <div class="show-options">
            <i class="fa-solid fa-ellipsis-vertical"></i>
              <div class='show'>
                <i class="fa-solid fa-trash-can"" ></i>
              </div>
            </div>
        </label>
            `;
  });
  todoDisplay.innerHTML = li;
};

showtodo();

todos.sort((a, b) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
});