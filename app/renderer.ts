
import { getDatabase } from './database';
import render from './view/App';
// import {is} from 'electron-util';
// import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
// import { createRxDatabase, addRxPlugin, RxDatabase } from "rxdb/plugins/core"
// addRxPlugin(PouchdbAdapterIdb);
const syncURL = 'http://localhost:10102/db/books';
       
// import * as is from 'tools/is';
import '../public/css/font.css'

(async function run() {

    const bookname = await ipcRenderer.on();

    const db = await getDatabase( bookname?bookname:'common' );

    const syncState = await db.books.sync({ 
        remote: syncURL,
        direction: {
            pull: true,
            push: true
        }
    });

    render()
})();
