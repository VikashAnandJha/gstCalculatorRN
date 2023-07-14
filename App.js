import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [amount, setamount] = useState('100')
  const [slab, setslab] = useState('5')

  const handleCalculation = () => {

    console.log(amount + " " + slab)

    let result = parseInt(amount) * parseInt(slab) / 100;
    Alert.alert("Result", result + "")

  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Welcome to GST calculator</Text>
      <TextInput keyboardType='number-pad' style={{ width: 250, padding: 5, borderWidth: 1, margin: 5 }} placeholder='Enter the amount'
        value={amount}
        onChangeText={(text) => setamount(text)}
      />
      <TextInput value={slab} onChangeText={(text) => setslab(text)} keyboardType='number-pad' style={{ width: 250, padding: 5, borderWidth: 1, margin: 5 }} placeholder='Enter the SLAB' />
      <Button title='calculate' onPress={handleCalculation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
