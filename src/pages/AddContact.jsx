import { useState } from "react";
import { addContact } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: ""
  });

  // const handleSubmit = async () => {
  //   await addContact({ ...data, createdAt: new Date() });
  //   navigate("/");
  // };
  const handleSubmit = async (data) => {
  const res = await addContact(data);
  setContacts((prev) => [...prev, res.data]);
};

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Add New Contact
          </h2>

          <div className="space-y-4">
            {Object.keys(data).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600 capitalize">
                  {key}
                </label>
                <input
                  type="text"
                  value={data[key]}
                  onChange={(e) =>
                    setData({ ...data, [key]: e.target.value })
                  }
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
