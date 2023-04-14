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
                <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
                <Stack.Screen options={{headerShown:false}} name="Forget" component={Forget} />
                <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppRouter;