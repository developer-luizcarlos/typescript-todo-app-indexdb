"use strict";

import { CreateTask } from "./classes/tasks.js";
import { btnAddTask, inputAddTask } from "./domElements.js";
import { displayCurrentDate, renderTasks } from "./handlers/index.js";
import { request, startDatabase } from "./storage/database.storage.js";

startDatabase();

window.addEventListener("load", () => {
  displayCurrentDate();
  renderTasks();
});

if (btnAddTask && inputAddTask) {
  btnAddTask.addEventListener("click", () => {
    const taskTitle = inputAddTask.value;
    new CreateTask(request.result, taskTitle);
  });
}
