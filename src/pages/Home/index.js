import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import List from '../../components/List';

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>  
      <View style={styles.header}>
        <Image 
          source={require('../../assets/banner.png')}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.optionsCatalogContainer}>
        <Text style={styles.text}>TÊNIS</Text>
        <Text style={[styles.text, {color: '#cececf'}]}>●</Text>
        <Text style={[styles.text, {color: '#cececf'}]}>MASCULINO</Text>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons 
            name="filter-list"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line}/>
                 
      <ScrollView>
        <Text style={[styles.text, {paddingLeft: 6}]}>LANÇAMENTOS</Text>

        <View style={styles.itensList}>
          <List img={require("../../assets/1.png")} cost="R$259,90" onClick={() => navigation.navigate('Details')}>
            Nike Air Shock
          </List>
          <List img={require("../../assets/2.png")} cost="R$289,90" onClick={() => alert(2)}>
            Nike Futemax
          </List>
        </View>

        <View style={styles.itensList}>
          <List img={require("../../assets/3.png")} cost="R$139,90" onClick={() => alert(3)}>
            Adidas Dominator
          </List>
          <List img={require("../../assets/4.png")} cost="R$350,90" onClick={() => alert(4)}>
            Adias paraguaio
          </List>
        </View>

        <View style={styles.itensList}>
          <List img={require("../../assets/5.png")} cost="R$190,00" onClick={() => alert(5)}>
            Adidas Fender
          </List>
          <List img={require("../../assets/6.png")} cost="R$215,99" onClick={() => alert(6)}>
            Adias ShowRunner
          </List>
        </View>
      </ScrollView>

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
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
  },
  itensList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});