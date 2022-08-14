//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {  getContact } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

// create a component
const Get = ({ navigation }) => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state);
    useEffect(() => {
      dispatch(getContact());
    }, []);

  const renderItem = ({ item }) => {
    console.log('apa', item);
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
        item: item
      })}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
          }}>
          <Image
        style={{width: 100, height: 100}}
        source= {item.photo ? item.photo : {uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
          <Text style={{ fontWeight: 'bold' }}>{item.firstName} {item.lastName}</Text>
          <Text>{item.age}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text>Tes</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Get;
