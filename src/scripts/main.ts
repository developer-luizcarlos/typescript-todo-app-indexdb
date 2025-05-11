"use strict";

import { displayCurrentDate } from "./handlers/displayCurrentDate.js";
import { startDatabase } from "./storage/database.js";

startDatabase();

window.addEventListener("load", () => {
  displayCurrentDate();
});
