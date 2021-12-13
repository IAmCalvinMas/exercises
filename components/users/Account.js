import React from 'react';

const Account = () =>

<main>
  <header>
    <h4 className='text-center'>
      START ACHIEVEING YOUR GOALS BY MANAGING YOUR TIME BETTER
    </h4><br/>
    <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right'>
        <img className="img-fluid rounded-circle w-50"
          src="assets/img/undraw_barber_3uel.png" />
        <h6><b>AS A BUSINESS OWNER</b></h6>
        <p>
          Manage all your <u>stores</u>,
          their <u>branches</u>, <u>catalogs</u> and
          <u>customer orders</u> on one account from just
          <span className='badge badge-danger badge-pill'>R50 p/m</span>
        </p>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 text-left'>
        <img className="img-fluid rounded-circle w-50"
          src="assets/img/undraw_Successful_purchase_re_mpig.png" />
        <h6><b>AS A CUSTOMER</b></h6>
        <p>
          Browse catalogs &amp; make <u>orders</u>
          of the items you love from all your favourite stores in SA.
        </p>
      </div>
    </div>
  </header><br/>
  <article>
    <nav>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
          <li className='nav-item'>
            <a className='nav-link text-dark active'
              id='signInTab' href='#signIn' aria-controls='signIn'
              data-toggle='tab' role='tab' aria-selected='true'>
              <ion-icon name="enter" className="align-middle"></ion-icon>
              <small id='smallOne'><b>SIGN</b> IN</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-dark'
              id='signUpTab' href='#signUp' aria-controls='signUp'
              data-toggle='tab' role='tab' aria-selected='true'>
              <ion-icon name="enter" className="align-middle"></ion-icon>
              <small id='smallOne'><b>SIGN</b> UP</small>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-dark'  href='#resetPassword'
              id='resetPasswordTab' aria-controls='resetPassword'
              data-toggle='tab' role='tab' aria-selected='false'>
              <ion-icon name="lock-open" className="align-middle"></ion-icon>
              <small id='smallOne'>RESET</small>
            </a>
          </li>
        </ul>
    </nav><br/><br/>

    <section className='tab-content' id='myTabContent'>
        <section className='tab-pane fade show active' id='signIn'
          role='tabpanel' aria-labelledby='signInTab'>
          <div>
            <div>
              <form>
                <div className="row">
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="form-label">
                        <ion-icon name="at-circle" className="align-middle"></ion-icon>
                        Username /
                        <ion-icon name="mail" className="align-middle"></ion-icon>
                        Email Address</label>
                      <input type="text" name="signInUsername"
                        value='' className="form-control"
                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1" className="form-label">
                        <ion-icon name="lock-closed" className="align-middle"></ion-icon>
                        Password
                      </label>
                      <input type="password" name="signInPassword"
                      className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <small id="emailHelp" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" name="userSignInSubmitBtn" className="btn btn-outline-dark btn-sm">
                    <ion-icon name="enter" size="small" className='align-middle'></ion-icon>
                    Sign-in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className='tab-pane fade' id='signUp'
          role='tabpanel' aria-labelledby='signUpTab'>
          <div>
            <div>
              <form>
              <div className="row">
                <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                    <label for="signUpName" className="form-label">
                        <ion-icon name="person-circle" className="align-middle"></ion-icon>
                        Your Mother's First Name
                    </label>
                    <input type="text" name='signUpMomName' className="form-control"
                      value=""
                      placeholder="Will help when resetting password"
                      id="signUpName" aria-describedby="signUpName" required />
                    <small id="signUpName" className="form-text text-danger">
                      err
                    </small>
                  </div>
                </div>
                </div>
                <div className="row">
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="signUpName" className="form-label">
                        <ion-icon name="person-circle" className="align-middle"></ion-icon>
                        Name
                      </label>
                      <input type="text" name='signUpName' className="form-control"
                        value=""
                        id="signUpName" aria-describedby="signUpName" required />
                      <small id="signUpName" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="signUpUsername" className="form-label">
                          <ion-icon name="at-circle" className="align-middle"></ion-icon>
                          Username
                      </label>
                      <input type="text" name='signUpUsername'
                      className="form-control"
                        value=""
                        id="signUpUsername" aria-describedby="signUpUsername" required />
                      <small id="signUpUsername" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="signUpEmail" className="form-label">
                        <ion-icon name="mail" className="align-middle"></ion-icon>
                        Email Address
                      </label>
                      <input type="email" name='signUpEmail'
                        value=""
                        required className="form-control"
                        id="signUpEmail" aria-describedby="signUpEmail" />
                      <small id="signUpEmail" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="signUpCellphone" className="form-label">
                        <ion-icon name="call" className="align-middle"></ion-icon>
                        Cellphone
                      </label>
                      <input type="text" name='signUpCellphone' className="form-control"
                        id="signUpCellphone" aria-describedby="emailHelp"
                        value='' />
                      <small id="emailHelp" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="signUpPassword" className="form-label">
                        <ion-icon name="lock-closed" className="align-middle"></ion-icon>
                        Password
                      </label>
                      <input type="password" name='signUpPassword'
                         className="form-control"  id="signUpPassword"
                         aria-describedby="signUpPassword" required />
                      <small id="signUpPassword" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="signUpPasswordConfirm" className="form-label">
                        <ion-icon name="lock-closed" className="align-middle"></ion-icon>
                        Confirm Password
                      </label>
                      <input type="password" name='signUpPasswordConfirm'
                        className="form-control" id="signUpPasswordConfirm"
                        aria-describedby="signUpPasswordConfirm" required />
                      <small id="signUpPasswordConfirm" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" name='userSignUpSubmitBtn' className="btn btn-outline-dark btn-sm">
                    <ion-icon name="enter" size="small" className='align-middle'></ion-icon>
                    Sign-up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className='tab-pane fade' id='resetPassword'
          role='tabpanel' aria-labelledby='resetPasswordTab'>
          <div>
            <div>
              <form>
                <div className="row">
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="resetPasswordUsername" className="form-label">
                        <ion-icon name="person-circle" className="align-middle"></ion-icon>
                        Username /
                        <ion-icon name="mail" className="align-middle"></ion-icon>
                        Email Address</label>
                      <input type="text" name='resetPasswordUsername'
                        className="form-control" value=""
                        id="resetPasswordUsername" aria-describedby="resetPasswordUsername" required />
                      <small id="resetPasswordUsername" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="resetPasswordName" className="form-label">
                        <ion-icon name="person-circle" className="align-middle"></ion-icon>
                        Your Mother's First Name
                      </label>
                      <input name='resetPasswordMomName' className="form-control"
                         type="text"
                        value=""
                        id="resetPasswordName" aria-describedby="resetPasswordName" required />
                      <small id="resetPasswordName" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="resetPasswordPassword" className="form-label">
                        <ion-icon name="lock-closed" className="align-middle"></ion-icon>
                        New Password
                      </label>
                      <input name='resetPasswordPassword' className="form-control"
                        id="resetPasswordPassword" type="password"
                        aria-describedby="resetPasswordPassword" required />
                      <small id="resetPasswordPassword" className="form-text text-danger">
                        err
                      </small>
                    </div>
                  </div>
                  <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <label for="resetPasswordPasswordConfirm" className="form-label">
                        <ion-icon name="lock-closed" className="align-middle"></ion-icon>
                        Confirm New Password
                      </label>
                      <input type="password" name='resetPasswordPasswordConfirm'
                        id="resetPasswordPasswordConfirm" className="form-control"
                        aria-describedby="resetPasswordPasswordConfirm" required />
                      <small id="resetPasswordPasswordConfirm" className="form-text text-danger">
			err
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" name='userResetPasswordSubmitBtn' className="btn btn-outline-dark btn-sm">
                    <ion-icon name="lock-open" size="small" className='align-middle'></ion-icon>
                    reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
  </article>
  <footer><br/><br/>
    <div className='row'>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right mb-3'>
        <img className="img-fluid w-75"
          src="assets/img/undraw_Celebration_re_kc9k.png" />
        <h5>THANK YOU!</h5>
        <p>
          Not just for logging in, but for constantly
          supporting businesses you meet daily.
          It's more than exchanging money for products or services,
          it's the soul of our economy. It's people taking care of each other by
          making sure we get that fresh bread in the morning, we look &amp; feel good,
          we get to work on time and we are always happy. So,
          we are important to one another in ways we can never imagine.
        </p>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
        <blockquote className='blockquote'>
          The best tip you can ever leave is saying <strong>Thank You</strong>. So...
        </blockquote>
        <ul className='list-inline'>
          <li className='list-inline-item mb-3'><mark>THANK YOU</mark></li>
          <li className='list-inline-item mb-3'><mark>RE A LEBOGA</mark></li>
          <li className='list-inline-item mb-3'><mark>BAIE DANKIE</mark></li>
          <li className='list-inline-item mb-3'><mark>SIYA BONGA</mark></li>
          <li className='list-inline-item mb-3'><mark>SIYA THOKOZA</mark></li>
        </ul>
      </div>
    </div>
  </footer>
</main>
;

export default Account;
