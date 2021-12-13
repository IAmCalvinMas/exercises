import React from 'react';


const GoalRead = () =>

<article id='store'>
  <nav>
    <ul className="list-inline d-flex justify-content-end">
      <li className="list-inline-item">
        <a href=""
          className="btn btn-outline-dark btn-sm" type="button">
          <ion-icon name="storefront" className="align-middle"></ion-icon>
          create store
        </a>
      </li>
            <li className="list-inline-item">
              <a href=""
                  className="btn btn-outline-dark btn-sm" type="button">
                <ion-icon name="settings" className="align-middle"></ion-icon>
                Edit
              </a>
            </li>
            <li className="list-inline-item">
              <a href=""
                className="btn btn-outline-dark btn-sm" type="button">
                <ion-icon name="trash" className="align-middle"></ion-icon>
                Delete
              </a>
            </li>
    </ul>
  </nav><br/>
  <section>
    <header>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <img className="img-fluid rounded-circle" alt='name'
            src='assets/img/stores/logo' />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><br/>
          <ul className="list-unstyled">
            <li className='mb-3'>
              <h5 className="text-uppercase">Goal Title</h5>
            </li>
            <li className='mb-3'>
              <p className="text-muted text-capitalize">
                <ion-icon name="logo-whatsapp" size="small"></ion-icon>
	        Physical Wellness
              </p>
            </li>
            <li className='mb-3'>
	      01 Sep - 01 Dec
            </li>
          </ul>
        </div>
      </div><br/><br/>
      <div>
        <h6><b>Why do you want to achieve this goal?</b></h6>
        <p>description</p>
      </div>
    </header><br/><br/>
    <nav>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item'>
          <a className='nav-link  active text-dark' id='myStoresTab' href='#catalog'
            data-toggle='tab' role='tab' aria-controls='catalog' aria-selected='true'>
            <ion-icon name='calendar' className='align-middle'></ion-icon>
            <small id='smallOne'>TASKS</small>
          </a>
        </li>
      </ul>
    </nav><br/>
    <section className='tab-content' id='myTabContent'>
      <section className='tab-pane fade show active' id='catalog' role='tabpanel'
        aria-labelledby='home-tab'>
             <nav className="text-right">
               <a href=""
                 className="btn btn-outline-dark btn-sm" type="button">
                 <ion-icon name="bag-add" className="align-middle"></ion-icon>
                 Add More
               </a>
             </nav><br/>
        <br/>
        <div>

                <section className='col-12'>
                  <div className='jumbotron text-center bg-white'>
                    <div className='row'>
                      <div className='col'>
                        <img className='img-fluid'
                        src='' />
                      </div>
                    </div>
                    <h5 className='display-4'>NO TASKS</h5>
                    <p className='lead'>All the products and services of this store will be listed here</p>
                  </div>
                </section>
        </div><br/>
      </section>
    </section>
  </section>
</article>
;

export default GoalRead;
