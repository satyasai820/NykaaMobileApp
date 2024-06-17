
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import { View, Text, StyleSheet, Image } from 'react-native';

import OrderScreen from '../Components/AccountOrdersScreen';
import Wallet from '../Components/AccountWalletScreen';
import Wishlist from '../Components/AccountWishlistScreen';
import BottomNavigationTabs from './BottomNavigationTabs';
import MyProfile from '../Components/AccountMyProfileScreen';
import InnerCategoriesComponent from '../Components/CategoriesComponents/InnerCategoriesComponent';
import HeaderRightComponentView from '../Components/HeaderRightComponentView';
import MakeUpComponent from '../Components/CategoriesComponents/MakeUpComponent';
import ProductComponent from '../Components/CategoriesComponents/ProductScreen';

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
                    <Stack.Screen name='Category' component={InnerCategoriesComponent} options={{
                        headerTitle: '',
                        headerRight: () => <HeaderRightComponentView display='none'  />,
                        
                    }}/>
                    <Stack.Screen name='Makeup' component={MakeUpComponent} options={{
                        headerTitle: '',
                        headerRight: () => <HeaderRightComponentView display='none'  />,
                        
                    }}/>
                    <Stack.Screen name='Product' component={ProductComponent} options={{
                       
                        headerTitle : () => (
                            <View>
                            <Image source={require('../assets/nykaa-1.png')} style={{ width: 80, height: 20 }} />
                    </View>
                        ),
                        headerRight: () => (
                            <View style={styles.container}>
                            <View>
                                <Ionicons style={[styles.innerContainer]} name="search-outline" size={25} />
                            </View>
                            <View>
                                <Ionicons style={styles.innerContainer} name="heart-outline" size={25}/>
                            </View>
                            <View>
                                <Ionicons style={styles.innerContainer} name="bag-outline" size={25} />
                            </View>
                        </View>
                        ),
                        
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>

        </>
    )
}

export default StackNavigation;

const styles = StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    innerContainer : {
        paddingHorizontal:10
    },
   
})