import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js'
import NotificationShape from './NotificationItemShape';

const listofnotifications = [
  {
  value: 'This is the value0',
  id: 0,
  type: 'default',
  },
  {
  value: 'This is the value1',
  id: 1,
  type: 'urgent',
  },
  {
  value: 'This is the value2',
  id: 2,
  type: 'urgent',
  html: {'\_\_html': '"<strong>Mega requirement</strong> - complete by EOD"'}
  },
]

function clickLog() {
  console.log('Close button has been clicked');
}

function Notifications({ displayDrawer, listNotifications }) {
  let listNot = [];

  if (listNotifications.length === 0) {
    listNot.push(<li key={0} >No new notification for now</li>);
  }
  for (let i = 0; i < listNotifications.length; i++) {
    listNot.push(<NotificationItem 
      key={listNotifications[i].id}
      type={listNotifications[i].type}
      { ...( !listNotifications[i].html && { value: listNotifications[i].value }) }
      { ...( listNotifications[i].html && { html: listNotifications[i].html }) }
      />)
  }
  return (
    <React.Fragment>
      <div className='menuItem'>Your notifications</div>
      <div className='Notifications' style={{ display: displayDrawer ? "block" : "none" }}>
        <p>Here is the list of notifications</p>
        <ul>
          {listNot}
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
  </React.Fragment>
  )
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape)
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
};

export default Notifications;
