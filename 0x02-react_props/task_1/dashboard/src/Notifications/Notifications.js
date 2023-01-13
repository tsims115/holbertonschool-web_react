import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js'

function clickLog() {
  console.log('Close button has been clicked');
}

export default function Notifications() {
  return <div className='Notifications'>
    <p>Here is the list of notifications</p>
    <ul>
      <li data-priority="default">New course available</li>
      <li data-priority="urgent">New resume available</li>
      <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
    </ul>
    <div style={{textAlign: 'right'}}>
      <button aria-label='Close' onClick={clickLog} style={{marginLeft: 'auto', marginBottom: ''}}>
        <img src={close_icon} alt='close' style={{
          height: '8px',
          width: '8px',
        }}></img>
      </button>
    </div>
  </div>
};
