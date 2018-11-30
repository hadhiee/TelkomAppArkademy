import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default class Body extends React.Component {
    state = {
        showContent: 'hidden',
        color : false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showContent: 'show'
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                color : true
            })
        }, 2000)
    }
    // alternatif
    task = () => {
        // change variable state
        this.setState({
            showContent: 'show'
        })
    }

    renderContent = () => {
        if (this.state.showContent == 'hidden') {
            return null
        } else {
            return (
                <View style={styles.body}><Text style={{ fontSize: 40 }}>Welcome to duck world!</Text>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: 'https://i.gifer.com/4foo.gif' }}
                    />

                    <Button
                        onPress={this.onPressButton1}
                        title="Button 1"
                    //color="#fff"

                    />
                    <Button
                        onPress={this.onPressButton2}
                        title="Button 2"
                        color='red'

                    />
                    
                    <AppChild /></View>

            )
        }
    }
    onPressButton1 = () => {
        alert('pressed!')
    }
    onPressButton2 = () => {
        alert('ditekan!')
    }
    onPressButton3 = () => {
        alert('ditekan!')
    }
    render() {
        return (
            <View style={styles.body}>
                {this.renderContent()}
            </View>
        )
    }
}
class AppChild extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: "orange", width: "100%", alignItems: "center", height: 50 }}>
                <Text style={{ fontSize: 40 }} >Child App</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    body: {
        backgroundColor: 'yellow',
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        flex: 1
    }

});