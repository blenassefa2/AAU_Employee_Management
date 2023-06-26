import { useLoginMutation } from "@/redux/slices/auth/authApiSlice";
import { useChangePasswordMutation } from "@/redux/slices/users/usersApiSlice";
import React, { useState } from "react";

const ChangePasswordForm = () => {
  const [changePassword, { isLoading, isSuccess }] =
    useChangePasswordMutation();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newConfirmPassword, setConfirm] = useState("");

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Change Password</h1>
      <div className="flex flex-col gap-4 max-w-md p-4 bg-white rounded shadow-md">
        <input
          type="password"
          placeholder="Previous Password"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-primary rounded text-white"
            onClick={async function handle() {
              if (newConfirmPassword == newPassword) {
                const userData = await changePassword({
                  newPassword,
                }).unwrap();
              }

              if (isSuccess) {
                setOldPassword("done");
              }
            }}
          >
            Save
          </button>
          <div>{oldPassword}</div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
