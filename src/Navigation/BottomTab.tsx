import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Maps from '../components/Maps'
import Payment from '../components/Payment'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import NavigatePayment from './NavigatePayment'

const Tab=createBottomTabNavigator()

export default class BottomTab extends Component {
  render() {
    return (
     <NavigationContainer>
      <View testID='BottomTab' style={{flex:1}}>
      <Tab.Navigator screenOptions={{headerShown:false,
        tabBarLabelStyle:{
          fontSize:responsiveFontSize(2)
        },
        tabBarActiveTintColor:"hsla(220, 100%, 24%, 1)"
        }}>
            <Tab.Screen name="Maps" component={Maps}  options={{
              tabBarIcon:({color})=><FontAwesome name='map' color={color} size={responsiveWidth(5)}  />
            }} />
            <Tab.Screen name="Payments" component={NavigatePayment}  options={{
              tabBarIcon:({color})=><FontAwesome color={color} name='rupee' size={responsiveWidth(6)}   />
            }} />
        </Tab.Navigator>
      </View>
      
     </NavigationContainer>
    )
  }
}
