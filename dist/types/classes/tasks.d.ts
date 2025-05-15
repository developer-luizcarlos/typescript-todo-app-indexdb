import { type Task } from "../types/task.types.js";
export declare class CreateTask implements Task {
    db: IDBDatabase;
    isCompleted: boolean;
    title: string;
    constructor(db: IDBDatabase, title: string);
    private createTask;
}
export declare class GetTasks {
    private db;
    constructor(db: IDBDatabase);
    tasks(): Promise<unknown>;
}
