import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      goStop: 'Go!',
      last: null
    }

    this.timer = null;

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }
  
  go() {

    if(this.timer != null) {

      clearInterval(this.timer);
      this.timer = null;
      this.setState({goStop: 'Go!'});
    } else {
    
      this.timer = setInterval( () => {
      this.setState({ timer: this.state.timer + 0.1 });
      }, 100);
      
      this.setState({goStop: 'Pausar'});
    }

    
  }

  clear() {
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      last: this.state.timer.toFixed(2),
      timer: 0,
      goStop: 'Go!'
    })
  }

  render() {
    return(
      <View style={styles.container}>

        <StatusBar barStyle='dark-content' backgroundColor='#fff' />

        <Image source={require('./src/cronometro.png')} style={styles.stopwatch}/>
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnText}>{this.state.goStop}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clear}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>

        </View>

          <View style={styles.areaLast}>
            <Text style={styles.lastText}>{this.state.last > 0 ? 'Ultimo tempo: ' + this.state.last + 's' : ''}</Text>
          </View>

      </View>


)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn: {
    flex: 1,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaLast: {
    marginTop: 40
  },
  lastText: {
    fontSize: 25,
    fontStyle: "italic",
    color: '#fff'
  }
})