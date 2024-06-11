import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import BeautyScreen from "../Screens/BeautyScreen";
import OfferScreen from "../Screens/OffersScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import PlayScreen from "../Screens/PlayScreen";
import AccountScreen from "../Screens/AccountScreen";
import { Text, Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons, MaterialIcons, Feather,Fontisto } from '@expo/vector-icons';
import HeaderRightComponentView from "../Components/HeaderRightComponentView";

const BottomNavigationTabs = () => {
    const TabsScreen = createBottomTabNavigator();
    return (
        <>
            <NavigationContainer>
                <TabsScreen.Navigator screenOptions={{
                    headerTintColor: '#E80071',
                    tabBarActiveTintColor: '#E80071',
                }}>
                    <TabsScreen.Screen name='Beauty' component={BeautyScreen} options={{
                        headerLeft: () => (
                            <>
                                <View style={styles.container}>
                                    <View>
                                        <Ionicons name="chevron-down" size={20} />
                                    </View>
                                    <View>
                                        <Image source={require('../assets/nykaa-1.png')} style={{ width: 90, height: 20 }} />
                                    </View>
                                </View>
                            </>
                        ), headerTitle: () => null, tabBarIcon: ({focused,color, size}) => (
                            <>
                            <Image source={focused ? require('../assets/nykaa-tab-1.png') : require('../assets/nykaa grey.png')} style={{ width: 25, height: 20 }} />
                            </>
                        ),
                        headerRight : () => <HeaderRightComponentView />
                        
                    }} />
                    <TabsScreen.Screen name="Offers" component={OfferScreen} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Fontisto name="shopping-sale" color={color} size={size} />
                        )
                    }} />
                    <TabsScreen.Screen name="Categories" component={CategoriesScreen} options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="category" color={color} size={size} />
                        )
                    }} />
                    <TabsScreen.Screen name="Play" component={PlayScreen} options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="play" color={color} size={size} />
                        )
                    }} />
                    <TabsScreen.Screen name="Account" component={AccountScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="account-outline" size={size} color={color} />
                            )
                        }}
                    />
                </TabsScreen.Navigator>
            </NavigationContainer>
        </>
    )
}

export default BottomNavigationTabs;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20
    }
})