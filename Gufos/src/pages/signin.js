import React, { Component } from 'react';

import { Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

class SignIn extends Component {

    static navigationOption = {
        header: null,
    }

    constructor() {
        super();
        this.state = {
            email: 'admin@admin.com',
            senha: '123456'
        };
    }

    _realizarLogin = async () => {
        // console.warn(this.state.email + this.state.senha);
        await fetch('http://192.168.7.85:5000/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            }),
        })
            .then(resposta => resposta.json())
            //sharedpreferences
            .then(data => this._irParaHome(data.token))
            .catch(erro => console.warn(erro));
    }

    _irParaHome = async (tokenAReceber) => {
        if (tokenAReceber != null) {
            try {
                await AsyncStorage.setItem('@gufos:token', tokenAReceber);
                // redirecionar
                this.props.navigation.navigate('MainNavigator')
            } catch (error) {

            }
        }
    };

    render() {
        return (
            <View>
                {/* que eu consiga pegar as informações de email e senha */}
                <TextInput placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput placeholder="senha"
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                {/* que o botao funcione */}
            </View>

        );
    }
}

export default SignIn;