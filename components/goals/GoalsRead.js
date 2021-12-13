import React from 'react';


const GoalsRead = () =>

<article id='store'>
  <nav>
    <ul className="list-inline d-flex justify-content-end">
      <li className="list-inline-item">
        <a href=""
          className="btn btn-outline-dark btn-sm" type="button">
          <ion-icon name="storefront" className="align-middle"></ion-icon>
          create
        </a>
      </li>
    </ul>
  </nav><br/>
  <section>
    <main>
      <ul>
	<li>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img className="img-fluid rounded-circle" alt='name'
            src='assets/img/stores/logo' />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9"><br/>
          <ul className="list-unstyled">
            <li className='mb-3'>
              <h5 className="text-uppercase">Goal Title</h5>
            </li>
	    <ul className='list-inline'>
	      <li className='list-inline-item'>
	<ion-icon name="storefront" className="align-middle"></ion-icon>
	4 of 10 completed</li>
              <li className='mb-3 list-inline-item'>
<ion-icon name="storefront" className="align-middle"></ion-icon>
	        01 Sep - 01 Dec
              </li>
	    </ul>
            <li className='mb-3'>
              <p className="text-capitalize">
                <ion-icon name="logo-whatsapp" size="small"></ion-icon> 
	        Physical Wellness
              </p>
            </li>
          </ul>
        </div>
      </div>
	</li>
      </ul>
    </main><br/><br/>
    <nav>
	pagination
    </nav><br/>
  </section>
</article>
;

export default GoalsRead;
