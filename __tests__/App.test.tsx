/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

jest.mock('@react-navigation/bottom-tabs',()=>({
  createBottomTabNavigator: () => ({
    Navigator: () => <></>,
    Group: () => <></>,
    Screen: () => <></>,
  }),
}))

jest.mock('@react-navigation/native-stack',()=>({
  createNativeStackNavigator: () => ({
    Navigator: () => <></>,
    Group: () => <></>,
    Screen: () => <></>,
  }),
}))

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = (props: any) => <View {...props} />;
  const MockMarker = (props: any) => <View {...props} />;
  const PROVIDER_DEFAULT = 'mocked-provider-default';
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    PROVIDER_DEFAULT: PROVIDER_DEFAULT,
  };
});



jest.mock('react-native-vector-icons/FontAwesome',()=>null)

jest.mock('react-native-razorpay',()=>({
    open:jest.fn()
}))


jest.mock('react-native-permissions', () => {
  return {
    PERMISSIONS: {IOS: {LOCATION_ALWAYS: 'Location_permission'},ANDROID: {ACCESS_FINE_LOCATION: 'andriod.permission.location'}},
    check: jest.fn(),
    request:jest.fn().mockImplementationOnce(()=>Promise.resolve('denied'))
  };
});

jest.mock('@react-native-community/geolocation', () => {
  const Geolocation = {
    getCurrentPosition: jest.fn().mockImplementation((callback: Function) => {
      callback && callback();
    }),
  };
  return Geolocation
});

test("App",()=>{
  render(<App />)
})
