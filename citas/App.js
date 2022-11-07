import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
} from 'react-native';

import Formulario from './src/components/Formulario';




const App = () => {

  const [modalVisible, setModalVisible] = useState(false);



  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Administrador de Citas {' '}
         <Text style={styles.tituloBold}>Veterinaria</Text> 
      </Text>
      <Text style={styles.subtitulo}>Crea y administra las citas de tu mascota</Text>
      <Pressable style={styles.btnNuevaCita}
        onPress={ ()=>setModalVisible(true)}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({ 
 vista:{
  backgroundColor: '#F3F4F6',
  flex: 1,
 }, 
 titulo: {
  textAlign: 'center',
  paddingVertical : 20,
  fontSize: 30,
  color: "#000",
  fontWeight: 'bold',
 },
 tituloBold: {
  fontWeight: '900',
  color : '#6C4AB6',
 },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    color: "#000",
    fontWeight: 'bold',
    marginTop: 30,
  },


btnNuevaCita: {
  backgroundColor: '#8D72E1',
  padding: 15,
  marginTop: 30,
  marginHorizontal: 20,
  borderRadius: 10,
},

btnTextoNuevaCita:{
  textAlign: 'center',
  color: '#FFF',
  fontSize: 15,
  fontWeight: '900',
  textTransform: 'uppercase',

}



});

export default App;
