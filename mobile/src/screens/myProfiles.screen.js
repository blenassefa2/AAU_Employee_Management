import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Layout from "../component/layout/layout.component";
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
    <View>
      <Text>
        <strong>Full Name:</strong> &nbsp;{fullName}
      </Text>
      <Text>
        <strong>ID Number:</strong>&nbsp;{idNumber}
      </Text>
      <Text>
        <strong>Age: </strong>&nbsp;{age}
      </Text>
      <Text>
        <strong>Phone Number:</strong>&nbsp;{phoneNumber}
      </Text>
      <Text>
        <strong>Email:</strong> &nbsp;{email}
      </Text>
      <Text>
        <strong>Marital Status: </strong>&nbsp;{maritalStatus}
      </Text>
      <Text>
        <strong>Nationality:</strong>&nbsp; {nationality}
      </Text>
      <Text>
        <strong>Town:</strong>&nbsp; {town}
      </Text>
      <Text>
        <strong>Woreda:</strong>&nbsp; {woreda}
      </Text>
      <Text>
        <strong>Kebele:</strong>&nbsp; {kebele}
      </Text>
      <Text>
        <strong>House Number: </strong>&nbsp;{houseNumber}
      </Text>
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
    <View>
      <Text>
        <strong>Employment Date: </strong>&nbsp;{employmentDate}
      </Text>
      <Text>
        <strong>Employee Status:</strong>&nbsp; {employeeStatus}
      </Text>
      <Text>
        <strong>Job Title: </strong>&nbsp;{jobTitle}
      </Text>
      <Text>
        <strong>Salary:</strong>&nbsp; {salary}
      </Text>
    </View>
  );
};

const FamilyInformation = ({ father, mother, emergencyContact }) => {
  return (
    <View>
      <View style={{ marginBottom: "20px" }}>
        <Text style={{ color: "rgba(59, 124, 189, 1)" }}>
          <strong>Father Information</strong>
        </Text>
        <Text>
          <strong>Full Name: </strong>&nbsp;{father.fullName}
        </Text>
        <Text>
          <strong>Phone Number: </strong>&nbsp; {father.phoneNumber}
        </Text>
        <Text>
          <strong>Email: </strong>&nbsp;{father.email}
        </Text>
        <Text>
          <strong>Nationality: </strong>&nbsp;{father.nationality}
        </Text>
      </View>
      <View style={{ marginBottom: "20px" }}>
        <Text style={{ color: "rgba(59, 124, 189, 1)" }}>
          <strong>Mother Contact Information</strong>
        </Text>
        <Text>
          <strong>Full Name: </strong>&nbsp;{mother.fullName}
        </Text>
        <Text>
          <strong>Phone Number: </strong>&nbsp;{mother.phoneNumber}
        </Text>
        <Text>
          <strong>Email:</strong>&nbsp;{mother.email}
        </Text>
        <Text>
          <strong>Nationality: </strong>&nbsp;{mother.nationality}
        </Text>
      </View>
      <View style={{ marginBottom: "30px" }}>
        <Text style={{ color: "rgba(59, 124, 189, 1)" }}>
          <strong>Emergency Contact Information</strong>
        </Text>
        <Text>
          <strong> Full Name:</strong> &nbsp;{emergencyContact.fullName}
        </Text>
        <Text>
          <strong> Phone Number: &nbsp;</strong>
          {emergencyContact.phoneNumber}
        </Text>
        <Text>
          <strong>Email:</strong>&nbsp;{emergencyContact.email}
        </Text>
        <Text>
          <strong>Relationship:</strong>&nbsp;{emergencyContact.relationship}
        </Text>
      </View>
    </View>
  );
};

const MyProfile = ({ navigation }) => {
  const [showPersonalInformation, setShowPersonalInformation] = useState(false);
  const [showEmploymentDetail, setShowEmploymentDetail] = useState(false);
  const [showFamilyInformation, setShowFamilyInformation] = useState(false);

  const togglePersonalInformation = () => {
    setShowPersonalInformation(!showPersonalInformation);
  };

  const toggleEmploymentDetail = () => {
    setShowEmploymentDetail(!showEmploymentDetail);
  };

  const toggleFamilyInformation = () => {
    setShowFamilyInformation(!showFamilyInformation);
  };

  const body = (
    <View>
      <Button
        title={
          showPersonalInformation
            ? "Hide Personal Information"
            : "Show Personal Information"
        }
        onPress={togglePersonalInformation}
      />
      {showPersonalInformation && (
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
          houseNumber="123"
        />
      )}
      <Button
        title={
          showEmploymentDetail
            ? "Hide Employment Detail"
            : "Show Employment Detail"
        }
        onPress={toggleEmploymentDetail}
      />
      {showEmploymentDetail && (
        <EmploymentDetail
          employmentDate="01/01/2022"
          employeeStatus="Full-Time"
          jobTitle="Software Engineer"
          salary={100000}
        />
      )}
      <Button
        title={
          showFamilyInformation
            ? "Hide Family Information"
            : "Show Family Information"
        }
        onPress={toggleFamilyInformation}
      />
      {showFamilyInformation && (
        <FamilyInformation
          father={{
            fullName: "John Doe Sr",
            phoneNumber: "+1234567890",
            email: "johndoessr@example.com",
            nationality: "Ethiopian",
          }}
          mother={{
            fullName: "Jane Doe",
            phoneNumber: "+1234567890",
            email: "janedoe@example.com",
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
  return <Layout navigation={navigation} bodyElement={body} />;
};

export default MyProfile;
