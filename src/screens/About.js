import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
  btn: {
    width: 200,
    padding: 10,
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default class About extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>About</Text>
        <TouchableOpacity style={styles.btn}>
          <Text>Go to About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
