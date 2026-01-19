import { useState, useContext } from "react";
import { updateContact } from "../services/api";
import { ContactContext } from "../context/ContactContext";

const EditContactModal = ({ contact, onClose }) => {
  const { fetchContacts } = useContext(ContactContext);

  const [data, setData] = useState({
    firstName: contact.firstName,
    lastName: contact.lastName,
    email: contact.email,
    phone: contact.phone,
    address: contact.address,
  });

  const handleUpdate = async () => {
    await updateContact(contact.id, data);
    fetchContacts();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 animate-fadeIn">

        <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Edit Contact
        </h3>

        <div className="space-y-4">
          {Object.keys(data).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium text-gray-600 capitalize mb-1">
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
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Save
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>

  );
};

export default EditContactModal;
