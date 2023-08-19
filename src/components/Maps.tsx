import React, {Component} from 'react';
import {Linking, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';

export default class Maps extends Component {
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  accessLocation = async () => {

if( Platform.OS == 'ios'){
  const result= await request(PERMISSIONS.IOS.LOCATION_ALWAYS)
  console.log(result)
  if(result!=="granted"){
    // Linking.openSettings()
  }else{
    this.currentLocation()
  }
}else{
  const result= await  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
  if(result!=="granted"){
    Linking.openSettings()
  }else{
    this.currentLocation()
  }
}

  };

  currentLocation=()=>{
    Geolocation.getCurrentPosition(info =>{
      this.setState({
        latitude: info?.coords?.latitude,
        longitude: info?.coords?.longitude,
      })
    }
    );
  }


  render() {
    const {latitude, longitude} = this.state;
    console.log(latitude,longitude,"lat lon")
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude:  latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker
            coordinate={{
              latitude:  latitude,
              longitude: longitude,
            }}
          />
        </MapView>
        <Pressable
          testID="AccessLocation"
          style={styles.mapIcon}
          onPress={() => this.accessLocation()}>
          <FontAwesome
            name="map-marker"
            size={responsiveWidth(10)}
            color={'hsla(220, 100%, 24%, 1)'}
          />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapIcon: {
    position: 'absolute',
    bottom: responsiveHeight(2),
    right: responsiveWidth(2),
  },
});
