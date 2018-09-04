// ++++++++++++++++++++++++++++++++++++++++++++
// 1. Смена фона body
// ++++++++++++++++++++++++++++++++++++++++++++

var body = document.getElementById("bg");

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function changeBg() {
  var numberOfBg = randNum(1, 5);
  body.style.cssText = `background: url(img/${numberOfBg}.jpg); transition: 1s;`;
}, randNum(5000, 10000));

// ++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++
// 2. Ввод высота, ширина и фигура. Отобразить на экране фигуру (треуг, ромб, трап)
// ++++++++++++++++++++++++++++++++++++++++++++

// function enterFigure() {
//   alert("Задание 2. Вывод фигуры");
//   do {
//     var width = +prompt("Введите ширину, не более 1000px");
//   } while (width > 1000 || width <= 0);
//   do {
//     var height = +prompt("Введите высоту, не более 1000px");
//   } while (height > 1000 || width <= 0);
//   var figure = prompt("Выберите фигуру: treug, romb, trap");

//   var div = document.createElement("div");
//   div.id = "figureWrapper";
//   document.body.appendChild(div);
//   div.innerHTML = `<img src="img/${figure}.png" style="width: ${width}px; height: ${height}px">`;
//   return div;
// }

// enterFigure();

// ++++++++++++++++++++++++++++++++++++++++++++
// 3. Генерация таблицы - рабочий
// ++++++++++++++++++++++++++++++++++++++++++++

// function createTable() {
//   var table = document.createElement("table");
//   table.id = "players-info";
//   table.innerHTML += "<thead> <th>Name</th> <th>Wins</th> <th>Looses</th> <th>WinRate</th> </thead>";
//   document.body.appendChild(table);
// }

// // createTable();

// function addPlayer() {
//   var newTr = document.createElement("tr");
//   newTr.innerHTML = "<tr><td>sasha</td><td>100</td><td>200</td><td>900</td></tr>";
//   var tablePlayersInfo = document.getElementById("players-info");
//   tablePlayersInfo.appendChild(newTr);
// }

// ++++++++++++++++++++++++++++++++++++++++++++
// 4. Вывод таблицы с игроками, количество побед и поражений, + винрейт
// ++++++++++++++++++++++++++++++++++++++++++++

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rand = randNum(1, 10);

var res = 0;

for (var i = 0; i < 3; i++) {
  alert("Задание 4. Угадай число");
  var n = +prompt(3 - i + " // ответ: " + rand);
  if (rand === n) {
    alert("win");
    res = 1;
    break;
  }
}

var name = prompt("Ваше имя");
var userSave = localStorage.getItem(name);

if (userSave) {
  try {
    userSave = JSON.parse(userSave);
    userSave.win += res;
    userSave.lose += res ? 0 : 1;
  } catch (e) {
    userSave = {
      win: res,
      lose: res ? 0 : 1
    };
  }
} else {
  userSave = {
    win: res,
    lose: res ? 0 : 1
  };
}

userSave = JSON.stringify(userSave);
localStorage.setItem(name, userSave);

var objUserSave = JSON.parse(localStorage.getItem(name));

function myfunc() {
  createTable();
  for (var i = 0, key, obj; i < localStorage.length; i++) {
    key = localStorage.key(i);
    obj = JSON.parse(localStorage.getItem(key));
    addPlayer(key, obj.win, obj.lose, 100);
  }
}

function createTable() {
  var table = document.createElement("table");
  table.id = "players-info";
  table.innerHTML += "<thead> <th>Name</th> <th>Wins</th> <th>Looses</th> <th>WinRate</th> </thead>";
  document.body.appendChild(table);
}

function addPlayer(name, win, lose, wr) {
  if (win == 0) {
    wr = 0;
  } else {
    wr = Math.floor((win / (win + lose)) * 100);
  }
  var newTr = document.createElement("tr");
  newTr.innerHTML = `<tr><td>${name}</td><td>${win}</td><td>${lose}</td><td>${wr}%</td></tr>`;
  var tablePlayersInfo = document.getElementById("players-info");
  tablePlayersInfo.appendChild(newTr);
}

myfunc();
