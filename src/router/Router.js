import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screen/Home";
import Login from "../screen/auth/Login";
import Register from "../screen/auth/Register";
import Forget from "../screen/auth/Forget";
import Splash from "../screen/splash/Splash";


const Stack = createNativeStackNavigator();
const AppRouter = () => {
    return (
        //what is the route you want initialize name into initialRouteName var
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Forget" component={Forget} />
                <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppRouter;