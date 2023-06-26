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
      <p>
        <strong>Full Name:</strong> &nbsp;{fullName}
      </p>
      <p>
        <strong>ID Number:</strong>&nbsp;{idNumber}
      </p>
      <p>
        <strong>Age: </strong>&nbsp;{age}
      </p>
      <p>
        <strong>Phone Number:</strong>&nbsp;{phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> &nbsp;{email}
      </p>
      <p>
        <strong>Marital Status: </strong>&nbsp;{maritalStatus}
      </p>
      <p>
        <strong>Nationality:</strong>&nbsp; {nationality}
      </p>
      <p>
        <strong>Town:</strong>&nbsp; {town}
      </p>
      <p>
        <strong>Woreda:</strong>&nbsp; {woreda}
      </p>
      <p>
        <strong>Kebele:</strong>&nbsp; {kebele}
      </p>
      <p>
        <strong>House Number: </strong>&nbsp;{houseNumber}
      </p>
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
      <p>
        <strong>Employment Date: </strong>&nbsp;{employmentDate}
      </p>
      <p>
        <strong>Employee Status:</strong>&nbsp; {employeeStatus}
      </p>
      <p>
        <strong>Job Title: </strong>&nbsp;{jobTitle}
      </p>
      <p>
        <strong>Salary:</strong>&nbsp; {salary}
      </p>
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
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ color: "rgba(59, 124, 189, 1)" }}>
          <strong>Father Information</strong>
        </h1>
        <p>
          <strong>Full Name: </strong>&nbsp;{father.fullName}
        </p>
        <p>
          <strong>Phone Number: </strong>&nbsp; {father.phoneNumber}
        </p>
        <p>
          <strong>Email: </strong>&nbsp;{father.email}
        </p>
        <p>
          <strong>Nationality: </strong>&nbsp;{father.nationality}
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ color: "rgba(59, 124, 189, 1)" }}>
          <strong>Mother Contact Information</strong>
        </h1>
        <p>
          <strong>Full Name: </strong>&nbsp;{mother.fullName}
        </p>
        <p>
          <strong>Phone Number: </strong>&nbsp;{mother.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong>&nbsp;{mother.email}
        </p>
        <p>
          <strong>Nationality: </strong>&nbsp;{mother.nationality}
        </p>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ color: "rgba(59, 124, 189, 1)" }}>
          <strong>Emergency Contact Information</strong>
        </h1>
        <p>
          <strong> Full Name:</strong> &nbsp;{emergencyContact.fullName}
        </p>
        <p>
          <strong> Phone Number: &nbsp;</strong>
          {emergencyContact.phoneNumber}
        </p>
        <p>
          <strong> Email: </strong>&nbsp;{emergencyContact.email}
        </p>
        <p>
          <strong> Relationship:</strong> &nbsp;{emergencyContact.relationship}
        </p>
      </div>
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
          <div className="grid grid-cols-2 gap-4">
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
          </div>
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
