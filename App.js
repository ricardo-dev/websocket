import React, {Component} from 'react';
import {Platform, WebSocket,StyleSheet, Alert,Text, View, TouchableOpacity} from 'react-native';
import WS from 'react-native-websocket';


export default class App extends Component {

  componentDidMount(){
    console.log('Teste!');
  }

  sendMessage = (text)=> {
    //let payload = {user:'Ricardo', message:text}
    this.ws.send("message");
  }

  readMessage = ({data}) => {
    Alert.alert(data);
    //console.log(data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity
          onPress={()=>this.sendMessage('Olá2')}>
          <Text>Enviar</Text>
        </TouchableOpacity>

        {
            <WS
              ref={ref => {this.ws = ref}}
              url="wss://echo.websocket.org/"
              onOpen={() => {
                //console.log('Open!')
                this.ws.send('Hello')
              }}
              onMessage={this.readMessage}
              onError={null}//{console.log}
              onClose={null}//{console.log}
              reconnect // Will try to reconnect onClose
            />
        }
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
