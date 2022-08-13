import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function Post() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeFirstName = (value) => {
    setUser({ ...user, firstName: value });
  };

  const onChangeLastName = (value) => {
    setUser({ ...user, lastName: value });
  };

  const onChangeAge = (value) => {
    setUser({ ...user, age: value });
  };

  const onChangePhoto = (value) => {
    setUser({ ...user, photo: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://simple-contact-crud.herokuapp.com/contact', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        photo: user.photo,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'First Name'}
        onChangeText={(value) => onChangeFirstName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Last Name'}
        onChangeText={(value) => onChangeLastName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Age'}
        onChangeText={(value) => onChangeAge(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Photo'}
        onChangeText={(value) => onChangePhoto(value)}
        style={styles.input}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {loading ? 'Menyimpan...' : 'Simpan'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});