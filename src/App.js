import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './App.sass';
import {Buttons} from './Buttons';
import {Link} from './Link';
import {ProfileCard} from './ProfileCard';
import Payment from './screens/Payment';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView className={styles.wrapper}> */}
          <Payment />
          {/* <Link
            description="Profile card from"
            url="https://themes.getbootstrap.com/products/application"
          />
          <ProfileCard />
          <Link
            description="Buttons from"
            url="https://codepen.io/coolzilj/pen/ImlEG"
          />
          <Buttons /> */}
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}
