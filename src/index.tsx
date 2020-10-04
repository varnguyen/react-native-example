import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    IntroScreen,
    HomeScreen,
    Dashboard,
    FeedScreen,
    ProfileScreen,
    NotificationsScreen,
} from './screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// const commonScreens = {
//     Dashboard: Dashboard,
// }

// const authScreens = {
//     Login: LoginScreen,
//     Register: RegisterScreen,
//     ForgotPassword: ForgotPasswordScreen,
// }

// const userScreens = {
//     Home: HomeScreen,
// }

const MyTabs = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#e91e63',
        }}>
        <Tab.Screen
            name="Feed"
            component={FeedScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }: any) => (
                    <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }: any) => (
                    <MaterialCommunityIcons
                        name="bell"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }: any) => (
                    <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={size}
                    />
                ),
            }}
        />
    </Tab.Navigator>
)

const App = () => {
    const isLoggedIn = false
    {
        /* {Object.entries({
                    // Use the screens normally
                    // ...commonScreens,
                    // Use some screens conditionally based on some condition
                    ...(isLoggedIn ? userScreens : authScreens),
                }).map(([name, component], index) => (
                    <Stack.Screen
                        key={index}
                        name={name}
                        component={component}
                    />
                ))} */
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="IntroScreen"
                    component={IntroScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Home" component={MyTabs} />

                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPasswordScreen"
                    component={ForgotPasswordScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            {/* <MyTabs /> */}
        </NavigationContainer>
    )
}

export default App
