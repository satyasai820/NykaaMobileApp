
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import OrderScreen from '../Components/AccountOrdersScreen';
import Wallet from '../Components/AccountWalletScreen';
import Wishlist from '../Components/AccountWishlistScreen';
import BottomNavigationTabs from './BottomNavigationTabs';
import { View, Text } from 'react-native';
import MyProfile from '../Components/AccountMyProfileScreen';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Main' component={BottomNavigationTabs} options={{
                        headerShown:false
                    }} />
                    <Stack.Screen name='Orders' component={OrderScreen} />
                    <Stack.Screen name='MyProfile' component={MyProfile} options={{
                        headerTitle:(() => (
                            <View >
                                <Text style={{fontSize:18, fontWeight:'bold'}}>My Account</Text>
                            </View>
                        ))
                    }} />
                    <Stack.Screen name='Wallet' component={Wallet} options={{
                        headerTitle:'Nykaa Wallet',
                        headerTitleAlign:'center'
                    }} />
                    <Stack.Screen name='Wishlist' component={Wishlist} />
                </Stack.Navigator>
            </NavigationContainer>

        </>
    )
}

export default StackNavigation;