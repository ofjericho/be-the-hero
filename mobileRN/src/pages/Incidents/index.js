import React from 'react';
import { View } from 'react-native';

import logoImg from '../../assets';
import styles from './styles';


export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
        <Text style={styles.headerText}>
          Total de <Text styles={styles.headerTextBold}> 0 casos. </Text>
        </Text>
      </View>
    </View>

  );
}