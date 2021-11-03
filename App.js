import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Login, Home} from './Screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Admin from './Screens/Admin';
import Router from './Router';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

const defaultLoginState = {
  loginStatus: false,
  username: '',
};
const reducer = (state = defaultLoginState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loginStatus: true,
        username: action.payload.username,
      };
    default:
      return state;
  }
};
const allReducer = combineReducers({loginDetails: reducer});
const store = createStore(allReducer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: false,
      propsUser: [],
      usernames: '',
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(propsUser =>
        this.setState({propsUser: [...propsUser, ...propsUser]}),
      )
      .finally(() => this.setState({loading: false}));
  }
  statuslog = (status, nama) => {
    this.setState({
      statusLogin: status,
      usernames: nama,
    });
  };

  // setActiveScreen = () => {
  //   console.log(this.state.statusLogin);
  //   if (this.state.statusLogin) {
  //     return (
  //       <Stack.Navigator initialRouteName="Admin">
  //         <Stack.Screen name="Admin">
  //           {props => <Admin {...props} username={this.state.usernames} />}
  //         </Stack.Screen>
  //       </Stack.Navigator>
  //     );
  //   } else {
  //     return (
  //       <Stack.Navigator
  //         screenOptions={{
  //           headerShown: false,
  //         }}
  //         initialRouteName="Login">
  //         <Stack.Screen name="Login">
  //           {props =>
  //             <Login
  //               {...props}
  //               status={this.statuslog}
  //               userList={this.state.propsUser}
  //             />
  //           }
  //         </Stack.Screen>
  //       </Stack.Navigator>
  //     );
  //   }
  // };
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Router userList={this.state.propsUser} />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
