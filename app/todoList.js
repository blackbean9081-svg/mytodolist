function addTodo() {
    const title = document.querySelector("input[name=title]").value;
    const vo = {
        "title": title,
        "done": false,
        "created_at": new Date(),
    };

    let arr = JSON.parse(localStorage.getItem("todoVoList"));
    if (!arr) { arr = []; }
    arr.push(vo);

    localStorage.setItem("todoVoList", JSON.stringify(arr));

    if (title === "") return;

    alert("할 일 등록 완료 ! ")
    location.href = 'todoList.html'

}

function displayVoList() {
    const listArea = document.querySelector("#listArea");
    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    let str = "";

    for (let i = 0; i < voList.length; ++i) {
        let finished = "";
        if (voList[i].done) {
            finished = "finish"
        }

        str +=
            `<div class="todoItem">                                
                <span class="todoText ${finished}" onclick="setSelectedTodoNo(${i})">
                    <a href='todoDetail.html'>
                    ${i + 1} : ${voList[i].title}
                    </a>
                </span>
            </div>`;
    }

    listArea.innerHTML = str;

}

window.onload = function () {
    displayVoList();
}


function f01(evt) {
    evt.stopPropagation();
}

function clearAll() {
    listArea = document.querySelector("#listArea");
    listArea.innerHTML = "";
    localStorage.clear();
    location.href = `index.html`;

}

function setSelectedTodoNo(no) {
    localStorage.setItem("selectedTodoNo", no);
}