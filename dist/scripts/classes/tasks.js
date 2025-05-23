import { isEmptyEstring } from "../utils/isEmptyString.util.js";
export class CreateTask {
    db;
    isCompleted = false;
    title;
    constructor(db, title) {
        this.db = db;
        this.title = title;
        this.createTask();
    }
    createTask() {
        if (isEmptyEstring(this.title))
            return;
        const transaction = this.db.transaction("Todo", "readwrite");
        const store = transaction.objectStore("Todo");
        const request = store.add({
            title: this.title,
            isCompleted: this.isCompleted,
        });
        request.onsuccess = (event) => {
            console.log(`${this.title} added with success.`);
        };
        request.onerror = (event) => {
            console.log(event.type);
        };
    }
}
export class GetTasks {
    db;
    constructor(db) {
        this.db = db;
    }
    tasks() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction("Todo", "readonly");
            const store = transaction.objectStore("Todo");
            const request = store.getAll();
            request.onsuccess = () => {
                resolve(Array.from(request.result));
            };
            request.onerror = () => {
                reject(request.error);
            };
        });
    }
}
