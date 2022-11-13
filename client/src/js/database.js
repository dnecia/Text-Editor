import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to the database');

  // create connection the databse and version
  const jateDb = await openDB('jate', 1);

  //new transaction and specify the database and privilage of data
  const store = tx.objectStore('jate');

  const request = store.put({ id: 1, value: content });

  //confirmation 
  const result = await request;
  console.log(' data has been saved to the databse', result);


};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log(' get from the database');

  //create connection the databse and version
  const jateDb = await openDB('jate', 1);

  //create new transaction and pinpoint the databse and privilages
  const tx = jateDb.transaction('jate', 'readonly');

  //Open specific object store
  const store = tx.objectStore('jate');

  const request = store.getAll();

  //confirmation req
  const result = await request;
  console.log('result.value', result);
  return result;

};


initdb();
