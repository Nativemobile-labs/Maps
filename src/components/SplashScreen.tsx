import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React,{useEffect} from 'react';
import Loders from '../screens/Loders';

const SplashScreen = ({navigation}: any) => {
useEffect(() =>{
    setTimeout(() =>{
        navigation.navigate('Auth')
    },3000)
},[])
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/location.png')} style={styles.image}/>
        <View style={styles.loding}>
            <Loders /> 
        </View> 
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'yellow',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image:{
        height:200,
        width:200,
    },
    loding:{
        position:'absolute',
        bottom: 200
    }
})