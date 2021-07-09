import { createRxDatabase, addRxPlugin, RxDatabase } from "rxdb/plugins/core"

import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
addRxPlugin(PouchdbAdapterIdb);
import * as PouchdbAdapterHttp from 'pouchdb-adapter-http';
addRxPlugin(PouchdbAdapterHttp);
import { RxDBReplicationPlugin } from 'rxdb/plugins/replication';
addRxPlugin(RxDBReplicationPlugin);
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';
addRxPlugin(RxDBLeaderElectionPlugin);

import { RxDBNoValidatePlugin } from 'rxdb/plugins/no-validate';
import { RxDBEncryptionPlugin } from 'rxdb/plugins/encryption';
addRxPlugin(RxDBEncryptionPlugin);
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';
addRxPlugin(RxDBQueryBuilderPlugin);


import bookSchema from './books'


/**
 * Loads RxDB plugins
 */
async function loadRxDBPlugins(): Promise<void> {
    /**
     * to reduce the build-size,
     * we use some modules in dev-mode only
     */
    if (false) {
        await Promise.all([

            // add dev-mode plugin
            // which does many checks and add full error-messages
            import('rxdb/plugins/dev-mode').then(
                module => addRxPlugin(module)
            ),

            // we use the schema-validation only in dev-mode
            // this validates each document if it is matching the jsonschema
            import('rxdb/plugins/validate').then(
                module => addRxPlugin(module)
            )
        ]);
    } else {
        // in production we use the no-validate module instead of the schema-validation
        // to reduce the build-size
        addRxPlugin(RxDBNoValidatePlugin);
    }

}




async function createDatabase(name: string) {
    // then we also need the leader election

    const db = await createRxDatabase({
        name: 'data/calends_' + name,
        adapter: 'idb',
        password: 'myLongAndStupidPassword'
    });

    await db.addCollections({
        books: { schema: bookSchema }
    });
    return db;
}



let _getDatabase: Promise<RxDatabase>;
export function getDatabase(name?: string) {
    if (!_getDatabase) _getDatabase = createDatabase(name);
    return _getDatabase;
}