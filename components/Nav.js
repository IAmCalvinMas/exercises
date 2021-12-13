import React from 'react';

const Nav = () =>

  <nav>
            <section>
              <form> 
                <ul className='list-unstyled'>
                  <li className='mb-2'>
                    <div className='input-group'>
                      <input type='text' name='name' value=''
                        className='form-control' placeholder='Search Anything Here...' />
                        <div className='input-group-append'>
                          <button type='submit' name='homeSearchSubmitBtn'
                            className='btn btn-dark text-white border-dark'>
                            <ion-icon name='search-outline' className='align-middle'></ion-icon>
                          </button>
                        </div>
                    </div>
                  </li>
	          <li className='mb-3'>
          <button type='button' className='btn btn-link btn-sm' data-toggle='collapse' data-target='#collapseMenu'>
	      More filters
          </button>
	          </li>
	          <ul className='collapse list-unstyled' id='collapseMenu'>
                  <li className='mb-4' id='productCategory'>
                    <section>
                      <label for='searchProductCategory'>
                        <ion-icon name='albums' size='small' className='align-middle'></ion-icon>
                        Categories
                      </label>
                      <select name='productCategory' className='form-control text-capitalize'>
                        <option value='' selected>tourist attractions</option>
	                <option value=''>Accomodations</option>
	                <option value=''>Eating Out &amp; Fine Dining</option>
	                <option value=''>Resturants</option>
	                <option value=''>Conference Venues</option>
	                <option value=''>Shopping</option>
	                <option value=''>Tour Operators</option>
	                <option value=''>Event Organisers</option>
	                <option value=''>Travel Agencies</option>
	                <option value=''>Car Rentals</option>
	                <option value=''>Useful Contacts</option>
                      </select>
                    </section>
                  </li>
                  <li className='mb-4'>
                    <section>
                      <label for='searchLocation'>
                        <ion-icon name='location' size='small' className='align-middle'></ion-icon>
                        Location
                      </label>
                      <select name='location' className='form-control'>
                        <optgroup label=''>
                          <option value='' selected></option>
                        </optgroup>
                      </select>
                    </section>
                  </li>
                  <li className='mb-3' id='priceSearch'>
                    <section>
                      <label>
                        <ion-icon name='wallet' size='small' className='align-middle'></ion-icon>
                          Price
                      </label>
                      <div className='row mb-2'>
                        <div className='col'>
                          <input type='text' name='priceMin'
                            value=''
                            className='form-control' placeholder='Min Price' />
                        </div>
                        <div className='col'>
                          <input type='text' name='priceMax'
                            value=''
                            className='form-control' placeholder='Max Price' />
                        </div>
                      </div>
                      <div>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <label className='small'>
                              <input type='radio' value='1' name='sort' checked />
                              Ascending
                            </label>
                          </li>
                          <li className='list-inline-item'>
                            <label className='small'>
                              <input type='radio' value='0' name='sort' />
                              Descending
                            </label>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </li>
                  <li>
                    <button className='btn btn-dark btn-sm' name='homeSearchSubmitBtn' type='submit'>
                      <ion-icon name='search-outline' size='small' className='align-middle'></ion-icon>
                      Search
                    </button>
                  </li>
	          </ul>
                </ul>
              </form>
            </section>
        <br/>
      </nav>
;


export default Nav;
