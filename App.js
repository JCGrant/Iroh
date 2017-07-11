import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuote: '',
    };
  }

  componentWillMount() {
    this.setState({
      quotes: require('./quotes.json'),
    });
  }

  _setRandomQuote = () => {
    const quotes = this.state.quotes;
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      currentQuote: newQuote,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quote}>
          {this.state.currentQuote}
        </Text>
        <TouchableHighlight onPress={this._setRandomQuote}>
          <Image source={require('./iroh.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  quote: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});
