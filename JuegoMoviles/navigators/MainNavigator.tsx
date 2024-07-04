import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import JuegoMemoria from "../screens/JuegoMemoria";
import ScoreScreen from "../screens/ScoreScreen";
import { RegisterScreen } from '../screens/RegisterScreen';
import { PasswordScreen } from '../screens/PasswordScreen';

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Juego" component={JuegoMemoria} />
            <Tab.Screen name="Score" component={ScoreScreen} />
        </Tab.Navigator>
    );
}

// Stack Navigator
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Registrarse" component={RegisterScreen} />
            <Stack.Screen name="Recuperar" component={PasswordScreen} />
            <Stack.Screen name="BottomTab" component={MyTabs} />
        </Stack.Navigator>
    );
}

// Main Navigator Component
export default function Navegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}