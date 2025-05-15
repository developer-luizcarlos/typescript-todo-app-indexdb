import { timeCurrentDate } from "../domElements.js";
import { getCurrentDate } from "../helpers/index.js";
export function displayCurrentDate() {
    if (timeCurrentDate) {
        const currentDate = getCurrentDate();
        const day = currentDate.day < 10 ? `0${currentDate.day}` : `${currentDate.day}`;
        const dayOfTheWeek = currentDate.dayOfTheWeek;
        const month = currentDate.month;
        const year = currentDate.year;
        timeCurrentDate.dateTime = `${year}-${month}-${day}`;
        timeCurrentDate.textContent = `${dayOfTheWeek}, ${day} ${month} ${year}`;
    }
}
