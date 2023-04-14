import React,{Component} from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const Login = () => {
    return (
        /* scrollable wenna one nisa safeAreaView ganne*/
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/head_image.jpg')} />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    defaultBg: {
        width: '100%',
        height:160,
    }
})

export default Login;