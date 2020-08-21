import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function List({ img, cost, onClick, children }) {

  function filterDesc(desc){
    if(desc.length < 20){
        return desc;
    }

    return `${desc.substring(0, 20)}...`;
 }
  
  return (
   <TouchableOpacity style={styles.container} onPress={onClick}>
     <Image 
        source={img}
        style={styles.itemImage}
     />
     <Text style={styles.itemText}>
        {filterDesc(children)}
     </Text>
     <Text style={styles.itemPrice}>
        {cost}
     </Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    width: '90%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 165,
    height: 165,
  },
  itemText: {
    fontSize: 16
  },
  itemPrice: {
    fontSize: 16,
    opacity: 0.4
  }
});