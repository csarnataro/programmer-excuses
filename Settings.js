import React from 'react'
import {
  Button,
  Picker,
  RefreshControl, 
  StyleSheet, 
  TouchableOpacity,
  AsyncStorage,
  Text, 
  View 
} from 'react-native'

import { SettingsScreen } from "react-native-settings-screen"

const fontFamily = 'sans-serif'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
    }  
  }

  settingsData = [
    {
      type: 'SECTION',
      header: 'Language'.toUpperCase(),
      footer:
        'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      rows: [
        {
          renderAccessory: () => (
<Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: '100%' }}
  onValueChange={(itemValue, itemIndex) => (console.log(itemValue))
  }>
  <Picker.Item key="java" label="Java" value="java" />
  <Picker.Item key="javascript" label="JavaScript" value="js" />
</Picker>          ),
        },
      ]
    },
  ]

  static navigationOptions = {
    title: 'Settings',
  };

  render () {
    return (
      <View style={styles.container}>
      <SettingsScreen
          data={this.settingsData}
          globalTextStyle={{ fontFamily }}
          scrollViewProps={{
            refreshControl: (
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true })
                  setTimeout(() => this.setState({ refreshing: false }), 3000)
                }}
              />
            ),
          }}
        />    
      </View>
    )
  }
}

