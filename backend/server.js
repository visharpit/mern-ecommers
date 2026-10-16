const readline = require('readline');
const fs = require('fs');

const FILE = 'task.json';

if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const loadTask = () => {
    try {
        const data = fs.readFileSync(FILE, 'utf-8');
        // If file is empty, return an empty array
        if (!data.trim()) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        // Fallback in case of corrupted JSON
        return [];
    }
}

const saveTask = (task) => {
    fs.writeFileSync(FILE, JSON.stringify(task, null, 2))
}


const showManu = () => {
    console.log("TODO APP");
    console.log("1. Add Task");
    console.log("2. View Task");
    console.log("3. Delete Task");
    console.log("4. Exit");
    rl.question('Choose an option: ', handleManu)
}


function handleManu(option) {
    switch (option) {
        case '1':
            rl.question('Enter Task: ', (t) => {
                const task = loadTask();
                task.push({t, completed: false });
                saveTask(task);
                console.log("Task added successfully");
                showManu();
            })
            break;

        case '2':
            const existTask = loadTask();
            if (existTask.length == 0) {
                console.log('No task found');
            } else {
                existTask.forEach((t, i) => {
                    console.log(`${i + 1} ${t.t}`);
                })
            }
            showManu();
            break;

        case '3':
            const allTask = loadTask();
            if (allTask.length == 0) {
                console.log('No task to delete');
                showManu();
                return;
            }
            console.log("Task: ");
            allTask.forEach((t, i) => {
                console.log(`${i + 1} ${t.t}`);
            });

            rl.question("Enter the task you want to delete: ", (num) => {
                const index = parseInt(num)-1 ;
                if (index >= 0 && index < allTask.length) {
                    allTask.splice(index, 1);
                    saveTask(allTask);
                    console.log("Task deleted successgully")
                }
                else {
                    console.log("Invalid task number");
                }
                showManu();
            })
            break;

        case '4':
            console.log("Exit");
            rl.close();
            break;
        default:
            console.log("Invalid Number");
            showManu();
            break;

    }
}
showManu();