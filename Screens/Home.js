import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import DatePicker from 'react-native-neat-date-picker'
import Admin from './Admin';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDatePicker : false
         }
    }
openDatePicker=()=>{
    this.setState({
        showDatePicker : true
    })
    
}
oncancel=()=>{
    this.setState({
        showDatePicker : false
    })
}
onConfirm=()=>{
    this.setState({
        showDatePicker : false
    })
    console.log(date.getTime())
}
showCurrent=()=>{
    const date =  new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    Alert.alert(date + '-' + month +'-' + year);
}
    render() { 
        return ( 
            <View style={{flex:1}}>
                    <Text>Halo {this.props.username}</Text>
                    <Button title={'Tanggal Tanpa Thriparty'} onPress={this.showCurrent} />
                    <Button title={'Tanggal'} onPress={()=>this.openDatePicker()} />
                    <DatePicker
                    isVisible = {this.state.showDatePicker}
                    mode = {'single'}
                    onCancel= {this.oncancel}
                    onConfirm={this.onConfirm}
                    />
            </View>
         );
    }
}
 
export default Home;