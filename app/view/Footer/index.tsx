import React, { Component } from "react";
import barsStyles from "../../scss/bars.scss";

export default () => (
  <footer className={`${barsStyles.toolbar} ${barsStyles["toolbar-footer"]}`}>
    <h1 className={barsStyles.title}>Footer</h1>
  </footer>
);
