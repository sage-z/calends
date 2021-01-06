import React, { Component, useState } from "react";
import Footer from "./Footer";
import DraggleLayout from '@/DraggleLayout';
import Sidebar from "./Sidebar";
import baseStyles from "../scss/base.scss";
import barsStyles from "../scss/bars.scss";
import gridStyles from "../scss/grid.scss";

export default ( ) => {

    const [width, setWidth] = useState(50);
    return (
      <div className={baseStyles.window}>
        <header className={`${barsStyles.toolbar} ${barsStyles["toolbar-header"]}`} >
          <h1 className={barsStyles.title}>Header</h1>
        </header>
        <div className={baseStyles["window-content"]}>
          <div className={gridStyles["pane-group"]}>
          <DraggleLayout
        containerWidth={document.body.clientWidth}
        containerHeight={'100%'}
        min={100}
        max={600}
        initLeftWidth={280}
        onWidthChange={(w:any) => setWidth(w)}
        handler={
          <div
            style={{
              width: 1,
              height: '100%',
              background: 'rgb(77, 81, 100)',
            }}
          />
        }
      >
        {/* <div className={`sidebar"`}
          style={{
            backgroundColor: `rgb(36, 205, 208)`,
            color: `#fff`,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        </div> */}
                  <Sidebar />
        <div
          style={{
            backgroundColor: `rgb(116, 140, 253)`,
            color: `#fff`,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          right
        </div>
      </DraggleLayout>
            {/* 
            <div className={gridStyles.pane}>
              <div
                style={{
                  width: "100%",
                  minHeight: "100%",
                  height: 2000,
                  background: "#eee",
                }}
              >
                33
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  
}


