window.onload(
    displayVoDetail()
)


function displayVoDetail() {
    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    const no = localStorage.getItem("selectedTodoNo")
    const vo = voList[no];

    document.querySelector("#todoDetailNo").innerHTML = Number(no) + 1;
    document.querySelector("#todoDetailTitle").value = vo.title;
    document.querySelector("#todoDetailContent").value = vo.content ? vo.content : "";
    document.querySelector("#todoDetailDone").innerHTML =
        `<input type="checkbox" ${vo.done ? "checked" : ""} onchange="saveDone()">`;

    document.querySelector("#todoDetailCreatedAt").innerHTML = vo.created_at;
}

function saveDone() {
    const no = localStorage.getItem("selectedTodoNo");
    const done = document.querySelector("#todoDetailDone input").checked;

    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList[no].done = done;

    localStorage.setItem("todoVoList", JSON.stringify(voList));

    if (done) {
        alert("완료 상태로 변경 되었습니다.");
    } else {
        alert("미완료 상태로 변경 되었습니다.")
    }

    location.href = 'todolist.html';

}

function saveTodoList() {
    const no = localStorage.getItem("selectedTodoNo");
    const title = document.querySelector("#todoDetailTitle").value;
    const content = document.querySelector("#todoDetailContent").value;
    const voList = JSON.parse(localStorage.getItem("todoVoList"));

    if (voList[no].title !== title && voList[no].content == content) {
        editTodo();
        alert("제목이 수정되었습니다.");
    } else if (voList[no].title == title && voList[no].content !== content) {
        saveContent();
        alert("내용이 저장되었습니다.");
    } else {
        editTodo();
        saveContent();
        alert("제목 & 내용이 수정되었습니다.");
    }

}

function saveContent() {
    const no = localStorage.getItem("selectedTodoNo");
    const content = document.querySelector("#todoDetailContent").value;

    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList[no].content = content;

    localStorage.setItem("todoVoList", JSON.stringify(voList));

    location.href = 'todolist.html';
}

function editTodo() {
    const no = localStorage.getItem("selectedTodoNo");
    const title = document.querySelector("#todoDetailTitle").value;

    if (!title) {
        alert("제목을 입력해주세요.");
        return;
    }

    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList[no].title = title;

    localStorage.setItem("todoVoList", JSON.stringify(voList));
    location.href = 'todolist.html';
}

function delTodo() {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    const no = localStorage.getItem("selectedTodoNo");
    const voList = JSON.parse(localStorage.getItem("todoVoList"));

    voList.splice(no, 1);

    localStorage.setItem("todoVoList", JSON.stringify(voList));
    alert("삭제되었습니다.");

    location.href = "todoList.html";
}