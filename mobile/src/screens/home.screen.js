import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [town, setTown] = useState('');
  const [wereda, setWereda] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [kebele, setKebele] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

  const [employmentDate, setEmploymentDate] = useState('');
  const [employeeStatus, setEmployeeStatus] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const [fatherFullName, setFatherFullName] = useState('');
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState('');
  const [fatherEmail, setFatherEmail] = useState('');
  const [fatherNationality, setFatherNationality] = useState('');

  const [motherFullName, setMotherFullName] = useState('');
  const [motherPhoneNumber, setMotherPhoneNumber] = useState('');
  const [motherEmail, setMotherEmail] = useState('');
  const [motherNationality, setMotherNationality] = useState('');

  const [emergencyFullName, setEmergencyFullName] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [emergencyEmail, setEmergencyEmail] = useState('');
  const [emergencyNationality, setEmergencyNationality] = useState('');
  const [emergencyTown, setEmergencyTown] = useState('');
  const [emergencyWereda, setEmergencyWereda] = useState('');
  const [emergencyKebele, setEmergencyKebele] = useState('');
  const [emergencyHouseNumber, setEmergencyHouseNumber] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSave = () => {
    // Handle saving the information and returning to the home page
    setSuccessMessage('You have registered an employee successfully !');
    setShowPopup(true);
  };

  const handleUpdate = () => {
    // Handle updating the employee registration page
    // You can navigate to the employee registration page using a navigation library or update the component's state to show the registration page
    setShowPopup(false);
  };

  const handleSubmit = () => {
    // Handle submitting the employee registration
    // You can implement the logic to submit the form data to the server or perform any other necessary actions
    setShowPopup(false);
  };
  const handlePhotoUpload = () => {
    // Implement photo upload logic here
  };
  const handleCVUpload = () => {
    // Implement CV upload logic here
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Information:</Text>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={text => setFullName(text)}
            value={fullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={text => setAge(text)}
            value={age}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Town:</Text>
          <TextInput
            style={styles.input}
            placeholder="Town"
            onChangeText={text => setTown(text)}
            value={town}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Wereda:</Text>
          <TextInput
            style={styles.input}
            placeholder="Wereda"
            onChangeText={text => setWereda(text)}
            value={wereda}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Kebele:</Text>
          <TextInput
            style={styles.input}
            placeholder="Kebele"
            onChangeText={text => setKebele(text)}
            value={kebele}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>House Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="House Number"
            onChangeText={text => setHouseNumber(text)}
            value={houseNumber}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Marital Status:</Text>
        <TextInput
          style={styles.input}
          placeholder="Marital Status"
          onChangeText={text => setMaritalStatus(text)}
          value={maritalStatus}
        />
      </View>
      {/* <TouchableOpacity onPress={handlePhotoUpload}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <Text style={styles.uploadText}>Upload Photo</Text>
        )}
      </TouchableOpacity> */}

      <Text style={styles.heading}>Employment Information:</Text>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Employment Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="Employment Date"
            onChangeText={text => setEmploymentDate(text)}
            value={employmentDate}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Employee Status:</Text>
          <TextInput
            style={styles.input}
            placeholder="Employee Status"
            onChangeText={text => setEmployeeStatus(text)}
            value={employeeStatus}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Job Title:</Text>
          <TextInput
            style={styles.input}
            placeholder="Job Title"
            onChangeText={text => setJobTitle(text)}
            value={jobTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Salary:</Text>
          <TextInput
            style={styles.input}
            placeholder="Salary"
            onChangeText={text => setSalary(text)}
            value={salary}
          />
        </View>
      </View>
      {/* <TouchableOpacity onPress={handleCVUpload}>
        {cv ? (
          <Text style={styles.uploadedCVText}>CV Uploaded</Text>
        ) : (
          <Text style={styles.uploadText}>Upload CV</Text>
        )}
      </TouchableOpacity> */}
      <Text style={styles.heading}>Father's Information:</Text>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={text => setFatherFullName(text)}
            value={fatherFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={text => setFatherPhoneNumber(text)}
            value={fatherPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setFatherEmail(text)}
            value={fatherEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nationality:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nationality"
            onChangeText={text => setFatherNationality(text)}
            value={fatherNationality}
          />
        </View>
      </View>
      <Text style={styles.heading}>Mother's Information:</Text>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={text => setMotherFullName(text)}
            value={motherFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={text => setMotherPhoneNumber(text)}
            value={motherPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setMotherEmail(text)}
            value={motherEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nationality:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nationality"
            onChangeText={text => setMotherNationality(text)}
            value={motherNationality}
          />
        </View>
      </View>
      <Text style={styles.heading}>Emergency Contact Information:</Text>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={text => setEmergencyFullName(text)}
            value={emergencyFullName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={text => setEmergencyPhoneNumber(text)}
            value={emergencyPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmergencyEmail(text)}
            value={emergencyEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nationality:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nationality"
            onChangeText={text => setEmergencyNationality(text)}
            value={emergencyNationality}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Town:</Text>
          <TextInput
            style={styles.input}
            placeholder="Town"
            onChangeText={text => setEmergencyTown(text)}
            value={emergencyTown}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Wereda:</Text>
          <TextInput
            style={styles.input}
            placeholder="Wereda"
            onChangeText={text => setEmergencyWereda(text)}
            value={emergencyWereda}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Kebele:</Text>
          <TextInput
            style={styles.input}
            placeholder="Kebele"
            onChangeText={text => setEmergencyKebele(text)}
            value={emergencyKebele}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>House Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="House Number"
            onChangeText={text => setEmergencyHouseNumber(text)}
            value={emergencyHouseNumber}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.uploadButton} onPress={handlePhotoUpload}>
        <Text style={styles.uploadButtonText}>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={handleCVUpload}>
        <Text style={styles.uploadButtonText}>Upload CV</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <Modal visible={showPopup} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.successMessage}>{successMessage}</Text>
            <View style={styles.buttonRowContainer}>
              <TouchableOpacity style={[styles.modalButton, styles.updateButton]} onPress={handleUpdate}>
                <Text style={styles.modalButtonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.submitButton]} onPress={handleSubmit}>
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  inlineInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineInput: {
    flex: 1,
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20,
    width: 150,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
  },
  updateButton: {
    backgroundColor: 'green',  // Update button color
    width: 150,
    alignItems: 'center', // Center the button text horizontally
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 8,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: 'blue',   // Submit button color
    width: 150,
    alignItems: 'center', // Center the button text horizontally
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  successMessage: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonRowContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'center', // Center the buttons horizontally
    marginTop: 8,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  
});

export default Home;