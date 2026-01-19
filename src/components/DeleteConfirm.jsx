import { useContext } from "react";
import { deleteContact } from "../services/api";
import { ContactContext } from "../context/ContactContext";

const DeleteConfirm = ({ contactId, onClose }) => {
  const { fetchContacts } = useContext(ContactContext);

  const handleDelete = async () => {
    await deleteContact(contactId);
    fetchContacts();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 animate-fadeIn">

        <h4 className="text-lg font-semibold text-gray-800 text-center mb-6">
          Are you sure you want to delete this contact?
        </h4>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleDelete}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Yes
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            No
          </button>
        </div>

      </div>
    </div>

  );
};

export default DeleteConfirm;
