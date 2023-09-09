import React from "react"
import {View, Text} from "react-native"

export default function ResultadoIMC(props) {
   return ( 
   <View>
        <Text>{props.mensagemResultadoIMC}</Text>
        <Text>{props.resultadoIMC}</Text>
    </View>
   );
}