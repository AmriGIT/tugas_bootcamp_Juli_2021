import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { Camera, Chats, Panggilan, Status } from '../Screens';

const Tab = createMaterialTopTabNavigator();
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    ChatScreen(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text>Chat</Text>
            </View>
        )
    }

    StatusScreen(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text>Status</Text>
        </View>
        )
    }
    PanggilanScreen(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text>Panggilan</Text>
        </View>
        )
    }
    render() { 
        return ( 
            
                <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#075E54', },
                    tabBarLabelStyle:{ fontWeight:'bold'},
                    tabBarIndicatorStyle:{
                        backgroundColor:'#fff',
                        height:3,
                        // color:'white'
                    },
                    tabBarActiveTintColor:'white',
                }}
                initialRouteName="Chat"
                >
                    <Tab.Screen
                     name="Camera"
                     options={{
                         tabBarLabel:()=>(
                             <View>
                                 <Icon name="photo-camera" size={25} color="white"/>
                             </View>
                         ),

                     }} 
                     component={Camera} />
                    <Tab.Screen name="Chat" component={Chats}/>
                    <Tab.Screen name="Status" component={Status}/>
                    <Tab.Screen name="Panggilan" component={Panggilan}/>
                </Tab.Navigator>
            
         );
    }
}
 
export default Main;