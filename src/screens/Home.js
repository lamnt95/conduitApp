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

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
    this.onClickToAbout = this.onClickToAbout.bind(this);
    this.onClickToProfile = this.onClickToProfile.bind(this);
  }

  onClickToAbout() {
    Navigation.push(this.props.componentId, {
      component: {name: 'navigation.playground.About'},
    });
  }

  onClickToProfile() {
    Navigation.push(this.props.componentId, {
      component: {name: 'navigation.playground.Profile'},
    });
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity style={styles.btn} onPress={this.onClickToAbout}>
          <Text>Go to About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.onClickToProfile}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
