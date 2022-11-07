import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import { View, Text, Image, Button, ImagePickerIOS, Alert } from "react-native";

import colors from "../../utils/colors";
import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () =>{
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted'){
      Alert.alert('necesita otorgar permisos para usar esta aplicación', [{text: 'Aceptar'}]);
      return false;
    }
    return true;
  }

  const onHandleTakePhoto = async () =>{
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5
    })
    setPickedUrl(image.uri);
    onImage(image.uri)
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>Tome una Foto de la Tienda.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar Foto" marginBottom="10px" color={colors.secondary} onPress={onHandleTakePhoto} />
    </View>
  );
};

export default ImageSelector;