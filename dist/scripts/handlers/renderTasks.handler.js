import { GetTasks } from "../classes/tasks.js";
import { createTaskElement } from "../helpers/index.js";
import { request } from "../storage/database.storage.js";
export async function renderTasks() {
    const taskList = await new GetTasks(request.result).tasks();
    const formattedList = taskList.map((task) => ({ isCompleted: task.isCompleted, title: task.title }));
    formattedList.forEach((task) => {
        createTaskElement(task);
    });
}
