import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <a className='navbar-brand' href='#'>
        Home
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
