import React,{Component} from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
                        secureTextEntry={true}/>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity>
                        <Text style={{ color: '#ff4757', textAlign: 'right', fontSize: 16, fontWeight: 'bold' }}>
                            Forget Password
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defBtn}>
                        <Text style={{textAlign:"center",fontSize:16,color:'#fff'}}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <Text style={{textAlign:'center'}}>or</Text>
                </View>

                <View style={styles.formInput}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity style={{marginRight:15}}>
                            <Image source={require("../../assets/images/myimage.jpg")} style={{width:40,height:40,borderRadius:1000}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:15}}>
                            <Image source={require('../../assets/images/myimage2.jpg')} style={{width:40,height:40,borderRadius:1000}}/>
                        </TouchableOpacity>
                     </View>
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
        height: 160,
    }, formInput: {
        marginTop: 10,
        padding: 10,
    }, textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor:"#a7a7a7",borderRadius:10,
    }, defBtn: {
        padding: 15,
        backgroundColor: '#2ed573',
        borderRadius: 15,
    }
})

export default Login;