import { GetTasks } from "../classes/tasks.js";
import { listTasks } from "../domElements.js";
import { createTaskElement } from "../helpers/index.js";
import { request } from "../storage/database.storage.js";
import { Task } from "../types/task.types.js";

export async function renderTasks() {
  try {
    const taskList = await new GetTasks(request.result).tasks();
    const formattedList = (taskList as Array<Task>).map(
      (task): Task => ({ isCompleted: task.isCompleted, title: task.title })
    );

    formattedList.forEach((task) => {
      const li = createTaskElement(task);
      listTasks.appendChild(li);
    });
  } catch (error) {
    const confirmToReloadPage = confirm(
      "An error happen. Please, reload the page"
    );
    if (confirmToReloadPage) window.location.reload();
  }
}
