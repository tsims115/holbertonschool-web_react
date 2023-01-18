import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <li data-notification-type={this.props.type}
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
