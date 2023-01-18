import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import close_icon from '../assets/close-icon.png';
import NotificationShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const NotificationStyle = StyleSheet.create({
  notifications: {
    border: 'thin dashed #E0354B',
    padding: '7px',
    float: 'right',
  }
});


function clickLog() {
  console.log('Close button has been clicked');
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.listNot = [];
    this.markAsRead = this.markAsRead.bind(this);
    if (this.props.listNotifications.length === 0) {
      this.listNot.push(<li key={0} >No new notification for now</li>);
    }
    for (let i = 0; i < this.props.listNotifications.length; i++) {
      this.listNot.push(<NotificationItem 
        key={this.props.listNotifications[i].id}
        type={this.props.listNotifications[i].type}
        { ...( !this.props.listNotifications[i].html && { value: this.props.listNotifications[i].value }) }
        { ...( this.props.listNotifications[i].html && { html: this.props.listNotifications[i].html }) }
        markAsRead={this.markAsRead}
        id={this.props.listNotifications[i].id}
        />)
    }
  }

  shouldComponentUpdate(newProps) {
    return (
      newProps.listNotifications.length > this.props.listNotifications.length
    )
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render()  {
    if (this.props.displayDrawer) {
      this.display = (
        <div className={css(NotificationStyle.notification)} >
          <p>Here is the list of notifications</p>
          <ul>
            {this.listNot}
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
      );
    } else {
      this.display = <div></div>
    }
    return (
    <React.Fragment>
      <div className='menuItem'>Your notifications</div>
      {this.display}
  </React.Fragment>
  )}
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
