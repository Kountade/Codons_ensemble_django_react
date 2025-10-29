import React from "react";

const projects = [
  {
    id: 1,
    image: "https://i.ytimg.com/vi/3NO2N2VmYxQ/maxresdefault.jpg",
    title: "Django in One Video Build a Finance Tracker from Scratch",
    author: "by Geeky Shows",
    price: "₹12",
    oldPrice: "₹200",
    discount: "94% Off",
    students: "76 Students",
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/8h8q2F7N9Gk/maxresdefault.jpg",
    title: "iSchool LMS PHP Project with Report",
    author: "by Geeky Shows",
    price: "₹210",
    oldPrice: "₹420",
    discount: "50% Off",
    students: "4649 Students",
  },
  {
    id: 3,
    image: "https://i.ytimg.com/vi/6v2L2UGZJAM/maxresdefault.jpg",
    title: "Complete Online Service Management System",
    author: "by Geeky Shows",
    price: "₹210",
    oldPrice: "₹1750",
    discount: "88% Off",
    students: "2663 Students",
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/xfCzEEDfB9Q/maxresdefault.jpg",
    title: "ShoppinglyX Django Ecommerce Project",
    author: "by Geeky Shows",
    price: "₹55",
    oldPrice: "₹220",
    discount: "75% Off",
    students: "9324 Students",
  },
];

function Projects() {
  return (
    <section className="py-10 px-8 mt-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Projects for Placement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl h-48 w-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-md shadow">
                Notes & Code
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {project.author}
              </p>

              <div className="flex items-center space-x-2 mb-3">
                <span className="text-black dark:text-gray-200 font-bold">
                  {project.price}
                </span>
                <span className="line-through text-gray-400 dark:text-gray-500 text-sm">
                  {project.oldPrice}
                </span>
                <span className="text-white bg-purple-600 text-xs px-2 py-1 rounded-md">
                  {project.discount}
                </span>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {project.students}
              </p>

              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-600 hover:scale-105 transform transition duration-300 mb-0">
                View Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
 