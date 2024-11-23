import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import styles from "../styles";

const Home = () => {
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    const navigation = useNavigation();

    const handleSignOut = () => {
    }

    const popularItems = ["Teste 1", "Teste 2", "Teste 3", "Teste 4"];

    return(

        <View style={styles.container}>
          <View style={styles.cabecalho}>   
            <TextInput style={styles.barraPesquisa}>Digite aqui... </TextInput>
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={styles.botaoLogin}>
                <Text style={styles.texto}>ENTRAR </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCadastro}>
                <Text style={styles.texto}>REGISTRAR </Text>
            </TouchableOpacity>
            </View>
          </View>

        <ScrollView>
          <View style={styles.areaSala}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={styles.texto}>Populares </Text>
            <TouchableOpacity style={{marginLeft: 70}}>
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
            <Text style={[styles.texto,{fontSize: 30, margin: 1, paddingVertical: 1}]}>Inicio </Text>
            <View style={styles.linhaPreta}></View>
            <Text style={styles.assinatura}>  @Todos os direitos reservados a Jay Marshall  </Text>
          </View>
        </View>
    );
}

export default Home;