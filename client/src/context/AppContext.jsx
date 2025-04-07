import humanizeDuration from "humanize-duration";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // function to calculate average rating of course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // function to calculate course chapter Time
  const CalculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // function to calculate course duration
  const CalculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // function to calculate to No of lectures in the course
  const calculateNoOfLectures = (course) => {
    let TotalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        TotalLectures += chapter.chapterContent.length;
      }
    });
    return TotalLectures;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    CalculateChapterTime,
    CalculateCourseDuration,
    calculateNoOfLectures,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
