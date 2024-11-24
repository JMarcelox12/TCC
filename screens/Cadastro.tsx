import { TextInput, View, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import styles from "../styles";
import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
    {/*const [formUsuario, setFormUsuario]=
    useState<Partial<Usuario>>({});*/}

    //const refUsuario=firestore.collection("Usuario");

    const navigation = useNavigation();

    const handleSignUp = () => {
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={[styles.cabecalho,{height: "15%", marginBlockEnd: 20}]}>   
                <Text style={[styles.texto,{fontSize: 30, color: 'black'}]}>SITE </Text>
            </View>

        <ScrollView>
            <View style={[styles.areaCadastro, {alignItems: "flex-start"}]}>
                <View style={[styles.boxFunction, {alignItems: 'center'}]}>
                    <Text style={[styles.texto, {color: "black", fontSize: 30}]}>REGISTRO </Text>
                </View>
                <View style={[{marginLeft: '16%', padding: 18}]}>
                <Text style={[styles.texto, {fontSize: 22}]}>CRIE SUA CONTA </Text>
                </View>
            <Text style={[styles.texto, {marginLeft: 10}]}>Nome </Text>
            <TextInput style={[styles.boxAuth]}></TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>Data de Nascimento </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}>99/99/9999 </TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>CPF </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}>999.999.999-99</TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>Telefone </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}>99 999999999</TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>Email </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>Senha </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>Confirme a senha </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <TouchableOpacity style={[styles.botaoCadastro, {width: "90%", margin: 10}]}>
                    <Text style={styles.texto}>REGISTRAR-SE  </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaSala}>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.texto}>JÁ POSSUI UMA CONTA?  </Text>
            <TouchableOpacity style={styles.centralizar}>
            <Text style={styles.mostrarTudo}>ENTRAR  </Text>
            </TouchableOpacity>
            </View>
            
          </View>
          </ScrollView>

            <View style={styles.rodape}>
                <Text style={[styles.texto,{fontSize: 30, margin: 1, paddingVertical: 1, color: "black"}]}>CADASTRO </Text>
                <View style={styles.linhaPreta}></View>
                <Text style={styles.assinatura}>  @Todos os direitos reservados a Jay Marshall  </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Cadastro;