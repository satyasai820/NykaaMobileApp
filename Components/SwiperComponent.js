import { View, FlatList, Image, StyleSheet } from "react-native"

const SwiperFlatListComponent = ({data, styled}) => {
    return(
        <>
        <View>
        <FlatList  data={data} renderItem={({item}) => (
            <>
            <Image source={{uri:item.img}} style={styled}  />
            </>
        )} keyExtractor={(item, index) => index.toString()} horizontal={true} showsHorizontalScrollIndicator={false} />
        </View>
        </>
    )
}

export default SwiperFlatListComponent;

