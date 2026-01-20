import { useState } from "react";
import EditContactModal from "./EditContactModal";
import DeleteConfirm from "./DeleteConfirm";

const ShowContactModal = ({ contact, onClose, onEdit, onDelete }) => {

  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">
          Contact Details
        </h2>

        <div className="space-y-2 text-gray-700">
          <p><strong>First Name:</strong> {contact.firstName}</p>
          <p><strong>Last Name:</strong> {contact.lastName}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
        </div>

        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={() => setEdit(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Edit
          </button>
          {edit && (
            <EditContactModal
              contact={contact}
              onClose={() => setEdit(false)}
            />
          )}


          <button
            onClick={() => setDel(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          {del && (
            <DeleteConfirm
              contactId={contact.id}
              onClose={() => setDel(false)}
            />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Close
          </button>




        </div>
      </div>
    </div>


  );
};

export default ShowContactModal;
