import { Image, ScrollView, Text, View } from "react-native";

import MapPreview from "../../components/map-preview"
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceDetail = ({ navigation, route }) => {
  const {placeId} = route.params;

  const place = useSelector((state) => state.place.places.find((place) =>place.id === placeId))
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: place.image}} />
      <View style={styles.location}>
        <View style={styles.adrressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{lat:place.coords.lat, lng: place.coords.lng}}>
        <Text>Ubicación o disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
