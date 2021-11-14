import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BoxSearching } from './Screens/index';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      renderData : []
     }
  }
  getDispo=async()=>{
    await axios.get("")
  }
  componentDidMount(){

  }
  render() { 
    return ( <BoxSearching/>)
  }
}
 
export default App;