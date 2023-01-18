import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import React from 'react';
import ReactDOM from 'react-dom'
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

class App extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isLoggedIn) {
      this.screen = <CourseList listCourses={listCourses}/>;
    } else {
      this.screen = <Login />;
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'h') {
        window.alert('Logging you out')
        this.props.logOut();
      }
    });
  }
  
  
  render() {
    return <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <div className="App-body">
          {this.screen}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default App;
