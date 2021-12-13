import React from 'react';

const TaskRead = () =>

<article>
    <nav>
      <ul className="list-inline d-flex  justify-content-end">
        <li className="list-inline-item">
          <a href=""
            className="btn btn-outline-dark btn-sm" type="button">
            <ion-icon name="bag-add" className="align-middle"></ion-icon>
            Add more
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
          <div className="carousel slide" data-interval='10000' data-pause='hover'
            data-ride='carousel' id="carouselExampleControls">
            <div className="carousel-inner">
                    <div className='carousel-item $active'>
                      <img className='d-lock w-100'
                        src='assets/img/catalog/' />
                    </div>
            </div>
            <a href="#carouselExampleControls" className="carousel-control-prev"
              role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a href="#carouselExampleControls" className="carousel-control-next"
              role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><br/>
          <ul className="list-unstyled">
            <li className='mb-3'>
              <h5 className='text-uppercase'>name</h5>
            </li>
            <li className='mb-3'>
              <p>
                <b>PRICE</b>: price
              </p>
            </li>

                <li className="mb-3">
                  <a href=""
                    className="btn btn-outline-dark btn-sm">
                    <ion-icon name="calendar"
                      className="align-middle"></ion-icon>
                    published
                  </a>
              </li>

              <li className='mb-3'>
                <a href=''
                  className='btn btn-outline-dark btn-sm'>
                  <ion-icon name='images' className='align-middle'></ion-icon>
                  upload images
                </a>
              </li>
           <li className='mb-3'>
             <div className='row'>
               <div className='col-lg-8 col-md-8 col-sm-8 col-xs-12 mb-2'>
                 <input type='url' value=''
                  className='text-danger form-control form-control-sm text-lowercase' />
               </div>
               <div className='col-12'>
                   <small>Copy &amp; share this link on</small>
                   <ul className='list-inline'>
                     <li className='list-inline-item'>
                       <ion-icon name="logo-whatsapp" size="small"></ion-icon>
                     </li>
                     <li className='list-inline-item'>
                       <ion-icon name="logo-facebook" size="small"></ion-icon>
                     </li>
                     <li className='list-inline-item'>
                       <ion-icon name="logo-youtube" size="small"></ion-icon>
                     </li>
                     <li className='list-inline-item'>
                       <ion-icon name="logo-instagram" size="small"></ion-icon>
                     </li>
                     <li className='list-inline-item'>
                       <ion-icon name="logo-twitter" size="small"></ion-icon>
                     </li>
                   </ul>
               </div>
             </div>
           </li>
          </ul>
        </div>
      </div>
      <div><br/>
        <h6><b>ABOUT THIS ITEM</b></h6>
        <p>description</p>
      </div>
    </header><br/><br/>
    <section>
      <nav>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item'>
            <a className='nav-link text-dark' id='storeDetailsTab' href='#storeDetails'
              data-toggle='tab' role='tab' aria-controls='storeDetails' aria-selected='false'>
              <ion-icon name='storefront' className='align-middle'></ion-icon>
              <small id='smallOne'><b>STORE</b> DETAILS</small>
            </a>
          </li>
        </ul>
      </nav><br/><br/>
      <section className='tab-content' id='myTabContent'>
        <section className='tab-pane fade' id='storeDetails'
          role='tabpanel' aria-labelledby='home-tab'>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-3">
              <a href="username">
                <img className='img-fluid rounded-circle'
                  src="assets/img/stores/" />
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul className='list-unstyled'>
                <li>
                  <h5 className="text-uppercase">
                    <a href="" className='text-dark'>
                      storeName
                    </a>
                  </h5>
                </li>
                <li className='mb-3'>
                  <a href="" className='text-muted'>
                    @username
                  </a>
                </li>
                <li>
                  Description
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
</article>
;

export default TaskRead;
