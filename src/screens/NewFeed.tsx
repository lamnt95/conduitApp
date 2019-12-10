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

export default class NewFeed extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
    this.onClickToGroup = this.onClickToGroup.bind(this);
    this.onClickToChat = this.onClickToChat.bind(this);
  }

  onClickToGroup() {
    Navigation.push(this.props.componentId, {
      component: {name: 'navigation.playground.Group'},
    });
  }

  onClickToChat() {
    Navigation.push(this.props.componentId, {
      component: {name: 'navigation.playground.Chat'},
    });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>NewFeed Screen</Text>
        <TouchableOpacity style={styles.btn} onPress={this.onClickToGroup}>
          <Text>Go to Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.onClickToChat}>
          <Text>Go to Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
