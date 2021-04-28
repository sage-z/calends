import React, { Component, useState } from "react";
import Footer from "./Footer";
import DraggleLayout from "@/DraggleLayout";
import Sidebar from "./Sidebar";
import Tabpane from "./Tabpane";
import baseStyles from "../scss/base.scss";
import barsStyles from "../scss/bars.scss";
import gridStyles from "../scss/grid.scss";

export default () => {
  // const [width, setWidth] = useState(50);
  const width = document.body.clientWidth
  console.log(document.body.clientWidth)
  return (
    <div className={baseStyles.window}>
      <header
        className={`${barsStyles.toolbar} ${barsStyles["toolbar-header"]}`}
      >
        <h1 className={barsStyles.title}>Header</h1>
      </header>
      <div className={baseStyles["window-content"]}>
      <div style={{width:'50px'}}>icon</div>
        <div className={gridStyles["pane-group"]} style={{left:'50px'}}>
          <DraggleLayout
            containerWidth={width}
            containerHeight={"100%"}
            initLeftWidth={280}
            // onWidthChange={(w: any) => setWidth(w)}
            handler={     
              <div
                style={{
                  width: 1,
                  height: "100%",
                  background: "rgb(77, 81, 100)",
                }}
              />
            }
          >
            <Sidebar />
            <Tabpane />
          </DraggleLayout>
        </div>
      </div>
      <Footer />
    </div>
  );
};
