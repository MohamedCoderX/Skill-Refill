import React from "react";
import node from "../assets/Home/Node.png";
import python from "../assets/Home/Python.png";
import sql from "../assets/Home/Sql.png";

const courses = [
  {
    title: "Python with Flask",
    lessons: "2 Lessons | Week",
    desc: "Learn Python with Flask from Scratch!",
    students: "52 Students",
    img: python,
  },
  {
    title: "Node.js",
    lessons: "2 Lessons | Week",
    desc: "Master Node.js for Backend",
    students: "97 Students",
    img: node,
  },
  {
    title: "SQL",
    lessons: "4 Lessons | Week",
    desc: "MySQL for Database Management System",
    students: "36 Students",
    img: sql,
  },
];

export default function CourseSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white-black">
          Available <span className="text-blue">Courses</span>
        </h2>
        <p className="text-black-50 font-semibold mt-2 text-lg">
          Your Next Skill Is One Click Away
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
             
              className="p-[6px] rounded-2xl bg-gradient-to-tl hover:shadow-2xl transition duration-300 from-[#6892D5] via-transparent to-[#6892D5]"
            >
        
              <div className="rounded-2xl overflow-hidden bg-white  transition duration-300 hover:shadow-2xl flex flex-col">
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-44 w-full rounded-2xl  p-4 object-cover"
                />
                <div className="p-3 flex items-start flex-col flex-1">
                  <h3 className="text-xl font-semibold ">
                    {course.title}
                  </h3>
                  <p className="text-md text-gray-700 font-bold mt-1">{course.lessons}</p>
                  <p className="text-gray-600 mt-1 flex-1">{course.desc}</p>
                  <div className="flex flex-col items-start gap-2 mt-1">
                    <span className="text-md text-black-50">
                      {course.students}
                    </span>
                    <button className="bg-blue border-2 border-gray-200 text-white text-md px-5 py-1.5 rounded-full shadow-md">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
