const tasks_list = document.getElementById("tasks_list");
const input = document.getElementById("input");
const btn_sub = document.getElementById("btn");
const btn_del = document.getElementById(`delete${count}`);

btn_sub.addEventListener("click", add_to_tasks);

let count = 0;
function add_to_tasks() {
    count += 1;
    tasks_list.innerHTML +=
        `
            <li id="task${count}">
            👉task${count}: ${input.value}
            <button id="delete${count}">delete</button>
            </li>
        `;
    input.value = "";
}

