import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>  
      <View style={styles.header}>
        <Image 
          source={require('../../assets/banner.png')}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.optionsCatalogContainer}>
        <Text style={styles.optionsCatalogText}>TÊNIS</Text>
        <Text style={[styles.optionsCatalogText, {color: '#cececf'}]}>●</Text>
        <Text style={[styles.optionsCatalogText, {color: '#cececf'}]}>MASCULINO</Text>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons 
            name="filter-list"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    marginBottom: 8,
  },
  headerImage: {
    width: '100%',
  },
  filterButton: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
  optionsCatalogContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  optionsCatalogText: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  }
});