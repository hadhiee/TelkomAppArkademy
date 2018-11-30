import React from 'react';
import { createStackNavigator, createNavigationContainer } from 'react-navigation'

import Home from './src/screens/Home';
import Counter from './src/screens/Counter'
import NativeBase from './src/screens/NativeBase'
import Form from './src/screens/Forms'
// deklarasi router
const App = createStackNavigator({
  Home: {//route name
    screen: Home,//screen
    navigationOptions:{//styling
      title:'Home'
    }
  },
  Counter: {//route name
    screen: Counter,//screen
    navigationOptions:{//styling
      title:'Counter'
    }
  },
  NativeBase: {//route name
    screen: NativeBase,//screen
    navigationOptions:{//styling
      title:'NativeBase'
    }
  },
  Forms: {//route name
    screen: Form,//screen
    navigationOptions:{//styling
      title:'Forms'
    }
  }
});

export default createNavigationContainer(App);