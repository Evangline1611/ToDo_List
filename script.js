const input=document.getElementById("input_box");
const list=document.getElementById("items");

function addTask(){
    if(input.value === ''){
        alert("Please Write Something and Then Press the Button!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveTask();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem("task",items.innerHTML);
}

function displayTask(){
    items.innerHTML=localStorage.getItem("task");
}

displayTask();