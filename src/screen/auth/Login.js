import React,{Component} from "react";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from "react-native";

const Login = () => {
    return (
        /* scrollable wenna one nisa safeAreaView ganne*/
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/head_image.jpg')} />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Your email address" />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Password"
                        secureTextEntry={true}
                    />
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
    }, formInput: {
        marginTop: 10,
        padding: 10,
    }, textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor:"#a7a7a7",borderRadius:10,
    }
})

export default Login;