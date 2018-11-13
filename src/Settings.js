import React from 'react'
import {
  Picker,
  RefreshControl, 
  StyleSheet, 
  View 
} from 'react-native'

import { SettingsScreen } from 'react-native-settings-screen'
import DefaultPreference from 'react-native-default-preference';

const fontFamily = 'sans-serif'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const languages = {
  'en-EN': 'English',
  'it-IT': 'Italiano'
}

export default class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      language: 'en-EN'
    }  
  }

  componentDidMount() {
    DefaultPreference.get('lang').then(value => {
      if (value) {
        this.setState({language: value})
      }
    })
  }
  settingsData = [
    {
      type: 'SECTION',
      header: 'Language'.toUpperCase(),
      key: '1',
      footer:
        'Based on\nhttps://github.com/pixelastic/programmingexcuses.sh',
      rows: [
        {
          key: '1',
          renderAccessory: () => (
            <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: '100%' }}
              onValueChange={(itemValue, itemIndex) => {
                DefaultPreference.set('lang', itemValue)
                this.setState({language: itemValue})
              }}>
              {
                Object.keys(languages).map(key => 
                  <Picker.Item key={key} label={languages[key]} value={key} />
                )
              }
            </Picker>
          ),
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

