import { KeyboardAvoidingView, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation();

    const handleLogin = () => {
    }

    const irParaCadastro = () => {
        navigation.replace("Cadastro")
    }

    const redefinirSenha = () => {
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={[styles.cabecalho,{height: "15%", marginBlockEnd: 20}]}>   
                <Text style={[styles.texto,{fontSize: 30, color: 'black'}]}>SITE </Text>
            </View>

        <ScrollView>
            <View style={[styles.areaCadastro, {alignItems: "flex-start"}]}>
                <View style={[styles.boxFunction, {alignItems: 'center'}]}>
                    <Text style={[styles.texto, {color: "black", fontSize: 30}]}>LOGIN </Text>
                </View>
                <View style={[{marginLeft: '16%', padding: 18}]}>
                <Text style={[styles.texto, {fontSize: 22}]}>FAÇA LOGIN EM SUA CONTA </Text>
                </View>

                <Text style={[styles.texto, {marginLeft: 10}]}>Email </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <Text style={[styles.texto, {marginLeft: 10}]}>Senha </Text>
                <TextInput style={[styles.boxAuth, styles.texto]}></TextInput>
                <TouchableOpacity style={[styles.botaoCadastro, {width: "90%", margin: 10}]}
                onPress={handleLogin}>
                    <Text style={styles.texto}>ENTRAR  </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaSala}>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.texto}>ESQUECEU SUA SENHA?  </Text>
            <TouchableOpacity style={styles.centralizar} onPress={redefinirSenha}>
            <Text style={styles.mostrarTudo}>REDEFINIR  </Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.texto}>NÃO POSSUI UMA CONTA?  </Text>
            <TouchableOpacity style={styles.centralizar} onPress={irParaCadastro}>
            <Text style={styles.mostrarTudo}>REGISTRAR  </Text>
            </TouchableOpacity>
            </View>
            
          </View>
          </ScrollView>

            <View style={styles.rodape}>
                <Text style={[styles.texto,{fontSize: 30, margin: 1, paddingVertical: 1, color: "black"}]}>LOGIN </Text>
                <View style={styles.linhaPreta}></View>
                <Text style={styles.assinatura}>  @Todos os direitos reservados a Jay Marshall  </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;