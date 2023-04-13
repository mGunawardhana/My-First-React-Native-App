import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        /* we can use inline styles like this */
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.myTitle}>Welcome To The Food Corner</Text>
                </View>
                <View style={{justifyContent: 'center',alignItems:'center'}}>
                    <Image source={require('../assets/images/images-removebg-preview.png')} resizeMode='contain' style={{width:'100%'}}/>
                </View>
                 <View style={styles.container}>
                    <Text style={styles.Sample}>mGunawardhana's Cafe</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom:20
    },
    Sample: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        color:'red'
    }

});

export default Home;