import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Emp from './src/Emp';

const initialState={
  1:{
    empid:1,
    empName:'Employee 1',
    salary:10000
  },
  2:{
    empid:2,
    empName:'Employee 2',
    salary:20000
  },
  3:{
    empid:3,
    empName:'Employee 3',
    salary:30000
  },
  4:{
    empid:4,
    empName:'Employee 4',
    salary:40000
  },
  5:{
    empid:5,
    empName:'Employee 5',
    salary:50000
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
