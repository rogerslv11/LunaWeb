import { useState } from "react";

 export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" backdrop-blur-2xl border border-white rounded-xl text-white shadow-md">
      <div className=" flex justify-between px-5 py-2 place-items-center">

     <h2 className=" text-2xl text-white uppercase font-bold   align-middle">luna<span className=" text-lime-400">dev</span></h2>
     <button className=" bg-lime-400 p-2 text-2xl text-black font-semibold rounded-xl">
      Fala com especialista
     </button>
      </div>
    </nav>
  );
};

