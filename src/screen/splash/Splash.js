import { useNavigation } from "@react-navigation/core";
import React, { useEffect,useState } from "react";
import { Image, Text, View } from "react-native";


const Splash = () => {

    const [isGo, setIsGo] = useState(true);

    const Navigation = useNavigation();

    useEffect(() => {
        if (isGo == true) {
            setTimeout(() => {
                Navigation.navigate("Login");
                setIsGo(false);
            },2500);
        }
    });

    return (<View style={{
        flex: 1, justifyContent: 'center',
    alignItems:'center',backgroundColor:'#fff'}}>

        <Image source={require('../../assets/images/logo.png')} style={{ width:150,height:150}}/>
        <Text style={{fontSize:40,fontWeight:"800",textAlign:"center",fontFamily:'cursive', color:'#B53471',paddingTop:20}} >Athena</Text>
    </View>)


}

export default Splash;