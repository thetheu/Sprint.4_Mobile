/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{

  constructor(valor){
    super(valor);
    this.state = {text: ''};
  }

  render(){
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hello World Vei</Text>
            </View>
          <View>
            <TextInput 
            placeholder="Digite aqui"
            style={styles.input}
            onChangeText={(text) =>
            this.setState({text})}
            value={this.state.text}
            ></TextInput>
            <Button color='#9999ff' textShadowColor='rgba(0, 0, 0, 0.75)' style={styles.button}
            onPress={() => {
              alert(this.state.text);
            }}
            title="Clica Logo Porra"/>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
}
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#9999ff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    marginBottom: 300
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black'
  },
  button:{
  }
});
