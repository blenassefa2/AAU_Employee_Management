import React, { useState } from 'react';

const LeaveRequest = () => {
  const [dayTimeType, setDayTimeType] = useState('fullDay');
  const [leaveType, setLeaveType] = useState('annual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleDayTimeTypeChange = (e) => {
    setDayTimeType(e.target.value);
  };

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send leave request data to the server or perform any other action
    console.log({
      dayTimeType,
      leaveType,
      name,
      email,
      reason,
    });

    // Show success message
    setSuccessMessage('Leave request successfully submitted!');
  };

  const handleCancel = () => {
    // Reset form fields or perform any other action
    setDayTimeType('fullDay');
    setLeaveType('annual');
    setName('');
    setEmail('');
    setReason('');
    setSuccessMessage('');
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-4xl font-bold mb-6 text-black mt-16">Leave Request</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex">
          <div className="mr-4">
            <label className="block mb-2 text-black">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-60 px-3 py-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ml-24 text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-60 px-3 ml-24 py-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="mr-4">
            <label className="block mb-2 text-black">From Date</label>
            <input
              type="date"
              className="w-60 px-3 py-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ml-24 text-black">To Date</label>
            <input
              type="date"
              className="w-60 px-3 py-2 ml-24 border border-gray-300 rounded text-black"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Day Time Type</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                value="firstHalf"
                checked={dayTimeType === 'firstHalf'}
                onChange={handleDayTimeTypeChange}
              />{' '}
              <span className="text-black">First Half</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="secondHalf"
                checked={dayTimeType === 'secondHalf'}
                onChange={handleDayTimeTypeChange}
              />{' '}
              <span className="text-black">Second Half</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="fullDay"
                checked={dayTimeType === 'fullDay'}
                onChange={handleDayTimeTypeChange}
              />{' '}
              <span className="text-black">Full Day</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Leave Type</label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                value="annual"
                checked={leaveType === 'annual'}
                onChange={handleLeaveTypeChange}
              />{' '}
              <span className="text-black">Annual Leave</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="optional"
                checked={leaveType === 'optional'}
                onChange={handleLeaveTypeChange}
              />{' '}
              <span className="text-black">Optional Leave</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-black">Reason for Leave</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-96 h-60 px-3 py-2 border border-gray-300 rounded text-black"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-4"
          >
            Cancel
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="bg-green-500 text-white px-4 py-2 rounded">
          {successMessage}
          <button
            type="button"
            className="bg-white text-green-500 px-4 py-2 rounded ml-4"
            onClick={() => setSuccessMessage('')}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaveRequest;
