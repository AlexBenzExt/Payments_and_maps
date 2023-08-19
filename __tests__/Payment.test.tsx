import {fireEvent, render, screen} from '@testing-library/react-native';
import Payment from '../src/components/Payment';


jest.mock('react-native-razorpay', () => ({
  open: jest.fn().mockResolvedValue({razorpay_payment_id: '789879798'}),
}));

jest.mock('react-native-vector-icons/FontAwesome', () => <></>);

const props={navigation:{navigate:jest.fn()}}

describe('payment', () => {
  it('payment', () => {
    const {getByTestId} = render(<Payment {...props}/>);
    const value = getByTestId('PaymentID');
   
    const nameText = getByTestId('NameID');
    const emailText = getByTestId('EmailID');
    const Optnl = getByTestId('OptnlID');
    fireEvent.changeText(nameText, 'abcd');
    fireEvent.changeText(emailText, 'abcd');
    fireEvent.changeText(Optnl, 'abcd');
    expect(nameText.props.value).toEqual('abcd');
    expect(emailText.props.value).toEqual('abcd');
    fireEvent.press(value);
  });
  // it('payment resolved', () => {
  //   jest.mock('react-native-razorpay', () => ({
  //       open: jest.fn().mockRejectedValueOnce("error"),
  //     }));
  //   const {getByTestId} = render(<Payment {...props}/>);
  //   const value = getByTestId('PaymentID');
  //   fireEvent.press(value);
  //   const nameText = getByTestId('NameID');
  //   const emailText = getByTestId('EmailID');
  //   const Optnl = getByTestId('OptnlID');
  //   fireEvent.changeText(nameText, 'abcd');
  //   fireEvent.changeText(emailText, 'abcd');
  //   fireEvent.changeText(Optnl, 'abcd');
  //   // RazorpayCheckout.open.
  //   // console.log(emailText.props.onChangeText(),"email")
  //   // console.log(nameText.props.value,"name")
  //   expect(nameText.props.value).toEqual('abcd');
  //   expect(emailText.props.value).toEqual('abcd');
  // });
});
