import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import translations from './it-IT'

const randomInt = upper => Math.floor(Math.random() * upper) 

const chooseOne = anArray => anArray[randomInt(translations.length)]

export default class App extends React.Component {
  render() {
      return (
	      <TouchableOpacity style={styles.container} onPress={()=> {
		 console.log('does not work');
	      }
  }>	  
      <View>
              <Text style={styles.view} >{chooseOne(translations)}</Text>
      </View>
</TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
