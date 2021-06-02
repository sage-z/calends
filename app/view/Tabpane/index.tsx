import * as React from 'react';
import Editor from "@/Editor";
import Tabs from "./Tabs";

export default () => {
  return (
    <div>
      <Tabs />
      <div style={{ paddingTop: 32 }}>
        <Editor />
      </div>
    </div>
  );
};
