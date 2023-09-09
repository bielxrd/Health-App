import React from 'react'
import React, { TextInput, View } from 'react-native'


export default function Form() {
    return(
       <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            placeholder='Digite sua altura - Ex: 1.75'
            keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
            placeholder='Digite seu peso - Ex: 85'
            keyboardType='numeric'
            />
        </View>
       </View>
    );
}