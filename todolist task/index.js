const form = document.getElementById('input-form');
const tasksSection = document.getElementById('list-container');

let allTasks = []

const deleteTodo = (index) => {
    allTasks.splice(index, 1);
    generateTodo(allTasks)
}
const generateTodo = (todos) => {
    tasksSection.innerHTML = ""
    todos.forEach((task, index) => {
        tasksSection.innerHTML += `
        <div>
        <h5>${task}</h5>
            <div>
                <button id="edit-btn" onclick=editTodo(${index}) >Edit</button>
                <button id="dlt-btn" onclick=deleteTodo(${index}) >Delete</button>
            </div>
        </div>
        `
    })
}


const addTodo = (task) => {
    if (!task) {
        alert("Required Fields are missing !");
        return
    }
    allTasks.push(task);
}


const editTodo = (index) => {
    const updatedVal = prompt("Enter updated value:- ", allTasks[index]);
    allTasks[index] = updatedVal;
    generateTodo(allTasks)

}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    addTodo(task)
    generateTodo(allTasks)
    form.reset();
})