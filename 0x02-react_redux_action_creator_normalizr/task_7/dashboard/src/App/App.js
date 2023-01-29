import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import React from 'react';
import ReactDOM from 'react-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import BodySection from '../BodySection/BodySection'
import { StyleSheet, css } from 'aphrodite';
import userContext from './AppContext';



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

const bodyStyles = StyleSheet.create({
  body: {width: '100%'}
})
const footerStyles = StyleSheet.create({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    borderTop: '#E0354B solid'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: this.logOut,
      listNotifications: listNotifications
    };
  }
  
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }
  
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    })
  }

  markNotificationAsRead = (id) => {
    const listNotifications = [...this.state.listNotifications];
    for (let i = 0; i < listNotifications.length; i++) {
      if (listNotifications[i].id === id) {
        listNotifications.splice(i, 1);
      }
    }
    this.setState({
      listNotifications: listNotifications
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'h') {
        window.alert('Logging you out');
        this.logOut();
      }
    });
  }
  
  
  
  render() {
    const handleHideDrawer = this.handleHideDrawer;
    const handleDisplayDrawer = this.handleDisplayDrawer;
    const { displayDrawer, user, logOut } = this.state;
    if (user.isLoggedIn) {
      this.screen = <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom>;
    } else {
      this.screen = <BodySectionWithMarginBottom title="Log in to continue"><Login logIn={this.logIn} /></BodySectionWithMarginBottom>;
    }
    return (
    <userContext.Provider value={{
      user: this.state.user,
      logOut: this.state.logOut
    }}>
      <Notifications
      markNotificationAsRead={this.markNotificationAsRead}
      displayDrawer={displayDrawer}
      listNotifications={this.state.listNotifications}
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer} />
      <div className="App">
        <Header />
        <div className={css(bodyStyles.body)}>
          {this.screen}
        </div>
        <div>
          <BodySection title="News from the School">
            <p>TULSA, Okla. — The Muscogee Creek National Council approved an $8.2 million dollar project agreement on Thursday with the City of Tulsa, the City of Jenks, and INGOG to create a new lake in the Arkansas River.</p>
          </BodySection>
        </div>
        <div className={css(footerStyles.footer)}>
          <Footer />
        </div>
      </div>
    </userContext.Provider>
    )
  }
}

export default App;
