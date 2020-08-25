import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

export default function SizeButton({ boxColor, color, children }) {
  return (
   <View style={[styles.container, { backgroundColor: boxColor || '#FFF' }]}>
     <Text style={[styles.BoxText, { color: color || "#c9c" }]}>
        { children }
     </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10,
  },
  BoxText: {
    color: '#FFF',
    fontSize: 19,
    textAlign: 'center',
    textAlignVertical: 'center',
  },  
});
