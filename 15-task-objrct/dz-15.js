class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // Метод для добавления задачи
    addTask(title, priority) {
        const id = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        this.tasks.push({ id, title, priority });
    }

    // Метод для удаления задачи по id
    removeTaskById(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    // Метод для обновления задачи по id
    updateTaskById(id, updatedTitle, updatedPriority) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    title: updatedTitle !== undefined ? updatedTitle : task.title,
                    priority: updatedPriority !== undefined ? updatedPriority : task.priority
                };
            }
            return task;
        });
    }

    // Метод для сортировки задач по id или приоритету
    sortTasks(by = 'id', order = 'asc') {
        if (by === 'id' || by === 'priority') {
            this.tasks.sort((a, b) => {
                if (order === 'asc') {
                    return a[by] - b[by];
                } else {
                    return b[by] - a[by];
                }
            });
        } else {
            console.log('Invalid sorting parameter. Sorting by id instead.');
            this.sortTasks('id', order);
        }
    }

    // Метод для вывода всех задач
    displayTasks() {
        console.log('Tasks:');
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}, Priority: ${task.priority}`);
        });
    }
}

// Пример использования:

const taskManager = new TaskManager();

taskManager.addTask('Do homework', 2);
taskManager.addTask('Call mom', 1);
taskManager.addTask('Buy groceries', 3);

taskManager.displayTasks();

taskManager.removeTaskById(2);

taskManager.updateTaskById(1, 'Do homework (updated)', 4);

taskManager.sortTasks('priority', 'desc');

taskManager.displayTasks();
