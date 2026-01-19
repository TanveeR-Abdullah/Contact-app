import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const Filter = () => {
  const { setFilter } = useContext(ContactContext);

  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="default">Default</option>
      <option value="fname">First Name (A-Z)</option>
      <option value="lname">Last Name (A-Z)</option>
      <option value="oldest">Oldest To First</option>
    </select>
  );
};

export default Filter;
