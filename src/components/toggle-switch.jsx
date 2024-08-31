import React from 'react';
import './toggle-switch.css'

export default function ToggleSwitch({title='', onChange}) {
  return (
    <label className="label_toggle_checkbox" htmlFor='toggle-checkbox-switch'>
        <input onChange={onChange} id='toggle-checkbox-switch' type='checkbox' />
        <div className="circle"></div>
        <div className="bg"></div>
    </label>
  )
}