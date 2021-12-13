import React from 'react';

const GoalsDelete = () =>

<article>
  <header>
    <h5 className='text-uppercase'>
      DELETE STORE
    </h5>
    <p>
      Deleting this store will also delete its branches and catalogs.
    </p>
  </header><br/>
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
              id="deletePassword" aria-describedby="passwordHelp" />
            <small id="passwordHelp" className="form-text text-primary">
	 err
            </small>
          </div>
        </div>
        <div>
          <button type="submit" name="storeDelSubmitBtn" className="btn btn-outline-dark btn-sm">
            <ion-icon name="trash" className="align-middle"></ion-icon>
            Delete Store
          </button>
        </div>
      </form>
    </section>
  </section>
</article>
;

export default GoalsDelete;
