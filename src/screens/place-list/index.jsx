import { FlatList, Text, View } from "react-native";

import PLaceItem from "../../components/place-item";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);
  const renderItem = ({item}) => <PLaceItem {...item} onSelected={() => navigation.navigate("PlaceDetail", {placeId: item.id}) } />
  return (
    <FlatList style={styles.container} data={places} keyExtractor={ (item) => item.id} renderItem={renderItem}/>
  );
};

export default PlaceList;
