import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    logout() {
        localStorage.clear();
        this.props.loginHandler()
        this.props.history.push("/")
    }
    componentDidMount(){
        this.logout()
    }
    render() { 
        return ( 
            <p></p>
         );
    }
}
const mapDispatchToProps = (dispatch) => ({
    loginHandler: () =>
      dispatch({
        type: "LOGOUT_OK",
      })
  });
export default connect(null,mapDispatchToProps) (Logout);