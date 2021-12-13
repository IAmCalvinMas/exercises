import React from 'react';
import '../App.css';

const Header = () => 

    <nav className='container-fluid navbar navbar-expand-lg navbar-light shadow-sm bg-white'
      style={{backgroundColor: '#fff'}}>
      <a className="navbar-brand" href="">
        S P A C E <b>M I L K</b>
      </a>
      <button className="navbar-toggler"
        type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-dark" href="">
              <ion-icon name="storefront" size='small'
                className='align-middle'></ion-icon>
	      Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="">
              <ion-icon name="storefront" size='small'
                className='align-middle'></ion-icon>
	      Calendar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="">
              <ion-icon name="storefront" size='small'
                className='align-middle'></ion-icon>
	      Goals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="">
              <ion-icon name="storefront" size='small'
                className='align-middle'></ion-icon>
	      Messages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="">
              <ion-icon name="storefront" size='small'
                className='align-middle'></ion-icon>
              User
            </a>
          </li>
        </ul>
      </div>
    </nav>
;

export default Header;
