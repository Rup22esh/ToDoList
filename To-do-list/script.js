const inputBox = document.getElementById ("input");
const inputListContainer = document.getElementById ("list-container");





function addTask() {
    if (inputBox.value.trim() === '') {  // Check if the trimmed input is empty
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.addEventListener('click', function() {
            li.classList.toggle('checked');
        });
        inputListContainer.appendChild(li);

        let span = document.createElement("span");
       span.innerHTML = "\u00d7"; //insert delete tag 
       li.appendChild(span);
          
    }
    inputBox.value = '';// Clear the input box
    saveData();
}

inputListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.terget.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", inputListContainer.innerHTML);
}

function showTask(){
    inputListContainer.innerHTML = localStorage.getItem("data");
}
showTask();