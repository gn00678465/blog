// 設定變數
const list = document.querySelector('.list');
const send = document.querySelector('.send');
let data = JSON.parse(sessionStorage.getItem('toDoList')) || [];

// 新增資料
function addDate(e) {
  let toDoItem = document.querySelector('.text').value;
  if ( toDoItem === '' ) {return};
  document.querySelector('.text').value = '';
  let toDo = { content: toDoItem };
  data.push(toDo);
  sessionStorage.setItem('toDoList', JSON.stringify(data));
  updateList(data);
}

// 更新資料
function updateList(item) {
  let str = '';
  for (let i = 0; i < item.length; i++) {
    str += `<li><a href="#" data-index="${i}">刪除</a> <span>${data[i].content}</span></li>`;
  }
  list.innerHTML = str;
}

// 移除資料
function delToDoItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {return};
  let num = e.target.dataset.index;
  data.splice(num, 1);
  console.log(data);
  sessionStorage.setItem('toDoList', JSON.stringify(data));
  updateList(data);
}

//監聽 & 更新資料
updateList(data);
send.addEventListener('click', addDate);
list.addEventListener('click', delToDoItem)
