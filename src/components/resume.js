import React from 'react';
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/raj_resume.pdf";
import { Document, Page } from 'react-pdf';

function Resume() {
  return (
    <div>
      <Document file="raj_resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
   });
 
   const [downloading, setDownloading] = useState(false);

   useEffect(() => {
     setDownloading(false);
   }, [downloading]);

   const handleDownload = () => {
     setDownloading(true);
     const link = document.createElement("a");
     link.href = resume;
     link.download = "raj_resume.pdf";
     link.onload = () => {
       link.remove();
       setDownloading(false);
     };
     document.body.appendChild(link);
     link.click();
   };

  return (
    <div>
      <p style={{ color: "grey" }}></p>
    <div className="aboutContainer container">
       <div className="row">
         <motion.div
           className="personalImage col-12 col-lg-4"
           ref={ref}
           initial={{ x: "-10vw", opacity: 0 }}
           animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
           transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
           </motion.div>
            <motion.div
           className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
           animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
           transition={{ duration: 0.4, ease: "easeInOut" }}
         >
           <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>I'm a data-driven and user-centric product manager</h5>
            <div className="contentDescription">
               <div className="contentDescription">
                 <p>
                 Experience in launching and scaling web and mobile applications across various domains, including fashion, luxury, supply chain, and agri-tech. I use data-driven decision-making and a user-centric approach to create products that solve real-world problems and provide value.<br/>
                 <br/>
                 </p>
               </div>

             </div>
             <div className="infoContainer">
               <div className="row">
                 <div className="col-12 col-md-6 info">
                   <span>Name:</span>
                   <p> Raj </p>
                 </div>
                <div className="col-12 col-md-6 info">
                   <span>Email:</span>
                   <p>
                     <a href={`mailto:${email}`}>{email}</a>
                   </p>
                 </div>
               </div>
               <div className="row">
                 <div className="col-12 col-md-6 info">
                   <span>Location:</span>
                   <p>{location}</p>
                 </div>
                 <div className="col-12 col-md-6 info">
                   <span>Availability:</span>
                   <p>{availability}</p>
                 </div>
               </div>
             </div>
             <div className="buttonContainer">
               <button className="btn downloadCV" onClick={handleDownload} /*disabled={downloading}*/>
                 {downloading ? "Downloading..." : "Download Resume"}
               </button>{" "}
               <SocialIcons />
             </div>
           </div>
         </motion.div>
       </div>
     </div>
    </div>
  );
};

export default Resume;
