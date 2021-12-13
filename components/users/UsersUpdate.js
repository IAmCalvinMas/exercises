import React from 'react';

const UsersUpdate = () =>
	
<article>
  <header>
    <h5>UPDATE MY PROFILE</h5>
    <p>Keep your profile updated so that when you place orders, sellers can contact you.</p>
  </header><hr /><br/>
  <section>

    <div>
      <div>
	<form>
          <div className="row">
            <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label for="updateName" className="form-label">
                  <ion-icon name="person-circle" className="align-middle"></ion-icon>
                  Name
                </label>
                <input type="text" name='updateName' value=""
                  className="form-control" id="updateName" aria-describedby="updateName" />
                <small id="updateName" className="form-text text-danger">
	err
                </small>
              </div>
            </div>
            <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label for="updateCellphone" className="form-label">
                  <ion-icon name="call" className="align-middle"></ion-icon>
                  Cellphone
                </label>
                <input type="text" name='updateCellphone' className="form-control"
                  id="updateCellphone" value=''
                  aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-danger">
	err
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label for="updateEmail" className="form-label">
                  <ion-icon name="mail" className="align-middle"></ion-icon>
                  Email Address
                </label>
                <input type="email" name='' value=""
                  required className="form-control"
                  id="updateEmail" aria-describedby="updateEmail" />
                <small id="updateEmail" className="form-text text-danger">
	err
                </small>
              </div>
            </div>
            <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label for="updatePassword" className="form-label">
                  <ion-icon name="lock-closed" className="align-middle"></ion-icon>
                  Password
                </label>
                <input type="password" name="updatePassword"
                className="form-control" id="updatePassword" aria-describedby="passwordHelp" />
                <small id="passwordHelp" className="form-text text-danger">
	err
                </small>
              </div>
            </div>
          </div>
          <div>
            <button type="submit" name='userUpdateSubmitBtn' className="btn btn-outline-dark btn-sm">
              <ion-icon name="settings" className="align-middle"></ion-icon>
              Update profile
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</article>
;

export default UsersUpdate;
