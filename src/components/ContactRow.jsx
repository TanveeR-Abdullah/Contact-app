import { useState } from "react";
import ShowContactModal from "./ShowContactModal";
import EditContactModal from "./EditContactModal";
import DeleteConfirm from "./DeleteConfirm";

const ContactRow = ({ contact, index }) => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);


  return (
    <>
      <tr className="border-b hover:bg-gray-50 transition">
        <td className="px-4 py-3 text-center text-gray-700">
          {index + 1}
        </td>

        <td className="px-4 py-3 text-gray-700">
          {contact.firstName}
        </td>

        <td className="px-4 py-3 text-gray-700">
          {contact.lastName}
        </td>

        <td className="px-4 py-3 text-gray-700">
          {contact.email}
        </td>

        <td className="px-4 py-3 text-gray-700">
          {contact.phone}
        </td>

        <td className="px-4 gap-2.5 flex py-3">

          <button
            onClick={() => setShow(true)}
            className="text-blue-600 hover:text-blue-800"
          >
            👁
          </button>

          <button
            onClick={() => setEdit(true)}
            className="text-green-600 hover:text-green-800"
          >
            ✏
          </button>

          <button
            onClick={() => setDel(true)}
            className="text-red-600 hover:text-red-800"
          >
            ❌
          </button>

        </td>
      </tr>

      {show && (
        <ShowContactModal
          contact={contact}
          onClose={() => setShow(false)}
        />
      )}

      {edit && (
        <EditContactModal
          contact={contact}
          onClose={() => setEdit(false)}
        />
      )}

      {del && (
        <DeleteConfirm
          contactId={contact.id}
          onClose={() => setDel(false)}
        />
      )}
    </>
  );
};

export default ContactRow;
