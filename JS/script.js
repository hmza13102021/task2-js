// Dark Mode
let toggleMode = document.querySelector('#toggleMode');

toggleMode.addEventListener('click', () => {
    let body = document.querySelector('body');
    body.classList.toggle('dark-mode');
});

// HTML
let inputTask = document.getElementById('inputTask');
let addButton = document.getElementById('AddButton');
let allTasks = document.getElementById('allTasks');
let noTasks = document.getElementById('noTasks');
let count = document.querySelector('h5 span'); 

function show() {
    // "No Tasks"
    if (allTasks.childElementCount > 0) {
        noTasks.style.display = 'none';
    } else {
        noTasks.style.display = 'block';
    }

    // count tasks
    count.innerText = allTasks.childElementCount;
}


let addNewTask = () => {
    let data = inputTask.value.trim(); // remove spaces

    // check inputs
    if (data.length === 0) {
        window.alert('Please Enter Your Task First!');
    } else if (data.length < 3) {
        window.alert('Task Should be greater than 3 characters');
    } else if (data.length > 50) {
        window.alert('Task Should be less than 50 characters');
    } else {
        // add task
        allTasks.innerHTML += `
            <div class="alert alert-info"> 
                ${data}
                <button class="btn btn-danger btn-sm float-end delete">Delete</button>
            </div>`;
        inputTask.value = ''; // delete value
        show(); 
    }
};

// add new task
addButton.addEventListener('click', addNewTask);

// delete task
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        show(); 
    }
});



