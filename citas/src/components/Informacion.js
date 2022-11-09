import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import Paciente from './Paciente'
import {dateFormat } from '../helpers'

const Informacion = ({paciente, setModalPaciente , setPaciente}) => {
  return (
    <View style={styles.container}>
       

        <Text style={styles.title}>Informacion 
            <Text style={styles.subtitle}> Paciente </Text>
        </Text>
        <View style={styles.info}>
            <View style={styles.space} >
                <Text style={styles.data} >Nombre: </Text>
                <Text style={styles.text}>{paciente.paciente}</Text>
            </View>

            <View style={styles.space} >
                <Text style={styles.data} >Propietario: </Text>
                <Text style={styles.text}>{paciente.propietario}</Text>
            </View>

            <View style={styles.space} >
                <Text style={styles.data} >Email: </Text>
                <Text style={styles.text}>{paciente.email}</Text>
            </View>

            <View  style={styles.space}>
                <Text style={styles.data} > Telefono: </Text>
                <Text style={styles.text}>{paciente.telefono}</Text>
            </View>

            <View style={styles.space} >
                <Text style={styles.data} > Fecha de Alta: </Text>
                <Text style={styles.text}>{dateFormat(paciente.fecha)}</Text>
            </View>

            <View style={styles.space} >
                <Text style={styles.data} > Sintomas </Text>
                <Text style={styles.text}>{paciente.sintomas}</Text>
            </View>


        </View>
         <View>
            <Pressable
                style={styles.btnExit}
                onPress={()=>{
                    setModalPaciente(false)
                    setPaciente({})
                }}
            >
                <Text style={styles.label}>Cerrar </Text>
            </Pressable>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4DB8FA',
        flex: 1,
    },
    label:{
        fontWeight: 'bold',
        fontSize: 18,
        
        color: '#fff',
        textAlign: 'center'
    },

    btnExit:{
        backgroundColor: '#2146C7',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 25,
        borderWidth: 1,
        borderColor: '#FFF',
        marginTop: 20,

    },

    title:{   
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
      
        textAlign: 'center',
        

    },
    subtitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 30,
        textAlign: 'center',

    },
    space:{
        marginBottom: 10,
        
    },

    data:{
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '600',
        color: '#374151',
        fontSize: 12,
        
       
    },

    text:{
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        color: '#334155',
    
    }  ,

    info:{

        backgroundColor: '#fff',
        marginHorizontal: 25,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 50
        ,
    },



})
export default Informacion