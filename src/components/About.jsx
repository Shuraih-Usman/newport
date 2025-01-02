import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";  
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
              className="w-16 h-16 object-contain" />

              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction. </p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading[30px]"
      >
        I am a skilled web developer with expertise in both frontend and backend
        technologies, dedicated to creating dynamic, responsive, and
        user-friendly websites and applications. Proficient in PHP, JavaScript,
        SQL, and Node.js, I have extensive experience working with databases
        like MySQL to ensure efficient and secure data management. On the
        frontend, I excel in HTML, CSS, and modern frameworks such as React,
        React Native, and TailwindCSS, delivering sleek, intuitive, and
        mobile-first designs. I am also highly adept with frameworks like
        React.js, React Native, PHP Laravel and CodeIgniter, as well as UI
        frameworks like Bootstrap and Tailwind CSS allowing me to develop
        scalable, robust, and visually appealing solutions. My passion lies in
        transforming ideas into reality, always striving to blend functionality
        with exceptional user experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

     
    </>
  );
};

export default SectionWrapper(About, 'about'); 
