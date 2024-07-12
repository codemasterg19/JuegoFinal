import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface ButtonProps {
    title: string;
    pathImage: string;
    pathImageS: string;
    onPress?: () => void;
}

export const IconComponentSmall = ({title, pathImage, pathImageS, onPress}: ButtonProps) => {
  return (
    <View >
      <TouchableOpacity style={styles.buttonIcon} onPress={onPress}>
        <View style={styles.containerIcon}>
          <Image style={styles.iconSmall} source={{uri:pathImage}}/>
        </View>
        <Text style={styles.buttonText}>{title}</Text>
        <Image style={styles.icon} source={{uri:pathImageS}}/>
      </TouchableOpacity>
    </View>
  )
}
