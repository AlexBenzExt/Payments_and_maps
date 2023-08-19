import {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import BottomTab from './src/Navigation/BottomTab';
import History from './src/components/History';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
     <BottomTab />
     {/* <History /> */}
      </SafeAreaView>
    );
  }
}

export default App;
