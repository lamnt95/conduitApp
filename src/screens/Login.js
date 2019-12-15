import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import blogAppRedux from 'blogAppRedux';

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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(blogAppRedux.reducers.authActions, dispatch),
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {};
    this.onClickToSignIn = this.onClickToSignIn.bind(this);
  }

  onClickToSignIn() {
    const {actions} = this.props;
    actions.initAuthStart();
    Navigation.push(this.props.componentId, {
      component: {name: 'navigation.playground.NewFeed'},
    });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.screenName}>Login Screens</Text>
        <TouchableOpacity style={styles.btn} onPress={this.onClickToSignIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
