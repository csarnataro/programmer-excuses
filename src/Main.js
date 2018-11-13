import React from 'react'
import {
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View 
} from 'react-native'

import DefaultPreference from 'react-native-default-preference';

import { NavigationEvents } from 'react-navigation';


const randomInt = upper => Math.floor(Math.random() * upper)

const chooseOne = (anArray, length) => anArray[randomInt(length)]




export default class App extends React.Component {

  translations = null

  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  constructor (props) {
    super(props)
    this.state = {
      excuse: 'loading...'
    }
    this.translations = require('./translations/en-EN')
    console.log('translations: ')
    console.log(this.translations)
  }

  chooseOneExcuse () {
    return chooseOne(this.translations.default, this.translations.default.length)
  }
  loadLanguage () {
    DefaultPreference.get('lang').then(value => {
      // I can't find a way to load dynamically, so this ugly switch case
      // which must be updated everytime we add a language
      console.log('************ BEGIN: Main 54 ************')
      switch (value) {
        case 'en-EN':
          this.translations = require('./translations/en-EN')
          break;
        case 'it-IT':
          console.log('choosing italian')
          this.translations = require('./translations/it-IT')
          break;
      
        default:
          this.translations = require('./translations/en-EN')
          break;
      }
      const excuse = this.chooseOneExcuse()
      console.log(value, {colors: true, depth: 16})
      console.log(this.translations, {colors: true, depth: 16})
      console.log(excuse, {colors: true, depth: 16})
      console.log('************ END:   Main 54 ************')

      this.setState({ excuse })
    })
  }

  componentDidMount () {
    this.loadLanguage()
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          console.log(`it's working`)
          this.setState({ excuse: this.chooseOneExcuse() })
        }}
      >
        <NavigationEvents
          onWillFocus={payload => this.loadLanguage()}
        />      
        <View key="1" style={styles.buttonView}>
          <Button title="Settings" onPress={() => navigate('Settings')} />
        </View>
        <View key="2" style={styles.view}>
          <Text style={styles.text}>{this.state.excuse || 'loading...'}</Text>
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
