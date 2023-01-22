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
    if (this.props.isLoggedIn) {
      this.screen = <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom>;
    } else {
      this.screen = <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>;
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      displayDrawer: false
    };
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
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
    const handleHideDrawer = this.handleHideDrawer;
    const handleDisplayDrawer = this.handleDisplayDrawer;
    const { displayDrawer } = this.state;
    return <React.Fragment>
      <Notifications 
      displayDrawer={displayDrawer}
      listNotifications={listNotifications}
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
