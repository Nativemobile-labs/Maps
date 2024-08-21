import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'

const SignupScreen = ({navigation}: any) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [cnfPassword, setCnfPassword] = useState<string>('')

    const [checkFirst, setCheckFirst] = useState<boolean>(false)
    const [checkLast, setCheckLast] = useState<boolean>(false)
    const [checkUser, setCheckUser] = useState<boolean>(false)
    const [checkPassword, setCheckPassword] = useState<boolean>(false)
    const [CheckCnfPassword, setCjeckCnfPassword] = useState<boolean>(false)


    const handleSignup = () =>{
        Alert.alert('working')
    }

    // handle user login
    const handleLogin = ()=>{
        navigation.navigate("Login")
    }
  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('../assets/location.png')} 
    style={styles.image}/>

    <TextInput placeholder='firstname' 
      value={firstName} 
      onChangeText={(text)=> setFirstName(text)} 
      style={styles.textInput}/>
       {checkFirst&&<Text style={styles.error}>too short</Text>}

    <TextInput placeholder='lastname' 
      value={lastName} 
      onChangeText={(text)=> setLastName(text)} 
      style={styles.textInput}/>
      {checkLast&&<Text style={styles.error}>too short</Text>}

      <TextInput placeholder='username' 
      value={user} 
      onChangeText={(text)=> setUser(text)} 
      style={styles.textInput}/>
      {checkUser&&<Text style={styles.error}>invalid user</Text>}

      <TextInput placeholder='password' 
      value={password} 
      onChangeText={(text)=>setPassword(text)}
      secureTextEntry={true}
      style={styles.textInput}/>
      {checkPassword&&<Text style={styles.error}>weak password</Text>}

      <TextInput placeholder='confirm password' 
      value={cnfPassword} 
      onChangeText={(text)=>setCnfPassword(text)}
      secureTextEntry={true}
      style={styles.textInput}/>
      {CheckCnfPassword&&<Text style={styles.error}>password not match</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.login}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup} onPress={handleLogin}>
            <Text style={styles.signupText}>login</Text>
        </TouchableOpacity>
  </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        backgroundColor:'yellow',
    },
    image:{
        height:80,
        width:80,
        marginTop: '20%',
        marginBottom: 50,
    },
    textInput:{
        height: 45,
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        marginTop: 10,
        paddingLeft: 15,
    },
    error:{
        color: 'red'
    },
    button:{
        height: 45,
        width: '80%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        marginTop: 40,
        backgroundColor: 'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    login:{
        color:'white',
        fontWeight: 'bold'
    },
    signup:{

    },
    signupText:{
        color: 'blue'
    },
})