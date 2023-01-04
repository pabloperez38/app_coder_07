import { Image, ScrollView, Text, View } from "react-native";

import MapPreview from "../../components/map-preview"
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceDetail = ({ navigation, route }) => {
  const {placeId} = route.params;

  const place = useSelector((state) => state.place.places.find((place) =>place.id === placeId));

  const { title, image, address, coords } = place || {};
  const location = JSON.parse(coords);
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.location}>
        <View style={styles.adrressContainer}>
          <Text style={styles.address}>{address}</Text>
        </View>
        <MapPreview style={styles.map} location={{lat:location.lat, lng: location.lng}}>
        <Text>Ubicación o disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetail;
