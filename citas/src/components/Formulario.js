import React from 'react'
import {Modal, Text, Button} from  'react-native'
const Formulario = (props) => {
    const {modalVisible} = props;
    return (
    <Modal
       animationType='slide'
       visible={modalVisible}
      >
    </Modal>
  )
}

export default Formulario