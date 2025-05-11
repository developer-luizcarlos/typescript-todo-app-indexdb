import { timeCurrentDate } from "../domElements.js";
import { getCurrentDate } from "../helpers/getDate.js";

export function displayCurrentDate() {
  if (timeCurrentDate) {
    const currentDate = getCurrentDate();
    const day = currentDate.day;
    const dayOfTheWeek = currentDate.dayOfTheWeek;
    const month = currentDate.month;
    const year = currentDate.year;

    timeCurrentDate.textContent = `${dayOfTheWeek}, ${day} ${month} ${year}`;
  }
}
