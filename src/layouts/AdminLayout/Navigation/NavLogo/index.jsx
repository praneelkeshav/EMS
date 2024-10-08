import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';

// Import your logo image here
import logoImage from '../../../../assets/images/emslogo.png'; // Update the path based on your directory structure

const NavLogo = () => {
  const configContext = useContext(ConfigContext);
  const { collapseMenu } = configContext.state;
  const { dispatch } = configContext;

  let toggleClass = ['mobile-menu'];
  if (collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  return (
    <React.Fragment>
      <div className="navbar-brand header-logo">
        {/* Update the Link to redirect to the dashboard */}
        <Link to="/dashboard" className="b-brand">
          <div className="pt-4 d-flex ">
            {/* Replace the icon with an image */}
            <img src={logoImage} alt="Logo" style={{ width: '180px', height: '80px' }} />
          </div>
        </Link>
        <Link to="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}>
          <span />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NavLogo;
