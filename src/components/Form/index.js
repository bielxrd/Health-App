import React, {useState} from 'react'
import  {Text, TextInput, View, Button} from 'react-native'
import ResultadoIMC from './ResultIMC/retorno'

export default function Form() {
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [mensagem, setMensagem] = useState("Preencha o peso e altura")
    const [imc, setIMC] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")

    function calcularIMC() {
        return setIMC((peso/(altura * altura)).toFixed(2))
    }
    function conferir() {
        if(peso != null && altura != null) {
            calcularIMC()
            setAltura(null)
            setPeso(null)
            setMensagem("Seu IMC é igual a:")
            setTextButton("Calcular Novamente")
            return
        } 
        setIMC(null)
        setTextButton("Calcular")
        setMensagem("Preencha o peso e altura")
    }

    return(
       <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setAltura}
            value={altura}
            placeholder='Digite sua altura - Ex: 1.75'
            keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
            onChangeText={setPeso}
            value={peso}
            placeholder='Digite seu peso - Ex: 85'
            keyboardType='numeric'
            />
            <Button 
            onPress={() => conferir()}
            title={textButton}/>
        </View>
       <ResultadoIMC mensagemResultadoIMC = {mensagem} resultadoIMC = {imc}/> 
       </View>
    );
}