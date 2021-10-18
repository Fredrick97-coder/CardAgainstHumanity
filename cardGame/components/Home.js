import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';
import io from 'socket.io-client';

export default class Home extends Component {
  constructor() {
    super();
  }  

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: '50%'}}>Cards Against Humanity</Text>
          <View style={{marginTop: '10%'}}>
            <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('Host')
              }>
              <Text style={{backgroundColor: '#000', color: '#fff', fontSize:30, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, paddingRight: 30, paddingLeft: 30, borderRadius: 10}}>Start</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: '10%'}}>
            <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('Host')
              }>
              <Text style={{backgroundColor: '#000', color: '#fff', fontSize:30, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, paddingRight: 37, paddingLeft: 37, borderRadius: 10}}>Exit</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '10%'
  },
});
