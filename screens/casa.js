import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";

const Casa =({navigation}) =>{

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[navigation]);

    return(
        <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <Text>Home</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent:'center',
        padding:60,
    }
});


export default Casa;