import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function Routes(){

    return(

        <Tab.Navigator>

            <Tab.Screen name='Create' component={Home} 
              options={{ headerShown: false,
                tabBarIcon: ({})=>(
                  <AntDesign name="home" size={24} color="black" />)
                }}
            />

        </Tab.Navigator>

    );

}

  return (
    
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='Routes' component={Routes} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
        
      </Stack.Navigator>

    </NavigationContainer>

    
  );
}