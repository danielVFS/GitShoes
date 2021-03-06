import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Details({ navigation }) {
  navigation.setOptions({
    headerTitle: 'Nike Shifter 10',
  });

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/detail.png')}
        style={styles.productImage}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={styles.productPrice}>R$290,00</Text>
        </View>
        <View opacity={0.4}>
          <Text style={styles.productTitle}>Nike Shifter 10</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb5e55" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={styles.productSizeContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton boxColor="#17181a" color="#FFF">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>44</SizeButton>
          </ScrollView>
        </View>
      
        <View style={styles.productDescriptionContainer}>
          <Text style={styles.productDescriptionTitle}>
            Nike Shifter 10
          </Text>
          <Text style={styles.productDescriptionContent}>
            Nike Shifter 10 is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning.
          </Text>
          <Text style={styles.productDescriptionSubContent}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.productDescriptionSubContent}>
            - Material: Mash
          </Text>
        </View>
      
        <Button backgroundColor="#17181a" color="#FFF">Comprar</Button>

        <View style={styles.line}/>

        <Footer />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#FFF",
  },
  productImage: {
    width: '100%',
  },
  productPrice: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
    fontSize: 24,
  },
  productTitle: {
    fontFamily: 'Anton_400Regular',
    fontSize: 30,
    paddingHorizontal: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  productSizeContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  productDescriptionContainer: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  productDescriptionTitle: {
    fontSize: 22,
    marginVertical: '2%',
    fontWeight: 'bold',
  },
  productDescriptionContent: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 10,
  },
  productDescriptionSubContent: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
    marginVertical: '2%'
  },
});
