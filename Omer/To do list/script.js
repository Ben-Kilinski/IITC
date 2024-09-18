const tasks_list = document.getElementById("tasks_list");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", add_to_tasks);

let count = 0;
function add_to_tasks(){
    count += 1;
    tasks_list.innerHTML += `
        <li id="task${count}">👉task${count}: ${input.value}</li>`;
    return count;
    input.value= "";
}
