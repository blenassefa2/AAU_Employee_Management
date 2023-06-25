import React, { useRef, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import { useGetUserQuery } from "@/redux/slices/users/usersApiSlice";
import { AiOutlineCloudUpload } from "react-icons/ai";
function EmployeeRegistration() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    maritalStatus: "",
  });

  const [employment, setEmployment] = useState({
    employmentDate: "",
    employmentStatus: "",
    jobTitle: "",
    salary: 2,
  });

  const [familyBackground, setFamilyBackground] = useState({
    fatherName: "",
    fatherPhone: "",
    fatherEmail: "",
    fatherNationality: "",
    motherName: "",
    motherPhone: "",
    motherEmail: "",
    motherNationality: "",
    emergencyContactName: "",
    emergencyContactWoreda: "",
    emergencyContactPhone: "",

    emergencyContactEmail: "",
    emergencyContactTown: "",
    emergencyContactKebele: "",
  });

  const [activeSlider, setActiveSlider] = useState("personal");
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery({});
  let user = { photoUrl: "" };
  if (isSuccess) {
    user = data.data;
    console.log(data.data);
  }
  const handleSliderChange = (slider: React.SetStateAction<string>) => {
    setActiveSlider(slider);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const [photoUrl, setPhotoUrl] = useState<string>(user?.photoUrl || "");
  const photo: any = useRef(null);
  /**
   * @param event
   * Does something with form data, e.g. submit to a server
   */

  const handleClick = () => {
    photo.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Employee: ", employee);
    console.log("Employment: ", employment);
    console.log("Family Background: ", familyBackground);
  };

  const handleRangeChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value < 33) {
      setActiveSlider("personal");
    } else if (value < 66) {
      setActiveSlider("employment");
    } else {
      setActiveSlider("family");
    }
  };
  interface NavbarProps {
    title: string;
  }
  const [activeDot, setActiveDot] = useState<number | null>(null);

  const handleDotClick = (dotIndex: number) => {
    setActiveDot(dotIndex);
  };
  return (
    <div className="bg-white ">
      <Layout page="hrexpert">
        <div className="bg-white">
          {/* Use a range input element to create the line with the red circle */}
          <div className="mt-10 mx-[10%] w-[80%]">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={
                activeSlider === "personal"
                  ? "0"
                  : activeSlider === "employment"
                  ? "50"
                  : "100"
              }
              onChange={handleChange}
              style={{
                width: "100%",
                height: "10px",
                borderRadius: "8px",
                background: "lightgray",
                outline: "none",
                appearance: "none",
                position: "relative",
                cursor: "pointer",
              }}
            />
            {[
              ["personal", "0"],
              ["employment", "50"],
              ["family", "100"],
            ].map(([slider, left]) => (
              <div
                key={slider}
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "8px",
                  background: "red",
                  position: "absolute",
                  top: "-7px",
                  left,
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                }}
                onClick={() => handleSliderChange(slider)}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mb-16">
            <div className="flex justify-between mb-8"></div>
            <div style={{ marginBottom: "20px" }}></div>
            {[
              ["Personal Information", "personal"],
              ["Employment Detail", "employment"],
              ["Family Background", "family"],
            ].map(([label, slider]) => (
              <button
                key={slider}
                className={`${
                  activeSlider === slider
                    ? "bg-primary text-white"
                    : "text-gray-500"
                } flex-1 rounded-xl ml-16 text-center py-2`}
                onClick={() => handleSliderChange(slider)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center h-screen p-8 ">
            <div style={{ height: "700px", overflow: "auto" }}>
              <div className="flex justify-between mb-16">
                <div className="w-full max-w-lg">
                  {activeSlider === "personal" && (
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-2 gap-x-32 gap-y-0"
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={employee.firstName}
                          onChange={handleChange}
                          className="mt-1 mr-8 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="Enter first name"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={employee.lastName}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="Enter last name"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={employee.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          placeholder="Enter email address"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-medium text-gray-700"
                        >
                          Age
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={employee.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="Enter age"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-medium text-gray-700"
                        >
                          Town
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={employee.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="town"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-medium text-gray-700"
                        >
                          Woreda
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={employee.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="Wereda"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={employee.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="Eg. 09-123456789"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="maritalStatus"
                          className="block font-medium text-gray-700"
                        >
                          Marital Status
                        </label>
                        <select
                          id="maritalStatus"
                          name="maritalStatus"
                          value={employee.maritalStatus}
                          onChange={handleChange}
                          className="mt-1 text-black block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        >
                          <option className="text-gray-300" value="">
                            Choose...
                          </option>
                          <option className="text-black" value="Single">
                            Single
                          </option>
                          <option className="text-black" value="Married">
                            Married
                          </option>
                          <option className="text-black" value="Widowed">
                            Widowed
                          </option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="address"
                          className="block font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={employee.address}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          placeholder="road/current residence/country"
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div className="colspan-2 flex ">
                        <img
                          src={`${user?.photoUrl}`}
                          className="w-16 h-16 bg-gray-300 rounded-full mr-2"
                        />
                        <div className="block w-600 py-2 flex flex-direction-col justify-center rounded-lg bg-gray-100 border-transparent focus:border-gray-200 text-secondary focus:bg-white focus:ring-0 secondary-text">
                          <span>
                            <AiOutlineCloudUpload
                              className="ml-[50%]"
                              color="blue"
                            />
                            <p className="ml-[5%] text-center text-black">
                              <b onClick={handleClick}>Click to upload</b> or
                              drag and drop SVG, PNG, JPG, or GIF(max800x400px)
                            </p>
                          </span>

                          <input
                            type="file"
                            id="photo"
                            name="photo"
                            accept="image/*"
                            ref={photo}
                            className="hidden"
                            onChange={(event) => {
                              handleFileChange(event);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </form>
                  )}
                  {activeSlider === "employment" && (
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-2 gap-x-32 gap-y-0"
                    >
                      <div>
                        <label
                          htmlFor="jobTitle"
                          className="block font-medium text-gray-700 mt-4"
                        >
                          Employment Date
                        </label>
                        <input
                          type="text"
                          id="employmentDate"
                          name="employmentDate"
                          value={employment.employmentDate}
                          onChange={(e) =>
                            setEmployment({
                              ...employment,
                              employmentDate: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="jobTitle"
                          className="block font-medium text-gray-700 mt-4"
                        >
                          Employment Status
                        </label>
                        <input
                          type="text"
                          id="employmentStatus"
                          name="employmentStatus"
                          value={employment.employmentStatus}
                          onChange={(e) =>
                            setEmployment({
                              ...employment,
                              employmentStatus: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="salary"
                          className="block font-medium text-gray-700 mt-4"
                        >
                          Job Title
                        </label>
                        <input
                          type="number"
                          id="jobTitle"
                          name="jobTitle"
                          value={employment.jobTitle}
                          onChange={(e) =>
                            setEmployment({
                              ...employment,
                              jobTitle: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="salary"
                          className="block font-medium text-gray-700 mt-4"
                        >
                          Salary
                        </label>
                        <input
                          type="number"
                          id="salary"
                          name="salary"
                          value={employment.salary}
                          onChange={(e) =>
                            setEmployment({
                              ...employment,
                              salary: parseInt(e.target.value),
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload CV</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, PDF up to 10MB
                        </p>
                      </div>

                      <div></div>
                      <div className="col-span-2 flex justify-center mt-6"></div>
                    </form>
                  )}
                  {activeSlider === "family" && (
                    <form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-2 gap-x-32"
                    >
                      <div>
                        <label
                          htmlFor="fatherName"
                          className="block font-medium text-gray-700"
                        >
                          Fathers Full Name
                        </label>
                        <input
                          type="text"
                          id="fatherName"
                          name="fatherName"
                          value={familyBackground.fatherName}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              fatherName: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="fatherPhone"
                          className="block font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="fatherPhone"
                          name="fatherPhone"
                          value={familyBackground.fatherPhone}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              fatherPhone: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="fatherEmail"
                          className="block font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="fatherEmail"
                          name="fatherEmail"
                          value={familyBackground.fatherEmail}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              fatherEmail: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="fatherNationality"
                          className="block font-medium text-gray-700"
                        >
                          Nationality
                        </label>
                        <input
                          type="text"
                          id="fatherNationality"
                          name="fatherNationality"
                          value={familyBackground.fatherNationality}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              fatherNationality: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="motherName"
                          className="block font-medium text-gray-700"
                        >
                          Mothers Full Name
                        </label>
                        <input
                          type="text"
                          id="motherName"
                          name="motherName"
                          value={familyBackground.motherName}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              motherName: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="motherPhone"
                          className="block font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="motherPhone"
                          name="motherPhone"
                          value={familyBackground.motherPhone}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              motherPhone: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="motherEmail"
                          className="block font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="motherEmail"
                          name="motherEmail"
                          value={familyBackground.motherEmail}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              motherEmail: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="motherNationality"
                          className="block font-medium text-gray-700"
                        >
                          Nationality
                        </label>
                        <input
                          type="text"
                          id="motherNationality"
                          name="motherNationality"
                          value={familyBackground.motherNationality}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              motherNationality: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="emergencyContactName"
                          className="block font-medium text-gray-700"
                        >
                          Emergency Contact Full Name
                        </label>
                        <input
                          type="text"
                          id="emergencyContactName"
                          name="emergencyContactName"
                          value={familyBackground.emergencyContactName}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              emergencyContactName: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="emergencyContactPhone"
                          className="block font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="emergencyContactPhone"
                          name="emergencyContactPhone"
                          value={familyBackground.emergencyContactPhone}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              emergencyContactPhone: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="emergencyContactEmail"
                          className="block font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="emergencyContactEmail"
                          name="emergencyContactEmail"
                          value={familyBackground.emergencyContactEmail}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              emergencyContactEmail: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="emergencyContactWoreda"
                          className="block font-medium text-gray-700"
                        >
                          Woreda
                        </label>
                        <input
                          type="text"
                          id="emergencyContactWoreda"
                          name="emergencyContactWoreda"
                          value={familyBackground.emergencyContactWoreda}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              emergencyContactWoreda: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="emergencyContactTown"
                          className="block font-medium text-gray-700"
                        >
                          Town
                        </label>
                        <input
                          type="text"
                          id="emergencyContactTown"
                          name="emergencyContactTown"
                          value={familyBackground.emergencyContactTown}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              emergencyContactTown: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                        <label
                          htmlFor="emergencyContactKebele"
                          className="block font-medium text-gray-700"
                        >
                          Kebele
                        </label>
                        <input
                          type="text"
                          id="emergencyContactKebele"
                          name="emergencyContactKebele"
                          value={familyBackground.emergencyContactKebele}
                          onChange={(e) =>
                            setFamilyBackground({
                              ...familyBackground,
                              emergencyContactTown: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                          required
                          style={{
                            width: "100%",
                            height: "48px",
                            marginBottom: "16px",
                          }}
                        />
                      </div>
                      <div className="col-span-2 flex justify-end mt-8">
                        <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-4">
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                          Save and Next
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default EmployeeRegistration;
