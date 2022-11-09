import React from 'react'
import {Text, View, StyleSheet , Pressable} from 'react-native'
import {dateFormat } from '../helpers'

const Paciente = ({item, setModalVisible , pacienteEdit, 
pacienteDelete, setModalPaciente , setPaciente }) => {
  const {paciente, fecha, id} = item;
  
  return (
    <Pressable
    onLongPress={()=>{
        setModalPaciente(true)
        setPaciente(item)
    }}
    >
        <View style={styles.container}>
            <Text style={styles.label}>Paciente: </Text>
            <Text style={styles.text}>{paciente}</Text>
            <Text style={styles.date}>{dateFormat(fecha)}</Text>
        
            <View style={styles.options}>
                <Pressable 
                    style={[styles.btn, styles.btnEdit]}
                    onLongPress={()=> {
                        setModalVisible(true)
                        pacienteEdit(id)
                    }
                    }
                >
                    <Text style={styles.btnText}>Editar</Text>
                </Pressable>
                <Pressable 
                style={[styles.btn, styles.btnDelete]}
                onLongPress={()=>{
                    pacienteDelete(id)
                }}
                >
                    <Text style={styles.btnText}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    </Pressable>
    )

}

const styles = StyleSheet.create({
 container:{
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 2,
    borderRadius: 5,
    
    
 },
 label:{
    color: '#374151', 
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
},

text:{
    color: '#8D72E1',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    
}
,

date:{
    color: '#374151',
    
},  

options:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    
},
btn:{
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#94a3B8',
    

},
btnEdit:{
    backgroundColor: '#FD8B0D',
},
btnText:{
    color: '#000',
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#fff',
},
btnDelete:{
    backgroundColor: '#E31E0B',
},


})
export default Paciente