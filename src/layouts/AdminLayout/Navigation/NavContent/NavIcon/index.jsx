import PropTypes from 'prop-types';
import React from 'react';

const NavIcon = ({ items }) => {
  let navIcons = false;
  
  if (items.icon) {
    navIcons = (
      <span className="pcoded-micon">
        {items.icon} {/* Render the icon component directly */}
      </span>
    );
  }

  return <React.Fragment>{navIcons}</React.Fragment>;
};

NavIcon.propTypes = {
  items: PropTypes.object.isRequired,
};

export default NavIcon;
