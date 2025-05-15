"use strict";

import { CreateTask } from "./classes/tasks.js";
import { btnAddTask, inputAddTask } from "./domElements.js";
import { displayCurrentDate } from "./handlers/displayCurrentDate.handler.js";
import { request, startDatabase } from "./storage/database.storage.js";

startDatabase();

window.addEventListener("load", () => {
  displayCurrentDate();
});

if (btnAddTask && inputAddTask) {
  btnAddTask.addEventListener("click", () => {
    const taskTitle = inputAddTask.value;
    new CreateTask(request.result, taskTitle);
  });
}
