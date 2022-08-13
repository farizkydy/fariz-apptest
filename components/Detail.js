//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [user, setUser] = useState({
        firstName: item.firstName,
        lastName: item.lastName,
        age: item.age,
        photo: item.photo,
  });

  const onChangeName = (value) => {
    setUser({ ...user, name: value });
  };

  const onChangeGender = (value) => {
    setUser({ ...user, gender: value });
  };

  const onChangeEmail = (value) => {
    setUser({ ...user, email: value });
  };

  const onChangeStatus = (value) => {
    setUser({ ...user, status: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://simple-contact-crud.herokuapp.com/contact'+item.id, {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        photo: user.photo,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push('Get')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://simple-contact-crud.herokuapp.com/contact'+item.id, {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        photo: user.photo,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push('Get')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'First Name'}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
        value={user.firstName}
      />
      <TextInput
        placeholder={'Last Name'}
        onChangeText={(value) => onChangeGender(value)}
        style={styles.input}
        value={user.lastName}
      />
      <TextInput
        placeholder={'Age'}
        onChangeText={(value) => onChangeEmail(value)}
        style={styles.input}
        value={user.age}
      />
      <TextInput
        placeholder={'Photo'}
        onChangeText={(value) => onChangeStatus(value)}
        style={styles.input}
        value={user.photo}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Update</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Hapus</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

//make this component available to the app
export default Detail;
