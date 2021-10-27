import React, { Component } from 'react';
import { View } from 'react-native';
import Admin from './Admin';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{flex:1}}>
                    <Admin/>
            </View>
         );
    }
}
 
export default Home;