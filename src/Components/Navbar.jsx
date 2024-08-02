import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // return (
  //   <>
  //     <div className="flex justify-between mx-4 text-[#B0A593]">
  //       <div>
  //         <h1 className="lg:mx-2 my-2">Chidinma Nwakor</h1>
  //       </div>
  //       <div className="lg:hidden flex items-start my-4">
  //         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
  //           {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
  //         </button>
  //       </div>
  //       <div
  //         className={`flex flex-col lg:flex lg:flex-row justify-center items-center border-4 border-[#232229] bg-[#1D1C22] rounded-lg transition-transform duration-300 ${
  //           isMenuOpen ? "translate-y-0" : "-translate-y-full"
  //         } lg:translate-y-0`}>
  //         <BrowserRouter>
  //           <Link to="about" className="my-2 lg:mx-2 block lg:inline">
  //             About
  //           </Link>
  //           <Link to="experience" className="my-2 lg:mx-2 block lg:inline">
  //             Articles
  //           </Link>
  //           <Link to="projects" className="my-2 lg:mx-2 block lg:inline">
  //             Projects
  //           </Link>
  //           <Link to="spaces" className="block lg:inline my-2 lg:mx-2">
  //             Spaces
  //           </Link>
  //           <Link to="videos" className="my-2 lg:mx-2 block lg:inline">
  //             Videos
  //           </Link>
  //           <Link to="contact" className="my-2 lg:mx-2 block lg:hidden">
  //             Contact
  //           </Link>
  //         </BrowserRouter>
  //       </div>
  //       <div className="my-2 hidden lg:block">
  //         <Link to="contact ">Contact</Link>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Navbar;
