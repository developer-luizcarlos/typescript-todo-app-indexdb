const dbName = "DataBase";
const dbVersion = 1;

export const request = indexedDB.open(dbName, dbVersion);

export function startDatabase() {
  request.onupgradeneeded = (event: Event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    if (!db.objectStoreNames.contains("Todo")) {
      db.createObjectStore("Todo");
    }
  };

  request.onerror = (event: Event) => {
    console.error(event.type);
  };

  request.onsuccess = (event: Event) => {
    console.log(`Database was opened with success: ${event.type}`);
  };
}
