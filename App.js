import 'react-native-gesture-handler'; //must be first import
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import axios from 'axios';
import Home from './screens/Home'
import Profile from './screens/Profile';

//initial phase 
axios.defaults.baseURL = 'https://dummyjson.com/'


//functional phase
const App = () => {

  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaView style={{flex:1, marginTop:Platform.OS=='android'?StatusBar.currentHeight:0}}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} options={{headerShown:false}}/>
          <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    
  )
}

export default App;


/*
  npm i axios
  axios: asyncronous http request handler.
*/