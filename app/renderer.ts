
import database from './database';
import render from './view/App';
const syncURL = 'http://localhost:10102/db/heroes';

import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
import {
    createRxDatabase,
    addRxPlugin
} from 'rxdb/plugins/core';

addRxPlugin(PouchdbAdapterIdb);


async function run() {
//     const db = await database.getDatabase(
//         'heroesdb' + currentWindow.custom.dbSuffix, 
//         'idb',
//         'renderer'
//     );
// console.log('starting sync with ' + syncURL);
// const syncState = await db.heroes.sync({ 
//     remote: syncURL,
//     direction: {
//         pull: true,
//         push: true
//     }
// });

    render()
// import App from "./view/App";
// ReactDOM.render(<App />, document.getElementById("root"));
}
run();
