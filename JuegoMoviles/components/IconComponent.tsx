import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';

interface ButtonProps {
    pathImage: string;
    onPress?: () => void;
}

export const IconComponent = ({pathImage, onPress}: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.containerIcon} onPress={onPress}>
        <Image style={styles.icon} source={{uri:pathImage}}/>
      </TouchableOpacity>
    </View>
  )
}
