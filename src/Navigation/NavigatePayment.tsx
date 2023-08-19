import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Payment from '../components/Payment'
import History from '../components/History'

const Stack=createNativeStackNavigator()

export default class NavigatePayment extends Component {
  render() {
    return (
<Stack.Navigator>
    <Stack.Screen name="PaymentsPage" component={Payment} />
    <Stack.Screen name="History" component={History} />
</Stack.Navigator>
    )
  }
}
