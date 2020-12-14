import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const InputText = (props) => {
    return (
        <TextInput {...props} style={{...styles.InputText, ...props.style}} />
    )
}

export default InputText

const styles = StyleSheet.create({
    InputText: {
        backgroundColor: "#00000009",
        paddingTop: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#0005'
      },
})
