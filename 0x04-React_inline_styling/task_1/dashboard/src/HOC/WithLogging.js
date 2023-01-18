import React from "react";


function WithLogging(WrappedComponent) {
  const name = WrappedComponent.displayName || 'Component'
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  HOC.displayName = `WithLogging(${name})`;
  return HOC
}

export default WithLogging
