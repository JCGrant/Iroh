/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

class Iroh extends Component {

  constructor(props) {
    super(props);
    var quotes = require('./quotes.json');
    this.state = {
      quotes: quotes,
      currentQuote: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quote}>
        { this.state.currentQuote }
        </Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('./iroh.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }

  _setRandomQuote = () => {
    var quotes = this.state.quotes;
    var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      currentQuote: newQuote,
    });
  };

  _onPressButton = () => {
    this._setRandomQuote();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  quote: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Iroh', () => Iroh);
