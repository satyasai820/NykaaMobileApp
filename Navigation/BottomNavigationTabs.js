import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BeautyScreen from "../Screens/BeautyScreen";
import OfferScreen from "../Screens/OffersScreen";
import CategoriesScreen from "../Screens/CategoriesScreen";
import PlayScreen from "../Screens/PlayScreen";
import AccountScreen from "../Screens/AccountScreen";
import HeaderRightComponentView from "../Components/HeaderRightComponentView";
import Imports from "../Components/Imports";


const TabsScreen = createBottomTabNavigator();
const BottomNavigationTabs = () => {

    return (
        <>

            <TabsScreen.Navigator screenOptions={{
                headerTintColor: '#E80071',
                tabBarActiveTintColor: '#E80071',
            }}>
                <TabsScreen.Screen name='Beauty' component={BeautyScreen} options={{
                    headerLeft: () => (
                        <>
                            <Imports.View style={styles.container}>
                                <Imports.View>
                                    <Imports.Ionicons name="chevron-down" size={20} />
                                </Imports.View>
                                <Imports.View>
                                    <Imports.Image source={require('../assets/nykaa-1.png')} style={{ width: 90, height: 20 }} />
                                </Imports.View>
                            </Imports.View>
                        </>
                    ), headerTitle: () => null, tabBarIcon: ({ focused, color, size }) => (
                        <>
                            <Imports.Image source={focused ? require('../assets/nykaa-tab-1.png') : require('../assets/nykaa grey.png')} style={{ width: 25, height: 20 }} />
                        </>
                    ),
                    headerRight: () => <HeaderRightComponentView />

                }} />
                <TabsScreen.Screen name="Offers" component={OfferScreen} options={{
                    headerTitleAlign:"center",
                    tabBarIcon: ({ color, size }) => (
                        <Imports.Fontisto name="shopping-sale" color={color} size={size} />
                    )
                }} />
                <TabsScreen.Screen name="Categories" component={CategoriesScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Imports.MaterialIcons name="category" color={color} size={size} />
                    ),
                    headerLeft: () => (
                        <>
                            <Imports.View style={styles.container}>
                                    <Imports.Image source={require('../assets/nykaa-1.png')} style={{ width: 90, height: 20 }} />
                                
                            </Imports.View>
                        </>
                    ),
                    headerTitle:() => null,
                    headerRight :  () => <HeaderRightComponentView display='none'/>
                }} />
                <TabsScreen.Screen name="Play" component={PlayScreen} options={{
                    headerTitleAlign:'center',
                    tabBarIcon: ({ color, size }) => (
                        <Imports.Feather name="play" color={color} size={size} />
                    )
                }} />
                <TabsScreen.Screen name="Account" component={AccountScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Imports.MaterialCommunityIcons
                                name="account-outline" size={size} color={color} />
                        ),
                        headerTitle: () => null,
                        headerRight: () => <HeaderRightComponentView />
                    }}
                />
            </TabsScreen.Navigator>
        </>
    )
}

export default BottomNavigationTabs;


const styles = Imports.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20
    }
})