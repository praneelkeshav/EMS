import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const NavSearch = (props) => {
  const { windowWidth } = props;

  return (
    <React.Fragment>
      <div id="main-search" className="main-search open">
        <div className="input-group">
          <input 
            type="text" 
            id="m-search" 
            className="form-control" 
            placeholder="Search . . ." 
            style={{ width: windowWidth < 600 ? '100px' : '200px' }} 
          />
          <span 
            className="input-group-append search-btn btn btn-primary" 
            style={{ borderRadius: '50%', marginLeft: 5 }}
          >
            <i className="feather icon-search input-group-text" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

NavSearch.propTypes = {
  windowWidth: PropTypes.number
};

export default NavSearch;
