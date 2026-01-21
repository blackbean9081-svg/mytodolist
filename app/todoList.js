function addTodo() {
    const title = document.querySelector("input[name=title]").value;
    const vo = {
        "title": title,
        "done": true,
        "created_at": new Date(),
    };

    let arr = JSON.parse(localStorage.getItem("todoVoList"));
    if (!arr) { arr = []; }
    arr.push(vo);

    localStorage.setItem("todoVoList", JSON.stringify(arr));

    if (title === "") return;

    alert("할 일 등록 완료 ! ")

    title.value = "";
    location.href = 'todoList.html'

}

function displayVoList() {
    const listArea = document.querySelector("#listArea");
    const voList = JSON.parse(localStorage.getItem("todoVoList"));

    let str = "";
    for (let i = 0; i < voList.length; ++i) {
        str +=
            `<div class="todo-item">
                <input type="checkbox">
                
                <span class="todo-text" onclick="displayVoDetail(${i})">
                    ${i + 1} : ${voList[i].title}
                </span>


            </div>`;
    }

    listArea.innerHTML = str;

}

window.onload = function () {
    displayVoList();
}


function displayVoDetail(no) {
    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    const vo = voList[no];

    document.querySelector("#todoDetailNo").innerHTML = no;
    document.querySelector("#todoDetailTitle").innerHTML = vo.title;
    document.querySelector("#todoDetailContent").value = vo.content ? vo.content : "";
    document.querySelector("#todoDetailDone").innerHTML =
        `<input type="checkbox" ${vo.done ? "" : "checked"} onchange="saveDone()">`;

    document.querySelector("#todoDetailCreatedAt").innerHTML = vo.created_at;

    document.querySelector("#modal").classList.add("active");
}

function saveDone() {

    const no = document.querySelector("#todoDetailNo").innerHTML;
    const done = document.querySelector("#todoDetailDone").children[0].checked;

    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList[no].done = done;

    localStorage.setItem("todoVoList", JSON.stringify(voList));
}

function saveContent() {

    const no = document.querySelector("#todoDetailNo").innerHTML;
    const content = document.querySelector("#todoDetailContent").value;

    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList[no].content = content;

    localStorage.setItem("todoVoList", JSON.stringify(voList));
}

function closeModal() {
    document.querySelector("#modal").classList.remove("active");
}

function f01(evt) {
    evt.stopPropagation();
}

function clearAll() {
    listArea = document.querySelector("#listArea");
    listArea.innerHTML = "";
    localStorage.clear();
}

//삭제 기능 재 구현

//수정 기능 재구현


