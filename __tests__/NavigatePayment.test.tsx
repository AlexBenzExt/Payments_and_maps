import { render } from "@testing-library/react-native"
import NavigatePayment from "../src/Navigation/NavigatePayment"

jest.mock('react-native-razorpay',()=>({
  open:()=>{}
}))


jest.mock('@react-navigation/native-stack',()=>({
    createNativeStackNavigator: () => ({
      Navigator: () => <></>,
      Group: () => <></>,
      Screen: () => <></>,
    }),
  }))

test("navigate to payments",()=>{
    render(<NavigatePayment />)
})