import { act, render, screen } from "@testing-library/react-native"
import BottomTab from "../src/Navigation/BottomTab"


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
  

  jest.mock('react-native-maps',()=>({
    default:{
       MapView: ()=><></>
    },
    Marker:()=><></>
  }))
  
  jest.mock('react-native-vector-icons/FontAwesome',()=>'FontAwesome')

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

jest.mock('@react-native-community/geolocation',()=>({
  Geolocation:{
    getCurrentPosition:jest.fn()
  }
}))

test("bottom tab",()=>{
    render(<BottomTab />)
    const bottomTab=screen.getAllByTestId('BottomTab')
    // console.log(bottomTab[0].props.children.props.children)
    const TabBarIcon = bottomTab[0].props.children.props.children;
        for (let i = 0; i < TabBarIcon.length; i++) {
            act(() => {
                TabBarIcon[i].props.options.tabBarIcon({ color: "hsla(220, 100%, 24%, 1)" ,focused: true })
            })
            act(() => {
                TabBarIcon[i].props.options.tabBarIcon({ color: "hsla(220, 100%, 24%, 1)" ,focused: true })
            })
        }
})