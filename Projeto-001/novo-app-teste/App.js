import  React, {useState, useEffect} from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  //LISTA COM ARRAY, LISTA DE TAREFAS(ABAIXO)
  const[task, setTask] = useState(['alisson', 'renan', 'macedo']);
  //ELA ESTA SENDO INICIADA COM VAZIO E SERA ALIMENTADA PELO INPUT(ABAIXO)
  const[newTask, setNewTask] = useState('');

  async function addTask(){
      setTask([ ... task , newTask]);
      setNewTask('');// setando NewTask como vazio

      Keyboard.dismiss();
  }//atribui tudo o que ja tinha em Task e adiciona o newTask
  
  /*useEffect(() => {
    console.log(newTask);

  }, [newTask]);*/ //toda vez que altera o texto dento do Input o newTask esta recebendo o valor 
  return (
    <>
    <KeyboardAvoidingView
      keyboardVerticalOffser={0}
      behavior="padding"
      style={{flex:1}}
      enabled={Platform.OS === "ios"}
      >
    <View style={styles.container}>
      <View style={styles.Body}>
          <FlatList 
            style={styles.FlatList}
            data={task}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={styles.ContainerView}>
                <Text style={styles.Texto}>{item}</Text>
                <TouchableOpacity>
                <MaterialIcons name="delete-forever" size={25} color="#f64c75"/>
                </TouchableOpacity>
                </View>
          )} //ITENS JUNTO COM A LIXEIRA VERMELHA
          />
      </View>

      <View style={styles.Form}>
        <TextInput 
        style={styles.Input}
        placeholderTextColor="#999"
        autoCorrect={true}
        placeholder="Adicione uma tarefa"
        maxLength={25}
        onChangeText={text => setNewTask(text)} //passando para Newtask o valor de texto toda vez que o texto mudar
        value={newTask}// foi colocado para o testo descer quando chegar no limite da tela.
        />
        <TouchableOpacity style={styles.Button} 
        onPress={() => addTask()}>
            <Ionicons name="ios-add" size={25} color="#fff" />
        </TouchableOpacity>
        
    </View>

    </View>
    </KeyboardAvoidingView>
    
    </>
  );
}// parei em 48:15 min de vídeo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1',
    paddingVertical: 20, 
    marginTop: 20,
  },
  Body:{
    flex:1,
  }, 
  Form:{//FORMULARIO
    padding:0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#000',
   
  },
  Input:{//CAIXA DE ENTRADA DE TEXTO
    flex: 1,
    height: 40, 
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  Button: {//BOTAO AO LADO DA CAIXA DE ENTRADA DE TEXTO
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList:{//
    flex:1,
    marginTop: 5,
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",
    display: 'flex',
    flaxDirection: 'row',
    alignItens: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee"
  },
  Texto:{
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: 'center',

  }
  
});
