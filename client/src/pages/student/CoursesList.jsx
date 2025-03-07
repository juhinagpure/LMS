import { useContext } from "react";
import { AppContext } from "../../context/AppContext"; // Adjust the import path as necessary

const CoursesList = () => {
  const { navigate } = useContext(AppContext);

  return (
    <>
      <div>
        <div>
          <h1>Course List</h1>
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
      </div>
    </>
  );
};

export default CoursesList;
