let mainInput = document.querySelector(".mainInput");
let addText = document.querySelector(".addText");
let form = document.querySelector(".form2");
let ul = document.querySelector(".ul");
if (localStorage.getItem("localArr") != null) {
  arr = JSON.parse(localStorage.getItem("localArr"));
} else {
  arr = [];
}
let obj = {};
addText.onclick = function () {
  if (mainInput.value != "") {
    obj = {
      valueX: mainInput.value,
      S: false,
    };
    arr.push(obj);
    console.log(arr);
    array = localStorage.setItem("localArr", JSON.stringify(arr));
    mainInput.value = "";
    show();
    Active()
  }
};
function show() {
  let X = "";
  for (let i = 0; i < arr.length; i++) {
    X += `
            <li id="li${i}">
                <p>${arr[i].valueX}</p>
                <div class="allBtn${i}">
                    <button class="editText" onclick="update(${i})"><i class="fa-solid fa-check fa-fw"></i></button>
                    <button class="deleteText" onclick="del(${i})"><i class="fa-solid fa-xmark fa-fw"></i></button>
                </div>
            </li>
            `;
    ul.innerHTML = X;
    localStorage.setItem("localArr", JSON.stringify(arr));
  }
}
show();
function update(i) {
  let li = document.querySelector(`#li${i}`);
  if (arr[i].S == false) {
    arr[i].S = true;
    li.classList.add("active");
    localStorage.setItem("localArr", JSON.stringify(arr));
  } else {
    arr[i].S = false;
    li.classList.remove("active");
    localStorage.setItem("localArr", JSON.stringify(arr));
  }
}
function del(i) {
  arr.splice(i, 1);
  localStorage.setItem("localArr", JSON.stringify(arr));
  show();
  Active()
  if(arr.length < 1){
    ul.innerHTML = ""
  }
}
function Active() {
  for (let i = 0; i < arr.length; i++) {
    let li = document.querySelector(`#li${i}`);
    if (arr[i].S == true) {
      li.classList.add("active");
    }
  }
}
window.onload = function() {
  Active()
};