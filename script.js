function reset() {
    document.getElementById("inpNewTask").value = "";
  }
  function add() {
    document.querySelector("#ulTasks").innerHTML += `
    <div class="list-group-item">
            ${document.querySelector("#inpNewTask").value}   
    </div>
  `;
  
    var current_tasks = document.querySelectorAll(".list-group-item");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        console.log(this.classList);
        this.classList.toggle("done");
      };
    }
    document.getElementById("inpNewTask").value = "";
  }
  
  function clean() {
    let current_tasks = document.querySelectorAll(".done");
    current_tasks.forEach((task) => {
      task.remove();
    });
  }