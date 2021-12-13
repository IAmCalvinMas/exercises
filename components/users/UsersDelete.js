import React from 'react';

const UsersDelete = () =>

<article>
  <header>
    <h5>DELETE MY ACCOUNT</h5>
    <p>
      Deleting your account will also delete your <u>stores</u>,
      <u>branches</u>, <u>catalogs</u>, <u>followers</u> and <u>customer orders</u>.
    </p>
  </header><br/>

      <div className='alert alert-primary text-primary' role='alert'>
              <span className='text-capitalize'>error</span>
            </div>
  <section> 
    <section>
      <form>
        <div className='row'>
          <div className='mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            <label for="deletePassword" className="form-label">
              <ion-icon name="lock-closed" className="align-middle"></ion-icon>
              Password
            </label>
            <input type="password" name="deletePassword" className="form-control"
              id="deletePassword" aria-describedby="passwordHelp"/>
            <small id="passwordHelp" className="form-text text-primary">
	err
            </small>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-dark btn-sm" type="submit" name="userDeleteBtn">
            <ion-icon name="trash" className="align-middle"></ion-icon>
            Delete account
          </button>
        </div>
      </form>
    </section>
  </section>
</article>
;

export default UsersDelete;
