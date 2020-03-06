import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const lessOne = () => setCount(count - Number(value));
  const moreOne = () => setCount(count + Number(value));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>contador:</Text>

      <TextInput
        onChangeText={textoDigitado => setValue(textoDigitado)}
        value={value}
        placeholder="Digite aqui "
      />
      <Text style={styles.title}>{count}</Text>

      <View style={styles.menu}>
        <Button title="menos" onPress={lessOne} />
        <Button title="mais" onPress={moreOne} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 28,
    fontWeight: 'boid',
    color: 'red',
  },
  menu: {
    flexDirection: 'row',
  },
});
export default App;
