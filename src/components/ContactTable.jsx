import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactRow from "./ContactRow";

const ContactTable = () => {
  const { contacts, search, filter } = useContext(ContactContext);

  let data = contacts.filter(c =>
    `${c.firstName} ${c.lastName} ${c.email} ${c.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (filter === "fname")
    data.sort((a, b) => a.firstName.localeCompare(b.firstName));
  if (filter === "lname")
    data.sort((a, b) => a.lastName.localeCompare(b.lastName));
  if (filter === "oldest")
    data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  if (!data.length) return <p>No Contact Information</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th><th>First Name</th><th>Last Name</th>
          <th>Email</th><th>Phone</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c, i) => (
          <ContactRow key={c.id} contact={c} index={i} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
