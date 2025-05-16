import { listTasks } from "../domElements.js";
export function erasePreviousListItems() {
    const hasListChildren = listTasks.hasChildNodes();
    if (hasListChildren) {
        const listItems = listTasks.querySelectorAll(".list__item");
        listItems.forEach((listItem) => listTasks.removeChild(listItem));
    }
    else
        return;
}
