import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Casa =({navigation}) =>{

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[navigation]);

    return(
        <View style={styles.container}>
        <Text>Hello</Text>
        <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.openDrawer()}
            >
                <Ionicons name="menu" size={32} color="white" />
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
    },
    menuButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    buttonText: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
    },
});


export default Casa;