import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";

const AppealPage: React.FC = () => {
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting comment:", comment);
    // You can add your own logic here to submit the comment to your backend
    setSent(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Layout page="employee">
        <div className="container ml-10 p-4 max-w-xl">
          <div className="max-w-md ">
            <h2 className="text-2xl font-bold mb-4">Appeal</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 font-bold">
                Write your appeal here:
              </label>
              <textarea
                className="bg-gray-300"
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "10px",
                }}
                value={comment}
                onChange={handleChange}
                required
                placeholder="Write your comment here"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
