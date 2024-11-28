const task = document.getElementById("task");
const button = document.getElementById("button");
const addTask = document.getElementById("addTask");

// button.onclick = function(){
//     task.value
// }

function getValue(){
    const taskValue = task.value;
    // alert(taskValue);
    if(taskValue.trim() !== " "){
        const newpara = document.createElement("p");
        newpara.innerHTML = task.value;
        //  or
        // newpara.textContent = taskValue; 
        addTask.appendChild(newpara);
        task.value = "  ";
      }
      else{
        alert("please enter the task");
      }
    
};

// button.onclick = getValue