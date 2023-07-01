import React from 'react'
import { Waveform } from '@uiball/loaders'
import "./loadingComponent.css"

<Waveform 
 size={40}
 lineWeight={3.5}
 speed={1} 
 color="black" 
/>

const loadingComponent = () => {
  return (
    <div>
      <div class="waveform">
        <div class="waveform__bar"></div>
        <div class="waveform__bar"></div>
        <div class="waveform__bar"></div>
        <div class="waveform__bar"></div>
      </div>
    </div>
  )
};

export default loadingComponent