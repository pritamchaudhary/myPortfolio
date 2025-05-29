"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"


const projects = [
  {
    title: "Real Estate Platform",
    desc: "Built a full-stack real estate platform using the MERN stack. Features include user authentication, property listings, image uploads, and search functionality. Designed with responsive UI and seamless user experience in mind.",
    devstack: "ReactJs, NodeJs, ExpressJs, MongoDB",
    link: "https://real-estate-k1p8.onrender.com/",
    git: "https://github.com/pritamchaudhary/real-estate",
    src: proj1
  },
  {
    title: "Ecommerce Website",
    desc: "Developed a dynamic e-commerce platform using the MERN stack, enabling users to browse products, add items to cart, and complete purchases.",
    devstack: "HTML, CSS, JavaScript, NodeJs, ExpressJs, MongoDB",
    link: "#",
    git: "https://github.com/pritamchaudhary/ecommerce-website",
    src: proj2
  },
  {
    title: "CollegeTips Interactive Photo Gallery",
    desc: "A vibrant and responsive photo gallery built for the CollegeTips website using ReactJs, Tailwind CSS, and Framer Motion. The gallery showcases team moments and behind-the-scenes highlights through interactive features like category filters, hover effects, and fullscreen image views. Designed to reflect the fun, creative, and youthful spirit of the CollegeTips community.",
    devstack: "ReactJs, TailwindCSS, Framer-Motion",
    link: "#",
    git: "https://github.com/pritamchaudhary/collegetips-task/tree/main/collegetips-gallery",
    src: proj3
  }
]

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-20" id="portfolio">

      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">Selected <span className="text-orange-400">Projects</span></h1>


      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-20 space-x-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25}}
            className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">Link</a>
                <a href={project.git}>Git</a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700" />
            </div>

          </motion.div>
          
        ))}
      </div>

    </div>
  )
}

export default Portfolio