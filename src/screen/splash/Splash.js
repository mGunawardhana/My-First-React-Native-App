import React from "react";
import { Image, Text, View } from "react-native";


const Splash = () => {
    return (<View style={{
        flex: 1, justifyContent: 'center',
    alignItems:'center',backgroundColor:'#fff'}}>

        <Image source={require('../../assets/images/logo.png')} style={{ width:150,height:150}}/>
        <Text style={{fontSize:40,fontWeight:"800",textAlign:"center",fontFamily:'cursive', color:'#B53471',paddingTop:20}} >Athena</Text>
    </View>)


}

export default Splash;