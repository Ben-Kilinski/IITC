const tasks_list = document.getElementById("tasks_list");
const input = document.getElementById("input");
const btn_sub = document.getElementById("btn_sub");

let count = 0;

btn_sub.addEventListener("click", add_to_tasks);

function add_to_tasks() {
    if (input.value.trim() === "") return; 

    count += 1;

    const li = document.createElement("li");
    li.id = `task${count}`;
    li.innerHTML = `👉task${count}: ${input.value}`;

    const toggle_btn = document.createElement("button");
    toggle_btn.classList.add(`toggle${count}`);
    toggle_btn.innerText = "• • •";
    toggle_btn.style.backgroundColor = "tomato";
    toggle_btn.style.border = "none";

    const btn_del = document.createElement("button");
    btn_del.id = `delete${count}`;
    btn_del.innerText = "delete";

    btn_del.addEventListener("click", () => {
        tasks_list.removeChild(li); 
    });

    toggle_btn.addEventListener("click", () => {
        if (toggle_btn.classList.contains("toggled")) {
            toggle_btn.classList.remove("toggled");
            toggle_btn.innerText = "• • •";
        } else {
            toggle_btn.classList.add("toggled");
            toggle_btn.innerText = "✔️";
        }
    });

    li.appendChild(toggle_btn);
    li.appendChild(btn_del);
    tasks_list.appendChild(li);

    input.value = "";
}
