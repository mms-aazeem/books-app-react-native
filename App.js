import * as React from 'react';
import 'react-native-gesture-handler'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Index from "./pages/Index";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import CplusBooks from "./pages/CplusBooks";
import PhpBooks from "./pages/PhpBooks";
import DotNetBooks from "./pages/DotNetBooks";
import SearchBooks from "./pages/SearchBooks";




const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="C++ Books" component={CplusBooks} options={{headerShown: false}}/>
      <Tab.Screen name="PHP Books" component={PhpBooks} options={{headerShown: false}}/>
      <Tab.Screen name=".NET Books" component={DotNetBooks} options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={SearchBooks} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}


export default () => (
  <NavigationContainer>
    <stack.Navigator>

      <stack.Screen 
        name="Index" 
        component={Index} 
        options={{headerShown: false}} 
      />
      <stack.Screen 
        name="Home" 
        component={HomeTab} 
        options={{headerShown: false}}
      />
      <stack.Screen 
        name="LogIn" 
        component={LogIn} 
        options={{headerShown: false}}
      />
      <stack.Screen 
        name="Register" 
        component={Register} 
        options={{headerShown: false}}
      />
      <stack.Screen 
        name="CplusBooks" 
        component={CplusBooks}
        options={{headerShown: false}} 
      />
      <stack.Screen 
        name="PhpBooks" 
        component={PhpBooks}
        options={{headerShown: false}} 
      />
      <stack.Screen 
        name="DotNetBooks" 
        component={DotNetBooks}
        options={{headerShown: false}} 
      />
        
    </stack.Navigator>
  </NavigationContainer>
);