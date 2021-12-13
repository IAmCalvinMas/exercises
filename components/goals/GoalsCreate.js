import React from 'react';

const GoalsCreate = () =>

<article>
  <header>
    <h5>
      WHAT HAVE YOU ACHIEVED SINCE 1994?
    </h5>
    <p>
      Move your business online for your customers to still be able to
      browse your catalog and buy from you after business hours.
    </p>
  </header><hr/><br/>
  <section>
    <form>
      <section>
          <div>
            <div className="row">
              <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label for="storeNameCreate" className="form-label">
                    <ion-icon name="person-circle" className="align-middle"></ion-icon>
                    What do you want to achieve?</label>
                  <input type="text" name="storeName"
                    className="form-control"
                    id="storeNameCreate" value=""
                    aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-primary">
	eer
                  </small>
                </div>
              </div>
             
             <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div>
                  <label for="storeLogoCreate" className="form-label">
                    <ion-icon name="image" className="align-middle"></ion-icon>
                    Add Picture of Your Goal</label>
                  <input type="file" name="storeImg" className="btn btn-muted btn-sm"

                    id="storeLogoCreate" aria-describedby="storeLogoCreate" />
                </div>
                <small className='text-primary'>
                  Use square images for better display
                </small>
                <small id="storeLogoCreateHelp" className="text-primary">
	eer
                </small>
              </div>
             
            </div>
            <div>
              <label for="storeDescriptionCreate" className="form-label">
                <ion-icon name="information-circle"
                className="align-middle"></ion-icon>
                Why do you want to achieve it?
               <span className='badge badge-primary badge-pill'>
                 <span id='charLeft'>500</span>
               </span>
             </label>
              <textarea name="storeDescription" className="form-control"
                id="storeDescriptionCreate" oninput="charsLeft()">
                </textarea>
              <small className="form-text text-primary">
	eer
              </small>
            </div><br/>
            <div className="row">
               <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label for="storeUsernameCreate" className="form-label">
                    <ion-icon name="at-circle" className="align-middle"></ion-icon>
	            
	            When do you want to achieve it?
                  </label>
                  <input type="text" name="storeUsername" className="form-control"
                    id="storeUsernameCreate" value=""
                    aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-primary">
	eer
                  </small>
                </div>
              </div>
              <div className="mb-4 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div>
                  <label for="storeCategoryCreate" className="form-label">
                    <ion-icon name="albums" className="align-middle"></ion-icon>
		    
		    Add people you'll achieve this goal with
                  </label>
                </div>
                <small className='form-text text-primary'>
	eer
                </small>
              </div>
              
            </div>
            
          </div>
        </section>
      <div>
        <button type="submit" name="storeSubmit" className="btn btn-outline-dark">
          <ion-icon name="arrow-forward" className="align-middle"></ion-icon>
          Submit
        </button>
      </div>
    </form>
  </section>
</article>
;

export default GoalsCreate;
