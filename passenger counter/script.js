let countel=document.getElementById("count-el")
let listTasks = document.getElementById('list');
let entries=document.getElementById("entries-el");
let savebtn=document.getElementById("save-el");
let count=0

function increament(){
    
    count+=1
    countel.textContent=count

    if(count==0)
    savebtn.disabled = true;
    else
    savebtn.disabled = false;

}
function decreament(){
    
    

    if(count==0)
    return ;

    count-=1
    countel.textContent=count

    if(count==0)
    savebtn.disabled = true;
    else
    savebtn.disabled = false;
}


let tasks = []

function saveTaskList() {

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function retrieveList() {

    if(count==0)
    savebtn.disabled = true;
    
  let retrievedTasks = localStorage.getItem("tasks");
  if (retrievedTasks) {
    tasks = JSON.parse(retrievedTasks);
  }
}

function clearTaskList() {
  tasks = [];
  renderTaskList();
  saveTaskList();
}

function renderTaskList() {
  
    if(count==0)
    savebtn.disabled = true;

  listTasks.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li');
    li.innerText = tasks[i];
    listTasks.appendChild(li);
  }
}

function addTask() {

  let task = count;
  count=0;
  if(tasks.length>9)
  tasks.shift();

  tasks.push(task);
  renderTaskList();
  saveTaskList();
}

function save() {

  countel.textContent=0;
  addTask();
}


retrieveList();
renderTaskList();