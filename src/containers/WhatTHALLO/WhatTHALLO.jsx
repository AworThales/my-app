import React from 'react';
import { Feature } from '../../components';
import './WhatTHALLO.css';

const WhatTHALLO = () => {
  return (
    <div className='gpt3__WhatThallo section__margin' id='whatThallo'>
      <div className='gpt3__WhatThallo-feature'>
        <Feature />   
      </div>
      <div className='gpt3__WhatThallo-heading'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Expore the Library</p>
      </div>
      <div className='gpt3__WhatThallo-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatTHALLO
