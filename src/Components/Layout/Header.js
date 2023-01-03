import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {



  return (
    <header className={classes.header}>
      <div className={classes.logo}>Amazon logo</div>
      <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink to='/login' className={(navData)=> navData.isActive? classes.active : ''}>
                    logIn
                </NavLink>
            </li>
            <li>
                <NavLink to='/cart' className={(navData)=> navData.isActive? classes.active : ''}>
                    cart 
                </NavLink>
            </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
