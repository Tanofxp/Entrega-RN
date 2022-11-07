import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert } from "react-native";

import colors from "../../utils/colors";
import MapPreview from "../map-preview";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);

  const { mapLocation } = route.params || {};

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("necesita otorgar permisos de ubicación para usar esta aplicación", [{ text: "Aceptar" }]);
      return false;
    }
    return true;
  };

  const onHandlerLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const onHandlerPickMap = () => {
    const hasPermission = verifyPermissions();
    if (!hasPermission) return;
    navigation.navigate("Maps");
  };

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Aún no se ha seleccionado ninguna ubicación.</Text>
      </MapPreview>
      <Button title="Ubicacion Actual" color={colors.secondary} onPress={onHandlerLocation} />
      <Button title="Seleccionar desde el mapa" color={colors.primary} onPress={onHandlerPickMap} />
    </View>
  );
};

export default LocationSelector;