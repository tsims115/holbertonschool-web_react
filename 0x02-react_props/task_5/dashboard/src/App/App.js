import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
  {
  value: 'Someone wants to connect!',
  id: 0,
  type: 'default',
  },
  {
  value: 'Employer wants to reach out',
  id: 1,
  type: 'urgent',
  },
  {
  value: '',
  id: 2,
  type: 'urgent',
  html: {__html: 'This is a string'}
  },
]

function App({ isLoggedIn }) {
  let screen;
  if (isLoggedIn) {
    screen = <CourseList listCourses={listCourses}/>;
  } else {
    screen = <Login />;
  }
  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <div className="App-body">
          {screen}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
