import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './Layout.module.css';
import Header from './Header';
const Layout = () => {
  
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <Outlet/>
      </main>
    </Fragment>
  );
};

export default Layout;
