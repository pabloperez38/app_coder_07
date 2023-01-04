import MapView, {Marker} from "react-native-maps";
import React, {useLayoutEffect, useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";

import  Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../../utils/colors";
import { styles } from "./styles";

const Maps = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialRegion = {
    latitude:37.78825,
    longitude:-122.4324,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421,
  }

  const onHandlePickLocation = (event) =>{
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    
    })
      
  };

  const onHandleSaveLocation = () =>{
    if(selectedLocation) navigation.navigate("NewPlace", {mapLocation: selectedLocation})
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:() => (<TouchableOpacity onPress={onHandleSaveLocation}>
        <Ionicons name="save" size={25} color={colors.black} />
      </TouchableOpacity>)
    })
  }, [navigation, selectedLocation])


  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation} >
      {selectedLocation && (
        <Marker title="Lugar seleccionado"
        coordinate={{
          latitude:selectedLocation.lat,
          longitude:selectedLocation.lng,
        }} />
      )}
    
    </MapView>
  );
};

export default Maps;
