let mainInput = document.querySelector('.mainInput');
let addText = document.querySelector('.addText');
let form = document.querySelector('.form2');
let ul = document.querySelector('.ul');
let arr = [];
addText.onclick = function (){
    if (mainInput.value != "") {
            arr.push(mainInput.value);
            console.log(arr);
            mainInput.value = ""
            show();
    }
}
function show(){
    let X = ""
    for(let i = 0; i < arr.length; i++) {
        X +=  `
            <li id="li${i}">
                <p>${arr[i]}</p>
                <div class="allBtn${i}">
                    <button class="editText" onclick="update(${i})"><i class="fa-solid fa-check fa-fw"></i></button>
                    <button class="deleteText" onclick="del(${i})"><i class="fa-solid fa-xmark fa-fw"></i></button>
                </div>
            </li>
            `
            ul.innerHTML = X;
    }
}
function update(i){
    let li = document.querySelector(`#li${i}`)
    if(li.classList.contains('active')){
        li.classList.remove('active')
    }else{
        li.classList.add('active')
    }
}
function del(i) {
    arr.splice(i,1)
    show()
}