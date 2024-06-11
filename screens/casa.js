import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Casa =({navigation}) =>{

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[navigation]);

    return(
        <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text style={styles.buttonText}>Open Menu</Text>
        </TouchableOpacity>
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