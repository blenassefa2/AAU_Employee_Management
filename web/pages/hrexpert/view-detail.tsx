import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";

const EmployeePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const employee = {
    fullName: "John Doe",
    phoneNumber: "1234567890",
    email: "johndoe@example.com",
    age: 30,
    town: "Sample Town",
    wereda: "Sample Wereda",
    kebele: "Sample Kebele",
    houseNumber: "123",
    maritalStatus: "Married",
    photo: "employee.jpg",
  };

  const employment = {
    employmentDate: "2022-01-01",
    employmentStatus: "Active",
    jobTitle: "Software Engineer",
    salary: 5000,
    cv: "cv.pdf",
  };

  const family = {
    father: {
      fullName: "John Doe Sr.",
      phoneNumber: "0987654321",
      email: "johnsrdoe@example.com",
      nationality: "Sample Nationality",
    },
    mother: {
      fullName: "Jane Doe",
      phoneNumber: "0987654322",
      email: "janedoe@example.com",
      nationality: "Sample Nationality",
    },
  };

  const emergency = {
    fullName: "Emergency Contact",
    phoneNumber: "0987654323",
    email: "emergency@example.com",
    nationality: "Sample Nationality",
    town: "Sample Town",
    wereda: "Sample Wereda",
    kebele: "Sample Kebele",
    houseNumber: "456",
  };

  const handleNext = () => {
    if (currentPage === 3) {
      router.push("/confirmation");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <div>
            <h2>Employee Details</h2>
            <p>Full Name: {employee.fullName}</p>
            <p>Phone Number: {employee.phoneNumber}</p>
            <p>Email: {employee.email}</p>
            <p>Age: {employee.age}</p>
            <p>Town: {employee.town}</p>
            <p>Wereda: {employee.wereda}</p>
            <p>Kebele: {employee.kebele}</p>
            <p>House Number: {employee.houseNumber}</p>
            <p>Marital Status: {employee.maritalStatus}</p>
            <img src={employee.photo} alt="Employee Photo" />
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Employment Details</h2>
            <p>Employment Date: {employment.employmentDate}</p>
            <p>Employment Status: {employment.employmentStatus}</p>
            <p>Job Title: {employment.jobTitle}</p>
            <p>Salary: {employment.salary}</p>
            <a href={employment.cv} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Family Details</h2>
            <h3>Father</h3>
            <p>Full Name: {family.father.fullName}</p>
            <p>Phone Number: {family.father.phoneNumber}</p>
            <p>Email: {family.father.email}</p>
            <p>Nationality: {family.father.nationality}</p>

            <h3>Mother</h3>
            <p>Full Name: {family.mother.fullName}</p>
            <p>Phone Number: {family.mother.phoneNumber}</p>
            <p>Email: {family.mother.email}</p>
            <p>Nationality: {family.mother.nationality}</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Emergency Contact Details</h2>
            <p>Full Name: {emergency.fullName}</p>
            <p>Phone Number: {emergency.phoneNumber}</p>
            <p>Email: {emergency.email}</p>
            <p>Nationality: {emergency.nationality}</p>
            <p>Town: {emergency.town}</p>
            <p>Wereda: {emergency.wereda}</p>
            <p>Kebele: {emergency.kebele}</p>
            <p>House Number: {emergency.houseNumber}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Layout page="hrexpert">
        <div className="container mx-auto py-8">
          {renderCurrentPage()}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNext}
          >
            {currentPage === 3 ? "Finish" : "Next"}
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default EmployeePage;
