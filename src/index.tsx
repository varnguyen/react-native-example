import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    IntroScreen,
    HomeScreen,
    Dashboard,
} from './screens'

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                />
                <Stack.Screen
                    name="ForgotPasswordScreen"
                    component={ForgotPasswordScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
