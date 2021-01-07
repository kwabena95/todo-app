// grab UI elements
const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit-btn');
const ul = document.querySelector('.task-list');
const container = document.querySelector('.main-content');

// event listeners
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createTasks();
});
document.addEventListener('DOMContentLoaded', getTask);


// create li element
function createTasks() {
    if (input.value) {
        const chkBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const taskItem = document.createElement('li');
        // add class to task items
        taskItem.classList.add('task-item');
        taskItem.innerHTML = input.value;
        // create div
        const divBtn = document.createElement('div');
        // add class to btns
        chkBtn.classList.add('chk-btn');
        delBtn.classList.add('del-btn');
        // add text to btns
        chkBtn.innerHTML = 'check';
        delBtn.innerHTML = 'delete';
        // append btns to div
        divBtn.appendChild(delBtn);
        divBtn.appendChild(chkBtn);
        // append  div to li
        taskItem.appendChild(divBtn);
        // append li to ul
        ul.appendChild(taskItem);
        // add task to localStorage
        saveTask(input.value);
        // delete
        delTask();
        // check off
        chkTask();
        // clear input
        clearInput();

        // delete
        function delTask() {
            // add event listener
            delBtn.addEventListener('click', () => {
                // remove task
                taskItem.remove();
                console.log('test');
            });
        }

        // check list
        function chkTask() {
            // add event listener
            chkBtn.addEventListener('click', () => {
                // when clicked, cross out task
                taskItem.style.textDecoration = 'line-through';
            });
        }

        // clear input
        function clearInput() {
            input.value = '';
        }

    } else {
        const warning = document.createElement('p');
        warning.classList.add('warning');
        warning.innerHTML = 'Please add a task';
        // insert warning before input
        container.insertBefore(warning, input);
        setTimeout(() => {
            // remove warning after 2 seconds
            warning.remove();
        }, 2000);


    }

    // local storage
    function saveTask(task) {
        // check local storage for task
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        // push back to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

}
// get task
function getTask() {
    // check local storage for task
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task) => {
        const chkBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        const taskItem = document.createElement('li');
        // add class to task items
        taskItem.classList.add('task-item');
        taskItem.innerHTML = task;
        // create div
        const divBtn = document.createElement('div');
        // add class to btns
        chkBtn.classList.add('chk-btn');
        delBtn.classList.add('del-btn');
        // add text to btns
        chkBtn.innerHTML = 'check';
        delBtn.innerHTML = 'delete';
        // append btns to div
        divBtn.appendChild(delBtn);
        divBtn.appendChild(chkBtn);
        // append  div to li
        taskItem.appendChild(divBtn);
        // append li to ul
        ul.appendChild(taskItem);
        // delete
        delTask();
        // check off
        chkTask();
        // clear input
        clearInput();

        // delete
        function delTask() {
            // add event listener
            delBtn.addEventListener('click', () => {
                // remove task
                taskItem.remove();
                removeLocalTask();
            });
        }

        // check list
        function chkTask() {
            // add event listener
            chkBtn.addEventListener('click', () => {
                // when clicked, cross out task
                taskItem.style.textDecoration = 'line-through';
            });
        }

        // clear input
        function clearInput() {
            input.value = '';
        }

    });

}

// remove local tasks
function removeLocalTask() {
    // check local storage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // get index of task
    tasks.forEach((task) => {
        localStorage.removeItem(task);
    })


}


