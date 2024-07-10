import {Link} from 'react-router-dom'
import {Navbar} from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import { IoIosSearch } from "react-icons/io";
import { BsToggleOn,BsToggleOff } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Header(){
    return(
        <div className="border-b-2 py-3  bg-transbg flex justify-between items-center">
            <Link to="/" className=" ml-blogleft self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className='px-2 text-nearwhite rounded-lg'>The</span>
                <span className='text-primary font-extrabold'>Technologist</span>
            </Link>
            {/* <form>
                <TextInput type="text" placeholder="search..." rightIcon={AiOutlineSearch}/>
            </form> */}
            <ul className='inline-flex gap-[40px] mr-[3rem] menu1 text-white'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
            <div className=' hidden lg:flex gap-5 items-center justify-center mr-blogright'>
              <div className='border-[#F4F4F5] rounded-[7px] bg-inputwhite'>
                     <input type="text" placeholder="Search" className='inline-block rounded-[7px] p-1 pl-[14px] bg-inputwhite align-middle w-[8rem] 
                                                                   border-inherit  rounded-inherit placeholder-[#A1A1AA] placeholder:text-[#A1A1AA] 
                                                                   placeholder:text-[12px] placeholder:font-inter'/>
                     <IoIosSearch className='inline-block h-[33px] border-inherit rounded-[7px] text-[21px] bg-inputwhite
                                             text-[#52525B] px-[7px] w-[35px]'/>
              </div>
              {/* <BsToggleOff className='text-[31px] text-[c]'/> */}
              <button className='bg-primary rounded-[10px] hidden sm:inline-block'>
                <FaMoon className='text-[31px] text-white border-[1px_solid_#27C3A6] p-[6px] rounded-[9px] w-[3.2rem]'/> 
              </button>
            </div>
            <div className='flex gap-5 items-center justify-center mr-blogright lg:hidden'>
                <IoIosSearch className='inline-block h-[33px] border-inherit rounded-[7px] text-[21px] bg-inputwhite text-[#52525B]'/>
                {/* <BsToggleOff className='text-[31px] text-[#52535F]'/> */}
                <FaMoon className='text-[31px] text-primary border-[1px_solid_#27C3A6] p-[6px] rounded-[9px] w-[3.2rem]'/> 
              </div>
            

            
        </div>
        
    )
}