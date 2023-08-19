import {fireEvent, render} from '@testing-library/react-native';
import Maps from '../src/components/Maps';
import MapView from 'react-native-maps';

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
jest.mock('react-native-vector-icons/FontAwesome', () => () => <></>);

jest.mock('react-native-permissions', () => {
  return {
    PERMISSIONS: {
      IOS: {LOCATION_ALWAYS: 'Location_permission'},
      ANDROID: {ACCESS_FINE_LOCATION: 'andriod.permission.location'},
    },
    check: jest
    .fn()
    .mockImplementation(() => Promise.resolve('granted'))
    .mockImplementationOnce(() => Promise.resolve('denied')),
    request: jest
      .fn()
      .mockImplementation(() => Promise.resolve('granted'))
      .mockImplementationOnce(() => Promise.resolve('denied')),
  };
});

jest.mock('@react-native-community/geolocation', () => {
  const Geolocation = {
    getCurrentPosition: jest.fn().mockImplementation((callback: Function) => {
      callback && callback();
    }),
  };
  return Geolocation;
});


describe("ios map premissions",()=>{
  it("denied permission",()=>{
    const {getByTestId} = render(<Maps />);
    const button = getByTestId('AccessLocation');
    fireEvent.press(button);
  })
  // it("denied permission",()=>{
  //   const {getByTestId} = render(<Maps />);
  //   const button = getByTestId('AccessLocation');
  //   fireEvent.press(button);
  // })

})

describe("adriod map premissions",()=>{

  it("granted permission",()=>{
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
      Linking: {
        openSettings: jest.fn(),
      },
    }));
    const {getByTestId} = render(<Maps />);
    const button = getByTestId('AccessLocation');
    fireEvent.press(button);
  })
})
