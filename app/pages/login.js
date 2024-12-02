import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Image source={require('@/app/assets/images/login.png')} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text style={{textAlign: 'center',marginTop: 40, fontSize: 20}}>Login/Sign Up</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },

})