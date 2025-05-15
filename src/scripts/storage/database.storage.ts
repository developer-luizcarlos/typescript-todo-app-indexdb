const dbName = "DataBase";

export const request = indexedDB.open(dbName);

export function startDatabase() {
  request.onupgradeneeded = (event: Event) => {
    const db = (event.target as IDBOpenDBRequest).result;

    if (!db.objectStoreNames.contains("Todo")) {
      db.createObjectStore("Todo", { keyPath: "id", autoIncrement: true });
      console.log("Object store has been created.");
    } else {
      console.log(db.objectStoreNames.length);
    }
  };

  request.onerror = (event: Event) => {
    console.error(event.type);
  };

  request.onsuccess = (event: Event) => {
    console.log(`Database was opened with success.`);
  };
}
