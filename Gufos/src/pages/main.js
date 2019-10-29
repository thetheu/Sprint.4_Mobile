import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            eventos: [] //info da api
        }
    }

    componentDidMount() {
        this._carregarEventos();
    }

    //away é pra nao parar a applicacao quando nao tem internet
    _carregarEventos = async () => {
        // axios, fetch, xhr(XmlHttpRequest)
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ eventos: data }))
            .catch(erro => console.log(erro));
    }

    render() {
        return (
            <FlatList
                data={this.state.eventos}
                KeyExtrator={item => item.idEvento}
                renderItem={({ item }) => (
                    // renderItem = renderizar o item
                    <View  style={styles.tudo}>
                        <Text style={styles.olha}>{item.titulo}</Text>
                        <Text style={styles.olha2}>{item.dataEvento}</Text>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    olha: {
        backgroundColor: "#ffcc99",
        padding: 4,
        textAlign: "center",

    },
    olha2: {
        backgroundColor: "#ffe6cc",
        padding: 5,
        textAlign: "center",

    },
    tudo:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30
    },
})

export default Main;