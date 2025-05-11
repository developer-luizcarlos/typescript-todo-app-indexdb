"use strict";

import { displayCurrentDate } from "./handlers/displayCurrentDate.handler.js";
import { startDatabase } from "./storage/database.storage.js";

startDatabase();

window.addEventListener("load", () => {
  displayCurrentDate();
});
