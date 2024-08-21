import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'


const LoginScreen = ({navigation}:any) => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [checkUser, setCheckUser] = useState<boolean>(false)
    const [checkPassword, setCheckPassword] = useState<boolean>(false)

    // handle user login
    const handleLogin = () =>{
        navigation.navigate('Home')
    }

    // handle user singup 
    const handleLSignup = () =>{
        navigation.navigate('Signup')
    }
 
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/location.png')} 
      style={styles.image}/>

        <TextInput placeholder='username' 
        value={user} 
        onChangeText={(text)=> setUser(text)} 
        style={styles.textInput}/>
        {checkUser&&<Text style={styles.error}>Invalid user</Text>}

        <TextInput placeholder='password' 
        value={password} 
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
        style={styles.textInput}/>
        {checkPassword&&<Text style={styles.error}>wrong password</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.login}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signup} onPress={handleLSignup}>
            <Text style={styles.signupText}>signup</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default LoginScreen

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