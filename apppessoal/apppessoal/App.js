import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Image, } from 'react-native';

const Rodape = () => {
  return (
  <View>
      <Text>Todos os direitos reservados!</Text>
  </View>
  );
}


export default function App() {
  const [email,setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  return (
    
    <View style={styles.container}>
      
        <Image style={styles.logo} source={require('./assets/logo_prisma.png')} />
      <NavigationContainer>
      <TextInput style={styles.textoinput} placeholder='E-mail' keyboardType="email-address" leftIcon={{type:'font-awesome', nome:'envelope'}} 
      onChangeText={value => setEmail(value)}/><Text>{'\n'}</Text>
        
      <TextInput style={styles.textoinput} placeholder='Senha' leftIcon={{type:'font-awesome', nome:'lock'}} 
      onChangeText={value => setPassword(value)} secureTextEntry={true}/>
      <Text>{'\n'}</Text>
      <Button style={styles.button} title="Login" onPress={()=>{link('./App2.js')}}></Button>
      <Text>{'\n'}</Text>
      <Button style={styles.button}title="Cadastrar" onPress={()=>{alert('Você iniciou um cadastro.')}}></Button>
      <Text>{'\n'}</Text>
      </NavigationContainer>
      <Rodape style={styles.rodape}/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    
  },
  textoinput: {
    height:40,
    width: 350,
    borderColor: 'black',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    
    
  },
  rodape:{
    alignSelf: 'center',
    marginLeft: 'auto',
    alignContent: 'center',
  },
  logo:{
    
    alignItens: 'center',
    height: 200,
    width:200,
    

  },
  button:{
      widht: 20 ,
      height: 10 ,
  }
});
