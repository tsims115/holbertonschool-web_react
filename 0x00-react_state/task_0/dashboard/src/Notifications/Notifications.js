import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import close_icon from '../assets/close-icon.png';
import NotificationShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
};

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-2px)',
  },
  '100%': {
    transform: 'translateY(2px)',
  },
};

const NotificationsStyle = StyleSheet.create({
  notifications: {
    border: 'thin dashed #E0354B',
    padding: '7px',
    float: 'right',
    backgroundColor: '#fff8f8',
    '@media (max-width: 900px)': {
      position: 'absolute',
      width: '98%',
      height: '100%',
      backgroundColor: 'white',
      fontSize: '20px'
    }
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    ':hover': {
      cursor: 'pointer',
      animationName: [translateKeyframes, opacityKeyframes],
      animationDuration: '0.8s, 3s',
      animationIterationCount: '3',
    }
  },
});



function clickLog() {
  console.log('Close button has been clicked');
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.listNot = [];
    this.markAsRead = this.markAsRead.bind(this);
    this.state = {displayDrawer: props.displayDrawer};
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
      newProps.listNotifications.length > this.props.listNotifications.length ||
      newProps.displayDrawer !== this.props.displayDrawer
    )
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render()  {
    if (this.props.displayDrawer) {
      this.display = (
        <div className={css(NotificationsStyle.notifications)} >
          <p>Here is the list of notifications</p>
          <ul>
            {this.listNot}
          </ul>
          <div style={{textAlign: 'right'}}>
            <button 
              aria-label='Close' 
              onClick={() => {
                clickLog();
                this.props.handleHideDrawer();
                }
              }
              style={{marginLeft: 'auto', marginBottom: ''}}>
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
      {!this.props.displayDrawer &&
      <div onClick={this.props.handleDisplayDrawer} className={css(NotificationsStyle.menuItem)}>Your notifications</div>
      }
      {this.display}
  </React.Fragment>
  )}
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer:  () => {},
};

export default Notifications;
