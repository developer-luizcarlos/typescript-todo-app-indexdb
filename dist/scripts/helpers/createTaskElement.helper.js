export function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.classList.add("list__item");
    const listText = document.createElement("span");
    listText.classList.add("list__text");
    listText.textContent = task.title;
    listItem.appendChild(listText);
    const listCheckbox = document.createElement("span");
    listCheckbox.classList.add(task.isCompleted ? "list__checkbox--checked" : "list__checkbox");
    listItem.appendChild(listCheckbox);
    return listItem;
}
