import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface Iprops{
    route?:any
}

interface Istate{
    paymentsHistory:any
}

export default class History extends Component<Iprops,Istate> {

    constructor(props:Iprops){
        super(props)
        this.state={
            paymentsHistory:this.props.route.params
        }
    }

  render() {
    console.log(this.props.route.params,"payments")
    const {payments,name,email,id}=this.props.route.params
    console.log(this.state.paymentsHistory,"ppo")
    const {paymentsHistory}=this.state
    return (
      <View style={styles.main}>
        {/* <FlatList data={paymentsHistory} keyExtractor={(item:any)=>item.id} renderItem={(item)=>{
           const {name,email,id}=paymentsHistory
            return <View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.price}>Rs.200</Text>
              <View>
                <Text style={styles.user}> {name}</Text>
                <Text style={styles.user}> {email} </Text>
              </View>
            </View>
  
            <Text style={styles.optnl}> Payment ID:{id} </Text>
          </View>
        }} /> */}

<View style={styles.container}>
            <View style={styles.block}>
              <Text style={styles.price}>Rs.200</Text>
              <View>
                <Text style={styles.user}> {name}</Text>
                <Text style={styles.user}> {email} </Text>
              </View>
            </View>
  
            <Text style={styles.optnl}> Payment ID:{id} </Text>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#73787C',
    flex: 1,
  },
  container: {
    backgroundColor: '#FBC8B7',
    marginHorizontal: responsiveWidth(2),
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: responsiveHeight(1),
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(5),
  },
  price: {
    fontSize: responsiveFontSize(4),
    width: responsiveWidth(30),
    color: 'white',
  },
  user: {
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
  optnl: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    marginHorizontal: responsiveWidth(5),
  },
});
