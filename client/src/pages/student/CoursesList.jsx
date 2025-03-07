import { useContext } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/student/SearchBar";
import { AppContext } from "../../context/AppContext"; // Adjust the import path as necessary
const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left w-full">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Course List
            </h1>
            <p className="text-gray-500">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home{" "}
              </span>
              / <span> Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>
        <div>
          {allCourses.map((course, index) => (
            <div key={index}>{course}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
