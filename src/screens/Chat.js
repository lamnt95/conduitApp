import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Chat Screen</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            throw new Error('My first Sentry error!');
          }}>
          <Text>Go to About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
