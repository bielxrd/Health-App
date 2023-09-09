import React from 'react'
import  {Text, TextInput, View, Button} from 'react-native'


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
            <Button title='Calcular IMC'/>
        </View>
        <calcularIMC mensagemResultado = {mensagem} resultadoIMC = {imc}/>
       </View>
    );
}