import * as React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
//
import cardImag from '../assets/images/card_img.png';
import styles from '../styles/Payment.module.css';

const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.paymentForm}>
        <View style={styles.container_paymentForm_submitBtn}>
          <Text>proceed to check</Text>
        </View>
      </View>
    </View>
  );
};

export default Payment;

        // <View style={styles.container_paymentForm_row}>
        //   {/* billing address section */}
        //   <View style={styles.container_paymentForm_row_col}>
        //     <Text style={styles.container_paymentForm_row_col_title}>
        //       billing address
        //     </Text>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         full name:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="default"
        //         placeholder="Mr. Jon"
        //       />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         email:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="email-address"
        //         placeholder="jon@example.com"
        //       />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         address:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="default"
        //         placeholder="room - street - locality"
        //       />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         city:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="default"
        //         placeholder="new work"
        //       />
        //     </View>
        //     <View style={styles.flex}>
        //       <View style={styles.container_paymentForm_row_col_inputBox}>
        //         <Text
        //           style={styles.container_paymentForm_row_col_inputBox_span}>
        //           state:{' '}
        //         </Text>
        //         <TextInput
        //           style={styles.container_paymentForm_row_col_inputBox_input}
        //           keyboardType="default"
        //           placeholder="USA"
        //         />
        //       </View>
        //       <View style={styles.container_paymentForm_row_col_inputBox}>
        //         <Text
        //           style={styles.container_paymentForm_row_col_inputBox_span}>
        //           zip code:{' '}
        //         </Text>
        //         <TextInput
        //           style={styles.container_paymentForm_row_col_inputBox_input}
        //           keyboardType="default"
        //           placeholder="123 432"
        //         />
        //       </View>
        //     </View>
        //   </View>
        //   {/* payment section */}
        //   <View style={styles.container_paymentForm_row_col}>
        //     <Text style={styles.container_paymentForm_row_col_title}>
        //       payment
        //     </Text>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         card accepted:{' '}
        //       </Text>
        //       <Image style={styles.image} source={cardImag} />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         name of card:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="default"
        //         placeholder="Mr. Jon"
        //       />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         credit card number:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="numeric"
        //         placeholder="1111-2222-3333-4444"
        //       />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_inputBox}>
        //       <Text style={styles.container_paymentForm_row_col_inputBox_span}>
        //         exp month:{' '}
        //       </Text>
        //       <TextInput
        //         style={styles.container_paymentForm_row_col_inputBox_input}
        //         keyboardType="default"
        //         placeholder="january"
        //       />
        //     </View>
        //     <View style={styles.container_paymentForm_row_col_flex}>
        //       <View
        //         style={[
        //           styles.container_paymentForm_row_col_inputBox,
        //           styles.container_paymentForm_row_col_flex_inputBox,
        //         ]}>
        //         <Text
        //           style={styles.container_paymentForm_row_col_inputBox_span}>
        //           exp year:{' '}
        //         </Text>
        //         <TextInput
        //           style={styles.container_paymentForm_row_col_inputBox_input}
        //           keyboardType="numeric"
        //           placeholder="2025"
        //         />
        //       </View>
        //       <View
        //         style={[
        //           styles.container_paymentForm_row_col_inputBox,
        //           styles.container_paymentForm_row_col_flex_inputBox,
        //         ]}>
        //         <Text
        //           style={styles.container_paymentForm_row_col_inputBox_span}>
        //           CVV:{' '}
        //         </Text>
        //         <TextInput
        //           style={styles.container_paymentForm_row_col_inputBox_input}
        //           keyboardType="default"
        //           placeholder="1234"
        //         />
        //       </View>
        //     </View>
        //   </View>
        // </View>
