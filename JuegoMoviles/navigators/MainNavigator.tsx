import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import JuegoMemoria from "../screens/JuegoMemoria";
import ScoreScreen from "../screens/ScoreScreen";

import { PasswordScreen } from '../screens/PasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PerfilScreen from '../screens/PerfilScreen';
import { SECONDARY_COLOR } from '../commons/constantsColor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagenPerfilScreen from '../screens/ImagenPerfilScreen';
import CambioContraseña from '../screens/CambioContraseña';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Welcome' screenOptions={{tabBarActiveTintColor: SECONDARY_COLOR, tabBarStyle: {backgroundColor:'black'},headerShown:false}}>
            <Tab.Screen name="Welcome" component={WelcomeScreen}
            options={{tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),}}/>
            <Tab.Screen name="Juego" component={JuegoMemoria}
            options={{tabBarIcon: ({ color, size }) => (
                <Icon name="controller-classic" color={color} size={size} />
              ),}}/>
            <Tab.Screen name="Score" component={ScoreScreen} 
            options={{tabBarIcon: ({ color, size }) => (
                <Icon name="database" color={color} size={size} />
              ),}}/>
            <Tab.Screen name="Perfil" component={PerfilScreen} 
            options={{tabBarIcon: ({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              ),}}/>
        </Tab.Navigator>
    );
}

// Stack Navigator
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='BottomTab'>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="Registrarse" component={RegisterScreen} options={{headerShown:false}} />
            <Stack.Screen name="Recuperar" component={PasswordScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ImagenPerfil" component={ImagenPerfilScreen} options={{headerShown:false}}/>
            <Stack.Screen name="CambiarContraseña" component={CambioContraseña} options={{headerShown:false}}/>
            <Stack.Screen name="BottomTab" component={MyTabs} options={{headerShown:false}}/>
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