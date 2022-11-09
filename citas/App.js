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
  FlatList,
  Modal,
  Alert,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import Informacion from './src/components/Informacion';



const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const  [modalPaciente, setModalPaciente] = useState(false);

  const pacienteEdit = id =>{
    const paciente = pacientes.filter(paciente => paciente.id === id);
    setPaciente(paciente[0]);
  }

  const pacienteDelete = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Eliminar', onPress: () => {
          const pacientesAct = pacientes.filter(pacientesState => 
          pacientesState.id !== id);
          setPacientes(pacientesAct);
        } },
      ]
    )
  }
 
  const closeModal = () => {
    setModalVisible(false);

  }
  return (
    <View style={styles.vista}>
      <Text style={styles.titulo}>Administrador de Citas {' '}
         <Text style={styles.tituloBold}>Veterinaria</Text> 
      </Text>
      <Text style={styles.subtitulo}>Crea y administra las citas de tu mascota</Text>
      <Pressable style={styles.btnNuevaCita}
        onPress={ ()=>setModalVisible(!modalVisible)}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
      <Text style={styles.notPet}>No Hay Pacientes Aún</Text> : 
        <FlatList
          style={styles.list}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
              item={item}
              setModalVisible={setModalVisible}
              pacienteEdit={pacienteEdit}
              pacienteDelete={pacienteDelete}
              setModalPaciente={setModalPaciente}
              setPaciente={setPaciente}
              />
            )
          }
        }
        />
      }

      {modalVisible && (
      <Formulario
        closeModal={closeModal}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />)
  }

      <Modal
      visible={modalPaciente}
      animationType='fade'
      >
      <Informacion
        paciente={paciente}
        setModalPaciente={setModalPaciente}
        setPaciente={setPaciente}
      />

      </Modal>

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
    marginTop: 20,
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

},

notPet: {
  textAlign: 'center',
  fontSize: 25,
  color: "#000",
  fontWeight: '700',
  marginTop: 40,
},

list: {
 marginVertical: 20,  
 marginHorizontal: 30,

},

});

export default App;
