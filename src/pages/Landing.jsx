import React from 'react';

import landing from '../images/landing.png';
import { accessUrl } from '../spotify';

function Landing() {
  return (
    <div className='landing'>
      <div className='landing__container'>
        <img src={landing} alt='' />

        <div className='landing__button'>
          <a href={accessUrl}>Log In</a>
        </div>

        <div className='landing__logo'>
          <svg
            width='158'
            height='120'
            viewBox='0 0 158 120'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M72.3333 93L87.6666 119.558H57L72.3333 93Z'
              fill='#86C600'
            />
            <path d='M91 91H121.667L106.333 117.558L91 91Z' fill='#1F9900' />
            <path
              d='M142.333 93L157.667 119.558H127L142.333 93Z'
              fill='#1E7200'
            />
            <path d='M31 88H61.6667L46.3334 114.558L31 88Z' fill='#1F9900' />
            <path
              d='M15.3333 93L30.6667 119.558H0L15.3333 93Z'
              fill='#144D00'
            />
            <path
              d='M34.3333 51L49.6667 77.5581H19L34.3333 51Z'
              fill='#487500'
            />
            <path
              d='M115.333 51L130.667 77.5581H100L115.333 51Z'
              fill='#E0E400'
            />
            <path d='M57 51H87.6666L72.3334 77.558L57 51Z' fill='#3EC000' />
            <path d='M77.3332 0L92.6666 26.5581H62L77.3332 0Z' fill='#B5E200' />
          </svg>

          <h2>A Symphony of Your Own Creatioon</h2>
        </div>

        <div className='landing__slogan'>Generate. Curate. Elevate</div>
      </div>

      <div className='landing__text'>
        <section>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section>
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>

      <div className='landing__footer'>
        <div className='landing__footer-rights'>
          &copy; 2000 Company , Inc. All rights reserved. Address Address
        </div>
        <div className='landing__footer-items'>
          <span>Ben |</span>
          <span>Hunter |</span>
          <span>Kevin |</span>
          <span>Reece</span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
