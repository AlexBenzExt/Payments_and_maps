import React, { Component } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


interface Iprops{
  navigation?:any
}

interface Istate{
  name:string,
  email:string,
  optional:string,
  payments:{}[]
}

export default class Payment extends Component<Iprops,Istate> {

  state:Istate={
    name:'',
    email:'',
    optional:'',
    payments:[]
  }

  handleCheckout=async()=>{
    const {name,email,optional,payments}=this.state
    let options:any = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_5i2EhFQWEM9sDb',
      amount: '5000',
      name: 'Acme Corp',
      order_id: '',//Replace this with an order_id created using Orders API.
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar'
      },
      theme: {color: '#53a20e'}
    }
    if(name!=="" ){
      const value=await RazorpayCheckout.open(options)
      const id= value?.razorpay_payment_id
      console.log(id,"idd")
     if(id!==undefined){
      this.setState({payments:[...payments,{id,name,email}]})
      this.props.navigation.navigate("History",{id,name,email})
     }
    }

  }

  render() {
    const {name,email,optional,payments}=this.state
    console.log(payments)
    return (
      <View style={styles.main}>

<Text style={styles.razorTxt}>RazorPay</Text>
{/* <View style={styles.top}>

</View> */}
<View style={styles.razor}>
  <Text style={styles.priceTxt}>Total Price</Text>
<Text style={styles.price}>Rs 200.00</Text>
<TextInput testID='NameID' onChangeText={(text)=>this.setState({name:text})} value={name}  style={styles.input} placeholder='Enter your name' />
<TextInput testID='EmailID' onChangeText={(text)=>this.setState({email:text})} value={email}   style={styles.input} placeholder='Enter your email' />
<TextInput testID='OptnlID'  onChangeText={(text)=>this.setState({optional:text})} value={optional}   style={styles.inputOpt} placeholder='Optional text' />
</View>
        <Pressable testID='PaymentID' onPress={this.handleCheckout} style={styles.button}>
       <Text style={styles.btnTxt}>Checkout</Text>
        </Pressable>
        {/* <View style={styles.bottom}>

</View> */}
      </View>
    )
  }
}

const styles=StyleSheet.create({
main:{
  flex:1,
  // backgroundColor:"#253980"
  backgroundColor:"#2e47ae"
},
top:{
  height:responsiveHeight(20),
  width:responsiveWidth(100),
 backgroundColor:"#2e47ae",
 position:"absolute",
 borderBottomEndRadius:90,
 top:0

//  top:20
},
bottom:{
  height:responsiveHeight(22),
  width:responsiveWidth(100),
 backgroundColor:"#2e47ae",
 position:"absolute",
//  borderBottomEndRadius:110,
bottom:0,
borderTopLeftRadius:50,


},
razor:{
  width:responsiveWidth(100),
  height:responsiveHeight(50),
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"white",
  // borderTopEndRadius:20,
 borderTopLeftRadius:120,
 borderBottomEndRadius:100,
//  borderEndWidth:10,
//  borderStartWidth:8,
 borderBlockEndColor:"#00c5e2",
 borderBottomWidth:2,
 borderTopColor:"#00c5e2",
 borderTopWidth:2,
 elevation:20,
 shadowColor:"red",
 
},
razorTxt:{
  zIndex:2,
  fontSize:responsiveFontSize(4),
  color:"white",
  textAlign:"center",
  marginTop:responsiveHeight(10)
  // fontFamily:"cursive"
},
  button:{
    width:responsiveWidth(80),
    height:responsiveHeight(8),
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#00c5e2",
    borderRadius:10,
    alignSelf:"center",
    marginVertical:responsiveHeight(4)
  },
  btnTxt:{
    color:"white",
    fontSize:responsiveFontSize(2)
  },
  price:{
    fontSize:responsiveFontSize(4),
    color:"#2e47ae",
    backgroundColor:"#ebeff2",
    borderRadius:20,
    paddingHorizontal:responsiveWidth(10),
    paddingVertical:responsiveHeight(2)
  },
  input:{
    width:responsiveWidth(90),
    height:responsiveHeight(6),
    backgroundColor:"#ebeff2",
    borderRadius:10,
    marginTop:responsiveHeight(1)
  },
  inputOpt:{
    width:responsiveWidth(90),
    height:responsiveHeight(10),
    backgroundColor:"#ebeff2",
    borderRadius:10,
    marginTop:responsiveHeight(1)
  },
  priceTxt:{
    fontSize:responsiveFontSize(2)
  },
})
