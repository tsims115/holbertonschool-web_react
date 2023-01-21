import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItemStyle = StyleSheet.create({
  default: {
    color: 'blue',
    listStyle: 'none',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: 'thin solid black',
      padding: '10px 8px'
    }
  },
  urgent: {
    color: 'red',
    listStyle: 'none',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: 'thin solid black',
      padding: '10px 8px'
    }
  }
});

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <li 
        className={css(this.props.type === 'urgent' ? NotificationItemStyle.urgent : NotificationItemStyle.default)}
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => {this.props.markAsRead(this.props.id)}}>
        {this.props.value}
    </li>
  );
}
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {}
};

export default NotificationItem;
