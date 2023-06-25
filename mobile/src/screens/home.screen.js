import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const PersonalInformation = ({
  fullName,
  idNumber,
  age,
  phoneNumber,
  email,
  maritalStatus,
  nationality,
  town,
  woreda,
  kebele,
  houseNumber,
}) => {
  return (
    <View style={styles.container}>
      <Text>Full Name: {fullName}</Text>
      <Text>ID Number: {idNumber}</Text>
      <Text>Age: {age}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Text>Email: {email}</Text>
      <Text>Marital Status: {maritalStatus}</Text>
      <Text>Nationality: {nationality}</Text>
      <Text>Town: {town}</Text>
      <Text>Woreda: {woreda}</Text>
      <Text>Kebele: {kebele}</Text>
      <Text>House Number: {houseNumber}</Text>
    </View>
  );
};

const EmploymentDetail = ({
  employmentDate,
  employeeStatus,
  jobTitle,
  salary,
}) => {
  return (
    <View style={styles.container}>
      <Text>Employment Date: {employmentDate}</Text>
      <Text>Employee Status: {employeeStatus}</Text>
      <Text>Job Title: {jobTitle}</Text>
      <Text>Salary: {salary}</Text>
    </View>
  );
};

const FamilyInformation = ({ father, mother, emergencyContact }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Father Information</Text>
      <Text>Full Name: {father.fullName}</Text>
      <Text>Phone Number: {father.phoneNumber}</Text>
      <Text>Email: {father.email}</Text>
      <Text>Nationality: {father.nationality}</Text>
      <Text style={styles.title}>Mother and Emergency Contact Information</Text>
      <Text>Full Name: {mother.fullName}</Text>
      <Text>Phone Number: {mother.phoneNumber}</Text>
      <Text>Email: {mother.email}</Text>
      <Text>Nationality: {mother.nationality}</Text>
      <Text>Emergency Contact Full Name: {emergencyContact.fullName}</Text>
      <Text>
        Emergency Contact Phone Number: {emergencyContact.phoneNumber}
      </Text>
      <Text>Emergency Contact Email: {emergencyContact.email}</Text>
      <Text>
        Emergency Contact Relationship: {emergencyContact.relationship}
      </Text>
    </View>
  );
};

const Home = () => {
  const [personalInfoVisible, setPersonalInfoVisible] = useState(false);
  const [employmentDetailVisible, setEmploymentDetailVisible] = useState(false);
  const [familyInfoVisible, setFamilyInfoVisible] = useState(false);

  const personalInfoButtonClickHandler = () => {
    setPersonalInfoVisible(!personalInfoVisible);
    setEmploymentDetailVisible(false);
    setFamilyInfoVisible(false);
  };

  const employmentDetailButtonClickHandler = () => {
    setEmploymentDetailVisible(!employmentDetailVisible);
    setPersonalInfoVisible(false);
    setFamilyInfoVisible(false);
  };

  const familyInfoButtonClickHandler = () => {
    setFamilyInfoVisible(!familyInfoVisible);
    setPersonalInfoVisible(false);
    setEmploymentDetailVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Personal Information"
          onPress={personalInfoButtonClickHandler}
        />
        <Button
          title="Employment Details"
          onPress={employmentDetailButtonClickHandler}
        />
        <Button
          title="Family Information"
          onPress={familyInfoButtonClickHandler}
        />
      </View>
      {personalInfoVisible && (
        <PersonalInformation
          fullName="John Doe"
          idNumber="1234567890"
          age={30}
          phoneNumber="+1234567890"
          email="johndoe@example.com"
          maritalStatus="Single"
          nationality="Ethiopian"
          town="Addis Ababa"
          woreda="Bole"
          kebele="22"
          houseNumber="1234"
        />
      )}
      {employmentDetailVisible && (
        <EmploymentDetail
          employmentDate="January 1, 2022"
          employeeStatus="Full-time"
          jobTitle="Software Engineer"
          salary={50000}
        />
      )}
      {familyInfoVisible && (
        <FamilyInformation
          father={{
            fullName: "John's Father",
            phoneNumber: "+1234567890",
            email: "johnsfather@example.com",
            nationality: "Ethiopian",
          }}
          mother={{
            fullName: "John's Mother",
            phoneNumber: "+1234567890",
            email: "johnsmother@example.com",
            nationality: "Ethiopian",
          }}
          emergencyContact={{
            fullName: "Emergency Contact",
            phoneNumber: "+1234567890",
            email: "emergencycontact@example.com",
            relationship: "Friend",
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default Home;
