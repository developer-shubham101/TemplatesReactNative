import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, description: "Contacts Screen", date: "2019-03-25 09:12:00", color: "#228B22", completed: 1, screenId: "ContactsScreen" },
                { id: 2, description: " WhatsAppCall ", date: "2019-03-25 10:23:00", color: "#FF00FF", completed: 0, screenId: "WhatsAppCall" },
                { id: 3, description: "FacebookPost.", date: "2019-03-25 11:45:00", color: "#4B0082", completed: 1, screenId: "ChatScreen" },
                { id: 4, description: "ShopProduct", date: "2019-03-25 09:27:00", color: "#20B2AA", completed: 0, screenId: "FacebookPost" },
                { id: 5, description: "ShopProduct.", date: "2019-03-25 08:13:00", color: "#000080", completed: 0, screenId: "ShopProduct" },
                { id: 6, description: "Craigslist.", date: "2019-03-25 10:22:00", color: "#FF4500", completed: 1, screenId: "Craigslist" },
                { id: 7, description: "TodoList.", date: "2019-03-25 13:33:00", color: "#FF0000", completed: 0, screenId: "TodoList" },
                { id: 8, description: "PlayGroundScreen", date: "2019-03-25 11:56:00", color: "#EE82EE", completed: 0, screenId: "PlayGroundScreen" },
                { id: 9, description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", date: "2019-03-25 15:00:00", color: "#6A5ACD", completed: 0, screenId: "asdasd" },
                { id: 10, description: " Aenean imperdiet. Etiam ultricies nisi vel augues aasde.", date: "2019-03-25 12:27:00", color: "#DDA0DD", completed: 0, screenId: "asdasd" },
            ]
        };
    }

    clickEventListener = (item) => {
        this.props.navigation.navigate(item.screenId)
        // Alert.alert("Item selected: " + item.description)
    }

    __getCompletedIcon = (item) => {
        if (item.completed == 1) {
            return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
        } else {
            return "https://img.icons8.com/flat_round/64/000000/delete-sign.png";
        }
    }

    __getDescriptionStyle = (item) => {
        if (item.completed == 1) {
            return { textDecorationLine: "line-through", fontStyle: 'italic', color: "#808080" };
        }
    }


   

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.tasks}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[styles.card, { borderColor: item.color }]} onPress={() => { this.clickEventListener(item) }}>
                                <Image style={styles.image} source={{ uri: this.__getCompletedIcon(item) }} />
                                <View style={styles.cardContent}>
                                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>{item.description}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#eeeeee"
    },
    tasks: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 10,
    },
    image: {
        width: 25,
        height: 25,
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 6,
    },

    description: {
        fontSize: 18,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
});  