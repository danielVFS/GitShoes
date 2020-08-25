import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import List from '../List';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você também pode gostar</Text>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <List img={require('../../assets/1.png')} cost="R$199,99">
              Nike Air Max
            </List>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <List img={require('../../assets/4.png')} cost="R$250,00">
              Adidas Guerrilha
            </List>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <List img={require('../../assets/5.png')} cost="R$169,69">
              Nike Futmax
            </List>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
});
