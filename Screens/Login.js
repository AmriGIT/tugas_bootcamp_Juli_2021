import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Keyboard, KeyboardAvoidingViewBase, Alert} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isKeyboardShow: false,
        username : "",
        password : ""
    };
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }
  keyboardDidShow =() => this.setState({isKeyboardShow : true})
  keyboardDidHide =() => this.setState({isKeyboardShow : false})

  componentWillUnmount(){
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }
  buttonLogin =() =>{
    
    const {username, password} = this.state
    const result = this.props.userList.find(obj => obj.name === username)
    if(result != null){
      if(username === result.name && password ==="123" ){
        Alert.alert("Informasi", "Login Sucess!!")
        console.log(result.name)
        return this.props.status(true)
      }
    }
    // if(username === "admin" && password ==="admin"){
    //   Alert.alert("Informasi", "Login Success!!")
    //   return this.props.status(true)

    // }
    return Alert.alert("Warning", "Invalid Username & Password")
  }
  render() {
    return (
      <SafeAreaProvider>
        <ImageBackground
          style={styles.img}
          source={require('../Assets/Images/bg.jpg')}>
          <View style={{
            ...styles.container,
            // marginBottom: this.state.isKeyboardShow ? "20%" :"50%"
            }}>
            <Text style={{color: 'white',fontSize:30, fontFamily: 'arial', fontWeight: 'bold'}}>
              Sign In
            </Text>
            <Input
              placeholder="Username"
              leftIcon={<Icon name="mail" size={24} color="black" />}
              style={styles.input}
              onChangeText={username => this.setState({ username})}
            />
            <Input
              placeholder="Password"
              leftIcon={<Icon name="vpn-key" size={24} color="black" />}
              style={styles.input}
              onChangeText={password => this.setState({ password})}
              secureTextEntry={true}
              
            />
            <Button
              icon={<Icon name="arrow-forward-ios" size={15} color="blue" />}
              title="Login"
              type="solid"
              onPress={this.buttonLogin}
            />
          </View>
        </ImageBackground>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 7,
    backgroundColor: 'white',
  },
});
export default Login;
