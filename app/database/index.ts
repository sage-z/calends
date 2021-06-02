import { createRxDatabase, addRxPlugin, RxDatabase } from "rxdb/plugins/core"
import bookSchema from './books'
addRxPlugin(require('pouchdb-adapter-http'));

let _getDatabase: Promise<RxDatabase>; // cached
function getDatabase(name:string, adapter:string, type:string) {
    if (!_getDatabase) _getDatabase = createDatabase(name, adapter, type);
    return _getDatabase;
}

async function createDatabase(name:string, adapter:string, type:string) {
    
    const db = await createRxDatabase({
        name:'calends_'+name,
        adapter,
        password: 'myLongAndStupidPassword'
    });

    if(type==='main'){

    await db.addCollections({
        books : {schema: bookSchema}
    });
    } else {

    }

    return db;
}

export default {
    getDatabase
};