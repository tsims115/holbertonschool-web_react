import userContext from '../App/AppContext.js';
import { getFooterCopy, getFullYear } from '../utils/utils.js'
import React from 'react';

function Footer() {
  const context = React.useContext(userContext);
  return (
    <footer className="App-footer">
      {context.user.isLoggedIn &&
      <p><a style={{textDecoration: 'none', color: 'black'}} href='#'><strong>Contact us</strong></a></p>
      }
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
}

export default Footer;
