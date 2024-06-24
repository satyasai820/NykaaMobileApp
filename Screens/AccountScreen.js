
import AccountComponents from "../Components/AccountComponents";
import AccountFooterComponent from "../Components/AccountFooterComponent";
import { useState } from "react";
import ModalFormComponent from "../Components/AccountModalFormComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Imports from "../Components/Imports";

const AccountScreen = () => {

    const navigation = Imports.useNavigation(); 

    const dataOfText = [{ m1: 'Order', m2: 'Check your orders status (track, return, cancle etc)', icon: 'tablet-portrait-outline', path: 'Orders' }, { m1: 'Profile', m2: 'Edit/update your profike details & more', icon: 'person-outline', path: 'MyProfile' }, { m1: 'Wallet', m2: 'Check your Nykaa Wallet balance', icon: 'card-outline', path: 'Wallet' }, { m1: 'Wishlist', m2: 'Buy from items saved in Wishlist', icon: 'heart-outline', path: 'Wishlist' },]

    const textData = [{ m1: 'Loyalty Program', m2: 'Shop for ₹2000 to be become a member', icon: 'school-outline' }, { m1: 'Beauty Portflio', m2: 'Personalise your Nykaa App experience', icon: 'sparkles-sharp' }, { m1: 'Help and Support', m2: 'Get help for your account or orders', icon: 'help-circle-outline' }, { m1: 'Addresses', m2: 'Manage your saved Saved address', icon: 'id-card-outline' }, { m1: 'Payment Methods', m2: 'Manage your saved payment methods ', icon: 'browsers-outline' }, { m1: 'MyCoupons', m2: 'Browse coupons to get discount on Nykaa', icon: 'ticket-outline', },]

    const [open, setOpen] = useState(false);

    const handleModalFormOpen = () => {
        setOpen(true);
    }

    const handleCloseModal = () => setOpen(false);

    const handleNavigeFunction = (path) => {
        navigation.navigate(path)
    }
    const [token, setToken] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const tokenFun = async () => {
        try {
            tokenData = await AsyncStorage.getItem('accessToken')
            nameVale = await AsyncStorage.getItem('name')
            emailValue = await AsyncStorage.getItem('email')
            setToken(tokenData);
            setName(nameVale);
            setEmail(emailValue);
        } catch (e) {

        }
    }
    tokenFun();


    return (
        <Imports.ScrollView showsVerticalScrollIndicator={false}>
            <Imports.View style={styles.mainContainer}>
                <Imports.View style={styles.container}>
                    <Imports.View style={styles.innerContainer}>
                        <Imports.View>
                            <Imports.Text style={styles.textStyle}>Hey</Imports.Text>
                            {token ? (<Imports.Text style={styles.textStyle}>{name}</Imports.Text>) : (<Imports.Text style={styles.textStyle}>there!</Imports.Text>)}
                        </Imports.View>
                        <Imports.View style={styles.imageView}>
                            <Imports.Image style={{ width: 100, height: 100 }} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg' }} />
                        </Imports.View>
                    </Imports.View>
                    {token ? (
                        <Imports.View style={[styles.innerContainer, { marginTop: 10 }]}>
                            <Imports.View style={[styles.innerContainer, { flex: 2 }]}>
                                <Imports.Text style={{ fontSize: 15, marginRight: 6, color: 'grey' }}>Logged in via </Imports.Text>
                                <Imports.Text>{email}</Imports.Text>
                            </Imports.View>

                        </Imports.View>
                    ) : (
                        <Imports.View style={[styles.innerContainer, { marginTop: 10 }]}>
                            <Imports.View style={[styles.innerContainer, { flex: 1 }]}>
                                <Imports.Text onPress={handleModalFormOpen} style={styles.signInWithText}>Signup or Login </Imports.Text>
                                <Imports.AntDesign name="arrowright" size={15} color='#E80071' />
                            </Imports.View>
                            {/* <Imports.View style={{ flex: 2, borderTopWidth: 1, borderTopColor: '#ccc' }}></Imports.View> */}
                        </Imports.View>
                    )}

                    {dataOfText.map((item, index) => {
                        const isLastItem = index === textData.length - 1;
                        return (
                            <Imports.TouchableOpacity onPress={() => handleNavigeFunction(item.path)} key={index} style={{
                                borderBottomWidth: isLastItem ? 0 : 1,
                                borderBottomColor: isLastItem ? 'transparent' : '#ccc',
                                marginTop: 20
                            }}>
                                <Imports.View style={styles.innerContainer}>
                                    <Imports.View>
                                        <Imports.Text style={{ fontSize: 17, marginVertical: 3 }}>{item.m1}</Imports.Text>
                                    </Imports.View>
                                    <Imports.View style={{ marginLeft: 'auto' }}>
                                        <Imports.Ionicons name={item.icon} size={21} />
                                    </Imports.View>
                                </Imports.View>
                                <Imports.View>
                                    <Imports.Text style={{ fontSize: 13, color: 'grey', marginBottom: 10 }}>{item.m2}</Imports.Text>
                                </Imports.View>
                            </Imports.TouchableOpacity>
                        );
                    })}

                    {textData.map((item, index) => {
                        const isLastItem = index === textData.length - 1;
                        return (
                            <Imports.View key={index} style={{
                                borderBottomWidth: isLastItem ? 0 : 1,
                                borderBottomColor: isLastItem ? 'transparent' : '#ccc',
                                marginTop: 20
                            }}>
                                <Imports.View style={styles.innerContainer}>
                                    <Imports.View>
                                        <Imports.Text style={{ fontSize: 17, marginVertical: 3 }}>{item.m1}</Imports.Text>
                                    </Imports.View>
                                    <Imports.View style={{ marginLeft: 'auto' }}>
                                        <Imports.Ionicons name={item.icon} size={21} />
                                    </Imports.View>
                                </Imports.View>
                                <Imports.View>
                                    <Imports.Text style={{ fontSize: 13, color: 'grey', marginBottom: 10 }}>{item.m2}</Imports.Text>
                                </Imports.View>
                            </Imports.View>
                        );
                    })}

                </Imports.View>
                <Imports.View>
                    {open ? (<ModalFormComponent handleCloseModal={handleCloseModal} />) : ('')}
                </Imports.View>

            </Imports.View>
            <AccountComponents />
            <AccountFooterComponent />
        </Imports.ScrollView>
    )
}

export default AccountScreen;

const screenWidth = Imports.Dimensions.get('window').width

const styles = Imports.StyleSheet.create({
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
        fontSize: screenWidth < 380 ? 25 : screenWidth <= 420 ? 25 : 30
    },
    imageView: {
        marginLeft: 'auto'
    },
    signInWithText : {
        fontSize: 15, fontWeight: 'bold', marginRight: 6, color: '#E80071'
    }
})