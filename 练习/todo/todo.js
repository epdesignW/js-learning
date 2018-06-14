//存数据到localstrorage里
function saveData(data) {
  localStorage.setItem("todo", JSON.stringify(data));
  // console.log(localStorage.getItem("todo"));
}

//从localstrorage里获取存储的数据
function loadData() {
  var collection = localStorage.getItem("todo");
  if (collection != null) {
    // console.log(JSON.parse(collection));
    return JSON.parse(collection);
  } else {
    return [];
  }
}

//页面初始化，加载todo列表
function load() {
  var todolist = document.getElementById("todolist");
  var donelist = document.getElementById("donelist");
  var todocountS = document.getElementById("todocount");
  var donecountS = document.getElementById("donecount");
  var collection = localStorage.getItem("todo");
  //console.log(collection);
  if (collection !== null) {
    var data = JSON.parse(collection);
    var todoString = "";
    var doneString = "";
    var todocount = 0;
    var donecount = 0;
    for (var i = data.length - 1; i >= 0; i--) {
      //判断条件
      if (data[i].done) {
        //已完成的事
        doneString += `<li><input type="checkbox" onchange="update(${i},\'done\',false)" checked /><p id="p-${i}" onclick="edit(${i})">${
          data[i].title
        }</p><a href="javascript:remove(${i})">-</a></li>`;
        donecount++;
      } else {
        todoString += `<li><input type="checkbox" onchange="update(${i},\'done\',true)" /><p id="p-${i}" onclick="edit(${i})">${
          data[i].title
        }</p><a href="javascript:remove(${i})">-</a></li>`;
        todocount++;
      }
    }
    todolist.innerHTML = todoString;
    donelist.innerHTML = doneString;
    todocountS.innerHTML = todocount;
    donecountS.innerHTML = donecount;
  } else {
    todolist.innerHTML = "";
    donelist.innerHTML = "";
    todocountS.innerHTML = 0;
    donecountS.innerHTML = 0;
  }
}
window.onload = load();

function postaction() {
  //添加
  var title = document.getElementById("title");
  if (title.value) {
    var data = loadData();
    var todo = { title: title.value, done: false };
    data.push(todo);
    saveData(data);
    var form = document.getElementById("form");
    form.reset();
    load();
  } else {
    alert("不能为空");
  }
}

function update(i, field, value) {
  //修改完成状态
  var data = loadData();
  var todo = data.splice(i, 1)[0]; //返回删除的那个
  todo[field] = value;
  data.splice(i, 0, todo); //在原来位置添加
  saveData(data);
  load();
}
function remove(i) {
  var data = loadData();
  data.splice(i, 1);
  saveData(data);
  load();
}

//清空数据
function clear() {
  localStorage.clear();
  load();
}

//编辑待办事项
function edit(i) {
  load();
  var p = document.getElementById("p-" + i);
  var title = p.innerHTML;
  p.innerHTML = `<input id="input${i}" type="text" value="${title}" />`;
  var input = document.getElementById("input" + i);
  input.setSelectionRange(0, input.value.length);
  input.focus();
  input.onblur = function() {
    if (input.value) {
      //p.innerHTML = input.value; //是改不了的,实际更改要存放到localstarage里
      update(i,"title",input.value);
    } else {
      alert("输入不能为空");
      p.innerHTML = title;
    }
  };
}
