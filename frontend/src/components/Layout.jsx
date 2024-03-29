import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <Sidebar>
    <div>{children}</div>
    </Sidebar>
  )
}

export default Layout;