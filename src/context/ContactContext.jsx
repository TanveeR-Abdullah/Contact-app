import { createContext, useEffect, useState } from "react";
import { getContacts } from "../services/api";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        search,
        setSearch,
        filter,
        setFilter,
        fetchContacts
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
