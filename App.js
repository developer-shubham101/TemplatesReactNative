/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
  
import ContactsScreen from './src/ContactsScreen'
import HomeScreen from './src/HomeScreen'
import WhatsAppCall from './src/WhatsAppCall'
import ChatScreen from './src/ChatScreen'
import FacebookPost from './src/FacebookPost'
import ShopProduct from './src/ShopProduct'
import Craigslist from './src/Craigslist'
import TodoList from './src/TodoList'
import PlayGroundScreen from './src/PlayGroundScreen'


import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    ContactsScreen: {
        screen: ContactsScreen,
    },
    WhatsAppCall: {
        screen: WhatsAppCall,
    },
    ChatScreen: {
        screen: ChatScreen,
    },
    FacebookPost: {
        screen: FacebookPost,
    },
    ShopProduct: {
        screen: ShopProduct,
    },
    Craigslist: {
        screen: Craigslist,
    },
    TodoList: {
        screen: TodoList,
    },
    PlayGroundScreen: {
        screen: PlayGroundScreen,
    },
    
}, {
        initialRouteName: 'PlayGroundScreen',
    });


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

