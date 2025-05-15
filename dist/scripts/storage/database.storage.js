const dbName = "DataBase";
export const request = indexedDB.open(dbName);
export function startDatabase() {
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("Todo")) {
            db.createObjectStore("Todo", { keyPath: "id", autoIncrement: true });
            console.log("Object store has been created.");
        }
        else {
            console.log(db.objectStoreNames.length);
        }
    };
    request.onerror = (event) => {
        console.error(event.type);
    };
    request.onsuccess = (event) => {
        console.log(`Database was opened with success.`);
    };
}
