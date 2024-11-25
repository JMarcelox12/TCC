import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import styles from "../styles";

const Home = () => {
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    const navigation = useNavigation();

    const irParaCadastro = () => {
        navigation.replace("Cadastro");
    }

    const irParaLogin = () => {
        navigation.replace("Login");
    }

    const mostrarPopulares = () => {
    }

    const mostrarMelhores = () => {
    }

    const mostrarAovivo = () => {
    }

    const irParaSala = () => {
    }

    const popularItems = ["Teste 1", "Teste 2", "Teste 3", "Teste 4"];

    return(

        <View style={styles.container}>
          <View style={styles.cabecalho}>   
            <TextInput style={styles.barraPesquisa}>Digite aqui... </TextInput>
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.botaoLogin} onPress={irParaLogin}>
                <Text style={styles.texto}>ENTRAR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botaoCadastro, {marginLeft: 25}]} onPress={irParaCadastro}>
                <Text style={styles.texto}>REGISTRAR </Text>
            </TouchableOpacity>
            </View>
          </View>

        <ScrollView>
          <View style={styles.areaSala}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={styles.texto}>Populares </Text>
            <TouchableOpacity style={{marginLeft: 70}} onPress={mostrarPopulares}>
            <Text style={styles.mostrarTudo}>Mostrar Tudo </Text>
            </TouchableOpacity>
            </View>
            
            <ScrollView horizontal={true}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingHorizontal: 1 }}>
            <TouchableOpacity style={styles.itemVertical}>
                <Text style={styles.texto}>Teste 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemVertical}>
                <Text style={styles.texto}>Teste 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemVertical}>
                <Text style={styles.texto}>Teste 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemVertical}>
                <Text style={styles.texto}>Teste 4 </Text>
            </TouchableOpacity>
            </ScrollView>
            </View>

          <View style={styles.areaSala}>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.texto}>Melhores </Text>
            <TouchableOpacity style={{marginLeft: 70}} onPress={mostrarMelhores}>
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

          <View style={styles.areaSala}>
            <View style={{flexDirection: "row"}}>
            <Text style={styles.texto}>Ao vivo </Text>
            <TouchableOpacity style={{marginLeft: 70}} onPress={mostrarAovivo}>
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
            <Text style={[styles.texto,{fontSize: 30, margin: 1, paddingVertical: 1, color: "black"}]}>INICIO </Text>
            <View style={styles.linhaPreta}></View>
            <Text style={styles.assinatura}>  @Todos os direitos reservados a Jay Marshall  </Text>
          </View>
        </View>
    );
}

export default Home;