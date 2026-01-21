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