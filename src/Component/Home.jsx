import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Route, Routes} from "react-router-dom";
const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <>
      <div
        className={`w-8 ${
          isSideMenu ? "w-4" : "flex-[.2]  xl:flex-[.4]"
        } min-h-screen max-h-screen relative bg-secondary px-2 py-4 flex flex-col items-center justify-start gap-4 transition-all-duration-200 ease-in-out`}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-#131417 rounded-tr-lg rounded-br-lg absolute -right-6 top-0 flex items-center justify-center cursor-pointer"
        >
          <FaAngleDoubleLeft className="text-white text-xl" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col gap-4">
          <Link to={"./home"}>
            <img
              src="https://code-pen-sepia.vercel.app/assets/codepenlogo-Cz-WsP-X.webp"
              alt="logo"
              className="object-contain w-45 h-auto"
            />
          </Link>
          <Link>
            <div className="px-10 py-1 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group-hover:border-gray-200">
              <p className="text-gray-400 group-hover:text-gray-400-captailize">
                Start Coding
              </p>
            </div>
          </Link>
          {user && (
            <Link to={"/home/projects"} className="flex items-center gap-6">
              <FaHome className="text-primaryText text-xl" />
              <p className="text-lg text-primaryText">Home</p>
            </Link>
          )}
        </div>
        </div>
        <div className="flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
          <div className="w-full flex items-center justify-between gap-3">
            <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
              <FaSistrix className="text-2xl text-primaryText" />
              <input
                type="text"
                className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder=text-gray-600"
                placeholder="Search here..."
              />
            </div>
             {/* Profile Section  */}
             {!user &&(
              <motion.div  whileTap ={{scale:0.9}} className="flex items-center justify-center gap-3">
                <Link to={"/home/auth"} className="bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor:pointer  hover:bg-emerald-700">
                SignUp
                </Link>
              </motion.div>
             )}
             {user &&<div></div>}
        </div>
        
        {/* Bottom Section */}
        <div className="w-full">
            <Routes>
                <Route path="/*" elements="{<Projects />}"/>
                <Route path="/auth" elements="{<Sign Up />}"/>
            </Routes>
        </div>

        </div>
      
    </>
  );
};

export default Home;
