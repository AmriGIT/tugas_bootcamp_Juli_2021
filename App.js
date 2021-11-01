import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from './component/Main';
const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={() => ({
                headerShadowVisible: false,
                headerTintColor: 'white',
                headerStyle: {
                  backgroundColor: '#075E54',
                },
                title: 'WhatsApp',
                headerRight: () => {
                  return (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => console.log('Search')}
                        style={{marginHorizontal: 10}}>
                          <Icon name="search" size={26} color='white'/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>console.log('menu cliked')}
                        style={{marginHorizontal:1}}
                        >
                          <Icon name="more-vert" size={26} color='white'/>
                        </TouchableOpacity>
                    </View>
                  );
                },
              })}
              name="Whatsapp">
              {props => <Main {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;
