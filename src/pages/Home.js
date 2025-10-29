import React from "react";
import Hero from "../components/Hero";
import CourseSection from "../components/CourseSection";
import FeaturedCourses from "../components/FeaturedCourses";
import Projects from "../components/Projects";
function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <section className="pb-0">
        <CourseSection />
      </section>
      <section className="pt-0">
        <FeaturedCourses />
      </section>
       <Projects /> {/* ✅ affichage juste après les cours */}
    </div>
  );
}

export default Home;
