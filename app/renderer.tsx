import React from "react";
import ReactDOM from "react-dom";

// import Path from 'path'
// console.log(Path.basename)
import db from 'core/database'
// import "./css/photon.min.css"

// const dbp = db.getDatabase('asdf','indexeddb')

import App from "./view/App";
ReactDOM.render(<App />, document.getElementById("root"));