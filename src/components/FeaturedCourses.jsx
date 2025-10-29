import React from "react";

const courses = [
  {
    id: 1,
    title: "FastAPI Full Stack Mastery : Build Test Deploy Earn",
    teacher: "Geeky Shows",
    price: 499,
    oldPrice: 1999,
    discount: "75 % Off",
    students: 1436,
    badge: "Complete Course",
    badgeColor: "bg-green-600",
    videoLabel: "Video Course",
    videoColor: "bg-red-500",
    image: "https://i.ytimg.com/vi/3NO2N2VmYxQ/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Master Django HTMX: Build Dynamic & Modern Web Apps",
    teacher: "Geeky Shows",
    price: 499,
    oldPrice: 1999,
    discount: "75 % Off",
    students: 53,
    badge: "Video Course",
    badgeColor: "bg-purple-600",
    videoLabel: "Video Course",
    videoColor: "bg-red-500",
    image:
      "https://i.ytimg.com/vi/ZjBLbXUuyWg/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Django 5 Mastery from beginner to Pro",
    teacher: "Geeky Shows",
    price: 189,
    oldPrice: 378,
    discount: "50 % Off",
    students: 469,
    badge: "Notes & Code",
    badgeColor: "bg-blue-600",
    videoLabel: "Notes & Code",
    videoColor: "bg-blue-600",
    image:
      "https://i.ytimg.com/vi/fPQE2WgoGQY/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Complete Alpine JS Course with 30+ Projects Code",
    teacher: "Geeky Shows",
    price: 49,
    oldPrice: 196,
    discount: "75 % Off",
    students: 34,
    badge: "Notes & Code",
    badgeColor: "bg-blue-600",
    videoLabel: "Notes & Code",
    videoColor: "bg-blue-600",
    image:
      "https://i.ytimg.com/vi/mt21pK9LgC4/maxresdefault.jpg",
  },
];

function FeaturedCourses() {
  return (
 <section className=" pt-0 -mt-10 py-16 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Featured Courses
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <span
                className={`absolute top-2 left-2 text-xs font-semibold text-white px-2 py-1 rounded-md ${course.badgeColor}`}
              >
                {course.badge}
              </span>
              <span
                className={`absolute top-2 right-2 text-xs font-semibold text-white px-2 py-1 rounded-md ${course.videoColor}`}
              >
                {course.videoLabel}
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                by {course.teacher}
              </p>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ₹ {course.price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ₹ {course.oldPrice}
                </span>
                <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  {course.discount}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                {course.students} Students
              </p>

              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-300">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCourses;
