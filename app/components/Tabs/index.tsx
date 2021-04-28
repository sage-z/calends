import { count } from 'console';
import React, { useRef, useState } from 'react';

const Tabs = ({
  children, // 两列布局
}:any) => {

  const [ tabList, setTabList] = useState(['1.txt','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf','asdf']);

  return (
    <div style={{height:32, overflowX:'auto', width:'100%', display: 'flex'}}
    >
      {tabList.map((item, index )=> <Tab key={index} >{item}</Tab>)}
    </div>
  );
}

const Tab = ({children }:any) => {
  return (
    <div style={{ flex:1, height:32, maxWidth: 150 , minWidth: 50}}>{children}</div>
  )
}

export default Tabs;