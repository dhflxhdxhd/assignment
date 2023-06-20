const userName = document.querySelector(".name");
const userMsg = document.querySelector(".msg");
const submitBtn = document.querySelector(".submitBtn");
const msgList = document.querySelector(".msgList");


function sendMsg(user,comments){
    let pTag = document.createElement("p")
    pTag.innerText = `${user}: ${comments}`

    msgList.appendChild(pTag);
}


submitBtn.addEventListener("click", ()=>{
    let user = userName.value;
    let comments = userMsg.value;
    // alert("전송")

    if (user && comments){
        sendMsg(user,comments);
    } else {
        alert("메세지를 입력하세요")
    }

})
