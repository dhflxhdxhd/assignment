const toDoInput = document.querySelector(".toDoInput");
const addBtn = document.querySelector(".addBtn");
const toDoList = document.querySelector(".toDoList");


function addList(toDo){
    const divTag = document.createElement("li");
    const pTag = document.createElement("p")
    const del = document.createElement("button");
    del.innerText = "삭제"
    del.addEventListener("dblclick",delList);

    pTag.innerText = toDo;

    divTag.appendChild(pTag);
    divTag.appendChild(del);
    toDoList.append(divTag);


}

addBtn.addEventListener("click",()=>{
    alert("추가합니다.")
    addList(toDoInput.value);
    toDoInput.value = "";
})

function delList(event){
    alert("삭제")
    let delTarget = event.target;
    delTarget.parentNode.remove();
}





