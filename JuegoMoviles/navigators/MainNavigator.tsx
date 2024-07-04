import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegistroScreens from "../screens/RegistroScreens";
import JuegoMemoria from "../screens/JuegoMemoria";
  



//STACK

  const Stack = createStackNavigator()

  function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false}}/>
            <Stack.Screen name="Registrarse" component={RegistroScreens}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Juego" component={JuegoMemoria}/>
        </Stack.Navigator>
    )
  }

  ////
  export default function Navegador(){

    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
   )
}