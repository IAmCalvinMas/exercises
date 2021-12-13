import React from 'react';
import '../../App.css';

const UsersRead = () =>

<div>
  <nav>
    <ul className="list-inline d-flex justify-content-end">
      <li className="list-inline-item">
        <a href=""
          className="btn btn-dark btn-sm" type="button">
          <ion-icon name="exit" className="align-middle"></ion-icon>
          Sign out
        </a>
      </li>
      <li className="list-inline-item">
        <a href=""
          className="btn btn-dark btn-sm" type="button">
          <ion-icon name="settings" className="align-middle"></ion-icon>
          Edit
        </a>
      </li>
      <li className="list-inline-item">
        <a href=""
          className="btn btn-dark btn-sm" type="button">
          <ion-icon name="trash" className="align-middle"></ion-icon>
          Delete
        </a>
      </li>
    </ul>
  </nav><br/>
  <div>
    <header>
      <div className="row">
          <div className="mb-3 col-lg-4 col-md-4 col-sm-4 col-xs-12">
	    img
            <img className="img-fluid rounded-circle w-100"
              src="" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <ul className="list-unstyled">
              <li className='mb-3'>
                <h5 className="text-uppercase">
                  user
                </h5>
              </li>
              <li className='mb-3'>
                <p className="text-muted text-lowercase">
                    username
                </p>
              </li>
              <li className='mb-3'>
                <p className="text-muted text-lowercase">
                  birthday - deathday
                </p>
              </li>
              <li className='mb-3'>
                <p>
                  <ion-icon name="mail" className="align-middle"></ion-icon>
                  <span className="text-lowercase">
                  email
                  </span>
                </p>
              </li>
              <li className='mb-3'>
                <p>
                  <ion-icon name="call" className="align-middle"></ion-icon>
                  <span>gender</span>
                </p>
              </li>
              <li>
                <p>
                  <a href="" className="btn btn-primary btn-sm">
                    <ion-icon name="wallet" className="align-middle"></ion-icon>
                    my Payments
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
    </header><br/><br/>
    <div>
      <nav>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item'>
            <a className='nav-link active text-dark' id='myStoresTab' href='#myStores'
              data-toggle='tab' role='tab' aria-controls='myStores' aria-selected='true'>
              <ion-icon name='storefront' className="align-middle"></ion-icon>
              <small id='smallOne'>ACHIEVEMENTS</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-dark' id='storesIFollowTab' href='#storesIFollow'
              data-toggle='tab' role='tab' aria-controls='storesIFollow' aria-selected='false'>
              <ion-icon name="heart" className="align-middle"></ion-icon>
              <small id='smallOne'>FOLLOWING 12</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-dark' id='storesIFollowTab' href='#storesIFollow'
              data-toggle='tab' role='tab' aria-controls='storesIFollow' aria-selected='false'>
              <ion-icon name="heart" className="align-middle"></ion-icon>
              <small id='smallOne'>12M FOLLOWERS</small>
            </a>
          </li>
          
        </ul>
      </nav><br/><br/>
      <div className='tab-content' id='myTabContent'>
        <div className='tab-pane fade show active' id='myStores'
          role='tabpanel' aria-labelledby='home-tab'>
          <nav className='text-right'>
            <a href=""  type="button" className="btn btn-dark btn-sm">
              <ion-icon name="storefront" className="align-middle"></ion-icon>
              create store
            </a>
          </nav><br/><br/>

        </div>
      </div>
    </div>
  </div>
</div>;

export default UsersRead;
