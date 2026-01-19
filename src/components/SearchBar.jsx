import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const SearchBar = () => {
  const { setSearch } = useContext(ContactContext);

  return (
    <>
      <div className=" flex justify-center  ">
        <input
          type="text"
          placeholder="Search contact"
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded "
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

    </>
  );
};

export default SearchBar;
