import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AccountComponents from "../Components/AccountComponents";
import AccountFooterComponent from "../Components/AccountFooterComponent";
import { useState } from "react";
import ModalFormComponent from "../Components/AccountModalFormComponent";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {

    const navigation = useNavigation();

    const dataOfText = [{ m1: 'Order', m2: 'Check your orders status (track, return, cancle etc)', icon: 'tablet-portrait-outline',path:'Orders' },{ m1: 'Profile', m2: 'Edit/update your profike details & more', icon: 'person-outline', path:'MyProfile' }, { m1: 'Wallet', m2: 'Check your Nykaa Wallet balance', icon: 'card-outline', path:'Wallet' }, { m1: 'Wishlist', m2: 'Buy from items saved in Wishlist', icon: 'heart-outline', path:'Wishlist'},]

    const textData = [ { m1: 'Loyalty Program', m2: 'Shop for ₹2000 to be become a member', icon: 'school-outline' }, { m1: 'Beauty Portflio', m2: 'Personalise your Nykaa App experience', icon: 'sparkles-sharp' }, { m1: 'Help and Support', m2: 'Get help for your account or orders', icon: 'help-circle-outline' }, { m1: 'Addresses', m2: 'Manage your saved Saved address', icon: 'id-card-outline' }, { m1: 'Payment Methods', m2: 'Manage your saved payment methods ', icon: 'browsers-outline' }, { m1: 'MyCoupons', m2: 'Browse coupons to get discount on Nykaa', icon: 'ticket-outline',  }, ]

    const [open, setOpen] = useState(false);

    const handleModalFormOpen = () => {
        setOpen(true);
    }

    const handleCloseModal = () => setOpen(false);

    const handleNavigeFunction = (path) => {
        navigation.navigate(path)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <View>
                            <Text style={styles.textStyle}>Hey</Text>
                            <Text style={styles.textStyle}>there!</Text>
                        </View>
                        <View style={styles.imageView}>
                            <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg' }} />
                        </View>
                    </View>
                    <View style={[styles.innerContainer, { marginTop: 10 }]}>
                        <View style={[styles.innerContainer, { flex: 1 }]}>
                            <Text onPress={handleModalFormOpen} style={{ fontSize: 15, fontWeight: 'bold', marginRight: 6, color: '#E80071' }}>Signup or Login </Text>
                            <AntDesign name="arrowright" size={15} color='#E80071' />
                        </View>
                        <View style={{ flex: 2, borderTopWidth: 1, borderTopColor: '#ccc' }}></View>
                    </View>

                    {dataOfText.map((item, index) => {
                        const isLastItem = index === textData.length - 1;
                        return (
                            <TouchableOpacity onPress={() => handleNavigeFunction(item.path)} key={index} style={{
                                borderBottomWidth: isLastItem ? 0 : 1,
                                borderBottomColor: isLastItem ? 'transparent' : '#ccc',
                                marginTop: 20
                            }}>
                                <View style={styles.innerContainer}>
                                    <View>
                                        <Text style={{ fontSize: 17, marginVertical: 3 }}>{item.m1}</Text>
                                    </View>
                                    <View style={{ marginLeft: 'auto' }}>
                                        <Ionicons name={item.icon} size={21} />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 13, color: 'grey', marginBottom: 10 }}>{item.m2}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}

                    {textData.map((item, index) => {
                        const isLastItem = index === textData.length - 1;
                        return (
                            <View  key={index} style={{
                                borderBottomWidth: isLastItem ? 0 : 1,
                                borderBottomColor: isLastItem ? 'transparent' : '#ccc',
                                marginTop: 20
                            }}>
                                <View style={styles.innerContainer}>
                                    <View>
                                        <Text style={{ fontSize: 17, marginVertical: 3 }}>{item.m1}</Text>
                                    </View>
                                    <View style={{ marginLeft: 'auto' }}>
                                        <Ionicons name={item.icon} size={21} />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 13, color: 'grey', marginBottom: 10 }}>{item.m2}</Text>
                                </View>
                            </View>
                        );
                    })}

                </View>
                <View>
                    {open ? (<ModalFormComponent handleCloseModal={handleCloseModal} />) : ('')}
                </View>

            </View>
            <AccountComponents />
            <AccountFooterComponent />
        </ScrollView>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 35
    },
    imageView: {
        marginLeft: 'auto'
    },
})