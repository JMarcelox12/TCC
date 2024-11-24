import { TextInput, View, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import styles from "../styles";
import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";

const Cadastro = () => {
    {/*const [formUsuario, setFormUsuario]=
    useState<Partial<Usuario>>({});*/}

    //const refUsuario=firestore.collection("Usuario");

    const navigation = useNavigation();

    const verificarData = () => {
    }

    const handleSignUp = () => {
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={[styles.cabecalho,{height: "10%", marginBlockEnd: 30}]}>   
                <Text style={[styles.texto,{fontSize: 30}]}>SITE </Text>
            </View>

        <ScrollView>
            <View style={styles.areaCadastro}>
                <Text style={styles.texto}>Data de Nascimento </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <Text style={styles.texto}>CPF </Text>
                <TextInput style={[styles.boxAuth]}></TextInput>
                <Text style={styles.texto}>Nome </Text>
                <TextInput style={[styles.boxAuth]}></TextInput>
                <Text style={styles.texto}>Email </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <Text style={styles.texto}>Senha </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <Text style={styles.texto}>Senha </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <TouchableOpacity style={[styles.botaoCadastro, {width: "90%", margin: 20}]}>
                    <Text style={styles.texto}>REGISTRAR-SE  </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaSala}>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.texto}>Populares </Text>
            <TouchableOpacity style={{marginLeft: 70}}>
            <Text style={styles.mostrarTudo}>Mostrar Tudo </Text>
            </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
            <TouchableOpacity style={styles.itemHorizontal}>
                <Text style={styles.texto}>Teste 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemHorizontal}>
                <Text style={styles.texto}>Teste 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemHorizontal}>
                <Text style={styles.texto}>Teste 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemHorizontal}>
                <Text style={styles.texto}>Teste 4 </Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
          </ScrollView>

            <View style={styles.rodape}>
                <Text style={[styles.texto,{fontSize: 30, margin: 1, paddingVertical: 1}]}>CADASTRO </Text>
                <View style={styles.linhaPreta}></View>
                <Text style={styles.assinatura}>  @Todos os direitos reservados a Jay Marshall  </Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Cadastro;