import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Categoria extends Component{

    componentDidMount() {
        _carregarCategorias();
    }

    _carregarCategorias = async () => {
        await fetch('http://192.168.7.85:5000/api/categorias')
        .then(resposta => resposta.json())
        .then(data => this.setState({ categorias: data }))
        .catch(erro => console.warn(erro));
    }

    render(){
        return(
            <FlatList
                data={this.state.categorias}
                keyExtractor={item => item.idCategoria}
                renderItem={({ item }) => (
                    <View>
                        <Text >{item.titulo}</Text>
                        
                    </View>
                )}
            />

        )
    }
}

export default Categoria;