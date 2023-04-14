import React,{Component} from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Forget = () => {
    return (
        /* scrollable wenna one nisa safeAreaView ganne*/
        <SafeAreaView>
            <ScrollView>

                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/head_image.jpg')} />
                </View>

                <View style={{ padding: 12 }}>

                    <View style={{ justifyContent: 'center', alignItems:'center'}}>

                        <Image source={require('../../assets/images/logo.png')} style={{ width:150,height:150}} resizeMode={'contain'} />

                    </View>

               <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Your email address" />
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defBtn}>
                        <Text style={{textAlign:"center",fontSize:16,color:'#fff'}}>Send Reset Link</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                   <View style={{height:1,backgroundColor:'#bbb',width:'100%'}}></View>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity>
                        <Text style={{ color: '#2980b9', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                            Need Account ? Register Now
                        </Text>
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
        height: 130,
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
        backgroundColor: '#16a085',
        borderRadius: 15,
    }
})

//21.11

export default Forget;