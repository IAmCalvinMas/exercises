import React from 'react';
import '../App.css';

const Footer = () => 

    <div className="container text-right"><hr />
      <div>
        <p>
          &#169; <a className="text-dark" href='about'>
          <b>Spacemilk</b> Pty Ltd</a>, an investment group.
        </p>
      </div>
      <div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a className='text-dark' href="https://wa.me/270658712480" target='_blank'>
              <ion-icon name="logo-whatsapp" size="small"></ion-icon>
            </a>
          </li>
          <li className="list-inline-item">
              <a className='text-dark' href="https://fb.me/spacemilkza"
                target='_blank'>
                <ion-icon name="logo-facebook" size="small"></ion-icon>
              </a>
          </li>
          <li className="list-inline-item">
              <a className='text-dark' href="https://youtube.com/channel/UCa7QIkKZjCQSHAk-yKkWWNQ"
                  target='_blank'>
                <ion-icon name="logo-youtube" size="small"></ion-icon>
              </a>
          </li>
          <li className="list-inline-item">
              <a className='text-dark' href="https://instagram.com/spacemilkza"
                target='_blank'>
                <ion-icon name="logo-instagram" size="small"></ion-icon>
              </a>
          </li>
          <li className="list-inline-item">
              <a className='text-dark' href="https://twitter.com/spacemilkza"
                target='_blank'>
                <ion-icon name="logo-twitter" size="small"></ion-icon>
              </a>
          </li>
          <li className="list-inline-item">
              <a className='text-dark' href="mailto:info@spacemilk.co.za">
                <ion-icon name="mail" size="small"></ion-icon>
              </a>
          </li>
        </ul>
      </div>
    </div>
;

export default Footer;
