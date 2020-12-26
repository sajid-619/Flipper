import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase/app';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

let firebaseConfig = {
  apiKey: "AIzaSyDBnM51U-pTOId6Y3JsNYvc-7Jaj6FTUVA",
  authDomain: "flipper-f3f1c.firebaseapp.com",
  projectId: "flipper-f3f1c",
  storageBucket: "flipper-f3f1c.appspot.com",
  messagingSenderId: "104117068170",
  appId: "1:104117068170:web:b70ecb2b5f8b1c7d9aa873",
  measurementId: "G-WYG3YGJJYW"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

import React from 'react'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    return (
      <View>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      </View>
    );
  }
}



