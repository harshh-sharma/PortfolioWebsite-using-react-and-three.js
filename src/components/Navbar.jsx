import React, { useState } from 'react'
import { navLinks } from "../constants";
import { styles } from '../style';
import { logo, close, menu } from '../assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to={"/"}
          className='flex items-center justify-between gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <div className='w-10 h-10 bg-[#ff0000] text-white rounded-full p-2'>Harsh</div>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li onClick={() => setToggle(!toggle)}>
                <a href="" className='text-[16px]'>About</a>
              </li>
              <li onClick={() => setToggle(!toggle)}>
                <a href="" className='text-[16px]'>Work</a>
              </li>
              <li onClick={() => setToggle(!toggle)}>
                <a href="" className='text-[16px]'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar