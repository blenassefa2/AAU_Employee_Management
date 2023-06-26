import Layout from '@/components/Layout/Layout'
import React from 'react'

const EmployeeInfo = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Layout page='hrexpert'>
      <h1 className="text-center font-bold text-xl"> My Profile Detail</h1>
        <div className="p-4">
          <div className="mb-4 border-blue-500 border-2 rounded-lg p-4">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Full Name:</p>
                <p>John Doe</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">ID Number:</p>
                <p>1234567890123</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Age:</p>
                <p>30</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Phone Number:</p>
                <p>555-555-5555</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Email:</p>
                <p>john.doe@example.com</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Marital Status:</p>
                <p>Single</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Nationality:</p>
                <p>American</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Town:</p>
                <p>Addis Ababa</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Woreda:</p>
                <p>Bole</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Kebele:</p>
                <p>22</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">House Number:</p>
                <p>123</p>
              </div>
            </div>
          </div>
          <div className="mb-4 border-blue-500 border-2 rounded-lg p-4">
            <h2 className="text-xl font-bold">Employment Detail</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Employment Date:</p>
                <p>01/01/2020</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Employee Status:</p>
                <p>Active</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Job Title:</p>
                <p>Software Engineer</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <p className="font-bold">Salary:</p>
                <p>50000</p>
              </div>
            </div>
          </div>
          <div className="border-blue-500 border-2 rounded-lg p-4">
            <h2 className="text-xl font-bold">Family Background</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="mb-4 border-blue-300 border-2 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Father Information</h3>
                  <div>
                    <p className="font-bold">Full Name:</p>
                    <p>Peter Smith</p>
                  </div>
                  <div>
                    <p className="font-bold">Phone Number:</p>
                    <p>555-555-5555</p>
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p>peter.smith@example.com</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="mb-4 border-blue-300 border-2 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Mother Information</h3>
                  <div>
                    <p className="font-bold">Full Name:</p>
                    <p>Mary Johnson</p>
                  </div>
                  <div>
                    <p className="font-bold">Phone Number:</p>
                    <p>555-555-5555</p>
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p>mary.johnson@example.com</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="mb-4 border-blue-300 border-2 rounded-lg p-4">
                  <h3 className="font-bold mb-2">Emergency Information</h3>
                  <div>
                    <p className="font-bold">Full Name:</p>
                    <p>Jane Doe</p>
                  </div>
                  <div>
                    <p className="font-bold">Phone Number:</p>
                    <p>555-555-5555</p>
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <p>jane.doe@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default EmployeeInfo