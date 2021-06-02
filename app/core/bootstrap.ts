import database from '../database';

console.log('log in bootstrap')

const { addRxPlugin } = require('rxdb');
// addRxPlugin(require('rxdb/plugins/server').RxDBServerPlugin);
// addRxPlugin(require('pouchdb-adapter-memory'));
// addRxPlugin(require('pouchdb-adapter-node-websql'));


(async () => {
    const dbSuffix = new Date().getTime(); // we add a random timestamp in dev-mode to reset the database on each start

    // const db = await database.getDatabase(
    //     '',
    //     'websql',
    //     'node'
    // );

    // await db.server({
    //     path: '/db',
    //     port: 10102,
    //     cors: true
    // });
})()


