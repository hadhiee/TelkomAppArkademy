import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                {/* Pemanggilan conponent Left */}
                <NavButtton text="BACK" />
                <Text style={styles.terserah}>
                    {this.props.text}
                    {/* Pemanggilan conponent Right */}

                </Text>
                <NavButtton text="NEXT" />
            </View>
        )
    }
}
//LEFT
class NavButtton extends React.Component {
    render() {
        return (
            <View style={styles.containerButton}>
                <Text style={styles.textButton}>{this.props.text}</Text>
            </View>
        )
    }
}
//RIGHT
// class Right extends React.Component {
//     render() {
//         return (
//             <View style={styles.containerButton}>
//                 <Text style={styles.textButton}>{this.props.text}</Text>
//             </View>
//         )
//     }
// }
const styles = StyleSheet.create({
    terserah: {
        fontSize: 20,
        color: 'white',
        alignItems: "center",
    },
    header: {
        color: 'white',
        fontSize: 50,
        height: 50,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textButton: {
        color: "white",
        alignItems: "center",
        margin: 10,
    },
    containerButton: {
        alignItems: "center",
        fontSize: 30,
        //margin: 30,
        backgroundColor: "red",
        fontSize: 50,
        height: 50,
        justifyContent: "center",
    }
})
