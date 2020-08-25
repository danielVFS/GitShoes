import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Button({ backgroundColor, color, children }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btnContainer, { backgroundColor: backgroundColor || '#000' }]}>
        <Text style={[styles.btnText, { color: color || "#FFF" }]}>
          { children }
        </Text>
      </TouchableOpacity>
    </View>
   );
 }
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  btnContainer: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    marginHorizontal: '5%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 17,
  },  
});
