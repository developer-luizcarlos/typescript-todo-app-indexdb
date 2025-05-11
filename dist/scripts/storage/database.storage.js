const dbName = "DataBase";
const dbVersion = 1;
export const request = indexedDB.open(dbName, dbVersion);
export function startDatabase() {
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("Todo")) {
            db.createObjectStore("Todo");
        }
    };
    request.onerror = (event) => {
        console.error(event.type);
    };
    request.onsuccess = (event) => {
        console.log(`Database was opened with success: ${event.type}`);
    };
}
