import { type Task } from "../types/task.types.js";
export declare class CreateTask implements Task {
    db: IDBDatabase;
    isCompleted: boolean;
    title: string;
    constructor(db: IDBDatabase, title: string);
    private createTask;
}
