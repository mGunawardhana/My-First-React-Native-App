import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        /* we can use inline styles like this */
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView style={{paddingTop:100}}>

                <View style={styles.container}>
                    <Text style={styles.Sample}>Welcome to the</Text>
                </View>

                 <View style={{justifyContent: 'center',alignItems:'center'}}>
                    <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={{width:150,height:150}}/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.myTitle}>Athena Fruit</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.shop}>Shop</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        // width: '10%',
        // minHeight:400
    },
    myTitle: {
        fontSize: 65,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily:'cursive',
        paddingTop: 15,
        paddingBottom: 15,
        color:'#20bf6b'
    // color:'#B53471'
    },
    shop: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 10,
        color:'#778ca3'
    },
    Sample: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily:'rounded',
        textAlign: 'center',
        paddingTop: 50,
        paddingBottom:40,

        color:'#778ca3'
    }

});

export default Home;