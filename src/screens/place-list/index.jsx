import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import PLaceItem from "../../components/place-item";
import { loadPlaces } from "../../store/place.slice";
import { styles } from "./styles";
import { useEffect } from "react";
import {useNavigation} from "@react-navigation/native";

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  
  const renderItem = ({item}) => <PLaceItem {...item} onSelected={() => navigation.navigate("PlaceDetail", {placeId: item.id}) } />
  return (
    <FlatList style={styles.container} data={places} keyExtractor={ (item) => item.id} renderItem={renderItem}/>
  );
};

export default PlaceList;
