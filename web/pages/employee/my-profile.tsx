import Layout from "@/components/Layout/Layout";
import { useState } from "react";

interface PersonalInformationProps {
  fullName: string;
  idNumber: string;
  age: number;
  phoneNumber: string;
  email: string;
  maritalStatus: string;
  nationality: string;
  town: string;
  woreda: string;
  kebele: string;
  houseNumber: string;
}

interface EmploymentDetailProps {
  employmentDate: string;
  employeeStatus: string;
  jobTitle: string;
  salary: number;
}

interface FamilyInformationProps {
  father: {
    fullName: string;
    phoneNumber: string;
    email: string;
    nationality: string;
  };
  mother: {
    fullName: string;
    phoneNumber: string;
    email: string;
    nationality: string;
  };
  emergencyContact: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
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
    <div>
      <p>Full Name: {fullName}</p>
      <p>ID Number: {idNumber}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {email}</p>
      <p>Marital Status: {maritalStatus}</p>
      <p>Nationality: {nationality}</p>
      <p>Town: {town}</p>
      <p>Woreda: {woreda}</p>
      <p>Kebele: {kebele}</p>
      <p>House Number: {houseNumber}</p>
    </div>
  );
};

const EmploymentDetail: React.FC<EmploymentDetailProps> = ({
  employmentDate,
  employeeStatus,
  jobTitle,
  salary,
}) => {
  return (
    <div>
      <p>Employment Date: {employmentDate}</p>
      <p>Employee Status: {employeeStatus}</p>
      <p>Job Title: {jobTitle}</p>
      <p>Salary: {salary}</p>
    </div>
  );
};

const FamilyInformation: React.FC<FamilyInformationProps> = ({
  father,
  mother,
  emergencyContact,
}) => {
  return (
    <div>
      <h2>Father Information</h2>
      <p>Full Name: {father.fullName}</p>
      <p>Phone Number: {father.phoneNumber}</p>
      <p>Email: {father.email}</p>
      <p>Nationality: {father.nationality}</p>
      <h2>Mother and Emergency Contact Information</h2>
      <p>Full Name: {mother.fullName}</p>
      <p>Phone Number: {mother.phoneNumber}</p>
      <p>Email: {mother.email}</p>
      <p>Nationality: {mother.nationality}</p>
      <p>Emergency Contact Full Name: {emergencyContact.fullName}</p>
      <p>Emergency Contact Phone Number: {emergencyContact.phoneNumber}</p>
      <p>Emergency Contact Email: {emergencyContact.email}</p>
      <p>Emergency Contact Relationship: {emergencyContact.relationship}</p>
    </div>
  );
};

const ProfilePage: React.FC = () => {
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
    <Layout page="employee">
      <div className="flex justify-center items-center flex-col space-y-4">
        <h1 className="text-3xl font-bold">Profile Page</h1>
        <div className="space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={personalInfoButtonClickHandler}
          >
            Personal Information
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={employmentDetailButtonClickHandler}
          >
            Employment Details
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={familyInfoButtonClickHandler}
          >
            Family Information
          </button>
        </div>
        {personalInfoVisible && (
          <PersonalInformation
            fullName="John Doe"
            idNumber="1234567890123"
            age={30}
            phoneNumber="555-555-5555"
            email="john.doe@example.com"
            maritalStatus="Single"
            nationality="American"
            town="Addis Ababa"
            woreda="Bole"
            kebele="22"
            houseNumber="123"
          />
        )}
        {employmentDetailVisible && (
          <EmploymentDetail
            employmentDate="01/01/2020"
            employeeStatus="Active"
            jobTitle="Software Engineer"
            salary={50000}
          />
        )}
        {familyInfoVisible && (
          <FamilyInformation
            father={{
              fullName: "Peter Smith",
              phoneNumber: "111-222-3333",
              email: "peter.smith@example.com",
              nationality: "American",
            }}
            mother={{
              fullName: "Jane Smith",
              phoneNumber: "444-555-6666",
              email: "jane.smith@example.com",
              nationality: "American",
            }}
            emergencyContact={{
              fullName: "John Doe",
              phoneNumber: "777-888-9999",
              email: "john.doe@example.com",
              relationship: "Friend",
            }}
          />
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;
