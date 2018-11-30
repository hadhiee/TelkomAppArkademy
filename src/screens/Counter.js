import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../components/Header';
import BodyCounting from '../components/BodyCounting';
export default class Counter extends React.Component {

  render() {
    console.log("ini render");
    return (

      <View style={styles.container}>
        {/*Pemanggilan component Header */}
        {/* <Header text="COUNTER APPS"/> */}


        <BodyCounting text='0'/>

        
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //paddingTop: 50
  }
});
