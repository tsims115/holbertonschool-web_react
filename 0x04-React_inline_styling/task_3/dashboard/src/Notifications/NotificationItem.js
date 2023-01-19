import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItemStyle = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  }
});

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <li 
        {...(this.props.type === 'urgent' ? {className: css(NotificationItemStyle.urgent)} : {className: css(NotificationItemStyle.default)})}
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
