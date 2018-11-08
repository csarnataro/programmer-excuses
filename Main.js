import React from 'react'
import {
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View 
} from 'react-native'

import translations from './it-IT'

const randomInt = upper => Math.floor(Math.random() * upper)

const chooseOne = anArray => anArray[randomInt(translations.length)]

export default class App extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor (props) {
    super(props)
    this.state = { excuse: chooseOne(translations) }
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          console.log(`it's working`)
          this.setState({ excuse: chooseOne(translations) })
        }}
      >
        <View style={styles.buttonView}>
          <Button title="Settings" onPress={() => navigate('Settings')} />
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>{this.state.excuse}</Text>
        </View>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    padding: 20
  },
  view: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})
