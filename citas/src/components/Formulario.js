import React , {useState, useEffect} from 'react'
import {Modal, Text,StyleSheet , View, TextInput ,
 ScrollView,Alert, Pressable} from  'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalVisible, setModalVisible ,pacientes ,
  setPacientes, paciente: pacienteObj}) => {
    const [paciente, setPaciente] = useState('');
    const [id , setId] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [sintomas , setSintomas] = useState('');

    useEffect(() => {
    if(Object.keys(pacienteObj).length > 0){
      setPaciente(pacienteObj.paciente);
      setId(pacienteObj.id);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(pacienteObj.fecha);
      setSintomas(pacienteObj.sintomas);
      console.log("ola");
    }
    }, [])

    const handleCita = () => { 
      if([paciente, propietario, email, telefono, fecha, sintomas].includes('')){
        Alert.alert(
          'Error', 
          'Todos los campos son obligatorios',
          [,{Text: 'OK'}]
           );
        return    
      }
      const newP = {
        id: Date.now(),
        paciente,
        propietario,
        email,
        telefono,
        fecha,
        sintomas
      }
      setPacientes([...pacientes,newP]);
      console.log(pacientes);
      setModalVisible(!modalVisible);

      setPaciente('');
      setPropietario('');
      setEmail('');
      setTelefono('');
      setFecha(new Date());
      setSintomas('');
      
    }


    return (
    <Modal
       animationType='slide'
       visible={modalVisible}
      >

      <View style={styles.vista}>
        <ScrollView>
          <Text style={styles.titulo}> Nueva {''}
              <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable 
          style={styles.btnClose}
          onLongPress={()=> setModalVisible(!modalVisible)}
          >
            <Text style={styles.btnTextClose}>Cancelar</Text> 
          </Pressable>
         

          <View style={styles.name}>
              <Text style={styles.label}>Paciente</Text>
              <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Nombre de la mascota'
                placeholderTextColor={'#666'}
                value={paciente}
                onChangeText={setPaciente}
              />
          </View>

          <View style={styles.name}>
              <Text style={styles.label}>Propietario</Text>
              <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Nombre del propietario'
                placeholderTextColor={'#666'}
                value={propietario}
                onChangeText={setPropietario}
              />
          </View>

          <View style={styles.name}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                placeholder='Email del propietario'
                placeholderTextColor={'#666'}
                value={email}
                onChangeText={setEmail}
              />
          </View>

          <View style={styles.name}>
              <Text style={styles.label}>Telefono</Text>
              <TextInput
                style={styles.input}
                keyboardType='number-pad'
                placeholder='Telefono del propietario'
                placeholderTextColor={'#666'}
                value={telefono}
                onChangeText={setTelefono}
                maxLength={10}
              />
          </View>

          <View style={styles.name}>
            <Text style={styles.label}>Fecha de Alta</Text>

            <View style={styles.dateContent}>
              <DatePicker
                date={fecha}
                locale='es'
                mode = 'date'
                textColor='#000'
                fadeToColor='none'
                onDateChange={(date)=>setFecha(date)}
              />
              
            </View>
          </View>

          <View style={styles.name}>
              <Text style={styles.label}>Sintomas</Text>
              <TextInput
                style={[styles.input , styles.textArea]}
                keyboardType='default'
                placeholder='Sintomas de la mascota'
                placeholderTextColor={'#666'}
                value={sintomas}
                onChangeText={setSintomas}
                multiline={true}
              />
          </View>

          <Pressable 
              style={styles.btnSubmit}
              onPress={handleCita}
          >
              <Text style={styles.btnSubmitText}>Agregar Paciente</Text> 
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
     
  )
}

const styles = StyleSheet.create({
  vista:{
    backgroundColor: '#8D72E1',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#FFF',
    marginTop: 30,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#FFF',

  },
  btnClose: {
    marginVertical: 20,
    backgroundColor: '#5827A4',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 25,
    borderWidth: 1,
    borderColor: '#FFF',

  },
  btnTextClose: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  name: {
    marginTop: 10,
    marginHorizontal: 24,
    
    
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#FFF',
    marginTop: 15,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    color : '#000',
    borderWidth: 1,
    borderColor: '#000',
  },
  textArea: {
    height: 100,
  },

  dateContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },

  btnSubmit: {
    marginVertical: 50,
    backgroundColor: '#4DB8FA',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 25,
    borderWidth: 1,
    borderColor: '#FFF',
  },

  btnSubmitText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 16,
    
    textAlign: 'center',
    textTransform: 'uppercase',

  },


 
})

export default Formulario