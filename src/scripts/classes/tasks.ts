import { type Task } from "../types/task.types.js";
import { isEmptyEstring } from "../utils/isEmptyString.util.js";

export class CreateTask implements Task {
  db: IDBDatabase;
  isCompleted = false;
  title: string;

  constructor(db: IDBDatabase, title: string) {
    this.db = db;
    this.title = title;

    this.createTask();
  }

  private createTask() {
    if (isEmptyEstring(this.title)) return;

    const transaction = this.db.transaction("Todo", "readwrite");
    const store = transaction.objectStore("Todo");

    const request = store.add({
      title: this.title,
      isCompleted: this.isCompleted,
    });
    request.onsuccess = (event: Event) => {
      console.log(`${this.title} added with success.`);
    };
    request.onerror = (event: Event) => {
      console.log(event.type);
    };
  }
}

export class GetTasks {
  private db: IDBDatabase;

  constructor(db: IDBDatabase) {
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
