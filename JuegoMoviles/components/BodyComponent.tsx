import React from 'react';
import {View} from 'react-native';
import {styles} from '../theme/appTheme';

export const BodyComponent = (props: any) => {
  return <View style={styles.bodyContainer}>{props.children}</View>;
};
