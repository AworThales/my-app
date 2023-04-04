import React from 'react';
import people from '../../assets/people.jpg';
import ai from '../../assets/ai.jpg';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3__header secion_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, cupiditate.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 peoples request access to visit in the last 24hrs</p>
        </div>
      </div>
        <div className="gpt3__header-image">
        <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header
