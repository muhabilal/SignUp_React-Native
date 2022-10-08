import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation='fadeInUpBig'
        style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <TextInput placeholder='Enter mail' style={styles.input} />
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
        <TextInput placeholder='Your Passcode' secureTextEntry={true} style={styles.input} />
        <View style={styles.button}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text style={[styles.text_signIn, {
              color: '#fff'
            }]}>Sign In</Text>
          </LinearGradient>
          <TouchableOpacity style={[styles.signIn, {
            borderColor: '#009387',
            borderWidth: 1,
            marginTop: 15,
          }]} onPress={() => { navigation.navigate("signUp") }}>
            <Text style={[styles.text_signIn, {
              color: '#009387',
            }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 30,

  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  input: {
    borderBottomWidth: 1,
  },
  button: {
    // justifyContent: 'center'
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 10
  },
  text_signIn: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})