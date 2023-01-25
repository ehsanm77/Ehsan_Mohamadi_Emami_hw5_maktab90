const topp = document.getElementById("top");
const left = document.getElementById("left");
const btn = document.getElementById("btn");

function ehsan(e){
    e.preventDefault();
    let div = document.createElement("div");
    let p = document.createElement("p");
    let pText = p.innerHTML = "Notification";
    p.append(pText);
    div.append(p);
    div.className = "msg-notification";
    div.setAttribute("style", `top:${topp.value}px;
    left:${left.value}px;
    width:200px;
    height: 50px;
    background-color:rgb(54, 178, 255);
    display: flex;
    justify-content: center;
    border-radius: 10px;
    color: white;`);
    body.append(div)
}
btn.addEventListener("click" , ehsan)
