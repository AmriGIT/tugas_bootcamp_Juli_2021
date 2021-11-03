import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from './Screens';
import Admin from './Screens/Admin';

const Stack = createNativeStackNavigator();

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    setActiveScreen = () => {
        console.log(this.props.statusLogin);
        if (this.props.isLoggedIn) {
          return (
            <Stack.Navigator initialRouteName="Admin">
              <Stack.Screen name="Admin">
                {props => <Admin {...props}  />}
              </Stack.Screen>
            </Stack.Navigator>
          );
        } else {
          return (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Login">
              <Stack.Screen name="Login">
                {props => 
                  <Login
                    {...props}
                    status={this.statuslog}
                    userList={this.props.userList}
                  />
                }
              </Stack.Screen>
            </Stack.Navigator>
          );
        }
      };
    render() { 
        return ( 
            this.setActiveScreen()
         );
    }
}
 const mapStateToProps = state =>({
     isLoggedIn : state.loginDetails.loginStatus
 })
export default connect(mapStateToProps)(Router);