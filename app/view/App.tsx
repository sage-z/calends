import React, { Component} from "react";
import Footer from "components/Footer";
// import styles  from 'scss/header.scss'
import baseStyles  from '../scss/base.scss'
import barsStyles  from '../scss/bars.scss'
import gridStyles  from '../scss/grid.scss'

class App extends Component{
  render(){
    return(
      <div className={baseStyles.window}>
  <header className={`${barsStyles.toolbar} ${barsStyles["toolbar-header"]}`}>
    <h1 className={barsStyles.title}>Header</h1>
  </header>
  <div className={baseStyles["window-content"]}>
    <div className={gridStyles["pane-group"]}>
      <div className="pane-sm sidebar">
      <div style={{width:'100%', minHeight:"100%", height:2000, background:'#ccc'}}>22</div>
      </div>
      <div className="pane">
        <div style={{width:'100%', minHeight:"100%", height:2000, background:'#eee'}}>33</div>    

    
      </div>
    </div>
  </div>
  <footer className={`${barsStyles.toolbar} ${barsStyles["toolbar-footer"]}`}>
    <h1 className={barsStyles.title}>Footer</h1>
  </footer>
</div>
    );
  }
}

export default App;