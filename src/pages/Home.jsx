import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ContactTable from "../components/ContactTable";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center p-6">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              All Contacts
            </h2>

            <Link
              to="/add"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ➕ Add New
            </Link>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="w-full md:w-1/2">
              <SearchBar />
            </div>

            <div className="w-full md:w-1/4">
              <Filter />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <ContactTable />
          </div>

        </div>
      </div>


    </>
  );
};

export default Home;
