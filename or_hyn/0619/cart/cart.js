const addBtns = document.querySelectorAll(".addBtn");
const cartList = document.querySelector(".cartList");

function addCart(name,price){
    let pTag = document.createElement("p");
    pTag.innerText = `${name} - ${price}`
    cartList.appendChild(pTag);

}


addBtns.forEach((addBtn) => {
    addBtn.addEventListener("click", (event) => {
        let targetGoods = event.target.parentNode;
        let name = targetGoods.children[0].innerText;
        let price = targetGoods.children[1].innerText;
    
        addCart(name,price);
        alert("장바구니에 추가하였습니다.");
    })
    
})





