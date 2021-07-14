import { initApiServer } from '../api/server';
// import Store = require('electron-store');

(async () => {
    try {

        // store.set('user/321425234', {s:'sjdfl;as',bb:2323})
        // Store.initRenderer();
        initApiServer()
        // const u = store.get('user/321425234')
        // console.log(store.path)
        // const db = await getDatabase();

        // db.books.insert(
        //     {
        //         name: new Date().toLocaleTimeString(),
        //         color: '#032c33'
        //     });
        
        
    } catch (error) {
        console.log('error', error)
    }
})()


// 我什么都没有了