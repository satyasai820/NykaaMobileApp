import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrderScreen from '../Components/AccountOrdersScreen';


const StackNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} />
                    <Stack.Screen name='Orders' component={OrderScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default StackNavigation;