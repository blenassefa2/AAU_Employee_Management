import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Layout from '../component/layout/layout.component';

const EmployeeDetail = ( { navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [town, setTown] = useState('');
  const [wereda, setWereda] = useState('');
  const [kebele, setKebele] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [photo, setPhoto] = useState('');

  const Home = () => {
    // Process the form data here
    console.log({
      fullName,
      phoneNumber,
      email,
      age,
      town,
      wereda,
      kebele,
      houseNumber,
      maritalStatus,
      photo,
    });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    // Perform necessary actions to handle the uploaded photo here
    console.log(file);
  };

  const body = (
    <View style={tw`flex-1 justify-center items-center p-4`}>
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Town"
        value={town}
        onChangeText={(text) => setTown(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Wereda"
        value={wereda}
        onChangeText={(text) => setWereda(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Kebele"
        value={kebele}
        onChangeText={(text) => setKebele(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="House Number"
        value={houseNumber}
        onChangeText={(text) => setHouseNumber(text)}
      />
      <TextInput
        style={tw`w-full p-2 border border-gray-300 rounded mb-2`}
        placeholder="Marital Status"
        value={maritalStatus}
        onChangeText={(text) => setMaritalStatus(text)}
      />
      <Button title="Choose Photo" onPress={() => document.getElementById('photoInput').click()} />
      <input
        id="photoInput"
        type="file"
        style={{ display: 'none' }}
        onChange={handlePhotoUpload}
      />
      <Image source={{ uri: photo }} style={tw`w-20 h-20 rounded-full my-2`} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
  return (
      <Layout
        navigation={navigation}
        bodyElement={<HomeScreenBody data={data} />}
      />
    );
};

export default EmployeeDetail;
