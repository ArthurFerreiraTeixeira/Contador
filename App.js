import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0); 

  
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas no Restaurante</Text>
      
      {}
      <Text style={[styles.countText, count === 0 && styles.zeroCount]}>{count}</Text>
      
      {}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.incrementButton]} onPress={increment}>
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton, count === 0 && styles.disabledButton]} 
          onPress={decrement}
          disabled={count === 0} 
        >
          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>
      </View>

      {}
      {count === 0 && (
        <Text style={styles.warningText}>Não há pessoas para remover.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  countText: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  zeroCount: {
    color: '#FF0000', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  incrementButton: {
    backgroundColor: '#4CAF50', 
  },
  decrementButton: {
    backgroundColor: '#F44336', 
  },
  disabledButton: {
    backgroundColor: '#B0BEC5', 
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  warningText: {
    marginTop: 20,
    fontSize: 16,
    color: '#FF0000',
    fontWeight: 'bold',
  },
});

export default App;

