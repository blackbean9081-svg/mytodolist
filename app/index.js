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

    title.value = "";
    location.href = 'todoList.html'

}

function selectList() {
    location.href = 'todoList.html'
}