"use strict"
const userName = document.getElementById("name");
const age = document.getElementById("age");
const btn = document.getElementById("btn")

let arr = [];
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj = {
        name:userName.value,
        age:age.value
    }
arr.push(obj)
arr.sort((a,b)=>{
    return a.age - b.age
})
console.log(arr);
})
