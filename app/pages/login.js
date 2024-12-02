import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '@/app/shared/colors'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Login() {
  return (
    <View>
      <Image source={require('@/app/assets/images/login.png')} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text style={{textAlign: 'center',marginTop: 80, fontSize: 20}}>Login/Sign Up</Text>
        <View style={styles.button}>
          <Ionicons name="logo-google" size={24} color="white" style={{marginRight: 10}}/>
          <Text style={{color: colors.white, }}>Sign in with Google</Text>
        </View>
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
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }

})