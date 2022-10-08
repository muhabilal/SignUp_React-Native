import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Screens/Splash'
import SignUp from './Screens/SignUp'
import SignIn from './Screens/SignIn'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash Screen' component={Splash} />
        <Stack.Screen name='SignInScreen' component={SignIn} />
        <Stack.Screen name='signUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
const styles = StyleSheet.create({})