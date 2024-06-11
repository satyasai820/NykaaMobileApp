import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const StackNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Home' component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default StackNavigation;