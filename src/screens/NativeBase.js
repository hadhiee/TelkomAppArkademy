import React from 'react';
import { Container, Content, List, ListItem, Text, Fab, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios'; // lib untuk get data

export default class NativeBase extends React.Component {

    // data = [
    //     {
    //         name: 'Budi',
    //         umur: 21
    //     },
    //     {
    //         name: 'Andi',
    //         umur: 24
    //     },
    //     {
    //         name: 'Ana',
    //         umur: 20
    //     },
    //     {
    //         name: 'Candra',
    //         umur: 23
    //     }
    // ]
    // deklarasi data kosong
    state = {
        data: [],
        isLoading: false
    }

    componentDidMount() {
        //set loading true
        this.setState({
            isLoading: true
        })
        //get data online dari api
        axios({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'GET', //enum POST, PUT, GET, DELETE
        }).then((succResult) => {
            console.log(succResult)
            this.setState({
                data: succResult.data
            })
            this.setState({
                data: succResult.data,
                isLoading: false
            })
        }).catch((errResult) => {
            alert(errResult)
        })
    }

    renderList = (item, index) => {
        return (
            <ListItem key={item.id}>
                <Text>id: {item.id} - title:{item.title}</Text>
            </ListItem>
        )
    }

    handleNavForm = () => {
        this.props.navigation.navigate('Forms');

    }
    render() {

        return (

            <Container>
                {this.state.isLoading === true ? <Spinner /> : null}
                <Content>
                    <List>
                        {this.state.data.map(this.renderList)}

                    </List>
                </Content>
                <Fab
                    active={true}
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={this.handleNavForm}>
                    <MaterialIcons name="add" />
                </Fab>
            </Container>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#000'
        //paddingTop: 50
    }
});
