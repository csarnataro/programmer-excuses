import {
  createStackNavigator,
} from 'react-navigation';
import Main from './Main'
import Settings from './Settings'

export default createStackNavigator({
  Home: { screen: Main },
  Settings: { screen: Settings },
});