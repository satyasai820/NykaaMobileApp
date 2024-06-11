import { View, FlatList, Image} from "react-native"

const SwiperFlatListComponent = ({data, styled}) => {
    return(
        <>
        <View>
        <FlatList  data={data} renderItem={({item}) => (
            <View>
            <Image source={{uri:item.img}} style={styled}  />
            </View>
        )} keyExtractor={(item, index) => index.toString()} horizontal={true} showsHorizontalScrollIndicator={false} />
        </View>
        </>
    )
}

export default SwiperFlatListComponent;

