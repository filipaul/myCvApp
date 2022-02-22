import React from 'react';
import './Footer.css';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Footer() {

    let history = useHistory();
  
    const redirect = () => {
      history.push('thank-you')
    }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Stay in touch <i class="fas fa-fingerprint"></i>
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email'  type='email' placeholder='Your Email' required />
            <button className="btn btn-primary" onClick={redirect}>Subscribe</button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FilipDesign
              <i class="fas fa-palette fa-spin"></i>
            </Link>
          </div>
          <small class='website-rights'>FilipDesign © 2022</small>
          <div class='social-icons'>
          <NavLink
              class='social-icon-link linkedin'
              to='//linkedin.com/in/filip-paul-09b114116/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </NavLink>
            <NavLink
              class='social-icon-link github'
              to='//github.com/filipaul'
              target='_blank'
              aria-label='GitHub'
            >
              <i class="fab fa-github"></i>
            </NavLink>
            <NavLink
              class='social-icon-link instagram'
              to='//www.instagram.com/filipauldesign/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </NavLink>
            <NavLink
              class='social-icon-link facebook'
              to='//www.facebook.com/pfilip19/'
              target='_blank'
            >
              <i class='fab fa-facebook-f' />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;