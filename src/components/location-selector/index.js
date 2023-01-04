import * as Location from "expo-location";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import MapPreview from "../map-preview";
import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({ onLocationPicker }) => {
  const [pickedLocation, setPickedLocation] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  const mapLocation = route?.params?.mapLocation;

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesitas dar parmisos para obtener la ubicación",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const onHandleGetLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;

    setPickedLocation({ lat: latitude, lng: longitude });

    onLocationPicker({ lat: latitude, lng: longitude });
  };

  const onHandleMapLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    navigation.navigate("Maps");
  };

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocationPicker(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <MapPreview location={pickedLocation}>
          <Text style={styles.text}>No hay ubicación seleccionada</Text>
        </MapPreview>
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Obtener ubicación"
          color={colors.primary}
          onPress={onHandleGetLocation}
        />
        <Button
          title="Seleccion desde mapa"
          color={colors.primary}
          onPress={onHandleMapLocation}
        />
      </View>
    </View>
  );
};

export default LocationSelector;
