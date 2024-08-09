import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello! I'm Sanket Suradkar, a final-year Computer Engineering student passionate about coding and problem-solving. I specialize in creating dynamic web applications with skills in Python, C++, and JavaScript, and frameworks like React and Django. My experience extends to working with databases such as MySQL and MongoDB, and utilizing tools like Tailwind CSS, Three.js, Vite, and Git.
        <br></br>
        <div className="mt-6">
        <p> 
        <Link className="  text-white  hover:text-purple-900  focus:ring-blue-600 font-medium  px-5 py-2.5   " to="https://drive.google.com/file/d/1eVlNVpTEq_B1VgEItHUubkckALw2Ht3V/view?usp=sharing">View_Resume </Link>
        <Link className="  text-white  hover:text-purple-900  focus:ring-blue-600 font-medium  px-5 py-2.5   " to="">GitHub</Link>

        </p></div>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
