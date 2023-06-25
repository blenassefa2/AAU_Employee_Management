import Layout from "@/components/Layout/HRExpertlayout";
import React, { useState } from "react";

const AppealPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [appealDate, setAppealDate] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting comment:", comment);
    // You can add your own logic here to submit the comment to your backend
    setSent(true);
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  };

  const handleAppealDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppealDate(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <div className="bg-white ">
        <Layout page='statistician'>
        <div className="container ml-10 p-4 max-w-xl">
            <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-4">Appeal</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                    <label className="block mb-2 font-bold">First Name:</label>
                    <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your first name"
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="block mb-2 font-bold">Last Name:</label>
                    <input
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your last name"
                    />
                </div>
                </div>
                <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                    <label className="block mb-2 font-bold">Department:</label>
                    <input
                    type="text"
                    value={department}
                    onChange={handleDepartmentChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your department"
                    />
                </div>
                <div className="w-1/2 pl-2">
                    <label className="block mb-2 font-bold">Appeal Date:</label>
                    <input
                    type="date"
                    value={appealDate}
                    onChange={handleAppealDateChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                    />
                </div>
                </div>
                <label className="block mb-2 font-bold">Write your appeal here:</label>
                <textarea
                style={{ width: "500px", height: "500px", borderRadius: "10px" }}
                value={comment}
                onChange={handleCommentChange}
                required
                placeholder="Write your comment here"
                />
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                style={{ marginLeft: "0%" }}
                >
                Send
                </button>
            </form>
            {sent && <p className="text-green-500 mt-2">Sent successfully!</p>}
            </div>
        </div>
        </Layout>
    </div>
  );
};

export default AppealPage;