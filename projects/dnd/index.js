/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

homeworkContainer.style.height = '100vh';

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

let currentDrag;
let startY = 0;
let startX = 0;

document.addEventListener('mousemove', (event) => {
  if (currentDrag) {
    currentDrag.style.top = event.clientY - startY + 'px';
    currentDrag.style.left = event.clientX - startX + 'px';
  }
});

export function createDiv() {
  const newElement = document.createElement('div');
  const posx = (Math.random() * document.body.offsetWidth).toFixed();
  const posy = (Math.random() * document.body.offsetHeight).toFixed();

  newElement.classList.add('draggable-div');
  newElement.style.position = 'absolute';
  newElement.style.left = `${posx}px`;
  newElement.style.top = `${posy}px`;
  newElement.style.width = `${getRandom(70, 150)}px`;
  newElement.style.height = newElement.style.width;
  newElement.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )}, ${getRandom(0, 255)})`;

  newElement.addEventListener('mousedown', (event) => {
    currentDrag = newElement;
    startX = event.offsetX;
    startY = event.offsetY;
  });

  newElement.addEventListener('mouseup', () => (currentDrag = false));

  return newElement;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
