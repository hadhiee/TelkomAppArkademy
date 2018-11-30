import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Body from '../components/Body';
export default class Home extends React.Component {
    //eksekusi awal
    constructor() {
        super();
        alert('Cons')
    }
    //dieksekusi sebelum render
    //biasanya untuk pengambilan data lewat API
    //deprecated
    componentWillMount() {
        alert('Will')
        console.log('jalan will');
    }

    componentDidMount() {
        console.log("ini did mount");
    }

    onPressButton1 = () => {
        alert('pressed!')
    }
    onPressButton2 = () => {
        alert('ditekan!')
    }
    handleNav = () => {
        this.props.navigation.navigate('Counter');

    }
    handleNavNativeBase = () => {
        this.props.navigation.navigate('NativeBase');

    }
   
    render() {
        console.log("ini render");
        return (

            <View style={styles.container}>
                {/*Pemanggilan component Header */}
                {/* <Header text="LIST" /> */}

                <Button
                    title='Nav to Counter Page'
                    color='black'
                    onPress={this.handleNav}

                />
                <Button
                    title='Nav to Native Base'
                    color='black'
                    onPress={this.handleNavNativeBase}

                />
                
                {/* pemanggilan component Body */}
                <Body />


            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // paddingTop: 50
    }
});
