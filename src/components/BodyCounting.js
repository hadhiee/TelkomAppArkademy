import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class BodyCounting extends React.Component {
    //deklarasi state counter
    state = {
        angka: 0,
        color : ''
    }
    componentDidMount() {
        
        setInterval(() => {
            this.setState({
                color : '#'+Math.floor(Math.random()*16777215).toString(16)
            })
        }, 1000)
    }
    render() {
        return (
            <View style={[gaya.container, {'backgroundColor' : this.state.color}]}>
                <Button
                    title="RESET"
                    color="red"
                    onPress={this.onCLEAR}
                />
                <Text>{this.state.color}</Text> 
                <Text style={gaya.fontButton} title='nomor'>
                    {/* pemanggilan state counter */}
                    {this.state.angka}
                </Text>
                <Button
                    title="PLUS"
                    color="red"
                    onPress={this.onPLUS2}
                />
                <Button
                    title="MINUS"
                    color="blue"
                    onPress={this.onMINUS}
                />
            </View>
        )
    }
    onCLEAR = () => {
        this.setState((state, props) => {
            return {
                angka: 0
            }
        })
    }
    onPLUS = () => {
        this.setState((state, props) => {
            return {
                angka: state.angka + 1
            }
        })
    }
    onMINUS = () => {
        this.setState((state, props) => {
            return {
                angka: state.angka - 1
            }
        })
    }
    onPLUS2 = () => {
        const counterSkr = this.state.angka;
        this.setState({
            angka: counterSkr + 1
        })
    }
    
    
}




const gaya = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red'
    },
    fontButton: {
        color: 'green',
        fontSize: 200,
        margin: 20
    },
    change : {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})