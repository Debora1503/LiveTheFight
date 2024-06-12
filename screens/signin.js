import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

    

const Signin =({navigation}) => {
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'#707070',
            },
            headerTintColor:'white',
        });

    },[navigation]);
    

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]= useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState ('');
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleDateChange = (text) =>{
    setDate(text);
  };

  const handleEmailChange = (text) =>{
    setEmail(text);
  };

  const handleNumberChange = (text) =>{
    setNumber(text);
  };

  const handleUsernameChange = (text) =>{
    setUsername(text);
  };


  const handlePasswordChange = (text) =>{
    setPassword(text);
  };

  const handleSubmit = async () => {
    //verifica se os campos obrigatórios estão preenchidos
    if (!firstName || !lastName || !email || !number || !username || !password || !date){
        alert('Todos os campos devem ser preenchidos.');
        return;
    }
    

    if(!/\d/.test(firstName || lastName || username)){
        
    }else{
        alert('Confira as suas respostas');
    }

    if(!/^[a-zA-Z0-9]*$/.test(lastName)){
        alert('O ultimo nome não pode ter caracteres especiais.');
        return;
    }
    if (!email.includes("@")){ //verifica se o email tem @
        alert('Email invalido.');
        return;
    }
    if (!/^\d+/.test(number)) {//verifica se tem apenas numeros
        alert('numero de telefone invalido.');
        return;
    }
    if (!/^\d+/.test(date)) {//verifica se tem apenas numeros
        alert('data de nascimento  invalida.');
        return;
    }
    if(!/^[a-zA-Z0-9]*$/.test(username)){
        alert('O username não pode ter caracteres especiais.');
        return;
    }

    if (password.length < 6){
        alert('Asenha tem de ter pelo menos 6 digitos');
        return;
    }
    try{
        console.log('dados submetidos com sucesso');
        navigation.navigate('Casa');
    }catch(error){
        console.error ('Erro ao submeter dados:', error);
        alert('erro ao criar conta. Tente novamente.');
    }
    
  };


    return(
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>

            <View style={styles.form}>
            <Image source={require('../img/Logo.png')} style={styles.logo}/>

                <Text style={styles.label}>Primeiro Nome:</Text>
                <TextInput
                    placeholder='ex: Rita' 
                    style={styles.input}
                    value={firstName}
                    onChangeText={handleFirstNameChange}    
                />
                
                <Text style={styles.label}>Ultimo Nome:</Text>
                <TextInput
                    placeholder='ex:Carvalho' 
                    style={styles.input} 
                    value={lastName}
                    onChangeText={handleLastNameChange}  
                />
                
                <Text style={styles.label}>Data de Nascimento:</Text>
                <TextInput 
                    placeholder='ex: 15/03/2006' 
                    style={styles.input}
                    value={date}
                    onChangeText={handleDateChange}
                    keyboardType="numeric" // Isso faz com que o teclado mostre apenas números
                />
                
                <Text style={styles.label}>Email:</Text>
                <TextInput 
                    placeholder='ex: teste@gmail.com'
                    style={styles.input}
                    value={email}
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                    autoCapitalize="none" 
                 
                 />                
                
                <Text style={styles.label}>Número de telefone:</Text>
                <TextInput 
                placeholder='ex: 123 456 789' 
                style={styles.input}
                value={number}
                onChangeText={handleNumberChange}
                keyboardType='numeric' 
                />

                <Text style={styles.label}>Username:</Text>
                <TextInput 
                    placeholder='ex: MariaRita'
                    style={styles.input}
                    value={username}
                    onChangeText={handleUsernameChange}
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password:</Text>
                <TextInput
                    placeholder='ex:awyp56'
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                style={[styles.button, {backgroundColor:'dimgray'}]} 
                onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>  

            </View>
            
        </View>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal:60,
        backgroundColor: '#707070',

    },
    form:{
        backgroundColor:'#A0A0A0',
        padding:75,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        borderRadius:7,
    },
    label:{
        fontSize:16,
        marginBottom: 3,
        fontWeight: 'bold',
    },
    input:{
        height:40,
        width: 180,
        borderColor:'#ddd',
        borderWidth:1,
        marginBottom:15,
        padding:10,
        borderRadius:5,
    },
    logo:{
        marginTop: -50,
        width:170,
        height:170,
        resizeMode: 'cover',
    },
    button:{
        marginTop: 5,
        width:180,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    buttonText:{
        fontSize: 18,
        color: 'white',
    },
});


export default Signin;